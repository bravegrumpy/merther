import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context) {
    const Misunderstood = await getCollection('misunderstood');
    return rss({
        title: 'Merther Fanfic',
        description: 'A collection of Merlin fan works.',
        site: context.site,
        items: Misunderstood.map((chapter) => ({
            title: chapter.data.title,
            pubDate: chapter.data.pubDate,
            published: chapter.data.published,
            description: chapter.data.description,
            link: `/misunderstood/simple/${chapter.id}`
        })),
        customData: `<language>en-us</language>`,
    })
}