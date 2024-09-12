"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { unknownError } from "@/lib/constants";
import { emailSchema, type EmailSchema } from "@/lib/notification";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";

export function JoinNewsletterForm() {
  const [loading, setLoading] = React.useState(false);

  // react-hook-form
  const form = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: EmailSchema) {
    setLoading(true);
    try {
      const response = await fetch("/api/email/newsletter", {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          token: crypto.randomUUID(),
          subject: "Welcome to Skateshop13",
        }),
      });

      if (!response.ok) {
        switch (response.status) {
          case 409:
            toast.error("You are already subscribed to our newsletter.");
            break;
          case 422:
            toast.error("Invalid input.");
            break;
          case 429:
            toast.error("The daily email limit has been reached.");
            break;
          default:
            toast.error(unknownError);
        }
        return;
      }

      toast.success("You have been subscribed to our newsletter.");
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error(unknownError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full"
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col sm:flex-row gap-3 text-center justify-center">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="sporttv@gmail.com"
                  className="w-full lg:w-1/2 border py-6 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  {...field}
                />
              </FormControl>
              <Button
                className="px-5 py-6 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <span>
                    basla
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 inline-block"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </Button>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
