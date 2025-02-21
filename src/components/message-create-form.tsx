"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import messageFormSchema from "@/validation/message";
import addMessage from "@/actions/add-message";
import { getAuth } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";
import { useMessages } from "@/store/messages-context";

const MessageCreateForm = ({ onClose }: { onClose: () => void }) => {
  const { handleCreateMessage } = useMessages();
  const { toast } = useToast();
  const auth = getAuth();

  const form = useForm<z.infer<typeof messageFormSchema>>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof messageFormSchema>) => {
    const token = await auth.currentUser?.getIdToken();

    if (!token) {
      toast({
        title: "Oops!",
        description: "Failed to verify token.",
        variant: "destructive",
      });
      return;
    }

    const resposne = await addMessage({ data: { ...values }, token });
    await handleCreateMessage();

    if (resposne.error) {
      toast({
        title: "Oops!",
        description: "Failed to send message.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success!",
        description: "Message sent successfully!",
      });
      onClose();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="Message..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export default MessageCreateForm;
