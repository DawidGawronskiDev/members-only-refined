import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui//button";
import MessageCreateForm from "./message-create-form";

const MessageDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Send Message</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Message</DialogTitle>
          <DialogDescription>Share your thoughts with us!</DialogDescription>
        </DialogHeader>
        <MessageCreateForm />
      </DialogContent>
    </Dialog>
  );
};

export default MessageDialog;
