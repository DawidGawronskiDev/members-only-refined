"use client";

import Link from "next/link";
import MaxWidthContanier from "./max-width-container";
import SignInButton from "./signin-button";
import { useSession } from "next-auth/react";
import SignOutButton from "./signout";
import { ThemeToggle } from "./theme-toggle";
import Logo from "./logo";
import { User } from "@/app/generated/prisma";
import Membership from "./membership";

export default function Header() {
  const session = useSession();
  const user = session.data?.user as User | null;

  return (
    <header className="sticky top-0 left-0 z-50 py-4 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/5">
      <MaxWidthContanier>
        <div className="flex items-center justify-between *:flex-1">
          <div>
            <Logo />
          </div>
          <div className="text-center">
            {user ? (
              user.isMember ? (
                <nav>
                  <ul>
                    <li>
                      <Link
                        href={"/posts"}
                        onClick={(e) => !user.isMember && e.preventDefault()}
                      >
                        Posts
                      </Link>
                    </li>
                  </ul>
                </nav>
              ) : (
                <Membership />
              )
            ) : null}
          </div>
          <div className="text-right flex items-center justify-end gap-2">
            <ThemeToggle />
            {!user ? <SignInButton /> : <SignOutButton />}
          </div>
        </div>
      </MaxWidthContanier>
    </header>
  );
}
