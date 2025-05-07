// This is the copy in the ssr directory
// export function getStaticPaths() {
//     return [
//         { params: { directory: "topography", image: "topography_brown"} }
//     ]
// }

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