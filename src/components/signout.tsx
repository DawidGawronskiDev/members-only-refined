"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <Button variant="ghost" onClick={() => signOut()} className="rounded-full">
      Sign Out <ArrowRight />
    </Button>
  );
}
