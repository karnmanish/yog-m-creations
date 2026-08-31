"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bhavatu Sarvam", href: "/bhavatu-sarvam" },
  { label: "StoryKahani", href: "/storykahani" },
  { label: "Smart Finds", href: "/smart-finds" },
  { label: "Books", href: "/books" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Yog M <span className="text-marigold">Creations</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="border-t border-line bg-paper lg:hidden">
          <div className="container-content flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3 text-[15px] text-ink-soft last:border-b-0 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
