import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

// Only serve the build on loopback. All third-party traffic is blocked or mocked.
const dist = path.resolve('dist');
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.json': 'application/json', '.webmanifest': 'application/manifest+json' };
const server = createServer(async (req, res) => {
  try {
    let filename = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (!path.extname(filename)) filename = filename.replace(/\/$/, '') + '/index.html';
    const target = path.resolve(dist, '.' + filename);
    if (!target.startsWith(dist + path.sep)) throw new Error('Invalid path');
    res.setHeader('Content-Type', mime[path.extname(target)] || 'application/octet-stream');
    res.end(await readFile(target));
  } catch { res.writeHead(404); res.end('Not found'); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
await context.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
let passed = 0;
async function check(name, fn) { await fn(); passed++; console.log(`PASS ${name}`); }
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? files(path.join(dir, e.name)) : path.join(dir, e.name)))).flat();
}
async function contact({ failure, googleKey = false, pending = false } = {}) {
  const page = await context.newPage();
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  const payloads = [];
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  // Mock the existing production URL before the form can run. Never send a lead.
  await page.route('https://alexflooring.app.n8n.cloud/webhook/afc-contact-intake', async route => {
    payloads.push(route.request().postDataJSON());
    if (pending) await gate;
    if (failure === 'network') return route.abort();
    await route.fulfill({ status: failure === 'http' ? 500 : 200, contentType: 'application/json', body: '{"message":"Workflow was started"}' }).catch(() => {});
  });
  if (googleKey) {
    await page.route(origin + '/contact', async route => {
      const html = await readFile(path.join(dist, 'contact/index.html'), 'utf8');
      await route.fulfill({ contentType: 'text/html', body: html.replace(/data-google-key="[^"]*"/, 'data-google-key="mock-unavailable-key"') });
    });
  }
  await page.goto(origin + '/contact');
  return { page, payloads, errors, release };
}
async function fill(page) {
  await page.locator('#name').fill('Website smoke test');
  await page.locator('#phone').fill('17035550123');
  await page.locator('#email').fill('website-test@example.com');
  await page.locator('#job-site-address').fill('123 Test Street, Dumfries, VA 22025');
  await page.locator('#preferred-date').fill(await page.locator('#preferred-date').getAttribute('min'));
  await page.locator('#preferred-time').selectOption('10:00');
  await page.locator('input[value="new"]').check();
  await page.locator('#message').fill('Mock inquiry for flooring. Do not send to the live workflow.');
}
async function completed(page) {
  await page.locator('#form-banner').waitFor({ state: 'visible' });
  assert.equal(await page.locator('#submit-btn').isDisabled(), false);
}
async function selectGoogleAddress(page) {
  await page.evaluate(() => {
    window.google = { maps: { places: { Autocomplete: class {
      addListener(event, callback) { window.mockPlaceChanged = callback; }
      getPlace() { return { place_id: 'mock-place-id', formatted_address: '456 Selected Street, Dumfries, VA 22025, USA' }; }
    } } } };
    window.initAddressAutocomplete();
    document.getElementById('job-site-address').value = '456 Selected Street, Dumfries, VA 22025';
    window.mockPlaceChanged();
  });
}
try {
  await check('all 18 built pages: unique metadata, valid JSON-LD, local links/assets, mobile widths', async () => {
    const pages = (await files(dist)).filter(f => f.endsWith('.html'));
    assert.equal(pages.length, 18);
    const page = await context.newPage();
    const pageErrors = [];
    page.on('pageerror', err => pageErrors.push(err.message));
    for (const filename of pages) {
      const relative = path.relative(dist, filename).replaceAll(path.sep, '/');
      const route = '/' + relative.replace(/index\.html$/, '');
      await page.goto(origin + route);
      assert.equal(await page.locator('title').count(), 1, route);
      assert.equal(await page.locator('meta[name="description"]').count(), 1, route);
      assert(!((await page.locator('meta[name="description"]').getAttribute('content')) || '').includes('TODO'));
      assert.equal(await page.locator('link[rel="canonical"]').count(), 1);
      assert.equal(new URL(await page.locator('link[rel="canonical"]').getAttribute('href')).origin, 'https://alexflooringandcarpentry.com');
      await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.forEach(n => JSON.parse(n.textContent)));
      assert.equal(await page.locator('nav[aria-label="Main navigation"] a').count(), 6);
      assert.equal(await page.locator('#main-content').count(), 1);
      const localLinks = await page.locator('[src], a[href], link[href]').evaluateAll(nodes => nodes.flatMap(n => [n.getAttribute('src'), n.getAttribute('href')]).filter(v => v?.startsWith('/') && !v.startsWith('//')));
      for (const link of localLinks) {
        const response = await page.request.get(origin + link);
        assert.equal(response.status(), 200, `${route}: broken local URL ${link}`);
      }
      for (const width of [320, 390, 1280]) {
        await page.setViewportSize({ width, height: 844 });
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${route} overflow at ${width}px`);
      }
    }
    await page.goto(origin);
    assert.equal(await page.locator('main section').first().evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(0, 35, 102)');
    const sitemap = await readFile(path.join(dist, 'sitemap-0.xml'), 'utf8');
    assert(!sitemap.includes('vercel.app'));
    assert(sitemap.includes('https://alexflooringandcarpentry.com/'));
    const manifest = JSON.parse(await readFile(path.join(dist, 'site.webmanifest'), 'utf8'));
    for (const icon of manifest.icons) assert.equal((await page.request.get(origin + icon.src)).status(), 200);
    assert.deepEqual(pageErrors, []);
    await page.close();
  });
  await check('empty form is rejected without contacting the webhook', async () => {
    const t = await contact();
    await t.page.locator('#submit-btn').click();
    assert.equal(await t.page.locator('#error-name').isVisible(), true);
    assert.equal(await t.page.locator('#error-job-site-address').isVisible(), true);
    assert.equal(t.payloads.length, 0);
    await t.page.close();
  });
  for (const googleKey of [false, true]) await check(`manual address works with ${googleKey ? 'blocked Google script' : 'no Google key'}`, async () => {
    const t = await contact({ googleKey });
    await fill(t.page);
    await t.page.locator('#submit-btn').click();
    await completed(t.page);
    assert.equal(t.payloads.length, 1);
    assert.deepEqual(t.payloads[0].job_site_address, { formatted_address: '123 Test Street, Dumfries, VA 22025', place_id: '' });
    assert.equal(t.payloads[0].phone, '(703) 555-0123');
    assert.deepEqual(Object.keys(t.payloads[0]).sort(), ['name','phone','email','job_site_address','preferred_date','preferred_time','customer_type','message'].sort());
    assert.equal(await t.page.locator('#name').inputValue(), '');
    assert.match(await t.page.locator('#form-banner').innerText(), /subject to confirmation/);
    assert.deepEqual(t.errors, []);
    await t.page.close();
  });
  for (const edit of [false, 'input', 'autofill']) await check(`Google selection ${edit ? `clears after ${edit} edit` : 'preserves place ID'}`, async () => {
    const t = await contact(); await fill(t.page); await selectGoogleAddress(t.page);
    if (edit === 'input') await t.page.locator('#job-site-address').fill('789 Changed Road, Dumfries, VA 22025');
    if (edit === 'autofill') await t.page.locator('#job-site-address').evaluate(el => { el.value = '789 Changed Road, Dumfries, VA 22025'; });
    await t.page.locator('#submit-btn').click(); await completed(t.page);
    assert.deepEqual(t.payloads[0].job_site_address, edit ? { formatted_address: '789 Changed Road, Dumfries, VA 22025', place_id: '' } : { formatted_address: '456 Selected Street, Dumfries, VA 22025, USA', place_id: 'mock-place-id' });
    await t.page.close();
  });
  for (const failure of ['http', 'network']) await check(`${failure} failure preserves data and offers a phone fallback`, async () => {
    const t = await contact({ failure }); await fill(t.page);
    await t.page.locator('#submit-btn').click(); await completed(t.page);
    assert.equal(await t.page.locator('#name').inputValue(), 'Website smoke test');
    assert.match(await t.page.locator('#form-banner').innerText(), /could not confirm/);
    assert.equal(await t.page.locator('#form-banner a').getAttribute('href'), 'tel:+17039288331');
    assert.equal(t.payloads.length, 1);
    await t.page.close();
  });
  await check('20-second timeout restores the form and preserves entered data', async () => {
    const t = await contact({ pending: true }); await fill(t.page);
    await t.page.clock.install();
    await t.page.locator('#submit-btn').click();
    await t.page.clock.runFor(20001);
    await completed(t.page);
    assert.equal(await t.page.locator('#name').inputValue(), 'Website smoke test');
    assert.match(await t.page.locator('#form-banner').innerText(), /could not confirm/);
    t.release(); await t.page.close();
  });
  await check('rapid repeat submissions send only one request while pending', async () => {
    const t = await contact({ pending: true }); await fill(t.page);
    const requested = t.page.waitForRequest(r => r.url().includes('/webhook/afc-contact-intake'));
    await t.page.evaluate(() => { const form = document.getElementById('contact-form'); form.requestSubmit(); form.requestSubmit(); });
    await requested;
    assert.equal(await t.page.locator('#submit-btn').isDisabled(), true);
    assert.equal(t.payloads.length, 1);
    t.release(); await completed(t.page); await t.page.close();
  });
  await check('JavaScript-disabled customers get a call link and cannot leak form data through a GET', async () => {
    const noJs = await browser.newContext({ javaScriptEnabled: false });
    await noJs.route('**/*', r => new URL(r.request().url()).origin === origin ? r.continue() : r.abort());
    const page = await noJs.newPage(); await page.goto(origin + '/contact');
    assert.equal(await page.locator('noscript a').isVisible(), true);
    assert.equal(await page.locator('#submit-btn').isDisabled(), true);
    await noJs.close();
  });
  console.log(`${passed} checks passed. No live inquiry was sent.`);
} finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
