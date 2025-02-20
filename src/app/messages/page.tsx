import MessageDialog from "@/components/message-dialog";
import MessagesList from "@/components/messages-list";
import MaxWidth from "@/components/ui/max-width";
import { MessagesProvider } from "@/store/messages-context";

const Messages = async () => {
  return (
    <MaxWidth>
      <MessagesProvider>
        <div className="text-center space-y-4">
          <div>
            <h2>Your Private Space</h2>
            <p className="max-w-prose mx-auto">
              Welcome to the members-only discussion board. Share your thoughts
              and connect with others in a secure environment.
            </p>
          </div>
          <MessageDialog />
        </div>
        <MessagesList />
      </MessagesProvider>
    </MaxWidth>
  );
};

export default Messages;
