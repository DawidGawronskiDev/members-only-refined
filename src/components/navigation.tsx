"use client";

import { User } from "@/app/generated/prisma";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navigation() {
  const session = useSession();
  const user = session.data?.user as User;

  return (
    <nav>
      <ul>
        <li>
          <Link
            href={"/posts"}
            onClick={(e) => (user?.isMember ? null : e.preventDefault())}
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
