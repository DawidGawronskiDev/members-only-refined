"use client";

import Logo from "./logo";
import MaxWidthContanier from "./max-width-container";
import { ThemeToggle } from "./theme-toggle";
import Navigation from "./navigation";
import Auth from "./auth";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border border-background/10 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/10">
      <MaxWidthContanier>
        <div className="flex items-center justify-between py-4">
          <div className="flex-1/3">
            <Logo />
          </div>
          <div className="flex items-center justify-between flex-2/3 *:flex-1">
            <div className="text-center">
              <Navigation />
            </div>
            <div className="flex items-center justify-end gap-4">
              <ThemeToggle />
              <Auth />
            </div>
          </div>
        </div>
      </MaxWidthContanier>
    </header>
  );
}
