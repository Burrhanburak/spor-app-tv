import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/layouts/mode-toggle";
import { Shell } from "@/components/shell";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white">
      <Shell className="relative">
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <section>
            <Link href="/" className="flex w-fit items-center space-x-2">
              {/* <Icons.logo className="size-6" aria-hidden="true" /> */}
              <span className="h-20 w-20 flex items-center">
                <span className="ftext-4xl font-bold text-red-600">
                  {siteConfig.name}
                </span>
              </span>

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
                        className="text-sm text-gray-400 transition-colors hover:text-white"
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
        </section>
        <section className="mt-10 flex items-center space-x-4">
          <div className="flex-1 text-left text-sm leading-loose text-gray-400">
            Built by{" "}
            <Link
              href="https://twitter.com/sadmann17"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-white"
            >
              <span className="ftext-4xl font-bold text-red-600">
                {siteConfig.name}
              </span>
              <span className="sr-only">Twitter</span>
            </Link>
            .
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                }),
                "text-gray-400 hover:text-white"
              )}
            >
              <Icons.gitHub className="size-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
            <ModeToggle />
          </div>
        </section>
      </Shell>
    </footer>
  );
}
