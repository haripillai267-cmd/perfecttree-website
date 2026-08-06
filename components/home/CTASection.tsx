import { Container } from "@/components/layout/Container";
import { CallToAction } from "@/components/ui/CallToAction";

export function CTASection() {
  return (
    <section className="section-space bg-surface">
      <Container>
        <CallToAction title="Ready to transform your business?" description="Let’s discuss your goals and create a route to measurable, durable progress." href="/contact" action="Schedule a consultation" />
      </Container>
    </section>
  );
}
