/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly XATA_API_KEY: string;
    readonly XATA_BRANCH: string;
    readonly CONTENTFUL_SPACE_ID: string;
    readonly CONTENTFUL_DELIVERY_TOKEN: string;
    readonly CONTENTFUL_PREVIEW_TOKEN: string;
    readonly GITHUB_CLIENT_ID: string;
    readonly GITHUB_CLIENT_SECRET: string
    readonly DATABASE_PUBLIC_URL: string
    readonly DATABASE_URL: string
    readonly PGDATA: string
    readonly PGDATABASE: string
    readonly PGHOST: string
    readonly PGPASSWORD: string
    readonly PGPORT: number
    readonly PGUSER: string
    readonly POSTGRES_DB: string
    readonly POSTGRES_PASSWORD: string
    readonly POSTGRES_USER: string
    readonly RAILWAY_DEPLOYMENT_DRAINING_SECONDS: number
    readonly SSL_CERT_DAYS: number


  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  