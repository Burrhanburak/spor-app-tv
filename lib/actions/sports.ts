"use server";

import { prisma } from "@/lib/db";

export async function getSportsFilter({ query }: { query: string }) {
  const sports = await prisma.sport.findMany({
    where: {
      title: {
        contains: query,
        mode: "insensitive",
      },
    },
  });

  return {
    data: [
      {
        name: "Sports",
        products: sports.map((sport) => ({
          id: sport.id,
          name: sport.title,
        })),
      },
    ],
    error: null,
  };
}
