import { NextAuthOptions } from "next-auth";
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
      async authorize() {},
    }),
  ],
};
