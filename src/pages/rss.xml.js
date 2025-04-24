import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from "sanitize-html"
import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt();

export async function GET(context) {
    const Misunderstood = await getCollection('misunderstood');
    Misunderstood.sort((a, b) => a.data.chapter - b.data.chapter);
    return rss({
        title: 'Merther Fanfic',
        description: 'A collection of Merlin fan works.',
        site: context.site,
        items: Misunderstood.map((chapter) => ({
            title: chapter.data.title,
            pubDate: chapter.data.pubDate,
            published: chapter.data.published,
            description: chapter.data.description,
            chapter: chapter.data.chapter,
            text: chapter.data.text,
            link: `/misunderstood/simple/${chapter.id}/`,
            content: sanitizeHtml(parser.render(chapter.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }),
        })),
        customData: `<language>en-us</language>`,
        // stylesheet: "/rss/styles.xsl"
    })
}