// This file was built in part by AI using Chat GPT-5.2

import { defineMiddleware } from "astro:middleware";

const allowedOrigins = new Set([
    "https://ncase.me",
    "https://testing-cors-self.vercel.app/",
    "https://cdn.jsdeliver.net"
]);

function corsHeaders(origin: string | null) {
    const headers = new Headers();

    if (origin && allowedOrigins.has(origin)) {
        headers.set("Access-Control-Allow-Origins", origin)
        headers.set("Vary", "Origin");

        headers.set("Access-Control-Allow-Methods", "GET")
        headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")

        headers.set("Access-Control-Max-Age", "86400")
    }

    return headers;
}

export const onRequest = defineMiddleware(async (context, next) => {
    const origin = context.request.headers.get("origin")

    if (context.request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders(origin)
        })
    }

    const response = await next();
    ;const headers = corsHeaders(origin)
    headers.forEach((value, key) => response.headers.set(key, value));

    return response;
})