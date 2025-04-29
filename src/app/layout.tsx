import type { Metadata } from "next";
import { Roboto_Flex, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

// Font configurations with explicit weight definitions for better optimization
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify only needed weights
  variable: "--font-roboto-flex",
  display: "swap",
  preload: true, // Preload font for better performance
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"], // Specify only needed weights
  variable: "--font-roboto-mono",
  display: "swap",
  preload: true, // Preload font for better performance
});

// Metadata optimized for SEO and performance
export const metadata: Metadata = {
  title: "Auctora",
  description: "A platform for [your app's purpose]. Built with Next.js.", // More descriptive
  viewport: "width=device-width, initial-scale=1", // Ensure proper viewport settings
  icons: {
    icon: "/favicon.ico", // Add favicon for branding
  },
};

// Use more specific type for children
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoFlex.variable} ${robotoMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
