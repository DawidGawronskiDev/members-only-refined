"use client";

import { User } from "@/app/generated/prisma";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "sonner";
import Membership from "./membership";

export default function Navigation() {
  const session = useSession();
  const user = session.data?.user as User;

  return (
    <nav>
      {!user?.isMember ? (
        <Membership />
      ) : (
        <ul>
          <li>
            <Link
              href={"/posts"}
              onClick={(e) => {
                if (!user?.isMember) {
                  toast.error("You need to be a member to access this page.");
                  e.preventDefault();
                }
              }}
            >
              Posts
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
