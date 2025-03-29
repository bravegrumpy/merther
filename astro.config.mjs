// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import pageInsight from 'astro-page-insight';

import mdx from '@astrojs/mdx';

import remarkToc from 'remark-toc';

import rehypeSlug from 'rehype-slug';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import { remarkDefinitionList, defListHastHandlers } from "remark-definition-list";

import remarkRehype from 'remark-rehype';

import rehypeExternalLinks from 'rehype-external-links';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://merther.vercel.app',
  markdown: {
    remarkPlugins: [
      [remarkToc, {heading: 'Contents'}],
      remarkDefinitionList,
      [remarkRehype, { handlers: { ...defListHastHandlers}}]
    ],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior: "prepend"}], [rehypeExternalLinks, {target: "_blank", rel: "nofollow"}] ]
  },
  integrations: [icon(), sitemap(), pageInsight(), mdx(), react({
    include: ['**/react/*'],
    experimentalReactChildren: true
  }), svelte()]
});