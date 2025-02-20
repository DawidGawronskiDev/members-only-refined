"use client";

import { db } from "@/lib/firebase-client";
import { collection, getDocs } from "firebase/firestore";
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

interface Message {
  id: string;
  message: string;
  user: string;
}

interface MessagesContextType {
  messages: Message[];
  handleCreateMessage: (message: Message) => void;
}

const MessagesContext = createContext<MessagesContextType | undefined>(
  undefined
);

const MessagesProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleCreateMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  useEffect(() => {
    const getMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const fetchedMessages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(fetchedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    getMessages();
  }, []);

  return (
    <MessagesContext.Provider value={{ messages, handleCreateMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

const useMessages = () => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessagesProvider");
  }
  return context;
};

export { MessagesProvider, MessagesContext, useMessages };
