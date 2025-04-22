import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    /**
     * * Get the request body
     */
    const body = await request.json();
    const { username, password } = body;
    /**
     * * Check if the username and password are provided
     */
    if (!username || !password) {
      return NextResponse.json(
        { error: { message: "Username and password are required" } },
        { status: 400 }
      );
    }

    /**
     * Check if the password is strong enough
     * - At least 8 characters long
     * - At least 1 uppercase letter
     * - At least 1 lowercase letter
     * - At least 1 number
     * - At least 1 special character
     * - No spaces
     *
     */
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        {
          error: {
            message:
              "Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
          },
        },
        { status: 400 }
      );
    }

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
