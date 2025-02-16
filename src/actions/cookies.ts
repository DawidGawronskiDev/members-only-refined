"use server";

import { auth } from "@/lib/firebase-server";
import { cookies } from "next/headers";
import { grantAdmin } from "./grant-admin";

const setTokens = async ({
  token,
  refreshToken,
}: {
  token: string;
  refreshToken: string;
}) => {
  try {
    const verifiedToken = await auth.verifyIdToken(token);

    if (!verifiedToken) {
      return;
    }

    await grantAdmin(verifiedToken.uid);

    const cookieStore = await cookies();
    cookieStore.set("firebaseAuthToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    cookieStore.set("firebaseAuthRefreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  } catch (error) {
    console.log(error);
  }
};

const removeTokens = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("firebaseAuthToken");
  cookieStore.delete("firebaseAuthRefreshToken");
};

export { setTokens, removeTokens };
