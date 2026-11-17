# Alex Flooring & Carpentry website

Astro and Tailwind marketing site, hosted on Vercel. The application root is
`smoggy-shepherd/` (use that as Vercel's Root Directory). Production builds use
`https://alexflooringandcarpentry.com` for canonical URLs and the sitemap.

## Local development

```sh
cd smoggy-shepherd
npm ci
npm run dev
```

## Build and browser checks

```sh
npm run build
npx playwright install chromium
npm run test:launch
```

The launch checks build the site and serve it on a temporary loopback port.
They check all generated pages at mobile and desktop widths, local links/assets,
metadata, and the contact form's success, failure, timeout, and duplicate-submit
behavior. Third-party requests are blocked or mocked; no live inquiries are sent.

## Contact integration

The form posts to the existing n8n `afc-contact-intake` webhook. Its payload keeps
`name`, `phone`, `email`, `job_site_address` (`formatted_address`, `place_id`),
`preferred_date`, `preferred_time`, `customer_type`, and `message`.

`PUBLIC_GOOGLE_MAPS_API_KEY` is optional. Manual addresses use the same payload
with an empty `place_id`; verify that the published workflow accepts this.
Do not put private credentials in `PUBLIC_` variables or commit `.env` files.

A successful HTTP response confirms submission to the endpoint, not downstream
lead storage or notification delivery. Before merging and switching the domain:

- Verify one authorized, clearly labeled inquiry from the Vercel preview is saved
  in n8n and delivered to the intended notification recipients. Check CORS too.
- Ensure storage happens before notifications and failures cannot silently lose leads.
- Confirm scheduling timezone with the workflow. This patch preserves the existing
  Chicago date boundary and date/time payload; the service area is Northern Virginia.
- Check the preview visually and confirm business details and contact information.
- After acceptance, merge to `main`, then connect the domain in Vercel/WordPress DNS.
  Preserve existing email DNS records.

A branch build or mocked browser check does not establish live lead delivery.
