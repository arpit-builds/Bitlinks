import clientPromise from "@/lib/mongodb"
export async function POST(request) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    //check if the shorturl exists
    const doc = await collection.findOne({ shorturl: body.shorturl })
    if (doc) {
      return Response.json({ success: false, error: true, message: "shorturl already exists" })
    }

    if (!doc) {
      await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
      })
    }

    return Response.json({ success: true, error: false, message: "shorturl generated successfully" })
  } catch (err) {
    // Always return valid JSON even on error
    return Response.json(
      { success: false, error: true, message: err?.message || "Internal server error" },
      { status: 500 }
    )
  }
}