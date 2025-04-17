import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "@/components/auth";
import { User } from "@/components/user";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {!session ? <LoginButton /> : <LogoutButton />}
      <pre>{JSON.stringify(session)}</pre>
      <User />
    </div>
  );
}
