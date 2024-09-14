import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "./mongodb";
import User from "@/modals/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          //connect to the database first
          await connectDB();
          console.log("asckjasb");
          //find the user with email id
          const userExists = await User.findOne({
            email: credentials?.email,
          }).select("+password");

          if (!userExists) {
            console.log("ascba");
            throw new Error("Invalid email!");
          }
          //.select("+password") is neccessary to get password from database and to compare it.......

          //match the hashed password with bcrypt compare
          const passwordMatch = await bcrypt.compare(
            credentials!.password,
            userExists.password
          );

          if (!passwordMatch) {
            throw new Error("Invalid Password !");
          }

          const accessToken = jwt.sign(
            {
              id: userExists._id.toString(),
              name: userExists.name,
              email: userExists.email,
            },
            "lms",
            { expiresIn: "1h" }
          );
          return {
            id: userExists._id.toString(),
            name: userExists.name,
            email: userExists.email,
            accessToken: accessToken,
          };
        } catch (error: any) {
          throw new Error(error.message || "An error occured");
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ account, token, user, trigger }) {
      //if user has login through providers using oauth
      if (account?.type === "oauth") {
        token.accessToken = account?.id_token;
      } else {
        //if user has login through credentials then the valuw come from user
        if (user) {
          //user is the value get from crendentials or database
          token.accessToken = user.accessToken;
        }
      }

      return token;
    },

    async session({ session, token, user }) {
      if (token) {
        if (typeof token.accessToken === "string") {
          session.accessToken = token.accessToken;
        }
        session.userId = token.sub ?? "";
      }
      return session;
    },

    // async signIn({ user, account, profile, email, credentials }) {
    //   if (user) {
    //     return true;
    //   }
    //   return false;
    // },
    // async signIn({ profile }) {
    //   console.log(profile);
    //   const extendedProfile = profile as ExtendedProfile;
    //   console.log(extendedProfile);
    //   try {
    //     await connectDB();
    //     console.log("connected to database");
    //     const userExits = await User.findOne({
    //       email: extendedProfile?.email,
    //     });

    //     if (!userExits) {
    //       const user = await User.create({
    //         id: extendedProfile?.sub,
    //         email: extendedProfile?.email,
    //         name: extendedProfile?.name,
    //         image: extendedProfile?.picture,
    //       });
    //     }
    //     return true;
    //   } catch (error) {
    //     console.log(error);
    //     return false;
    //   }
    // },
  },
};
