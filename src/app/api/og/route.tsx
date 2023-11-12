import { ImageResponse } from "next/og";

export const runtime = "edge"

export const GET = async ( request: Request ) => {
    try {
        const { searchParams } = new URL( request.url )

        const hasTitle = searchParams.has("title")
        const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "MiListApp"

        return new ImageResponse(
            <div>Holi</div>
        )
    } catch (error) {
        return new Response("Failed to generated OG image", { status: 500 })
    }
    
}