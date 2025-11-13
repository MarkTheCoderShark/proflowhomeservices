import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CTASection from "@/components/sections/CTASection";
import RemodelingSpotlight from "@/components/sections/RemodelingSpotlight";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { faqs as homepageFaqs } from "@/components/sections/faqData";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            Home Services & Remodeling Done Right.
          </>
        }
        subtitle={
          <>Serving Sacramento, Roseville, Rocklin & surrounding areas with trusted gutter, painting, handyman, pressure washing, and full-service remodeling solutions.</>
        }
        primaryCta={{ label: "Get Free Estimate", href: "/contact" }}
        secondaryCta={{ label: "Call (###) ###-####", href: "tel:" }}
        backgroundImage="/hero-home.jpeg"
      />
      <ServiceGrid />
      <FeatureGrid />
      <RemodelingSpotlight />
      <ProjectGrid />
      <ServiceAreasSection />
      <Testimonials />
      <FAQAccordion />
      <FAQPageJsonLd
        faqs={homepageFaqs.map((item) => ({ question: item.q, answer: item.a }))}
      />
      <CTASection />
    </>
  );
}
