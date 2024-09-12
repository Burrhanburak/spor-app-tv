import React from "react";

import ErrorCard from "@/components/auth/error-card";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "Error",
};

function ErrorContent() {
  return <ErrorCard />;
}

export default function AuthErrorPage() {
  return (
    <ClientWrapper>
      <ErrorContent />
    </ClientWrapper>
  );
}
