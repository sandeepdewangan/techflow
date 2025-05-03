"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, { redirectTo: ROUTES.HOME });
    } catch (error) {
      console.log(error);
      toast.error("Sign-in error", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in.",
      });
    }
  };
  return (
    <div className="mt-5 flex gap-2">
      <Button className="bg-gray100-700" onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="Github Login"
          className="object-contain mr-2"
        />
        <span className="font-semibold">Login with Github</span>
      </Button>
      <Button className="bg-gray100-700" onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          width={20}
          height={20}
          alt="Github Login"
          className="object-contain mr-2"
        />
        <span className="font-semibold">Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
