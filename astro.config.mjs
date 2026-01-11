// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://juamber.github.io',
  base: '/referral-programs',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'it', 'nl', 'de', 'fr', 'pt'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});