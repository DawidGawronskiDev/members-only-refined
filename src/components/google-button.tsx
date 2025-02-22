"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase-client";

export default function GoogleButton() {
  return (
    <Button
      onClick={async () => {
        await signInWithPopup(auth, new GoogleAuthProvider());
      }}
    >
      Google
    </Button>
  );
}
