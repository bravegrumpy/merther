// this is the copy in the default directory

// export function getStaticPaths() {
//     return [
//         { params: { directory: "topography", image: "topography_brown", ext: "png"} },
//         { params: { directory: "textures", image: "TCom_PaperPage0016_2_XXL", ext: "png"}},
//         { params: { directory: "textures", image: "TCom_FabricPatterns0070_S", ext: "jpg"} },
//         { params: { directory: "textures", image: "TCom_FabricPatterns0112_XL", ext: "jpg"} },
//         { params: { directory: "textures", image: "TCom_FabricPatterns0061_M", ext: "jpg"} },
//         { params: { directory: "textures", image: "TCom_Parquet_XL", ext: "jpg"} },
//         { params: { directory: "textures", image: "TCom_FabricPatterns0042_M", ext: "jpg" } }
//     ]
// }

export async function GET ({ params, request }: {params: any, request: any}) {
    const url = `https://cdn.bravegrumpy.com/AO3Styles/images/${params.directory}/${params.image}.${params.ext}`;
    
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

