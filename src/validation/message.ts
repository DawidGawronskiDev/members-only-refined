import { z } from "zod";

const messageFormSchema = z.object({
  message: z.string().min(1),
});

export default messageFormSchema;
