import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-inverse pt-20 text-white sm:pt-28">
      <Container>
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Badge tone="light">PerfectTree / Global advisory</Badge>
            <p className="mt-7 max-w-3xl text-heading-sm">Clarity for the decisions that define what comes next.</p>
            <Button href="/contact" variant="primary" size="lg" showIcon className="mt-10 bg-lime text-ink hover:bg-mint">Start a conversation</Button>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <div>
              <p className="text-label text-mint">Explore</p>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => <li key={link.href}><Link href={link.href} className="inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white">{link.label}<ArrowUpRight aria-hidden="true" className="size-3.5" /></Link></li>)}
              </ul>
            </div>
            <div>
              <p className="text-label text-mint">Connect</p>
              <ul className="mt-5 space-y-3 text-sm text-white/65">
                <li><a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">{siteConfig.email}</a></li>
                <li><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">{siteConfig.phone}</a></li>
                <li className="max-w-48 leading-relaxed">{siteConfig.address}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <a href="https://www.linkedin.com" aria-label="PerfectTree on LinkedIn" className="transition-colors hover:text-white"><Globe2 aria-hidden="true" className="size-4" /></a>
        </div>
      </Container>
    </footer>
  );
}
