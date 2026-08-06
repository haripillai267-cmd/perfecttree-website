import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with PerfectTree to discuss your business goals and start a consultation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Ready to take the next step? We'd love to hear about your challenges and explore how we can help."
      />

      <section className="py-20">
        <Container as="div">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
