// This is the copy in the ssg directory

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

import { remarkModifiedTime } from './remark-modified-time.mjs';

import { remarkReadingTime } from './remark-reading-time.mjs';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import aiRobotsTxt from 'astro-ai-robots-txt';

// import vercel from '@astrojs/vercel';

import criticalCss from 'astro-critical-css';

import contentViewer from "astro-content-viewer"

import og from 'astro-og';

import astroBuildInfo from "astro-build-info";

import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
  // site: 'https://merther.bravegrumpy.com',
  site: 'https://mertherfanfic.neocities.org',

  image: {
    domains: ["*.bravegrumpy.com"],
    remotePatterns: [{ protocol: "https"}]
  },

  prefetch: {
    defaultStrategy: 'load',
    prefetchAll: true
  },
  markdown: {
    shikiConfig: {
      themes: {
        dark: 'catppuccin-mocha',
        light: 'catppuccin-frappe'
      }
    },
    remarkPlugins: [
      [remarkToc, {heading: 'Contents'}],
      remarkDefinitionList,
      [remarkRehype, { handlers: { ...defListHastHandlers}}],
      remarkModifiedTime,
      remarkReadingTime
    ],
    rehypePlugins: [
      rehypeSlug, 
      [rehypeAutolinkHeadings, {behavior: "prepend"}], 
      [rehypeExternalLinks, {target: "_blank", rel: "nofollow", content: { type: 'text', value: '🔗'}}] 
    ]
  },

  integrations: [contentViewer(), og(), icon(), sitemap(), pageInsight(), mdx(), react({
    include: ['**/react/*'],
    experimentalReactChildren: true
  }), svelte(), aiRobotsTxt(), astroBuildInfo(), criticalCss()],

  vite: {
    plugins: [tailwindcss(), visualizer({
      emitFile: true,
      filename: "stats.html"
    })],
  },

  // trailingSlash: 'always',
  output: 'static',
  // output: 'server',
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true
  //   },
  //   imageService: true,
  //   isr: true,
  // })
});