import NextAuth from "next-auth/next";
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    userId?: string;
  }
  interface User {
    accessToken?: string;
  }
}
