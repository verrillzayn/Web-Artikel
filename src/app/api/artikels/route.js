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
export async function POST(req) {
  try {
    const reqBody = await req.json();
    await connectToMongoDb();
    const artikel = await Artikel.create(reqBody);
    return NextResponse.json({ artikel });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err });
  }
}
