import rss from "@astrojs/rss"
import { getEntry } from "astro:content"
import sanitizeHtml from "sanitize-html"
import MarkdownIt from "markdown-it"
import { parse } from "svelte/compiler";
const parser = new MarkdownIt();

export async function GET(context) {
    const Muses = await getEntry('muses', 'content');
    const Notes = await getEntry('muses', 'notes');
    const Summary = await getEntry('muses', 'summary')
    return rss({
        title: "Merlin Muses at Maturbating Monarch",
        description: "Exhibitionism/Voyersim Merlin/Arthur one-shot.",
        site: context.site,
        items: [
            {
                title: Muses.data.title,
                role: Muses.data.role,
                description: sanitizeHtml(parser.render(Summary.body), {
                    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'div', 'section'])
                }),
                chapter: 0,
                pubDate: "2024-06-01",
                published: true,
                text: Notes.body,
                link: `/muses`,
                content: sanitizeHtml(parser.render(Muses.body), {
                    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'div', 'section'])
                })
            }
        ],
        customData: `<language>en-us</language>`,
        stylesheet: "/rss/styles.xsl"
    })
}