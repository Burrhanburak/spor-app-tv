// import type { User } from "@clerk/nextjs/server";

import { siteConfig } from "@/config/site";
import { CartSheet } from "@/components/checkout/cart-sheet";
import { AuthDropdown } from "@/components/layouts/auth-dropdown";
import { MainNav } from "@/components/layouts/main-nav";
import { MobileNav } from "@/components/layouts/mobile-nav";
import { ProductsCombobox } from "@/components/products-combobox";
import { Bell } from "lucide-react";

interface SiteHeaderProps {
  user: User | null;
}

export function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full ">
      <div className="container relative flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <ProductsCombobox />
            <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
            {/* <CartSheet /> */}
            <AuthDropdown user={user} />
          </nav>
        </div>
      </div>
    </header>
  );
}
