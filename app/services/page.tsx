import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesList } from "@/components/services/ServicesList";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore PerfectTree's consulting services including strategy, digital transformation, operations, and growth.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Comprehensive consulting solutions designed to help your organization perform, scale, and lead in competitive markets."
      />
      <ServicesList />
      <CTASection />
    </>
  );
}
