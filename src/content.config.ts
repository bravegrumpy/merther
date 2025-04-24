import { defineCollection, z } from "astro:content"; 

import { glob } from "astro/loaders"

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
        published: z.boolean()
    })
});

export const collections = { misunderstood }