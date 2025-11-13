import CTASection from "@/components/sections/CTASection";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata = seoMetadata({
  title: "Handyman Services in Sacramento & Nearby Cities",
  description:
    "Dependable home repairs and punch list fixes by a professional, local team.",
  path: "/services/handyman",
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Handyman Services", url: "/services/handyman" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Handyman Services"
        description="Reliable home repairs, maintenance, and punch list tasks."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Folsom"]}
      />
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Handyman Services</h1>
          <p className="mt-2 text-slate max-w-2xl">
            From small repairs to regular maintenance, we’ve got your home covered.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Common Requests</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              <li>Drywall patches and trim</li>
              <li>Fixture swaps</li>
              <li>Caulking and weatherproofing</li>
            </ul>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">How We Work</h2>
            <p className="mt-3 text-slate">Clear scheduling, transparent pricing, and tidy results.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
