import checkMembership from "@/lib/checkMembership";
import Posts from "./posts";
import { redirect } from "next/navigation";
import MaxWidthContanier from "@/components/max-width-container";

export default async function PostsPage() {
  const isMember = await checkMembership();
  if (!isMember) redirect("/");

  return (
    <div className="my-16">
      <MaxWidthContanier>
        <div className="space-y-8">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <div>
              <h1>Your Private Space</h1>
              <p className="mt-2">
                Welcome to the members-only discussion board. Share your
                thoughts and connect with others in a secure environment.
              </p>
            </div>
          </div>
          <Posts />
        </div>
      </MaxWidthContanier>
    </div>
  );
}
