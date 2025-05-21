// export function getStaticPaths() {
//     return [
//         { params: { image: "candid", ext: "png"} },
//         { params: { image: "chromolithograph", ext: "png"} }, 
//         { params: { image: "hand-painted-colorized-heliograph", ext: "png"} }, 
//         { params: { image: "illustration", ext: "png"} }, 
//         { params: { image: "lithogrpah", ext: "png"} }, 
//         { params: { image: "mixture", ext: "png"} }, 
//         { params: { image: "oil-painting", ext: "png"} }, 
//         { params: { image: "render", ext: "png"} }, 
//         { params: { image: "royal-reds", ext: "png"} }, 
//         { params: { image: "stained-glass", ext: "png"} }
//     ]
// }

export async function GET ({ params, request }: {params: any, request: any}) {
    const response = await fetch(
        `https://cdn.bravegrumpy.com/AO3Styles/images/${params.image}.${params.ext}`
    );

    const buffer = Buffer.from(await response.arrayBuffer());

    // Add caching headers
    const headers = {
        "Content-Type": getContentType(params.ext),
        "Cache-Control": "public, max-age=31536000",
        "ETag": createETag(buffer)
    };

    return new Response(buffer, { headers });
}

function getContentType(ext: string): string {
    switch (ext) {
        case "png":
            return "image/png";
        case "jpg":
        case "jpeg":
            return "image/jpg";
        case "tiff":
        case "tif":
            return "image/tiff";
        case "svg":
            return "image/svg+xml";
        case "gif":
            return "image/gif";
        case "webp":
            return "image/webp";
        default:
            return "application/octet-stream";
    }
}

function createETag(buffer: Buffer): string {
    return `"${Buffer.from(buffer).toString('base64').substring(0, 27)}"`; 
}
    