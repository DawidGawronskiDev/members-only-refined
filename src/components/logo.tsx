"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Logo() {
  const [, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [resolvedTheme]);

  return (
    <Link href="/">
      <Image
        src={`/logo-${resolvedTheme === "dark" ? "light" : "dark"}.svg`}
        alt="Logo"
        width={42}
        height={42}
        suppressHydrationWarning
      />
    </Link>
  );
}
