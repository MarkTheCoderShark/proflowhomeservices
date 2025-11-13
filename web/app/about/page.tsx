import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export const metadata = seoMetadata({
  title: "About",
  description: "Mission, vision, company story, team, and technology advantage.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <div className="section">
          <div className="container">
            <BreadcrumbsJsonLd
              items={[
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
              ]}
            />
          <h1 className="heading text-3xl font-semibold text-viridian-500">About ProFlow Home Services</h1>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="heading text-xl font-semibold text-viridian-500">Our Mission</h2>
              <p className="mt-2 text-slate">
                Deliver high-quality home services empowered by technology and professional craftsmanship.
              </p>
            </div>
            <div>
              <h2 className="heading text-xl font-semibold text-viridian-500">Technology That Supports You</h2>
              <p className="mt-2 text-slate">
                ProFlow360™ powers scheduling, updates, estimates, and communication.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FAQAccordion />
      <CTASection />
    </>
  );
}
