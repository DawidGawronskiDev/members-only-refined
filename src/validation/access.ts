import { z } from "zod";

export const accessSchema = z.object({
  access: z.string().min(1),
});
