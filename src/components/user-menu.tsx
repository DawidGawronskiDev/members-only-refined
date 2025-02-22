"use client";

import { useAuth } from "@/store/auth-provider";
import Link from "next/link";

export default function UserMenu() {
  const { currentUser } = useAuth();
  return (
    <div>
      {!currentUser && <Link href="/signup">Sign Up</Link>}
      {currentUser && <div>{currentUser.displayName}</div>}
    </div>
  );
}
