import { NextResponse } from "next/server";
import connectToMongoDb from "lib/mongo/index.js";
import Comment from "models/commentModel";
// jangan hapus importan User
// import User from "models/userModel";

//get all comments
export async function GET() {
  try {
    await connectToMongoDb();
    const populatedComment = await Comment.find()
      .populate({
        path: "author",
        select: ["email", "pictureProfile"],
      })
      .populate({
        path: "artikel",
        select: "slug",
      });

    return NextResponse.json({ populatedComment });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

//add comment
export async function POST(request) {
  const req = await request.json();
  const { author, artikel, content } = req;
  try {
    await connectToMongoDb();
    const comments = await Comment.create({
      author,
      artikel,
      content,
    });
    return NextResponse.json({ comments }, { status: 201 });
  } catch (err) {
    // console.log(err);
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
