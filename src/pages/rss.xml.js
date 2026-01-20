import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from "sanitize-html"
import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt();

export async function GET(context) {
    return rss({
        title: 'List of All Fics',
        description: 'Collections that are listed here!',
        site: context.site,
        items: [
            {
                title: "Misunderstood",
                link: "/misunderstood/rss.xml",
                description: "An alternate universe, extremely similar to cannon with one major twist: Arthur is irredeemably evil, and the banter between Arthur and Merlin is malicious from Arthur and a survival mechanism for Merlin. Other changes give Merlin a support system outside of Arthur. They include Freya surviving, and becoming Merlin’s wife, and Lancelot surviving.",
                content: sanitizeHtml(parser.render(`[Misunderstood](/misunderstood/rss.xml)`))
            },
            {
                title: "Fig",
                link: "/fig/rss.xml",
                description: "Not Merther This is a simple character study of a real-life friend, plopped into my original fictional world",
                content: sanitizeHtml(parser.render(`[Fig](/fig/rss.xml)`))
            },
            {
                title: "Muses",
                link: "/muses/rss.xml",
                description: "Oneshot voyerism fic, where Merlin walks in on Arthur masturbating.",
                content: sanitizeHtml(parser.render(`[Muses](/muses/rss.xml)`))
            },
            {
                title: "Swagger",
                link: '/swagger/rss.xml',
                description: `A spin-off of Misunderstood, following an Outlander-style time traveler from a modern-day New York City, as he makes his way over to the 6th century British Isles, and interacts with some of the Misunderstood side characters.`,
                content: sanitizeHtml(parser.render(`[Swagger](/swaggers/rss.xml)`))
            },
            {
                title: "Fires",
                link: "/rape-not-die/rss.xml",
                description: `Oneshot non-con fic exploring the scenario of Merlin needing to fuck Morgana instead of poisoning her, in the episode “The Fires of Idirsholas”.`,
                content: sanitizeHtml(parser.render(`[Fires](/rape-not-die/rss.xml)`))
            },
            {
                title: "Llorem Ipsum",
                link: "/other/css_exp/rss.xml",
                description: "A page with filler text for showing off styles",
                content: sanitizeHtml(parser.render(`[CSS Expo](/other/css_expo/rss.xml)`))
            }
        ],
        customData: `<language>en-us</language>`,
        stylesheet: "/rss/styles.xsl"
    })
}