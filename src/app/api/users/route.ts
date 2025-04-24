import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { userSchema } from "@/schemas";

export async function POST(request: NextRequest) {
  try {
    /**
     * * Get the request body
     */
    const body = await request.json();

    /**
     * Validate the request body
     */
    const validation = userSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: { message: validation.error.message } },
        { status: 400 }
      );
    }
    const { username, password } = validation.data;

    /**
     * Hash the password
     */
    const hashed = await bcrypt.hash(password, 12);

    /**
     * * Check if the username is already taken
     */
    const existingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: { message: "Username already taken" } },
        { status: 400 }
      );
    }

    /**
     * * Create the user
     */
    const user = await prisma.user.create({
      data: { username, password: hashed },
    });
    if (!user) {
      return NextResponse.json(
        { error: { message: "User creation failed" } },
        { status: 500 }
      );
    }
    return NextResponse.json({ user }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: { message: "Internal Server Error" } },
      { status: 500 }
    );
  }
}
