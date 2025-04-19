import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { User } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    /**
     * Valide session
     */
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        {
          error: { message: "Unauthorized" },
        },
        { status: 401 }
      );
    }

    const u = session.user as unknown as User;

    /**
     * Valide user
     */
    const existingUser = await prisma.user.findUnique({
      where: { id: Number(u.id) },
    });

    if (!existingUser) {
      return NextResponse.json(
        {
          error: { message: "Unauthorized" },
        },
        { status: 404 }
      );
    }

    /**
     * validate key
     */
    const body = await request.json();
    const membershipKey = body.key;

    if (membershipKey !== process.env.MEMBERSHIP_KEY!) {
      return NextResponse.json(
        {
          error: { message: "Wrong key" },
        },
        { status: 403 }
      );
    }

    /**
     * Validate membership
     */
    if (existingUser.isMember) {
      return NextResponse.json(
        {
          error: { message: "Already a member" },
        },
        { status: 403 }
      );
    }

    /**
     * Update membership
     */

    await prisma.user.update({
      where: { id: Number(u.id) },
      data: {
        isMember: true,
      },
    });

    const updatedUser = { ...existingUser, isMember: true } as User;

    return NextResponse.json({ data: updatedUser }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: { message: "Internal server error" } },
      { status: 500 }
    );
  }
}
