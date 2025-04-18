"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/app/generated/prisma";
import { getServerSession } from "next-auth";
import prisma from "./prisma";

export default async function checkMembership() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return false;
    }

    const u = session.user as unknown as User;

    const existingUser = await prisma.user.findUnique({
      where: { id: Number(u.id) },
    });

    if (!existingUser?.isMember) {
      return false;
    }

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
