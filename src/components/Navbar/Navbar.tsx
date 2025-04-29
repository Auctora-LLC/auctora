"use client"; // This component must run on the client side (Next.js directive)

import { motion } from "framer-motion"; // For animations
import Link from "next/link"; // For internal navigation
import { useState } from "react"; // React hook to manage state
import Image from "next/image"; // Optimized image component
import { usePathname } from "next/navigation"; // Hook to access the current path

/**
 * Navbar component
 *
 * Features:
 * - Fixed top navigation bar
 * - Animated links using Framer Motion
 * - Highlights active link
 * - Responsive: Desktop and Mobile support
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: { scale: 1.05 },
  };

  return (
    <nav className="fixed rounded-[0.65rem] top-0 left-0 right-0 z-[1000] bg-[#1A1A1A] mx-2.5 md:mx-10 mt-1.5 md:mt-3.5 font-mono">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[0.65rem] md:rounded-xl p-1.5 md:p-3 flex items-center justify-between"
      >
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative"
        >
          <Link
            href="/"
            className="relative h-[50px] w-[120px] md:h-10 md:w-32 block"
          >
            <Image
              src="/auctora.png"
              alt="Logo"
              fill
              sizes="(max-width: 768px) 100px, 160px"
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover="hover"
              className="rounded bg-[#0F0F0F] min-h-[30px]"
            >
              <Link
                href={item.path}
                className={`hover:text-[#CE7D63] transition-colors duration-300 p-2 text-[0.6rem] whitespace-nowrap ${
                  currentPath === item.path
                    ? "text-[#CE7D63]"
                    : "text-[#81807E]"
                }`}
              >
                {item.name.toUpperCase()}
              </Link>
            </motion.div>
          ))}

          {/* "Contact Us" Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-[0.2rem] bg-[#CE7D63] min-h-[25px] flex items-center"
          >
            <Link
              href="/contact"
              className="text-[#0F0F0F] hover:text-[#F0F0F0] transition-colors duration-300 p-1 text-[0.65rem] font-semibold whitespace-nowrap"
            >
              CONTACT US
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden rounded-[0.65rem] bg-[#0F0F0F] min-h-[40px] min-w-[40px] flex justify-center items-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#81807E] hover:text-white focus:outline-none"
          >
            {isMenuOpen ? (
              // Close icon
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-4 h-4"
                viewBox="0 0 359 308"
                fill="#81807E"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.0045 0.879124C13.9982 2.5289 11.2676 4.17868 7.85424 7.59201C4.15646 11.3467 3.01868 13.224 1.31201 18.4009C-2.27199 29.3805 3.75824 43.432 14.0551 48.2107C20.8818 51.3965 8.19558 51.1689 179.431 51.1689C322.507 51.1689 337.07 51.112 339.63 50.2587C346.571 47.9831 351.065 44.6836 354.478 39.3929C361.305 28.6978 359.371 14.76 349.813 6.34046C346.628 3.5529 344.807 2.5289 340.142 1.04979C336.843 0.0257909 332.69 -0.0310979 179.147 0.0257909C41.4187 0.0257909 21.2231 0.139569 19.0045 0.879124Z" />
                <path d="M19.0045 128.879C13.9983 130.529 11.2676 132.179 7.85426 135.592C4.15648 139.347 3.01871 141.224 1.31204 146.401C-0.622183 152.317 0.174262 159.656 3.41693 166.084C4.89604 168.986 10.9263 174.788 13.8845 176.154C20.9387 179.396 7.79737 179.169 179.431 179.169C322.507 179.169 337.07 179.112 339.63 178.259C346.571 175.983 351.065 172.684 354.478 167.393C361.305 156.698 359.371 142.76 349.813 134.34C346.628 131.553 344.807 130.529 340.142 129.05C336.843 128.026 332.69 127.969 179.147 128.026C41.4187 128.026 21.2232 128.14 19.0045 128.879Z" />
                <path d="M172.605 256.879C167.598 258.529 164.868 260.179 161.454 263.592C156.391 268.655 153.831 274.685 153.831 281.569C153.831 288.452 156.391 294.483 161.454 299.546C165.209 303.3 167.086 304.381 172.32 306.088C175.62 307.112 178.578 307.169 256.288 307.169C343.556 307.169 338.094 307.34 344.807 304.211C350.269 301.651 355.445 295.45 357.493 288.851C360.395 279.578 357.323 268.94 349.813 262.34C346.628 259.553 344.807 258.529 340.142 257.05C336.843 256.026 333.941 255.969 255.947 256.026C186.087 256.026 174.823 256.196 172.605 256.879Z" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#1A1A1A] rounded-[0.6rem] mt-1 z-[999] overflow-auto"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-4 py-2 text-sm hover:bg-[#2A2A2A] ${
                  currentPath === item.path
                    ? "text-[#CE7D63]"
                    : "text-[#81807E]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className=" flex justify-center item-center h-[40px] m-5 rounded-[0.7rem] bg-[#CE7D63] ">
              <Link
                href="/contact"
                className="block px-4 py-2 text-sm text-[#0F0F0F] font-semibold hover:bg-[#2A2A2A] hover:text-[#2A2A2A]"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
