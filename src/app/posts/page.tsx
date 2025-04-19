import checkMembership from "@/lib/checkMembership";
import Posts from "./posts";
import { redirect } from "next/navigation";
import PostCreate from "@/components/post-create";

export default async function PostsPage() {
  const isMember = await checkMembership();
  if (!isMember) redirect("/");

  return (
    <div>
      <PostCreate />
      <Posts />
    </div>
  );
}
