"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import type { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "./password-input";
import { login } from "@/lib/actions/login";
import Spinner from "../spinner";
import { LoginSchema } from "@/schemas";
import { useIsClient } from "@/hooks/use-is-client";
import FormError from "./form-error";
import FormSuccess from "./form-success";

type Inputs = z.infer<typeof authSchema>;

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with a different provider!"
      : "";

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const [isPending, startTransition] = useTransition();

  const isClient = useIsClient();

  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.twoFactor) {
            router.push(`/auth/two-factor?email=${values.email}`);
            return;
          }
          if (data?.error) {
            setError(data.error);
          }
          if (data?.success) {
            setSuccess(data.success);
            router.push(callbackUrl || "/home");
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  if (!isClient) return <Spinner />;
  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="rodneymullen180@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {(error || urlError) && <FormError message={error || urlError} />}
        {success && <FormSuccess message={success} />}

        <Button
          className="shadow py-2 whitespace-nowrap rounded-md text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 md:h-14 w-full text-base md:text-lg font-semibold bg-red-600 hover:bg-red-700 flex justify-center items-center px-6"
          type="submit"
          disabled={isPending}
        >
          Giriş yap
        </Button>
      </form>
    </Form>
  );
};
