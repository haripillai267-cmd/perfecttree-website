import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { heroContent } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 text-white sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #00A86B33 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00A86B22 0%, transparent 40%)",
        }}
      />
      <Container as="div" className="relative text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-green">
          Global Business Solutions
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          {heroContent.headline}
          <br />
          <span className="text-brand-green">{heroContent.subheadline}</span>
          <br />
          {heroContent.closing}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {heroContent.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact">Start a Conversation</Button>
          <Button href="/services" variant="outline">
            Explore Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
