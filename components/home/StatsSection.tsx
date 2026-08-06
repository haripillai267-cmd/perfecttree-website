import { Container } from "@/components/layout/Container";
import { stats } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="bg-brand-navy py-16">
      <Container as="div">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand-green sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
