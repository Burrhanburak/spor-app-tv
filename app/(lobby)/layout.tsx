import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteHeader } from "@/components/layouts/site-header";
import { getCurrentUser } from "@/lib/session";
import { signIn, signOut, auth } from "@/auth";
import { redirect } from "next/navigation";
import Footer from "@/components//footer";
interface LobyLayoutProps
  extends React.PropsWithChildren<{
    modal: React.ReactNode;
  }> {}

export default async function LobyLayout({ children, modal }: LobyLayoutProps) {
  return (
    <div className="relative flex min-h-screen  flex-col">
      <main className="flex-1">
        {children}
        {modal}
      </main>
      <Footer />
    </div>
  );
}
