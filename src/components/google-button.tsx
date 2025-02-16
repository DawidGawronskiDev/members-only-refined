"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useAuth } from "@/store/auth-context";

const GoogleButton = ({ className }: { className?: string }) => {
  const auth = useAuth();

  return (
    <Button
      className={className || ""}
      onClick={async () => await auth.loginWithGoogle()}
    >
      <Image width={16} height={16} src="/google-icon.png" alt="Google logo" />
      Continue with Google
    </Button>
  );
};

export default GoogleButton;
