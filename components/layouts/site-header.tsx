import { siteConfig } from "@/config/site";
import { AuthDropdown } from "@/components/layouts/auth-dropdown";

import { MainNav } from "@/components/layouts/main-nav";
import { MobileNav } from "@/components/layouts/mobile-nav";
import { Bell } from "lucide-react";
import { ProductsCombobox } from "@/components/home/products-combobox";
import { currentUser } from "@/lib/auth";

export async function SiteHeader() {
  const user = await currentUser();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[hsl(240deg_18.16%_1.64%/63%)]">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ProductsCombobox />
            <Bell />
            <AuthDropdown {...user} />
          </nav>
        </div>
      </div>
    </header>
  );
}
