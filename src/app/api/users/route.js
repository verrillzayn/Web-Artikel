import connectToMongoDb from "lib/mongo";
import { NextResponse } from "next/server";
import User from "models/userModel";

export async function GET() {
  try {
    await connectToMongoDb();
    const users = await User.find();
    users.forEach((e) => (e.hashedPassword = undefined));
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
