import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import sanitizeHtml from "sanitize-html"
import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt();

export async function GET(context) {
    const Fig = await getCollection('fig');
    Fig.sort((a, b) => a.data.chapter - b.data.chapter);
    return rss({
        title: "Fig in Huetopia",
        description: "My friend in a fictional world",
        site: context.site,
        items: Fig.map((chapter) => ({
            id: chapter.data.id,
            href: chapter.data.href,
            chapter: chapter.data.chapter,
            title: chapter.data.title,
            pubDate: chapter.data.pubDate,
            published: chapter.data.published,
            text: chapter.data.text,
            link: `/fig/${chapter.id}`,
            content: sanitizeHtml(parser.render(chapter.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'div', 'section'])
            })
        })),
        customData: `<language>en-us</language>`,
        stylesheet: "/rss/styles.xsl"
    })
}