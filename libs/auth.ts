import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "./mongodb";
import User from "@/modals/User";
import bcrypt from "bcryptjs";

interface ExtendedProfile {
  sub: string;
  email: string;
  picture: string;
  name: string;
}
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
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
        //connect to the database first
        await connectDB();

        //find the user with email id
        const userExists = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!userExists) {
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
        return {
          id: userExists._id.toString(),
          name: userExists.name,
          email: userExists.email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ account, token, user, trigger }) {
      console.log(account);
      console.log(token);
      console.log(user);
      console.log(trigger);

      return token;
    },

    async session({ session, token }) {
      console.log(session);
      return session;
    },
    async signIn({ profile }) {
      console.log(profile);
      const extendedProfile = profile as ExtendedProfile;
      console.log(extendedProfile);
      try {
        await connectDB();
        console.log("connected to database");
        const userExits = await User.findOne({
          email: extendedProfile?.email,
        });

        if (!userExits) {
          const user = await User.create({
            id: extendedProfile?.sub,
            email: extendedProfile?.email,
            name: extendedProfile?.name,
            image: extendedProfile?.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },

  // pages: {
  //   signIn: "/",
  // },
  // callbacks: {
  //   async session({ session, token }) {
  //     return session;
  //   },
  //   async signIn({ profile }) {
  //     const extendedProfile = profile as ExtendedProfile;
  //     console.log(extendedProfile);
  //     try {
  //       await connectDB();
  //       console.log("connected to database");
  //       const userExits = await UserSchema.findOne({
  //         email: extendedProfile?.email,
  //       });

  //       if (!userExits) {
  //         const user = await UserSchema.create({
  //           id: extendedProfile?.sub,
  //           email: extendedProfile?.email,
  //           name: extendedProfile?.name,
  //           image: extendedProfile?.picture,
  //         });
  //       }
  //       return true;
  //     } catch (error) {
  //       console.log(error);
  //       return false;
  //     }
  //     return true;
  //   },
  // },
};
