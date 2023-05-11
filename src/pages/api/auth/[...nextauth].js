import * as dotenv from "dotenv";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

dotenv.config();

export const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOption);
