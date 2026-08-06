import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { values } from "@/lib/constants";

export function ValuesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container as="div">
        <SectionHeading
          eyebrow="Our Values"
          title="What Drives Us"
          description="These principles guide every engagement and define how we show up for our clients."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title}>
              <h3 className="text-lg font-semibold text-brand-navy">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
