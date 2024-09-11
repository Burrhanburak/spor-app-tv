import { v4 as uuidv4 } from "uuid"
import { prisma } from "./db"

export async function generatePasswordResetToken(userId: string) {
  const token = uuidv4()
  const expires = new Date(Date.now() + 3600000) // 1 hour from now

  await prisma.passwordResetToken.create({
    data: {
      token,
      expires,
      userId,
    },
  })

  return token
}