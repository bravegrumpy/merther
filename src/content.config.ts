import { defineCollection, z } from "astro:content"; 

import { glob } from "astro/loaders"

const resources = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx", "*.html"], base: "./src/collections/links"}),
    schema: z.object({
        title: z.string(),
        order: z.optional(z.number()),
        classes: z.optional(z.array(z.optional(z.string())))
        
    })
})

const misunderstood = defineCollection({
    loader: glob({ pattern: ["*.md","*.mdx", "!index**"], base: "./src/collections/misunderstood/chapters" }),
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

const llorem_ipsum = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx"], base: "./src/collections/llorem_ipsum"}),
    schema: z.object({
        id: z.string(),
        href: z.string(),
        chapter: z.number(),
        text: z.string(),
        title: z.string(),
        pubDate: z.string(),
        published: z.boolean()
    })
});

const misunderstood_summary = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx", "!index**"], base: "./src/collections/misunderstood/summaries"}),
    schema: z.object({
        chapter: z.optional(z.union([z.string(), z.number()]))
    })
});

const misunderstood_notes = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx", "*.html", "!index**"], base: "./src/collections/misunderstood/notes"}),
    schema: z.object({
        chapter: z.optional(z.union([z.number(), z.string()]))
    })
})

const  misunderstood_endnotes = defineCollection({
    loader: glob({ pattern: ["*md", "*mdx", "*.html", "!index**"], base: './src/collections/misunderstood/endnotes'}),
    schema: z.object({
        chapter: z.optional(z.union([z.string(), z.number()]))
    })
});

const muses = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx"], base: "./src/collections/muses"}),
    schema: z.object({
        title: z.string(),
        role: z.string()
    })
});

const microblog = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx", "*.html"], base: "./src/collections/other_stuff/posts"}),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        pubDate: z.date(),
        tags: z.optional(z.array(z.string()))
    })
});

const gallery_ai = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx","*.html"], base: "./src/collections/other_stuff/gallery/gen_ai"}),
    schema: z.object({
        title: z.optional(z.string()),
        subtitle: z.optional(z.string()),
        img: z.object({
            size: z.number(),
            url: z.string(),
            alt: z.string()
        })
    })
})

const rape_not_die = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx"], base: "./src/collections/rape-not-die"}),
    schema: z.object({
        title: z.string(),
        role: z.string()
    })
})

const swagger = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx"], base: "./src/collections/swagger"}),
    schema: z.object({
        title: z.optional(z.string()),
        chapter: z.number(),
        role: z.optional(z.string())
    })
})

const fig = defineCollection({
    loader: glob({ pattern: ["*.md", "*.mdx"], base: "./src/collections/fig"}),
    schema: z.object({
        id: z.union([z.string(), z.number()]),
        href: z.string(),
        title: z.optional(z.string()),
        text: z.string(),
        chapter: z.number(),
        tags: z.optional(z.array(z.string())),
        pubDate: z.optional(z.date()),
        published: z.boolean(),
        description: z.optional(z.string()),

    })
})

export const collections = {resources, misunderstood, misunderstood_summary, misunderstood_notes, misunderstood_endnotes, muses, microblog, gallery_ai, llorem_ipsum, rape_not_die, swagger, fig }