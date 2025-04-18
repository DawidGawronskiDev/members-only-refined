"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MembershipForm from "@/components/membership-form";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Membership() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get Membership</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get Membership</DialogTitle>
          <DialogDescription>Key is "membership"</DialogDescription>
        </DialogHeader>
        <MembershipForm />
      </DialogContent>
    </Dialog>
  );
}
