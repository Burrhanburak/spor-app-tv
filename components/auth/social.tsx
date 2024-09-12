"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { GrGoogle } from "react-icons/gr";

import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
      <Button
        size="lg"
        className="w-full text-xl bg-background"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <GrGoogle />
      </Button>
      {/* <Button
        size="lg"
        className="w-full text-xl bg-background"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub />
      </Button> */}
    </div>
  );
};

export default Social;
