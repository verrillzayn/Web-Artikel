import Artikel from "models/artikelModel";
import { NextResponse } from "next/server";
import connectToMongoDb from "lib/mongo/index.js";
import Comment from "models/commentModel";

export async function GET(req, { params }) {
  try {
    await connectToMongoDb();
    const slug = params.slug;
    const populatedComment = await Comment.find()
      .populate({
        path: "artikel",
        select: "slug",
      })
      .populate({
        path: "author",
        select: ["userName", "pictureProfile", "email"],
      });
    const comment = populatedComment.filter((e) => e.artikel.slug === slug);
    if (!comment) return NextResponse.json({ 404: "comment not found" });
    return NextResponse.json({ comment });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ err: error });
  }
}
