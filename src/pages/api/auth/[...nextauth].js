import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToMongoDb from "lib/mongo";
import User from "models/userModel";
import { compare } from "bcryptjs";

export const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credential",
      async authorize(credentials, req) {
        try {
          await connectToMongoDb();

          // check user existance
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            console.log("No User Found with Email Please Sign Up");
            return Promise.reject(
              new Error(`No User Found with Email Please Sign Up`)
            );
          }

          console.log({ user });

          // compare password
          const checkPassword = await compare(
            credentials.password,
            user.hashedPassword
          );
          if (!checkPassword || user.email !== credentials.email) {
            console.log(`Email or Password doesn't match`);
            return Promise.reject(new Error(`Email or Password doesn't match`));
          }

          return user;

          //
        } catch (error) {
          console.log({
            error,
            message: "Connection Failed....",
            // credentials,
            // req,
          });

          return Promise.reject(new Error(`${error}`));
        }
      },
    }),
  ],
  events: {
    signIn: async ({ user, account }) => {
      if (account.provider === "google" && !user.id) {
        const url = `${process.env.LOCAL_URL}/api/auth/userRegister`;
        const userRole =
          user?.email === "verzynx@gmail.com" ? "superAdmin" : "client";
        const data = {
          userName: user?.name,
          pictureProfile: user?.image,
          email: user?.email,
          role: userRole,
          signInWith: account.provider,
        };
        const option = {
          method: "POST",
          body: JSON.stringify(data),
        };
        const response = await fetch(url, option);
        const result = await response.json();
        console.log(result);
      }
      // console.log(`isNewUser : ${JSON.stringify(isNewUser)}`);
      // console.log(`profile : ${JSON.stringify(profile)}`);
      // console.log(`account : ${JSON.stringify(account)}`);
      // console.log(`user : ${JSON.stringify(user)}`);
      console.log(`account`);
    },
  },
};

export default NextAuth(authOption);
