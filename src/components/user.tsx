"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <div>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};
