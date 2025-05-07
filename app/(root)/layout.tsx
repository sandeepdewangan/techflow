import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";
import RightSidebar from "@/components/navigation/RightSidebar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <div className="my-8 mx-12 flex-col w-screen">{children}</div>
        <RightSidebar />
      </div>
    </main>
  );
};

export default RootLayout;
