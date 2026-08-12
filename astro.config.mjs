// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://gururaghavendrahomestay.in',
  trailingSlash: 'always',
  integrations: [sitemap()],
  image: {
    domains: [],
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
