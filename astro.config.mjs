// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: '_astro/assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
