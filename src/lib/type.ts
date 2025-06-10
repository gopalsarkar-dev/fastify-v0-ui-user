import { z } from "zod";
import { userSchema } from "./zodSchema";

export type UserObjType = {
  uId: string;

  first_name: string;

  last_name: string | null;

  email: string;

  gender: string;
};

export type UserType = z.infer<typeof userSchema>;
