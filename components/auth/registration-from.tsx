"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import type { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/icons";
import { PasswordInput } from "./password-input";
import { register } from "@/lib/actions/register";
import Spinner from "../spinner";
import { useIsClient } from "@/hooks/use-is-client";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { RegisterSchema } from "@/schemas";

export const RegistrationForm = () => {
  const searchParams = useSearchParams();

  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with a different provider!"
      : "";

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const [isPending, startTransition] = useTransition();

  const isClient = useIsClient();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log("Form submitted", values);
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values)
        .then((data) => {
          if (data.success) setSuccess(data.success);
          if (data?.error) setError(data.error);
        })
        .catch((error) => {
          setError("An unexpected error occurred. Please try again.");
          console.error(error);
        });
    });
  };

  if (!isClient) return <Spinner />;
  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adınız</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type="text"
                  placeholder="Adınız"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  type="email"
                  placeholder="email@ornek.com"
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
              <FormLabel>Şifre</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Şifreyi onayla</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
              <Button
                size="sm"
                variant="link"
                asChild
                className="px-0 text-muted-foreground"
              >
                <Link href="/reset">Şifremi unuttum?</Link>
              </Button>
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
          {isPending ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Kayıt işlemi devam ediyor...
            </>
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </Form>
  );
};
