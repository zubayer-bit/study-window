"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on screen resize (md and above)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="   z-50 
  text-white
  bg-gradient-to-r 
  from-[#f6f8fb] via-[#3f63ab] to-[#0a2e6d]
  shadow-lg"
    >
      <div className="container mx-auto px-6  flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3  p-3 rounded-lg backdrop-blur-sm"
        >
          <Image
            src="/study-window-logo-500-rem.png"
            alt="Study Window Logo"
            width={70}
            height={40}
            className="object-contain md:w-16 lg:w-22  "
          />
          {/* <span className="text-xl md:text-[20px] font-semibold">Study Window</span> */}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden font-semibold  md:flex gap-3 lg:gap-6 items-center md:text-[13px] lg:text-base">
          <Link
            href="/about"
            className="hover:text-[#F7941D] transition-colors"
          >
            ABOUT_US
          </Link>
          <Link
            href="/services"
            className="hover:text-[#F7941D] transition-colors"
          >
            OUR_SERVICES
          </Link>
          <Link
            href="/study-options"
            className="hover:text-[#F7941D] transition-colors"
          >
            STUDY_OPTIONS_IN_UK
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#F7941D] transition-colors"
          >
            CONTACT_US
          </Link>
          <Link
            href="/student"
            className="hover:text-[#F7941D] transition-colors"
          >
            DASHBOARD
          </Link>

          <Link
            href="/auth/login"
            className="ml-2 lg:ml-4 px-3 lg:px-5 py-2 rounded font-bold transition-all text-sm lg:text-base bg-[#F7941D] hover:bg-[#d67a10] text-white shadow-md"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#0A1F44]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300   ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[var(--color-navbar)] px-6`}
      >
        <Link
          href="/about"
          className="block py-3"
          onClick={() => setOpen(false)}
        >
          ABOUT_US
        </Link>
        <Link
          href="/services"
          className="block py-3"
          onClick={() => setOpen(false)}
        >
          OUR_SERVICES
        </Link>
        <Link
          href="/study-options"
          className="block py-3"
          onClick={() => setOpen(false)}
        >
          STUDY_OPTIONS_IN_UK
        </Link>
        <Link
          href="/contact"
          className="block py-3"
          onClick={() => setOpen(false)}
        >
          CONTACT_US
        </Link>
        <Link
          href="/student"
          className="block py-3"
          onClick={() => setOpen(false)}
        >
          DASHBOARD
        </Link>

        <Link
          href="/auth/login"
          onClick={() => setOpen(false)}
          className="block mt-4 py-3 px-4 rounded text-center font-semibold mb-4"
          style={{ backgroundColor: "var(--color-cta)" }}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
