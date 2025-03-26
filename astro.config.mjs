// @ts-check
import { defineConfig } from 'astro/config';

import pageInsight from 'astro-page-insight';

import icon from 'astro-icon';


import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: "https://merther.vercel.app",
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
    icon(), 
    sitemap()
  ]
});