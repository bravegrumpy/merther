// @ts-check
import { defineConfig } from 'astro/config';

import pageInsight from 'astro-page-insight';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    pageInsight({
      lh: {
        weight: 0,
        breakPoint: 1024,
      },
      firstFetch: "none",
      cache: true,
      build: {
        bundle: true,
        showOnLoad: true
      }
    }), 
    icon()
  ]
});