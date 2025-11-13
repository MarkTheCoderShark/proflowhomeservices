import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ProFlowStory from "@/components/sections/ProFlowStory";
import RemodelingSpotlight from "@/components/sections/RemodelingSpotlight";
import ProjectGrid from "@/components/sections/ProjectGrid";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { faqs as homepageFaqs } from "@/components/sections/faqData";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProFlow Home Services | Home Services & Remodeling in Sacramento, Roseville & Rocklin",
  description: "Professional home services and remodeling in Sacramento, Roseville, Rocklin, and Northern California. Gutter cleaning, painting, handyman, pressure washing, bathroom remodels, kitchen remodels, and more. Licensed, insured, and trusted by 1,000+ homeowners.",
  keywords: "home services sacramento, gutter cleaning roseville, bathroom remodeling rocklin, kitchen remodel citrus heights, handyman services folsom, exterior painting granite bay, pressure washing sacramento, home remodeling northern california",
  openGraph: {
    title: "ProFlow Home Services | Professional Home Care & Remodeling",
    description: "Trusted home services and remodeling across Sacramento, Roseville, and Rocklin. Licensed, insured, and powered by ProFlow360™.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero
        title="Professional Home Services & Remodeling You Can Trust"
        subtitle="Serving Sacramento, Roseville, Rocklin, and surrounding areas with expert gutter care, painting, handyman services, pressure washing, and complete home remodeling."
        primaryCta={{ label: "Get Free Estimate", href: "/contact" }}
        secondaryCta={{ label: "Call (916) 740-7249", href: "tel:+19167407249" }}
        backgroundImage="/hero-home.jpeg"
      />
      <ServiceGrid />
      <FeatureGrid />
      <ProFlowStory />
      <RemodelingSpotlight />
      <ProjectGrid />
      <Testimonials />
      <ServiceAreasSection />
      <FAQAccordion />
      <FAQPageJsonLd
        faqs={homepageFaqs.map((item) => ({ question: item.q, answer: item.a }))}
      />
      <CTASection />
    </>
  );
}
