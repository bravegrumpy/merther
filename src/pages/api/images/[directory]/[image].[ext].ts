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
    const response = await fetch(
        `https://cdn.bravegrumpy.com/AO3Styles/images/${params.directory}/${params.image}.${params.ext}`
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

