"use client";

import { useAuth } from "@/store/auth-provider";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MemberForm from "./member-form";

export default function MessagesLink() {
  const auth = useAuth();

  return (
    <div>
      {!auth.currentUser?.member && (
        <Dialog>
          <DialogTrigger asChild>
            <Link href="/messages">Messages</Link>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Opps!</DialogTitle>
              <DialogDescription>You need a membership</DialogDescription>
            </DialogHeader>
            <MemberForm />
            <DialogFooter>
              <p className="text-xs">
                Let me save your time. Access key is &apos;mbrs&apos;. Enjoy!
              </p>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
