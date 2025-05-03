import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Font delclaration
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-spaceGrotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechFlow, Your Coding Questions, Answered with Clarity.",
  description:
    "TechFlow is a dedicated space for programmers of all levels to ask questions, share knowledge, and solve coding challenges together. Whether you're debugging your first script or architecting a complex system, TechFlow connects you with a supportive community ready to help.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// antialiased is a CSS property that controls how text is rendered.
// It essentially smooths out the edges of characters by blending pixels of different colors,
// resulting in a softer, more visually appealing appearance
