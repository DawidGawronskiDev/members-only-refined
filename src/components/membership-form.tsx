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
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import SubmitButton from "./submit-button";

const membershipShema = z.object({
  key: z.string().min(1),
});

export default function MembershipForm() {
  const { update } = useSession();

  const form = useForm<z.infer<typeof membershipShema>>({
    resolver: zodResolver(membershipShema),
    defaultValues: {
      key: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof membershipShema>) => {
    try {
      const response = await fetch("/api/membership/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error.message);
        return;
      }

      await update(result.data);
      toast.success("Thanks for being a member!");
    } catch (error) {
      toast.error("Oops! Something went wrong...");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          name="key"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key</FormLabel>
              <FormControl>
                <Input placeholder="key" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton isSubmitting={isSubmitting} content="Become a Member" />
      </form>
    </Form>
  );
}
