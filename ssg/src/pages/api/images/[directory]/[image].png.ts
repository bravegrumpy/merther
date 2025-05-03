// This is the copy in the ssg directory 
export function getStaticPaths() {
    return [
        { params: { directory: "topography", image: "topography_brown"} },
        { params: { directory: "textures", image: "TCom_PaperPage0016_2_masked_XXL"} },
        { params: { directory: "textures", image: "TCom_PaperPage0016_2_masked_XXL_cropped.png"}}
    ]
}

export async function GET ({ params, request }: {params: any, request: any}) {
    const response = await fetch(
        `https://cdn.bravegrumpy.com/AO3Styles/images/${params.directory}/${params.image}.png`
    );
    const buffer = Buffer.from(await response.arrayBuffer());

    return new Response(buffer, {
        headers: {
            "Content-Type": "image/png"
        }
    })
}