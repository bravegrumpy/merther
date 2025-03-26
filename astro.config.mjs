// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import pageInsight from 'astro-page-insight';

// https://astro.build/config
export default defineConfig({
  site: 'https://merther.vercel.app',
  integrations: [
    icon(), 
    sitemap(), 
    pageInsight()
  ]
});