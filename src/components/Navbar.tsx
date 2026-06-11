"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: "rgba(6,6,16,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(14,165,233,0.12)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
            }
          : {
              background: "transparent",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/vector.png"
              alt="California Dreams"
              width={160}
              height={55}
              className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80 rounded-md"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover-accent text-sm font-medium transition-colors duration-200 pb-0.5 ${
                  pathname === link.href
                    ? "text-gradient font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://discord.gg/DWT2X6uEZb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-white text-sm font-bold px-5 py-2.5 rounded-lg tracking-wider uppercase"
            >
              Discord
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: isOpen ? "300px" : "0",
          background: "rgba(6,6,16,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: isOpen ? "1px solid rgba(14,165,233,0.12)" : "none",
        }}
      >
        <div className="px-4 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium py-1 transition-colors ${
                pathname === link.href ? "text-gradient font-semibold" : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://discord.gg/DWT2X6uEZb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow text-white text-sm font-bold px-5 py-3 rounded-lg text-center tracking-wider uppercase"
          >
            Discord&apos;a Katıl
          </a>
        </div>
      </div>
    </nav>
  );
}
