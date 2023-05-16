import connectToMongoDb from "lib/mongo";
import { NextResponse } from "next/server";
import Artikel from "models/artikelModel";

export async function GET() {
  try {
    await connectToMongoDb();

    const artikels = await Artikel.find();
    return NextResponse.json({ artikels });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
export async function POST() {
  try {
    await connectToMongoDb();
    const artikel = await Artikel.create(req.body);
    return NextResponse.json({ artikel });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}
