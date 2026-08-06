import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { StatsSection } from "@/components/home/StatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
