import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import AboutHero from "@/components/sections/AboutHero";
import BrandStory from "@/components/sections/BrandStory";
import MeetTheTeam from "@/components/sections/MeetTheTeam";
import FeatureGrid from "@/components/sections/FeatureGrid";
import OurProcess from "@/components/sections/OurProcess";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import Testimonials from "@/components/sections/Testimonials";
import PhotoShowcase from "@/components/sections/PhotoShowcase";
import Guarantees from "@/components/sections/Guarantees";
import CTASection from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ProFlow Home Services | Sacramento's Trusted Home Services & Remodeling Team",
  description: "Meet the team behind ProFlow Home Services. Local, family-owned, licensed & insured professionals serving Sacramento, Roseville, and Rocklin with integrity, craftsmanship, and modern technology. Over 1,000 happy homeowners served.",
  keywords: "about proflow, sacramento home services, licensed contractor roseville, family owned home services, proflow team, home remodeling sacramento, trusted contractor northern california",
  openGraph: {
    title: "About ProFlow Home Services | Meet Our Team",
    description: "Local, family-owned professionals delivering exceptional home services and remodeling across Northern California.",
    type: "website",
  },
};

export default function About() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />

      {/* Section 1: Hero */}
      <AboutHero />

      {/* Section 2: Brand Story (Who We Are, Our Story, What We Believe) */}
      <BrandStory />

      {/* Section 3: Meet the Team */}
      <MeetTheTeam />

      {/* Section 4: Why Homeowners Choose ProFlow (reuse FeatureGrid) */}
      <FeatureGrid />

      {/* Section 5: Our Process */}
      <OurProcess />

      {/* Section 6: Service Area Commitment */}
      <ServiceAreasSection />

      {/* Section 7: Testimonials */}
      <Testimonials />

      {/* Section 8: Photo Showcase */}
      <PhotoShowcase />

      {/* Section 9: Guarantees & Promises */}
      <Guarantees />

      {/* Section 10: Large CTA Footer */}
      <CTASection />
    </>
  );
}
