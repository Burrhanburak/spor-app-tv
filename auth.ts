import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { saltAndHashPassword } from "@/app/utils/helper";
import google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const email = credentials.email as string;
        const hash = saltAndHashPassword(credentials.password);

        let user: any = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email,
              hashedPassword: hash,
            },
          });
        } else {
          const isMatch = bcrypt.compareSync(
            credentials.password as string,
            user.hashedPassword
          );
          if (!isMatch) {
            throw new Error("Incorrect password.");
          }
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to the home page after successful sign-in
      return baseUrl;
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,

        id: user.id,
      },
    }),
  },

  pages: {
    signIn: "/signin",
    // Add other custom pages if needed
  },
});
