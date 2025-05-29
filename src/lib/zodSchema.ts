import { z } from "zod";

export const userSchema = z.object({
  first_name: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" }),
  last_name: z.optional(
    z.string().min(3, { message: "Must be 3 or more characters long" }),
  ),
  email: z.string().endsWith(".com", { message: "Only .com allowed" }),
  type: z.string().min(1, { message: "Gender Must be required" }),
});
