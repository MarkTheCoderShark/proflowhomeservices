import CTASection from "@/components/sections/CTASection";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata = seoMetadata({
  title: "Roof & Solar Panel Cleaning in Sacramento & Nearby Cities",
  description: "Protect your roof and improve solar output with safe cleaning.",
  path: "/services/roof-solar-cleaning",
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Roof & Solar Cleaning", url: "/services/roof-solar-cleaning" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Roof & Solar Cleaning"
        description="Safe methods for roofing materials and solar panels to extend lifespan and performance."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Granite Bay", "Folsom"]}
      />
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Roof & Solar Cleaning</h1>
          <p className="mt-2 text-slate max-w-2xl">
            We use safe methods for roofing materials and solar panels to extend lifespan and performance.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Benefits</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              <li>Protect shingles from moss and debris</li>
              <li>Boost solar efficiency</li>
              <li>Maintain curb appeal</li>
            </ul>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Safety First</h2>
            <p className="mt-3 text-slate">Licensed, insured, and trained for rooftop safety.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
