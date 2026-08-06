import { Container } from "@/components/layout/Container";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-brand-navy py-16 text-white sm:py-20">
      <Container as="div" className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
          {description}
        </p>
      </Container>
    </section>
  );
}
