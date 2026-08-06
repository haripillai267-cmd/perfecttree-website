import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-brand-navy text-slate-300">
      <Container as="div" className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold tracking-wide text-white">
            {siteConfig.name.toUpperCase()}
          </p>
          <p className="mt-1 text-sm text-brand-green">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed">{siteConfig.description}</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-brand-green"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-brand-green"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-brand-green"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container as="div" className="py-6 text-center text-sm text-slate-400">
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
