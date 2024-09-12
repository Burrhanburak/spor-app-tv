import NewVerificationForm from "@/components/auth/new-verification-form";
import React from "react";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "Verification",
};

export default function NewVerificationPage() {
  return (
    <ClientWrapper>
      <NewVerificationForm />
    </ClientWrapper>
  );
}
