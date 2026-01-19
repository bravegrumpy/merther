// This is the copy in the ssr directory

// export function getStaticPaths() {
//     return [
//         { params: { image: "candid", ext: "png"} },
//         { params: { image: "chromolithograph", ext: "png"} }, 
//         { params: { image: "hand-painted-colorized-heliograph", ext: "png"} }, 
//         { params: { image: "illustration", ext: "png"} }, 
//         { params: { image: "lithograph", ext: "png"} }, 
//         { params: { image: "mixture", ext: "png"} }, 
//         { params: { image: "oil-painting", ext: "png"} }, 
//         { params: { image: "render", ext: "png"} }, 
//         { params: { image: "royal-reds", ext: "png"} }, 
//         { params: { image: "stained-glass", ext: "png"} }
//     ]
// }

// Using Vercel Edge runtime for faster responses 
export const config = {
    runtime: "edge"
}

export async function GET ({ params, request }: {params: any, request: any}) {
    const url = `https://cdn.bravegrumpy.com/AO3Styles/images/${params.image}.${params.ext}`;
    
    // Fetch with cache and compression support
    const response = await fetch(url, {
        headers: {
            'Accept-Encoding': 'gzip, deflate, br',
        },
        // Use keep-alive for connection reuse
        keepalive: true,
    });

    if (!response.ok) {
        return new Response('Image not found', { status: 404 });
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const etag = createETag(buffer);

    // Check if client already has this version
    const ifNoneMatch = request.headers.get('If-None-Match');
    if (ifNoneMatch === etag) {
        return new Response(null, { 
            status: 304,
            headers: {
                "ETag": etag,
                "Cache-Control": "public, max-age=31536000, immutable",
            }
        });
    }

    // Optimized caching headers
    const headers = {
        "Content-Type": getContentType(params.ext),
        "Cache-Control": "public, max-age=31536000, immutable",
        "ETag": etag,
        "Vary": "Accept-Encoding",
        // Enable compression hints
        "Accept-Ranges": "bytes",
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
    