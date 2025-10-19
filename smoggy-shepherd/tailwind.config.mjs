/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002366',
        accent: '#D4AF37',
        neutral: '#ffffff',
      },
    },
  },
  plugins: [],
}
