import { defineCollection, z } from "astro:content"; 

import { glob } from "astro/loaders"

const resources = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx", "*.html"], base: "./src/links"}),
    schema: z.object({
        title: z.string(),
        
    })
})

const misunderstood = defineCollection({
    loader: glob({ pattern: ["*.{md,mdx}", "!index**"], base: "./src/misunderstood/chapters" }),
    schema: z.object({
        id: z.string(),
        href: z.string(),
        text: z.string(),
        chapter: z.number(),
        title: z.string(),
        tags: z.optional(z.array(z.string())),
        pubDate: z.optional(z.date()),
        published: z.boolean(),
        description: z.optional(z.string()),
        notes: z.optional(z.string()),
        endnotes: z.optional(z.string()),
    })
});

const misunderstood_summary = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx", "!index**"], base: "./src/misunderstood/summaries"}),
    schema: z.object({
        chapter: z.optional(z.union([z.string(), z.number()]))
    })
});

const misunderstood_notes = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx", "*.html", "!index**"], base: "./src/misunderstood/notes"}),
    schema: z.object({
        chapter: z.optional(z.union([z.number(), z.string()]))
    })
})

const  misunderstood_endnotes = defineCollection({
    loader: glob({ pattern: ["*md", "*mdx", "*.html", "!index**"], base: './src/misunderstood/endnotes'}),
    schema: z.object({
        chapter: z.optional(z.union([z.string(), z.number()]))
    })
});

const muses = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx"], base: "./src/muses"}),
    schema: z.object({
        title: z.string(),
        role: z.string()
    })
});

export const collections = {resources, misunderstood, misunderstood_summary, misunderstood_notes, muses }