"use server";

import { db } from "@/lib/firebase-client";
import { auth } from "@/lib/firebase-server";
import { MessageType } from "@/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

interface Message {
  id: string;
  message: string;
  user: string;
}

export const getMessages = async () => {
  const messagesRef = collection(db, "messages");
  const messagesQuery = query(messagesRef, orderBy("created", "desc"));
  const messagesSnapshot = await getDocs(messagesQuery);

  const messages = messagesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Message[];

  const populatedMessages = (await Promise.all(
    messages.map(async (message) => {
      const userRecord = await auth
        .getUser(message.user)
        .catch((err) => console.log(err));

      return {
        ...message,
        user: userRecord ? { name: userRecord.displayName } : null,
      };
    })
  )) as MessageType[];

  return populatedMessages;
};
