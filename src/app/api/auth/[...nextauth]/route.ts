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

        console.log("user", user);

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        console.log("password", isPasswordValid);

        if (!isPasswordValid) {
          return null;
        }

        return {
          ...user,
          id: user.id + "",
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET!,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
