import rss from "@astrojs/rss"
import { getCollection } from "astro:content";
const parser = new MarkdownIt();

export async function GET(context){
    const misunderstood = await getCollection('misunderstood');
    return rss({
        title: "Misunderstood | Merther",
        description: "A sad fanfic based in Merther",
        site: context.site,
        trailingSlash: false,
        items: misunderstood.map((chapter) => ({
            title: chapter.data.title,
            link: `/misunderstood/simple/${chapter.id}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}