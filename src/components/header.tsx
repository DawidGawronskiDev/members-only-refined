"use client";

import Logo from "./logo";
import MaxWidthContanier from "./max-width-container";
import { ThemeToggle } from "./theme-toggle";
import Navigation from "./navigation";
import Auth from "./auth";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

import { Settings } from "lucide-react";
export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 512);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border border-background/10 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/10">
      <MaxWidthContanier>
        <div className="flex items-center justify-between py-4">
          <div className="flex-1/3">
            <Logo />
          </div>
          {isMobile && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-min">
                <div className="flex flex-col items-end gap-4">
                  <Navigation />
                  <Auth />
                  <ThemeToggle />
                </div>
              </PopoverContent>
            </Popover>
          )}
          {!isMobile && (
            <div className="flex items-center justify-between flex-2/3 *:flex-1">
              <div className="text-center">
                <Navigation />
              </div>
              <div className="flex items-center justify-end gap-4">
                <ThemeToggle />
                <Auth />
              </div>
            </div>
          )}
        </div>
      </MaxWidthContanier>
    </header>
  );
}
