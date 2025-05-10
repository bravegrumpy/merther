// This is the copy in the ssg directory
export function getStaticPaths() {
    return [
        { params: { image: "candid", ext: "webp"} },
        { params: { image: "chromolithograph", ext: "webp"} }, 
        { params: { image: "hand-painted-colorized-heliograph", ext: "webp"} }, 
        { params: { image: "illustration", ext: "webp"} }, 
        { params: { image: "lithogrpah", ext: "webp"} }, 
        { params: { image: "mixture", ext: "webp"} }, 
        { params: { image: "oil-painting", ext: "webp"} }, 
        { params: { image: "render", ext: "webp"} }, 
        { params: { image: "royal-reds", ext: "webp"} }, 
        { params: { image: "stained-glass", ext: "webp"} }
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