"use client";

import { Post, User } from "@/app/generated/prisma";
import useFetch from "@/hooks/useFetch";

interface PostWithAuthor extends Post {
  author: User;
}

export default function Posts() {
  const {
    loading,
    error,
    data: posts,
  } = useFetch<PostWithAuthor[]>("/api/posts");

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  console.log(posts);

  return (
    <ul className="space-y-4">
      {posts &&
        posts.map((post) => (
          <li key={post.id} className="flex flex-col">
            <span>{post.title}</span>
            <span>{post.author.username}</span>
            <span>{post.content}</span>
          </li>
        ))}
    </ul>
  );
}
