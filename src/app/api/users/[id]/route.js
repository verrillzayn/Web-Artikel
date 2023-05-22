import connectToMongoDb from "lib/mongo";
import { NextResponse } from "next/server";
import User from "models/userModel";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connectToMongoDb();
    const user = await User.findById(id);
    if (!user) return NextResponse.json({ 404: "User Not Found" });
    user.hashedPassword = undefined;
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something Went Wrong" });
  }
}
