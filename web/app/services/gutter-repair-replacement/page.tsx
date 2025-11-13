import CTASection from "@/components/sections/CTASection";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata = seoMetadata({
  title: "Gutter Repair & Replacement in Sacramento & Nearby Cities",
  description:
    "Repair leaks, fix sagging runs, or replace failing gutters with pro-grade materials and installation.",
  path: "/services/gutter-repair-replacement",
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gutter Repair & Replacement", url: "/services/gutter-repair-replacement" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Gutter Repair & Replacement"
        description="Repairs for leaks, pitch, and downspouts or full replacement when needed."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Granite Bay", "Lincoln"]}
      />
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Gutter Repair & Replacement</h1>
          <p className="mt-2 text-slate max-w-2xl">
            We diagnose issues and provide practical repairs or full replacement when needed.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Common Issues</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              <li>Leaks at joints and corners</li>
              <li>Sagging runs and improper pitch</li>
              <li>Crushed or clogged downspouts</li>
            </ul>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">What We Do</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              <li>Seam reseal and fastener upgrades</li>
              <li>Section replacement</li>
              <li>Full system replacement when cost-effective</li>
            </ul>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
