"use client";

import { Post } from "../generated/prisma";
import useFetch from "@/hooks/useFetch";

export default function Posts() {
  const { loading, error, data: posts } = useFetch<Post[]>("/api/posts");

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <pre>{JSON.stringify(posts)}</pre>
    </div>
  );
}
