"use client";

import { useMessages } from "@/store/messages-context";
import { MessageType } from "@/types";
import { Loader } from "lucide-react";
import { Avatar } from "./avatar";

const MessagesList = () => {
  const { messages, isLoading } = useMessages();

  if (isLoading) {
    return <Loader width={16} height={16} className="animate-spin mx-auto" />;
  }

  return (
    <ul className="space-y-4 columns-3xs">
      {!isLoading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
    </ul>
  );
};

const Message = ({ message }: { message: MessageType }) => {
  return (
    <li className="flex flex-col gap-2 border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl bg-gray-100/5 dark:bg-gray-100/5 shadow-sm break-inside-avoid-column">
      <div className="flex gap-2">
        <Avatar />
        <div>
          <p className="font-bold break-all">
            {message.user?.name ?? "No user"}
          </p>
        </div>
      </div>
      <p className="font-normal break-all">{message.message}</p>
    </li>
  );
};

export default MessagesList;
