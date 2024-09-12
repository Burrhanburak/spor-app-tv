import type { FooterItem, MainNavItem } from "@/types";

// import { productConfig } from "@/config/product";
import { slugify } from "@/lib/utils";

export type SiteConfig = typeof siteConfig;

const links = {
  x: "https://twitter.com/sadmann17",
  github: "https://github.com/sadmann7/skateshop",
  githubAccount: "https://github.com/sadmann7",
  discord: "https://discord.com/users/sadmann7",
  calDotCom: "https://cal.com/sadmann7",
};

export const siteConfig = {
  name: "Fİİ",
  description:
    "An open source e-commerce skateshop build with everything new in Next.js.",
  url: "https://skateshop.sadmn.com",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  links,
  mainNav: [
    {
      title: "Keşfet",
      items: [
        {
          title: "Canlı Tv",
          href: "/canli-tv",
          description: "Canlı spor yayınlarını izleyin.",
          items: [],
        },
        {
          title: "Maç Özeti",
          href: "/mac-ozeti",
          description: "Önemli maçların özetlerini izleyin.",
          items: [],
        },
      ],
    },
    {
      title: "Haberler",
      href: "/haberler",
      description: "En son spor haberlerini okuyun.",
      items: [
        {
          title: "Futbol",
          href: "/futbol",
          description: "Futbol hakkında bilgi edinin.",
          items: [],
        },
      ],
    },

    {
      title: "Fikstür",
      href: "/fikstur",
      description: "Yaklaşan maçların programını inceleyin.",
      items: [
        {
          title: "Puan Durumu",
          href: "/puan-durumu",
          description: "Güncel lig puan durumlarını görüntüleyin.",
          items: [],
        },
      ],
    },
    {
      title: "Ligler",
      href: "/ligler",
      description: "Tüm ligleri keşfedin.",
      items: [
        {
          title: "Takımlar",
          href: "/takimlar",
          description: "Favori takımlarınız hakkında bilgi edinin.",
          items: [],
        },
        {
          title: "Transferler",
          href: "/transferler",
          description: "En son transfer haberlerini takip edin.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "SSS",
      items: [
        {
          title: "Yardım Merkezi",
          href: "/help-center",
          external: false,
        },
        {
          title: "Hesap",
          href: "/account",
          external: false,
        },
        {
          title: "Medya Merkezi",
          href: "/media-center",
          external: false,
        },
        {
          title: "Yatırımcı İlişkileri",
          href: "/investor-relations",
          external: false,
        },
        {
          title: "İş İmkanları",
          href: "/careers",
          external: false,
        },
      ],
    },
    {
      title: "Yardım",
      items: [
        {
          title: "Hediye Kartı Kullan",
          href: "/gift-card",
          external: false,
        },
        {
          title: "İzleme Yolları",
          href: "/ways-to-watch",
          external: false,
        },
        {
          title: "Kullanım Koşulları",
          href: "/terms-of-use",
          external: false,
        },
        {
          title: "Gizlilik",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Yasal",
      items: [
        {
          title: "Çerez Tercihleri",
          href: "/cookie-preferences",
          external: false,
        },
        {
          title: "Kurumsal Bilgiler",
          href: "/corporate-information",
          external: false,
        },
        {
          title: "Bize Ulaşın",
          href: "/contact-us",
          external: false,
        },
        {
          title: "Hız Testi",
          href: "/speed-test",
          external: false,
        },
      ],
    },
    {
      title: "Diğer",
      items: [
        {
          title: "Yasal Hükümler",
          href: "/legal-notices",
          external: false,
        },
        {
          title: "Sadece Netflix'te",
          href: "/only-on-netflix",
          external: false,
        },
      ],
    },
  ] satisfies FooterItem[],
};
