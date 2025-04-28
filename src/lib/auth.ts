import { betterAuth } from "better-auth";
import { Pool } from 'pg'

export const auth = betterAuth({
    database: new Pool({
        user: import.meta.env.PGUSER,
        password: import.meta.env.PGPASSWORD,
        host: import.meta.env.PGHOST,
        port: import.meta.env.PGPORT,
        database:  import.meta.env.PGDATABASE,
    })
});