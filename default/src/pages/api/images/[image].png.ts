// export function getStaticPaths() {
//     return [
//         { params: { image: "chromolithograph"} },
//         { params: { image: "oil-painting"} }
//     ]
// }

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