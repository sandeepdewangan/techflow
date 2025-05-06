import React from "react";
import NavLinks from "./navbar/NavLinks";
import { Button } from "../ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col justify-center max-sm:hidden bg-lightbg dark:bg-darkbg">
      <div className="flex flex-col flex-1 p-5 gap-8">
        <NavLinks />
      </div>
      <div className="flex flex-col m-2">
        <Button className="bg-gray-800 mb-3 hover:bg-gray-800 cursor-pointer w-full dark:focus:ring-0 dark:focus:ring-offset-0">
          <Link href={ROUTES.SIGN_IN}>
            <span className="font-semibold text-primary-gradient">Log In</span>
          </Link>
        </Button>
        <Button className="bg-white text-gray-800 hover:bg-white w-full cursor-pointer dark:text-white dark:bg-gray-700 ">
          <Link href={ROUTES.SIGN_IN}>
            <span className="font-semibold">Sign Up</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LeftSidebar;
