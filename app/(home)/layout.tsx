import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { SiteFooter } from "@/components/footer";
import { auth } from "@/auth";

import { SiteHeader } from "@/components/layouts/site-header";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <SessionProvider session={session}>
        {/* <Navbar /> */}

        <SiteHeader />
        <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
          {children}
        </main>
        <SiteFooter />
      </SessionProvider>
    </>
  );
}
