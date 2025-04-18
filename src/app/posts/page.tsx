import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { User } from "../generated/prisma";
import Posts from "./posts";

export default async function PostsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const u = session.user as unknown as User;

  if (!u.isMember) {
    redirect("/");
  }

  return (
    <div>
      <pre>{JSON.stringify(session)}</pre>
      <Posts />
    </div>
  );
}
