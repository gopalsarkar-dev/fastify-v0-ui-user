import { z } from "zod";

export const userSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(3, { message: "Must be 3 or more characters long" }),
  last_name: z.optional(
    z.string().trim().min(3, { message: "Must be 3 or more characters long" }),
  ),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .endsWith(".com", { message: "Only .com allowed" }),
  gender: z.string(),
});
