import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { services } from "@/lib/constants";

export function ServicesList() {
  return (
    <section className="py-20">
      <Container as="div">
        <div className="grid gap-8">
          {services.map((service, index) => (
            <Card key={service.slug} className="md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-lg font-bold text-brand-green">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-brand-navy">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <svg
                          className="h-4 w-4 shrink-0 text-brand-green"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
