import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { services } from "@/lib/constants";

export function ServicesPreview() {
  const featured = services.slice(0, 3);

  return (
    <section className="bg-slate-50 py-20">
      <Container as="div">
        <SectionHeading
          eyebrow="What We Do"
          title="Solutions Built for Growth"
          description="We deliver end-to-end consulting across strategy, operations, and digital — helping you move from insight to execution."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((service) => (
            <Card key={service.slug} className="flex flex-col">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L21 9.75M3.75 13.5h7.5M3.75 13.5l-1.5 7.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-light"
          >
            View all services &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
