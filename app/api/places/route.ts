import axios from "axios"
import { NextResponse } from "next/server"
import { NextApiRequest } from "next"

export async function GET(req: NextApiRequest) {
    const url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    const chunks = req.url?.split("?")
    if(chunks && chunks.length > 1) {
        const params = new URLSearchParams(chunks[1])
        const query = params.get("query")
        const location = params.get("location")
        const radius = params.get("radius")
        const key = params.get("key")
        try {
            const response = await axios.get(url, {
                params: {
                    query,
                    location,
                    radius,
                    key
                },
                headers: {
                    "Content-Type": "application/json"
                }
            })
            return NextResponse.json(response.data)
        } catch(err) {
            return NextResponse.json({status: 500})
        }
    }
}