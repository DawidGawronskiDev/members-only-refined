"use server";

import { auth } from "@/lib/firebase-server";

export const grantAdmin = async (uid: string) => {
  const userRecord = await auth.getUser(uid);
  const userCustomClaims = userRecord.customClaims ?? {};
  if (
    userRecord.email === process.env.ADMIN_EMAIL &&
    !userRecord.customClaims?.admin
  ) {
    await auth.setCustomUserClaims(uid, {
      ...userCustomClaims,
      admin: true,
    });
  }
};
