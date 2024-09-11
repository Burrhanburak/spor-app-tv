import { z } from "zod";
export const authSchema = z.object({
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100, {
      message: "Password must be at most 100 characters long",
    }),
  email: z.string().email({
    message: "Lütfen geçerli bir email adresi giriniz.",
  }),
});
