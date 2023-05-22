import { NextResponse } from "next/server";
import connectToMongoDb from "lib/mongo/index.js";
import Comment from "models/commentModel";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connectToMongoDb();
    const comment = await Comment.findById(id);
    if (!comment) return NextResponse.json({ 404: "comment not found" });
    return NextResponse.json({ comment });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ err: "Something Went Wrong" });
  }
}
export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await connectToMongoDb();
    const deletedComment = await Comment.findByIdAndDelete(id);
    // res.status(200).json(deletedComment);
    return NextResponse.json({ deletedComment });
  } catch (err) {
    // res.status(400).json({ message: err.message });
    console.log(err);
    return NextResponse.json({ message: err });
  }
}
export async function PATCH(req, { params }) {
  const reqBody = await req.json();
  try {
    await connectToMongoDb();
    const { id } = params;
    const updatedComment = await Comment.updateOne(
      { _id: id },
      { $set: reqBody }
    );
    return NextResponse.json({ updatedComment });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}
