import ResetPasswordForm from "@/components/auth/reset-password-form";
import React from "react";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "Reset Password",
};

export default function ResetPasswordPage() {
  return (
    <ClientWrapper>
      <ResetPasswordForm />
    </ClientWrapper>
  );
}
