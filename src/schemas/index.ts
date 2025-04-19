import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1).max(64),
  content: z.string().min(1).max(255),
});
