import Image from "next/image";
import React from "react";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo and Text */}
      <div className="flex gap-2">
        <Image
          src="/images/site-logo.svg"
          height={23}
          width={23}
          alt="TechFlow logo"
        />
        <p className="text-xl font-bold max-sm:hidden">
          Tech<span className="primary-500">Flow</span>
        </p>
      </div>
      {/* Global Search */}
      <p>Global Search</p>
      {/* Theme Picker */}
      <Theme />
    </nav>
  );
};

export default Navbar;
