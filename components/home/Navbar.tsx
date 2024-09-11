"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "@/components/home/UserNav";
import { ProductsCombobox } from "./products-combobox";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Anasayfa", href: "/anasayfa" },
  { name: "Canlı Tv", href: "/canli-tv" }, // canlı mac kalan süre
  { name: "Mac Özetleri", href: "/mac-ozetleri" },
  { name: "Puan Durumu", href: "/puan-durumu" },
  { name: "Fikstür", href: "/fikstur" }, //kimle kimin karşılaşacak gelecek maaclarıda göstermeli
  { name: "istatistik", href: "/istatistik" }, //son 10 maçta attığı goller
  { name: "Haberler", href: "/haberler" }, //tüm haberler
  { name: "Takımlar", href: "/takimlar" }, // takımalarin idslerini göstermeli içine gimrmeli
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full z-10 relative max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-10">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden ">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-sm "
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-gray-300 font-normal text-sm border "
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8 p-4 ">
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ProductsCombobox />
            <UserNav />
          </nav>
        </div>

        {/* <Search className="w-5 h-5 text-gray-300 cursor-pointer" />

        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" /> */}
      </div>
    </div>
  );
}
