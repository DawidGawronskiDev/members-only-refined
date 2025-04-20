"use client";

import { usePosts } from "@/providers/posts";
import Post from "./post";

export default function PostsList() {
  const { loading, error, posts } = usePosts();

  if (loading) return "Loading...";
  if (error) return "Error";

  return (
    <ul className="sm:columns-2 md:columns-3 space-y-4 w-full">
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </ul>
  );
}
