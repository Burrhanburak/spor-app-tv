import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import logo from "@/public/images/logo.png"; // Update this path

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="container mx-auto px-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 order-1 md:order-none">
            <Image
              className="w-8 h-8 bg-[#7ce7ac] rounded-lg mr-2"
              src={logo}
              alt="logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold">Fii</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-xs md:text-sm mb-4 md:mb-0 order-2 md:order-none">
            <Link
              href="/mesafeli-satis-sozlesmesi"
              className="hover:text-[#7ce7ac] transition-colors"
            >
              Mesafeli Satış Sözleşmesi
            </Link>
            <Link
              href="/on-bilgilendirme-formu"
              className="hover:text-[#7ce7ac] transition-colors"
            >
              Ön Bilgilendirme Formu
            </Link>
            <Link
              href="/kullanim-sartlari"
              className="hover:text-[#7ce7ac] transition-colors"
            >
              Kullanım Şartları
            </Link>
            <Link
              href="/gizlilik"
              className="hover:text-[#7ce7ac] transition-colors"
            >
              Gizlilik
            </Link>
            <Link
              href="/cerez-tercihleri"
              className="hover:text-[#7ce7ac] transition-colors"
            >
              Çerez Tercihleri
            </Link>
          </nav>
        </div>
        <Separator className="bg-gray-800 my-4" />
        <div className="text-center text-xs text-gray-400">
          © 2024 Fii, Tüm hakları saklıdır
        </div>
      </div>
    </footer>
  );
}
