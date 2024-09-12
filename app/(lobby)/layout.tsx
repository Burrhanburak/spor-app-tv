import { SiteFooter } from "@/components/layouts/site-footer";
import React from "react";

interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default function LobbyLayout({ children }: LobbyLayoutProps) {
  return (
    <div>
      {/* Add any lobby-specific layout elements here */}
      {children}
      <SiteFooter />
    </div>
  );
}
