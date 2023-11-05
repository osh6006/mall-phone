import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      role: null | string;
      createdAt: string;
      updatedAt: string;
      accessToken: string;
    };
  }
}
