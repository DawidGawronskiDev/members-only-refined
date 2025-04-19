"use client";

import { Button } from "./ui/button";

interface ButtonProps {
  isSubmitting: boolean;
  content: string;
}

export default function SubmitButton({ isSubmitting, content }: ButtonProps) {
  return (
    <Button type="submit" disabled={isSubmitting} className="w-full">
      {isSubmitting ? "Loading..." : content}
    </Button>
  );
}
