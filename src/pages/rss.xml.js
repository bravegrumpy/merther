import rss from "@astrojs/rss";
import { pagesGlobToRssItems } from "@astrojs/rss";

export function GET(context) {
    return rss({
        title: "Merther",
        description: "Various fan-made works based on Merlin",
        site: context.site,
        items: pagesGlobToRssItems(import.meta.glob('@/pages/misunderstood/chapters/*.{md,mdx}')),
        customData: `<language>en-us</language>`
    })
}