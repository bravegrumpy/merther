// This is the copy in the ssg directory 
export function getStaticPaths() {
    return [
        { params: { image: "candid"} },
        { params: { image: "chromolithograph"} }, 
        { params: { image: "hand-painted-colorized-heliograph"} }, 
        { params: { image: "illustration"} }, 
        { params: { image: "lithogrpah"} }, 
        { params: { image: "mixture"} }, 
        { params: { image: "oil-painting"} }, 
        { params: { image: "render"} }, 
        { params: { image: "royal-reds"} }, 
        { params: { image: "stained-glass"} }
    ]
}

export async function GET ({ params, request }: {params: any, request: any}) {
    const response = await fetch(
        `https://cdn.bravegrumpy.com/AO3Styles/images/${params.image}.png`
    );
    const buffer = Buffer.from(await response.arrayBuffer());

    return new Response(buffer, {
        headers: {
            "Content-Type": "image/png"
        }
    })
}