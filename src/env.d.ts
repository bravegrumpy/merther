/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly XATA_API_KEY: string;
    readonly XATA_BRANCH: string;
    readonly CONTENTFUL_SPACE_ID: string;
    readonly CONTENTFUL_DELIVERY_TOKEN: string;
    readonly CONTENTFUL_PREVIEW_TOKEN: string;
    readonly GITHUB_CLIENT_ID: string;
    readonly GITHUB_CLIENT_SECRET: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }