"use server";

import { authSchema } from "@/lib/validation/auth";
import { signIn } from "@/auth";
import { z } from "zod";

export async function loginAction(data: z.infer<typeof authSchema>) {
  const result = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  });

  if (result?.error) {
    throw new Error(result.error);
  }

  return result;
}
