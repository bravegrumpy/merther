import stylesheet from "@/styles/main.css";

export async function GET() {
    const resp = (await fetch(`https://archiveofourown.org/works/16625876?view_full_work=true`));

    const text = await resp.text();

    text.concat(`<style>${stylesheet}</style>`)

    return new Response(
        text, {
            headers: {
                "Content-Type": "text/html"
            }
        }
    )
}