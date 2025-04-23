import { getSecret } from "astro:env/server";

export async function POST({ request }) {
    const data = await request.json();

    const recaptchaURL = 'https://google.com/recaptcha/api/siteverify';
    const requestHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    const requestBody = {
        secret: getSecret('CAPTCHA_SECRET_KEY'),
        response: data.recaptcha
    }

    const response = await fetch(recaptchaURL, {
        method: 'POST',
        headers: requestHeaders,
        body: requestBody.toString()
    });

    const responseData = await response.json();

    return new Response(JSON.stringify(responseData), { status: 200 });
}