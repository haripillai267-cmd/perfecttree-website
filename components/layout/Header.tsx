"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";
import { Container } from "./Container";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur-md">
      <Container as="div" className="flex h-16 items-center justify-between">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-wide text-white group-hover:text-brand-green transition-colors">
            {siteConfig.name.toUpperCase()}
          </span>
          <span className="text-xs text-brand-green">{siteConfig.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-green ${
                  isActive ? "text-brand-green" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-lg bg-brand-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light"
          >
            Get Started
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <nav
          className="border-t border-white/10 bg-brand-navy md:hidden"
          aria-label="Mobile"
        >
          <Container as="div" className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5 ${
                    isActive ? "text-brand-green" : "text-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </Container>
        </nav>
      )}
    </header>
  );
}
