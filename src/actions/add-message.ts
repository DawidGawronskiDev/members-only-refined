"use server";

import { db } from "@/lib/firebase-client";
import { auth } from "@/lib/firebase-server";
import messageFormSchema from "@/validation/message";
import { addDoc, collection } from "firebase/firestore";

const addMessage = async ({
  data,
  token,
}: {
  data: { message: string };
  token: string;
}) => {
  const verifiedToken = await auth.verifyIdToken(token);
  if (!verifiedToken) {
    return {
      error: true,
      message: "Failed to verify token.",
    };
  }

  const validation = messageFormSchema.safeParse(data);
  if (!validation.success) {
    return {
      error: true,
      message: validation.error.issues[0] ?? "Validation failed.",
    };
  }

  const now = new Date();
  await addDoc(collection(db, "messages"), {
    message: validation.data.message,
    user: verifiedToken.uid,
    created: now.toISOString(),
    updated: now.toISOString(),
  });

  return {
    error: false,
    message: "Success!",
  };
};

export default addMessage;
