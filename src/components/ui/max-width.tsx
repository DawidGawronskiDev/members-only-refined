import { type ReactNode } from "react";

export default function MaxWidth({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-4 md:max-w-screen-md md:mx-auto lg:max-w-screen-lg">
      {children}
    </div>
  );
}
