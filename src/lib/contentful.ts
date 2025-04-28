import * as contentful from "contentful";

import type { EntryFieldTypes } from "contentful";

export interface contentChapter {
  contentTypeId: "chapter",
  fields: {
      chapter: EntryFieldTypes.Integer,
      id: EntryFieldTypes.Text,
      href: EntryFieldTypes.Text,
      text: EntryFieldTypes.Text,
      title: EntryFieldTypes.Text,
      pubDate: EntryFieldTypes.Date,
      published: EntryFieldTypes.Boolean,
      description: EntryFieldTypes.RichText,
      notes: EntryFieldTypes.RichText,
      endnotes: EntryFieldTypes.RichText,
      body: EntryFieldTypes.RichText
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com"
});