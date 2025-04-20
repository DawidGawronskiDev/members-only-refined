import { Post, User } from "@/app/generated/prisma";

export interface PostWithAuthor extends Post {
  author: User;
}
