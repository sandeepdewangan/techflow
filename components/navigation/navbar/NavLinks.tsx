"use client";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants/sidebar-links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((link) => {
        // get the current path
        const isActive = pathname === link.route;
        const LinkComponent = (
          <Link
            href={link.route}
            key={link.label}
            className={cn(
              isActive
                ? "bg-primary-gradient rounded-sm p-2 gap-2"
                : "rounded-sm p-2 gap-2",
              "flex"
            )}
          >
            <Image
              src={link.imgUrl}
              width="0"
              height="0"
              alt={link.label}
              style={{ width: "20px", height: "auto" }}
              className="invert-colors"
            />
            <p className={cn(isActive ? "font-bold" : "", "max-lg:hidden")}>
              {link.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={link.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={link.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
