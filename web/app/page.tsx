import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CTASection from "@/components/sections/CTASection";
import RemodelingSpotlight from "@/components/sections/RemodelingSpotlight";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQAccordion from "@/components/sections/FAQAccordion";

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            Complete Home Services, Repairs & Remodeling You Can Trust.
          </>
        }
        subtitle={
          <>Serving Sacramento, Roseville, Rocklin & surrounding cities with gutters, painting, handyman work, pressure washing, and premium remodeling services.</>
        }
        primaryCta={{ label: "Get Free Estimate", href: "/contact" }}
        secondaryCta={{ label: "Call (###) ###-####", href: "tel:" }}
      />
      <ServiceGrid />
      <FeatureGrid />
      <RemodelingSpotlight />
      <ProjectGrid />
      <ServiceAreasSection />
      <Testimonials />
      <FAQAccordion />
      <CTASection />
    </>
  );
}
