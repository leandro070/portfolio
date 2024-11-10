// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://leandro070.github.io',
  integrations: [tailwind()],
  build: {
    assetsPrefix: '.'
  }
});