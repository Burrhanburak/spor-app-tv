"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/layouts/mode-toggle";
import { Shell } from "@/components/shell";

export function SiteFooter() {
  return (
    <footer className="w-full bg-white  dark:bg-[hsl(0deg_0%_0%)] text-black dark:text-white">
      <Shell>
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <section>
            <Link href="/" className="flex w-fit items-center space-x-2">
              <Icons.logo className="size-6" aria-hidden="true" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section className="space-y-3"></section>
        </section>
        <section className="flex items-center space-x-4">
          <div className="flex-1 text-left text-sm leading-loose">
            Built by{" "}
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-foreground"
            >
              Sport tv
            </Link>
            .
          </div>
          <div className="flex items-center space-x-1 dark:text-white text-black">
            <ModeToggle />
          </div>
        </section>
      </Shell>
    </footer>
  );
}
