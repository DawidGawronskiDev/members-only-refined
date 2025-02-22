"use server";

import { auth } from "@/lib/firebase-server";
import { cookies } from "next/headers";

export const setCookies = async ({
  token,
  refreshToken,
}: {
  token: string;
  refreshToken: string;
}) => {
  try {
    // Verify token
    const verifiedToken = auth.verifyIdToken(token);
    if (!verifiedToken) {
      throw new Error("Failed to verify token.");
    }

    const cookieStore = await cookies();

    // Set firebaseAuthToken
    cookieStore.set("firebaseAuthToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    // Set firebaseAuthRefreshToken
    cookieStore.set("firebaseAuthRefreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeCookies = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("firebaseAuthToken");
  cookieStore.delete("firebaseAuthRefreshToken");
};
