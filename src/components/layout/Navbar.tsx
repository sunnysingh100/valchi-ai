"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {Menu, X} from "lucide-react";

const NAV_LINKS = [
  {name: "About", href: "/about"},
  {name: "Case Studies", href: "/case-studies"},
  {name: "Contact", href: "/contact"},
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
              viewBox="0 0 1446 1492"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                d="M865.251 257.544L1028.44 299.134L720.772 783.856L546.23 739.396L506.433 166.085L669.624 207.676L670.174 474.063L669.292 619.482L738.12 491.414L865.251 257.544Z"
                fill="currentColor"
              />
              <path
                d="M1119.28 1184.6L1004.93 1308.19L725.688 806.466L848.033 674.258L1370.86 912.807L1256.5 1036.4L1022.1 909.783L894.744 839.714L974.518 961.33L1119.4 1184.66L1119.28 1184.6Z"
                fill="currentColor"
              />
              <path
                d="M170.126 924.251L127.961 761.196L700.966 797.457L746.068 971.83L262.864 1282.81L220.7 1119.76L453.973 990.994L581.84 921.746L436.46 923.146L170.239 924.317L170.126 924.251Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight text-black">
              Valchy AI
            </span>
          </Link>
          <Link
            href="https://valchy.ai/hiring"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#2d3138] text-white text-xs font-semibold hover:-translate-y-0.5 transition-transform duration-200"
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
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
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
            className="px-6 py-2.5 rounded-full bg-[#2d3138] hover:bg-black text-white text-sm font-semibold transition-all shadow-[0_6px_12px_rgba(100,160,210,0.3)] hover:-translate-y-0.5"
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
