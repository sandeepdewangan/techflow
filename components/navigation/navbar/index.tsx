import Image from "next/image";
import React from "react";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo and Text */}
      <div className="flex gap-2">
        <Image
          src="/images/site-logo.svg"
          height="0"
          width="0"
          style={{ width: "23px", height: "auto" }}
          alt="TechFlow logo"
        />
        <p className="text-xl font-bold max-sm:hidden">
          Tech
          <span className="primary-500 font-spaceGrotesk text-2xl">Flow</span>
        </p>
      </div>
      {/* Global Search */}
      <p>Global Search</p>
      {/* Theme Picker */}
      <div className="flex items-center gap-4">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
