import NewPasswordForm from "@/components/auth/new-password-form";
import React from "react";

import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "New Password",
};

export default function NewPasswordPage() {
  return (
    <ClientWrapper>
      <NewPasswordForm />
    </ClientWrapper>
  );
}
