"use client";

import Link from "next/link";
import MaxWidthContanier from "./max-width-container";
import SignInButton from "./signin-button";
import { useSession } from "next-auth/react";
import SignOutButton from "./signout";

export default function Header() {
  const session = useSession();

  return (
    <header className="sticky top-0 left-0 py-4">
      <MaxWidthContanier>
        <div className="flex items-center justify-between *:flex-1">
          <div>
            <Link href={"/"}>
              <div className="w-8 h-8 rounded-full bg-gray-500"></div>
            </Link>
          </div>
          <div className="text-center">
            <nav>
              <ul>
                <li>
                  <Link href={"/posts"}>Posts</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-right">
            {!session.data?.user ? <SignInButton /> : <SignOutButton />}
          </div>
        </div>
      </MaxWidthContanier>
    </header>
  );
}
