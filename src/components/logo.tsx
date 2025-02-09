"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  console.log(resolvedTheme);

  return (
    <Image
      src={`/logo-${resolvedTheme === "dark" ? "light" : "dark"}.svg`}
      alt="Logo"
      width={42}
      height={42}
    />
  );
}
