"use server";

import { auth } from "@/lib/firebase-server";
import { accessSchema } from "@/validation/access";

export const grantMembership = async (data: {
  access: string;
  token: string;
}) => {
  const verifiedToken = await auth.verifyIdToken(data.token);

  if (verifiedToken.member) {
    return {
      error: false,
      message: "User is already a member",
    };
  }

  const validation = accessSchema.safeParse({ access: data.access });
  if (!validation.success) {
    return {
      error: true,
      message: validation.error.issues[0]?.message ?? "An error occurred.",
    };
  }

  if (validation.data.access !== process.env.ACCESS_KEY) {
    return {
      error: true,
      message: "Wrong access key.",
    };
  }

  const userRecord = await auth.getUser(verifiedToken.uid);

  if (!userRecord) {
    return {
      error: true,
      message: "Failed to find user with provided uid.",
    };
  }

  const userCustomClaims = userRecord.customClaims ?? {};
  await auth.setCustomUserClaims(verifiedToken.uid, {
    ...userCustomClaims,
    member: true,
  });

  return {
    error: false,
    message: "Success!",
  };
};
