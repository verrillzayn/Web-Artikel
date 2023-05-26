import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToMongoDb from "lib/mongo";
import User from "models/userModel";
import { compare } from "bcryptjs";

let userAcc = null;

export const authOption = {
  secret: process.env.NEXT_AUTH_SECRET,
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
            return Promise.reject(
              new Error(`No User Found with Email Please Sign Up`)
            );
          }

          // compare password
          const checkPassword = await compare(
            credentials.password,
            user.hashedPassword
          );
          if (!checkPassword || user.email !== credentials.email) {
            // console.log(`Email or Password doesn't match`);
            return Promise.reject(new Error(`Email or Password doesn't match`));
          }
          userAcc = user;
          return user;
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
      console.log(user);
      console.log(account);
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
      }
      // console.log(`isNewUser : ${JSON.stringify(isNewUser)}`);
      // console.log(`profile : ${JSON.stringify(profile)}`);
      // console.log(`account : ${JSON.stringify(account)}`);
      // console.log(`user : ${JSON.stringify(user)}`);
    },
  },
  callbacks: {
    async session({ session, user, token }) {
      if (token.signInWith === "EmailCredential") {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.image = token.picture;
      }
      // google login credential
      if (token.signInWith === "google") {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        //credential logic
        if (user.signInWith === "EmailCredential") {
          token.id = user._id;
          token.name = user.userName;
          token.signInWith = user.signInWith;
          if (!token.picture) {
            token.picture = user.pictureProfile;
          }
        }
        // google login logic
        if (user.image) {
          try {
            await connectToMongoDb();
            const googleUser = await User.findOne({ email: user.email });
            if (googleUser) {
              token.signInWith = googleUser.signInWith;
              token.id = googleUser._id;
            } else {
              console.log("new user");
            }
          } catch (error) {
            console.log({ error });
          }
        }
      }
      return token;
    },
  },
  session: {
    jwt: true,
  },
};

const handler = NextAuth(authOption);

// export default NextAuth(authOption);

export { handler as GET, handler as POST };
