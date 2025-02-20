import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AccessKeyForm from "./access-key-form";

const MemberDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-xs">
          Messages
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Become a Member</DialogTitle>
          <DialogDescription>
            Make sure you are a member to access messages page.
          </DialogDescription>
        </DialogHeader>
        <AccessKeyForm />
        <DialogFooter>
          <p className="text-xs text-muted-foreground">
            Let me save your time. Secret key is &apos;mbrs&apos;. Enjoy!
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MemberDialog;
