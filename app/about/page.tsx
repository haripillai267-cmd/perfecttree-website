import { TeamSection } from "@/components/about/TeamSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { CTASection } from "@/components/home/CTASection";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { aboutContent } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about PerfectTree's mission, values, and leadership team driving global business transformation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About PerfectTree"
        description="A global consulting partner built on integrity, excellence, and measurable impact."
      />

      <section className="py-20">
        <Container as="div" className="max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-navy">Our Story</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            {aboutContent.story}
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-brand-navy">
                Our Mission
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {aboutContent.mission}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-navy">
                Our Vision
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {aboutContent.vision}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ValuesSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
