import { User } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "johndoe",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id + "",
          username: user.username,
          isMember: user.isMember,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user = await prisma.user.findUnique({
        where: { id: Number(token.id) },
      });

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: user?.username ?? token.username,
          isMember: user?.isMember ?? token.isMember,
        },
      };
    },
    jwt({ token, user }) {
      if (user) {
        const u = user as unknown as User;
        return {
          ...token,
          id: u.id,
          username: u.username,
          isMember: u.isMember,
        };
      }
      return token;
    },
  },
  secret: process.env.AUTH_SECRET!,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
