"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/rules", label: "Kurallar" },
  { href: "/about", label: "Hakkımızda" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/95 backdrop-blur-md border-b border-[#1e40af]/30 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-white font-bold text-xl tracking-tight group-hover:text-[#0ea5e9] transition-colors">
              <span className="text-white">ca</span>
              <span className="text-[#0ea5e9]">dreams</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#0ea5e9]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://discord.gg/DWT2X6uEZb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#0ea5e9]/20"
            >
              DISCORD
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a]/98 backdrop-blur-md border-b border-[#1e40af]/30">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-[#0ea5e9]" : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://discord.gg/DWT2X6uEZb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0ea5e9] text-white text-sm font-semibold px-5 py-2 rounded-lg text-center"
            >
              DISCORD&apos;A KATIL
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
