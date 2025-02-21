"use client";

import { useAuth } from "@/store/auth-context";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const UserMenu = () => {
  const auth = useAuth();

  return (
    <div>
      {auth.currentUser ? (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                width={32}
                height={32}
                src={auth.currentUser.photoURL as string}
                alt="Profile"
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Profile</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {auth.customClaims?.admin ? (
                <DropdownMenuItem>
                  <Link href="/admin-dashboard">Admin Dashboard</Link>
                </DropdownMenuItem>
              ) : null}

              <DropdownMenuItem onClick={() => auth.logout()}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link href="/signup" className="text-sm">
          Sign Up
        </Link>
      )}
    </div>
  );
};

export default UserMenu;
