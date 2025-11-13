import CTASection from "@/components/sections/CTASection";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata = seoMetadata({
  title: "Exterior Painting in Sacramento & Nearby Cities",
  description: "Durable exterior painting built for California’s climate.",
  path: "/services/exterior-painting",
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Exterior Painting", url: "/services/exterior-painting" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Exterior Painting"
        description="High-quality exterior painting with durable prep and coatings for longevity."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Granite Bay", "Lincoln"]}
      />
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Exterior Painting</h1>
          <p className="mt-2 text-slate max-w-2xl">
            High-quality prep and premium coatings for a lasting exterior finish.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Preparation</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              <li>Wash, scrape, sand</li>
              <li>Prime bare wood and repairs</li>
              <li>Caulk joints as needed</li>
            </ul>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Finish</h2>
            <p className="mt-3 text-slate">Top-tier paints applied to manufacturer specs for longevity.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
