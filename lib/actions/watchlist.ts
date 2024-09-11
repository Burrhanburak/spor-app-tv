"use server";

import { prisma } from "@/lib/db";
import { getErrorMessage } from "@/lib/handle-error";

export async function addToWatchList(
  profileId: string,
  title: string,
  type: string
) {
  try {
    const watchListItem = await prisma.watchListItem.create({
      data: {
        profileId: profileId,
        title: title,
        type: type,
      },
    });

    return {
      data: watchListItem,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

// ... önceki kod ...

export async function removeFromWatchList(id: string) {
  try {
    await prisma.watchListItem.delete({
      where: { id: id },
    });

    return {
      data: null,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function getWatchList(profileId: string) {
  try {
    const watchList = await prisma.watchListItem.findMany({
      where: { profileId: profileId },
    });

    return {
      data: watchList,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}
