import React from "react";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignupPage() {
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
          {/* <OAuthSignIn /> */}
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
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Şifre</Label>
                <Input id="password" type="password" required />
              </div>
              <button
                className="shadow py-2 whitespace-nowrap rounded-md text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 md:h-14 w-full text-base md:text-lg font-semibold bg-red-600 hover:bg-red-700 flex justify-center items-center px-6"
                type="submit"
              >
                Hesap oluştur
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right ml-2"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg> */}
              </button>
            </form>
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
            href="/signin/reset-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Reset password
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
