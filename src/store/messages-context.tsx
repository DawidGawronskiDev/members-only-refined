"use client";

import { getMessages } from "@/actions/get-messages";
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
  user: {
    name?: string;
  } | null;
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
    const getData = async () => {
      const data = await getMessages();
      setMessages(data);
    };

    getData();
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
