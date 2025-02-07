import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

const buttonVariants = cva("px-6 py-2 font-medium", {
  variants: {
    variant: {
      default: "bg-black text-white dark:bg-white dark:text-black",
      destructive: "bg-red-500 text-white",
    },
    rounded: {
      md: "rounded",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    rounded: "md",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  className,
  variant,
  rounded,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, rounded, className }))}
      {...props}
    ></button>
  );
}
