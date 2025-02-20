"use client";

import { useAuth } from "@/store/auth-context";
import MemberDialog from "./member-dialog";
import Link from "next/link";
import SignUpDialog from "./signup-dialog";

const MessagesAccess = () => {
  const auth = useAuth();

  if (!auth.currentUser) {
    return <SignUpDialog />;
  }

  if (!auth.customClaims?.member) {
    return <MemberDialog />;
  }

  return <Link href="/messages">Messages</Link>;
};

export default MessagesAccess;
