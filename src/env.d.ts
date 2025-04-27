/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly XATA_API_KEY: string;
    readonly XATA_BRANCH?: string;
    readonly CONTENTFUL_SPACE_ID?: string;
    readonly CONTENTFUL_DELIVERY_TOKEN?: string;
    readonly CONTENTFUL_PREVIEW_TOKEN?: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }