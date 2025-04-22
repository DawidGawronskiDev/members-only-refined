"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 bg-gray-500 animate-pulse rounded-full"></div>
    );
  }

  return (
    <Link href={"/"}>
      {resolvedTheme === "dark" ? (
        <Image width={32} height={32} src="/logo-dark.png" alt="Logo" />
      ) : (
        <Image width={32} height={32} src="/logo-light.png" alt="Logo" />
      )}
    </Link>
  );
}
