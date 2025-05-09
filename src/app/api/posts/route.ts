import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/app/generated/prisma";
import { postSchema } from "@/schemas";
import { authOptions } from "@/lib/auth";

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
    orderBy: {
      id: "desc",
    },
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

export async function POST(request: NextRequest) {
  try {
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
     * Validate body
     */
    const body = await request.json();
    const validation = postSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({
        status: 400,
        error: { message: "Validation failed" },
      });
    }

    const { data } = validation;

    /**
     * Create post
     */

    const createdPost = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        authorId: Number(u.id),
      },
    });

    return NextResponse.json({ data: createdPost }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: { message: "Internal server error" } },
      { status: 500 }
    );
  }
}
