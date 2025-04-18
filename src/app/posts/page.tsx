import checkMembership from "@/lib/checkMembership";
import Posts from "./posts";
import { redirect } from "next/navigation";

export default async function PostsPage() {
  const isMember = await checkMembership();
  if (!isMember) redirect("/");

  return (
    <div>
      <Posts />
    </div>
  );
}
