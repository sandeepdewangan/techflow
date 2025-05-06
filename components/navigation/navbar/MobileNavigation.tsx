import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="sm:hidden invert-colors"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-gray100-700 p-4">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <SheetHeader>
          <SheetDescription className="hidden">
            Sheet Menu Description
          </SheetDescription>
        </SheetHeader>

        <Link href="/" className="flex gap-2">
          <Image
            src="/images/site-logo.svg"
            height="0"
            width="0"
            style={{ width: "23px", height: "auto" }}
            alt="TechFlow logo"
          />
          <p className="text-xl font-bold">
            Tech
            <span className="primary-500 font-spaceGrotesk text-2xl">Flow</span>
          </p>
        </Link>
        <div className="flex flex-col h-full justify-between my-3">
          <div>
            <section className="flex flex-col gap-y-4">
              <NavLinks isMobileNav />
            </section>
          </div>
          <div className="flex flex-col gap-y-2">
            <SheetClose asChild>
              <Button className="bg-gray-800 hover:bg-gray-800 cursor-pointer w-full dark:focus:ring-0 dark:focus:ring-offset-0">
                <Link href={ROUTES.SIGN_IN}>
                  <span className="font-semibold text-primary-gradient">
                    Log In
                  </span>
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button className="bg-white text-gray-800 hover:bg-white w-full cursor-pointer dark:text-white dark:bg-gray-700 ">
                <Link href={ROUTES.SIGN_IN}>
                  <span className="font-semibold">Sign Up</span>
                </Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
