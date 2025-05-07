// This is the copy in the ssg directory
export function getStaticPaths() {
    return [
        { params: { image: "candid", ext: "png"} },
        { params: { image: "chromolithograph", ext: "png"} }, 
        { params: { image: "hand-painted-colorized-heliograph", ext: "png"} }, 
        { params: { image: "illustration", ext: "png"} }, 
        { params: { image: "lithogrpah", ext: "png"} }, 
        { params: { image: "mixture", ext: "png"} }, 
        { params: { image: "oil-painting", ext: "png"} }, 
        { params: { image: "render", ext: "png"} }, 
        { params: { image: "royal-reds", ext: "png"} }, 
        { params: { image: "stained-glass", ext: "png"} }
    ]
}

export async function GET ({ params, request }: {params: any, request: any}) {
    const response = await fetch(
        `https://cdn.bravegrumpy.com/AO3Styles/images/${params.image}.png`
    );
    const buffer = Buffer.from(await response.arrayBuffer());

    switch (params.ext) {
        case "png":
            return new Response(buffer, {
                headers: {
                    "Content-Type": "image/png"
                }
            });
        case "jpg":
        case "jpeg":
            return new Response(buffer, {
                headers: {
                    "Content-Type": "image/jpg"
                }
            });
        case "tiff":
        case "tif":
            return new Response(buffer, {
                headers: {
                    "Content-Type": "image/tiff"
                }
            });
        case "svg":
            return new Response(buffer, {
                headers: {
                    "Content-Type": "image/svg+xml"
                }
            });
        case "gif":
            return new Response(buffer, {
                headers: {
                    "Content-Type": "image/gif"
                }
            });
        case "webp":
            return new Response(buffer, {
                headers: {
                    "Content-Type": "image/webp"
                }
            })
    }

}