import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex h-screen justify-center items-center bg-auth bg-cover">
      <section className="bg-lightbg p-5 dark:bg-darkbg rounded-md">
        <div className="flex gap-10">
          <div>
            <p className="text-xl font-bold">Join TechFlow</p>
            <p className="text-gray-500 py-2">Get your question answered</p>
          </div>
          <Image
            src="/images/site-logo.svg"
            height={45}
            width={45}
            alt="Logo"
          />
        </div>
        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
