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
import { accessSchema } from "@/validation/access";
import { useAuth } from "@/store/auth-context";
import { grantMembership } from "@/actions/grant-membership";
import { useToast } from "@/hooks/use-toast";

const AccessKeyForm = () => {
  const { toast } = useToast();
  const auth = useAuth();

  const form = useForm<z.infer<typeof accessSchema>>({
    resolver: zodResolver(accessSchema),
    defaultValues: {
      access: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof accessSchema>) => {
    const { access } = values;
    const token = await auth.currentUser?.getIdToken();

    if (!token) {
      toast({
        title: "Oops!",
        description: "Something went wrong...",
      });
      return;
    }

    const response = await grantMembership({ access, token });

    if (!response.error) {
      toast({
        title: "Success!",
        description: "You are officially a member!",
      });
    } else {
      toast({
        title: "Oops!",
        description: response.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="access"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Access key</FormLabel>
              <FormControl>
                <Input placeholder="Key..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Loading..." : "Get Access"}
        </Button>
      </form>
    </Form>
  );
};

export default AccessKeyForm;
