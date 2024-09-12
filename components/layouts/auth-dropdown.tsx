import * as React from "react";
import Link from "next/link";

import { DashboardIcon, GearIcon } from "@radix-ui/react-icons";

import { cn, getUserEmail } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "../icons";

import { currentUser } from "@/lib/auth";
import Image from "next/image";
import LogoutButton from "./logout-button";
interface AuthDropdownProps extends ButtonProps {}

export async function AuthDropdown({ className, ...props }: AuthDropdownProps) {
  const user = await currentUser();
  if (!user) {
    return (
      <Button size="sm" className={cn(className)} {...props} asChild>
        <Link href="/signin">
          Giriş yap
          <span className="sr-only">Giriş yap</span>
        </Link>
      </Button>
    );
  }

  const email = getUserEmail(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn("size-8 rounded-full", className)}
          {...props}
        >
          <Avatar className="h-10 w-10 rounded-sm">
            {user?.image ? (
              <AvatarImage src={user.image} alt={user?.name || "User avatar"} />
            ) : (
              <Image
                src="/avatar.png"
                alt="Default avatar"
                width={40}
                height={40}
              />
            )}
            <AvatarFallback className="rounded-sm">
              {user?.name?.[0] || "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <React.Suspense
          fallback={
            <div className="flex flex-col space-y-1.5 p-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-full rounded-sm" />
              ))}
            </div>
          }
        >
          <AuthDropdownGroup />
        </React.Suspense>
        <DropdownMenuSeparator />
        <LogoutButton>Çıkış yap</LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AuthDropdownGroup() {
  return (
    <DropdownMenuGroup>
      <DropdownMenuItem asChild>
        <Link href="/Profilim">
          <DashboardIcon className="mr-2 size-4" aria-hidden="true" />
          Profilim
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/dashboard/billing">
          <Icons.credit className="mr-2 size-4" aria-hidden="true" />
          Ödeme Bilgilerim
          <DropdownMenuShortcut>⌘Ö</DropdownMenuShortcut>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/dashboard/settings">
          <GearIcon className="mr-2 size-4" aria-hidden="true" />
          Ayarlar
          <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
        </Link>
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
}
