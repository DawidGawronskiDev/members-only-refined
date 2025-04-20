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
import { KeyRound } from "lucide-react";

export default function Membership() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="rounded-full">
          Get Membership <KeyRound />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get Membership</DialogTitle>
          <DialogDescription>Key is &quot;membership&quot;</DialogDescription>
        </DialogHeader>
        <MembershipForm />
      </DialogContent>
    </Dialog>
  );
}
