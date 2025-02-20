"use client";

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
import { useState } from "react";

const MessageDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={handleOpen}>Send Message</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Message</DialogTitle>
          <DialogDescription>Share your thoughts with us!</DialogDescription>
        </DialogHeader>
        <MessageCreateForm onClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default MessageDialog;
