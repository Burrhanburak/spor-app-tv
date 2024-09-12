"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { getUserByEmail } from "@/lib/user";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { generateTwoFactorToken } from "@/lib/token";
import { sendTwoFactorTokenEmail } from "@/lib/mail";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "User not registered!" };
  }

  console.log("User email verified status:", existingUser.emailVerified);

  if (!existingUser.emailVerified) {
    console.log("Email not verified for user:", existingUser.email);
    return {
      error: "Email not verified. Please verify your email before logging in.",
    };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      // İki faktörlü doğrulama kodu kontrolü
      // ... (mevcut kod)
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);

      return { twoFactor: true };
    }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Logged in successfully!" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
