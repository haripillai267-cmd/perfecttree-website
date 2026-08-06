import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container as="div" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
          404
        </p>
        <h1 className="mt-2 text-4xl font-bold text-brand-navy">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Go Home</Button>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-semibold text-brand-green hover:text-brand-green-light"
          >
            Contact Us &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
