import rss from '@astrojs/rss';

export function GET(context) {
    return rss({
        title: 'Merther Fanfic',
        description: 'A collection of Merlin fan works.',
        site: context.site,
        items: [],
        customData: `<language>en-us</language>`,
    })
}