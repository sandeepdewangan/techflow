import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
  return (
    <div className="mt-5 flex gap-2">
      <Button className="bg-gray100-700">
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="Github Login"
          className="object-contain mr-2"
        />
        <span className="font-semibold">Login with Github</span>
      </Button>
      <Button className="bg-gray100-700">
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
