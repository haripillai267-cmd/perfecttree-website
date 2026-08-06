import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";

export function CTASection() {
  return (
    <section className="py-20">
      <Container as="div">
        <div className="rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy-light px-8 py-16 text-center sm:px-16">
          <SectionHeading
            title="Ready to Transform Your Business?"
            description="Let's discuss your goals and build a roadmap to measurable results. Our team is ready to partner with you."
            light
          />
          <Button href="/contact" className="mt-2">
            Schedule a Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
