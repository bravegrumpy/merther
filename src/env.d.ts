/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly XATA_API_KEY: string;
  readonly XATA_BRANCH: string;
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
  readonly GITHUB_CLIENT_ID: string;
  readonly GITHUB_CLIENT_SECRET: string
  readonly DATABASE_URL: string;
  readonly DISCORD_CLIENT_ID: string
  readonly DISCORD_CLIENT_SECRET: string;
  readonly ASTRO_DB_APP_TOKEN: string;
  readonly ASTRO_DB_REMOTE_URL: string;
  readonly ASTRO_DATABASE_FILE: string;
  readonly TURSO_DATABASE_URL: string;
  readonly TURSO_AUTH_TOKEN: string;
  readonly VERCEL_TELEMETRY_DEBUG: number;
  readonly CLOUDINARY_URL: string;
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  readonly PUBLIC_CLOUDINARY_API_KEY: string;
  readonly CLOUDINARY_API_SECRET: string;
  readonly RENDER_TYPE: "ssg" | "ssr" | "default";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference path="../.astro/types.d.ts" />
declare namespace App {
  interface Locals {
    user: import("better-auth").User | null
    session: import("better-auth").Session | null,
  }
}