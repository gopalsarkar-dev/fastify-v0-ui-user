import { z } from "zod";
import { userSchema } from "./zodSchema";

export type UserType = z.infer<typeof userSchema>;
