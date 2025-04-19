import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/app/generated/prisma";

export async function GET() {
  /**
   * Valide session
   */
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({
      status: 404,
      error: { message: "Unauthorized" },
    });
  }

  const u = session.user as unknown as User;

  /**
   * Valide user
   */
  const existingUser = await prisma.user.findUnique({
    where: { id: Number(u.id) },
  });

  if (!existingUser) {
    return NextResponse.json({
      status: 404,
      error: { message: "Unauthorized" },
    });
  }

  /**
   * Validate membership
   */
  if (!existingUser.isMember) {
    return NextResponse.json({
      status: 404,
      error: { message: "Unauthorized" },
    });
  }

  /**
   * Get posts
   */
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  if (!posts) {
    return NextResponse.json({
      status: 500,
      error: { message: "Internal server error" },
    });
  }

  return NextResponse.json({ status: 200, data: posts });
}
