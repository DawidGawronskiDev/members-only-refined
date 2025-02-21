"use client";

import { getMessages } from "@/actions/get-messages";
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { MessageType } from "@/types";

interface MessagesContextType {
  messages: MessageType[];
  handleCreateMessage: () => Promise<void>;
  isLoading: boolean;
}

const MessagesContext = createContext<MessagesContextType | undefined>(
  undefined
);

const MessagesProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateMessage = async () => {
    setIsLoading(true);
    const updatedMessages = await getMessages();
    setMessages(updatedMessages);
    setIsLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getMessages();
      setMessages(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <MessagesContext.Provider
      value={{ messages, handleCreateMessage, isLoading }}
    >
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
