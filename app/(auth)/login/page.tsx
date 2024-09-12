import React, { Suspense } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/components/auth/login-form";
import Social from "@/components/auth/social";
import ClientWrapper from "@/components/ClientWrapper";

function LoginPageContent() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Giriş yap</CardTitle>
          <CardDescription>
            Giriş yapmak istediginiz methodu seçiniz
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Social />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                ya da bunu kullanarak devam edin
              </span>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
          <div className="text-sm text-muted-foreground gap-2">
            <span className="mr-1">Hesabın yok mu?</span>
            <Link
              aria-label="Sign up"
              href="/signup"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Hesap oluştur
            </Link>
          </div>
          <Link
            aria-label="Reset password"
            href="/reset-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Şifremi unuttum?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return (
    <ClientWrapper>
      <LoginPageContent />
    </ClientWrapper>
  );
}
