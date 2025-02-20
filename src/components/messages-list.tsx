"use client";

import { useMessages } from "@/store/messages-context";

const MessagesList = () => {
  const { messages } = useMessages();

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.message}</li>
      ))}
    </ul>
  );
};

export default MessagesList;
