"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {Menu, X} from "lucide-react";

const NAV_LINKS = [
  {name: "About", href: "/about"},
  {name: "Case Studies", href: "#"},
  {name: "Contact", href: "#"},
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-gray-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo and Hiring Button Group */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            {/* Simple logo approximation */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight text-black">
              Valchy AI
            </span>
          </Link>
          <Link
            href="#"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-valchy-text text-white text-xs font-medium hover:bg-gray-800 transition-colors"
          >
            We&apos;re Hiring <span className="text-gray-400 ml-1">›</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://calendar.app.google/nqoBqqrueUP4PQ2b6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-primary-dark hover:bg-black text-white text-sm font-medium transition-all shadow-sm"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black hover:text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-6 shadow-xl">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-gray-800 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://calendar.app.google/nqoBqqrueUP4PQ2b6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-primary-dark text-white text-center font-medium w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
