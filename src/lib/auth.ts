import { betterAuth } from "better-auth";
import { Pool } from 'pg'

export const auth = betterAuth({
    database: new Pool({
        connectionString: import.meta.env.DATABASE_URL as string
    }),
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        github: {
            clientId: import.meta.env.GITHUB_CLIENT_ID as string,
            clientSecret: import.meta.env.GITHUB_CLIENT_SECRET as string
        },
        discord: {
            clientId: import.meta.env.DISCORD_CLIENT_ID,
            clientSecret: import.meta.env.DISCORD_CLIENT_SECRET
        }
    }
});