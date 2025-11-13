import CTASection from "@/components/sections/CTASection";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata = seoMetadata({
  title: "Pressure Washing in Sacramento & Nearby Cities",
  description: "House, driveway, and exterior washing to refresh curb appeal.",
  path: "/services/pressure-washing",
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Pressure Washing", url: "/services/pressure-washing" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Pressure Washing"
        description="Safe, effective exterior cleaning for siding, concrete, and more."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Lincoln"]}
      />
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Pressure Washing</h1>
          <p className="mt-2 text-slate max-w-2xl">
            Safe, effective cleaning for siding, concrete, and more.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Surfaces</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              <li>Home exteriors</li>
              <li>Driveways and walkways</li>
              <li>Decks and fences</li>
            </ul>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Approach</h2>
            <p className="mt-3 text-slate">Proper pressure settings and detergents tailored to each surface.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
