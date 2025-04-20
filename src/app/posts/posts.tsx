"use client";

import PostCreate from "@/components/post-create";
import { PostsProvider } from "@/providers/posts";
import PostsList from "./posts-list";

export default function Posts() {
  return (
    <PostsProvider>
      <div className="flex flex-col items-center justify-start gap-4">
        <PostCreate />
        <PostsList />
      </div>
    </PostsProvider>
  );
}
