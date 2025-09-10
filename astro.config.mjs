// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.stopcae.cl', // Cambia esto por tu dominio real
  build: {
    assets: '_astro/assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  },
  integrations: [sitemap()],
});
