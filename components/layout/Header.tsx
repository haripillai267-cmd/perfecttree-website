"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Container } from "./Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const linkClass = cn(
    "nav-link text-label transition-colors duration-[var(--duration-base)] hover:text-evergreen",
    isScrolled ? "text-ink-muted" : "text-white/70",
  );

  return (
    <header className="fixed inset-x-0 top-0 z-[var(--z-header)] pt-4 sm:pt-5">
      <Container>
        <div className={cn("flex min-h-[var(--header-height)] items-center justify-between rounded-[var(--radius-pill)] px-4 transition-[background-color,border-color,box-shadow] duration-[var(--duration-slow)] sm:px-5", isScrolled ? "glass-surface" : "border border-transparent bg-transparent")}>
          <Link href="/" className={cn("group inline-flex items-center gap-2.5", !isScrolled && "text-white")} onClick={() => setMenuOpen(false)}>
            <span aria-hidden="true" className={cn("grid size-8 place-items-center rounded-full text-xs font-extrabold tracking-[-0.08em] transition-colors", isScrolled ? "bg-ink text-white group-hover:bg-evergreen" : "bg-white text-ink group-hover:bg-lime")}>PT</span>
            <span className="text-sm font-extrabold tracking-[-0.05em]">{siteConfig.name.toUpperCase()}</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={cn(linkClass, pathname === link.href && (isScrolled ? "text-evergreen" : "text-white"))}>{link.label}</Link>)}
            <Button href="/contact" size="sm" showIcon>Start a conversation</Button>
          </nav>

          <button type="button" className={cn("grid size-10 place-items-center rounded-full transition-colors lg:hidden", isScrolled ? "text-ink hover:bg-ink/5" : "text-white hover:bg-white/10")} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>

        {menuOpen ? (
          <GlassPanel id="mobile-navigation" className="mt-3 overflow-hidden p-2 lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setMenuOpen(false)} className={cn("rounded-[var(--radius-md)] px-4 py-3 text-base font-semibold text-ink transition-colors hover:bg-ink/5", pathname === link.href && "bg-ink/5 text-evergreen")}>{link.label}</Link>)}
              <Button href="/contact" className="mt-2 w-full" showIcon>Start a conversation</Button>
            </nav>
          </GlassPanel>
        ) : null}
      </Container>
    </header>
  );
}
