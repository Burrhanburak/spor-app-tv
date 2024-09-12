import React from "react";
import TwoFactorForm from "@/components/auth/two-factor-form";
import ClientWrapper from "@/components/ClientWrapper";

function TwoFactorContent() {
  return <TwoFactorForm />;
}

const TwoFactorPage = () => {
  return (
    <ClientWrapper>
      <TwoFactorContent />
    </ClientWrapper>
  );
};

export default TwoFactorPage;
