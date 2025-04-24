import { getCollection } from "astro:content"
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt();
export async function GET(context) {
    const Misunderstood = await getCollection('misunderstood');
    Misunderstood.sort((a, b) => a.data.chapter - b.data.chapter);
    const itemsXML = Misunderstood.map((chapter) => {
        const cleanHtml = sanitizeHtml(parser.render(chapter.body), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'div']),
        }).replaceAll(']]>', ']]]]><![CDATA[>');
        return `
                <item>
                    <title>${chapter.data.title}</title>
                    <link>${context.site}/misunderstood/simple/${chapter.id}</link>
                </item>
        `;
    })
    const fullRss = `
        <?xml version="1.0" encoding="UTF-8"?>
        <?xml-stylesheet href="${context.site}rss/styles.xsl" type="text/xsl"?>
        <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
            <channel>
                <title>Merther Fanfic</title>
                <description>A collection of Merlin fan works</description>
                <site>${context.site}</site>
                <language>en-us</language>
                ${itemsXML}
            </channel>
        </rss>
    `;

    return new Response(fullRss, {
        'Content-Type': 'application/xml'
    });
}