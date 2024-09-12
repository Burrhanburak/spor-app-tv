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
import { RegistrationForm } from "@/components/auth/registration-from";
import Social from "@/components/auth/social";
import ClientWrapper from "@/components/ClientWrapper";

function SignupPageContent() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Hesap oluştur</CardTitle>
          <CardDescription>
            Hesap oluştur için lütfen bilgilerinizi giriniz
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
            <RegistrationForm />
          </Suspense>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
          <div className="text-sm text-muted-foreground gap-2">
            <span className="mr-1">Zaten bir hesabın var mı?</span>
            <Link
              aria-label="Giriş yap"
              href="/login"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Giriş yap
            </Link>
          </div>
          <Link
            aria-label="Reset password"
            href="/reset-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Reset password
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function SignupPage() {
  return (
    <ClientWrapper>
      <SignupPageContent />
    </ClientWrapper>
  );
}
