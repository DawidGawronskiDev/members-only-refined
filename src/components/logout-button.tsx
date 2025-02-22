"use client";

import { signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase-client";

export default function LogoutButton() {
  return <Button onClick={async () => await signOut(auth)}>Log out</Button>;
}
