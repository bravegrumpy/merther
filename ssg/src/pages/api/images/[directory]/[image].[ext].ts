// This is the copy in the ssg directory 
export function getStaticPaths() {
    return [
        { params: { directory: "topography", image: "topography_brown", ext: "png"} },
        { params: { directory: "textures", image: "TCom_PaperPage0016_2_XXL", ext: "png"}},
        { params: { directory: "textures", image: "TCom_FabricPatterns0070_S", ext: "jpg"} },
        { params: { directory: "textures", image: "TCom_FabricPatterns0112_XL", ext: "jpg"} },
        { params: { directory: "textures", image: "TCom_FabricPatterns0061_M", ext: "jpg"} },
        { params: { directory: "textures", image: "TCom_Parquet_XL", ext: "jpg"} },
        { params: { directory: "textures", image: "TCom_FabricPatterns0042_M", ext: "jpg" } }
    ]
}

export async function GET ({ params, request }: {params: any, request: any}) {
    const response = await fetch(
        `https://cdn.bravegrumpy.com/AO3Styles/images/${params.directory}/${params.image}.${params.ext}`
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