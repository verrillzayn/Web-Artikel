import connectToMongoDb from "lib/mongo";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import User from "models/userModel";

export async function POST(req) {
  const reqBody = await req.json();
  try {
    await connectToMongoDb();
    const {
      userName,
      firstName,
      lastName,
      pictureProfile,
      email,
      hashedPassword,
      role,
      signInWith,
    } = reqBody;
    // check request body
    if (!reqBody) return NextResponse.json({ error: "Don't have Form Data" });

    // check duplicate user
    const checkExistingUser = await User.findOne({ email });
    if (checkExistingUser) {
      return NextResponse.json({
        message: "User Already Exist...",
      });
    }

    // hash password
    const pw = hashedPassword ? await hash(hashedPassword, 12) : "";
    const user = await User.create({
      userName,
      firstName,
      lastName,
      pictureProfile,
      email,
      hashedPassword: pw,
      role,
      signInWith,
    });
    return NextResponse.json({ status: true, user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}
