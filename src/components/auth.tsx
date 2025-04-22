"use client";

import { useSession } from "next-auth/react";
import SignInButton from "./signin-button";
import SignOutButton from "./signout";

export default function Auth() {
  const session = useSession();
  const user = session.data?.user;

  return !user ? <SignInButton /> : <SignOutButton />;
}
