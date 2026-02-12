import rss from "@astrojs/rss"
import { getEntry, render } from "astro:content"
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
    const Summary = await getEntry("rape_not_die", "summary");
    const Body = await getEntry("rape_not_die", "content");
    const Notes = await getEntry("rape_not_die", "notes");
    return rss({
        title: "Fire into Idirsholas's Womb",
        description: sanitizeHtml(parser.render(Notes.body)),
        site: context.site,
        items: [
            {
                id: "fires",
                title: "Fire into Idirsholas's Womb",
                pubDate: "2025-06-26",
                description: parser.render(Summary.body),
                content: sanitizeHtml(parser.render(Body.body))
            }
        ],
        customData: `<language>en-us</language>`,
        stylesheet: "/rss/styles.xsl"
    });
}