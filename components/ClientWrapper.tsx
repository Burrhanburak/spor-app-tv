"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SearchParamsWrapper({ children }: { children: React.ReactNode }) {
  useSearchParams();
  return <>{children}</>;
}

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsWrapper>{children}</SearchParamsWrapper>
    </Suspense>
  );
}
