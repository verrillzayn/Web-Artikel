import Artikel from "models/artikelModel";
import { NextResponse } from "next/server";
import connectToMongoDb from "lib/mongo/index.js";

export async function GET(req, { params }) {
  try {
    await connectToMongoDb();
    const id = params.id;
    const artikel = await Artikel.findOne({ slug: id });
    if (!artikel) return NextResponse.json({ 404: "artikel not found" });
    return NextResponse.json({ artikel });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ err: "something error" });
  }
}
export async function DELETE(req, { params }) {
  try {
    const id = params.id;
    await connectToMongoDb();
    const deletedArtikel = await Artikel.deleteOne({ slug: id });
    return NextResponse.json({ deletedArtikel });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err });
  }
}
export async function PATCH(req, { params }) {
  const reqBody = await req.json();
  try {
    await connectToMongoDb();
    const id = params.id;
    const updatedArtikel = await Artikel.updateOne(
      { slug: id },
      { $set: reqBody }
    );
    return NextResponse.json({ updatedArtikel });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err });
  }
}
