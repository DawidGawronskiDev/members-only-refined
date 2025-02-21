"use server";

import { db } from "@/lib/firebase-client";
import { auth } from "@/lib/firebase-server";
import { collection, getDocs } from "firebase/firestore";

interface Message {
  id: string;
  message: string;
  user: string;
}

export const getMessages = async () => {
  const messagesRef = collection(db, "messages");
  const messagesSnapshot = await getDocs(messagesRef);

  const messages = messagesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Message[];

  const populatedMessages = await Promise.all(
    messages.map(async (message) => {
      const userRecord = await auth.getUser(message.user);

      return {
        ...message,
        user: userRecord ? { name: userRecord.displayName } : null,
      };
    })
  );

  return populatedMessages;
};
