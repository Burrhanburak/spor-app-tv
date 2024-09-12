"use server";

import { prisma } from "@/lib/db";
import { getUserByEmail } from "@/lib/user";
import { getVerificationTokenByToken } from "@/components/verification-token";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "User not registered!" };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  console.log("Email verified for user:", existingUser.email);

  await prisma.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified successfully!" };
};
