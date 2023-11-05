import { X } from "lucide-react";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "LoginCredentials",
      name: "credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "이메일",
          type: "text",
          placeholder: "이메일 주소 입력",
        },
        password: { label: "비밀번호", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("No credentials.");
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const { ok, result, msg } = await res.json();

        if (ok) {
          return result;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
