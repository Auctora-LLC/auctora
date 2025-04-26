"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="mx-4 md:mx-10 mt-1.5 md: mt-3.5 font-mono">
      {/* Navbar Container */}

      <div
        className={`bg-[#1A1A1A] min-h-[60px] rounded md: rounded-xl p-2 md:p-6 `}
      ></div>
    </nav>
  );
};

export default Navbar;
