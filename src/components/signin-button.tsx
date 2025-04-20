"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";

export default function SignInButton() {
  const session = useSession();

  if (session.data?.user) {
    return null;
  }

  return (
    <Button variant="ghost" onClick={() => signIn()} className="rounded-full">
      Sign In <ArrowRight />
    </Button>
  );
}
