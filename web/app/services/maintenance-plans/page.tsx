import CTASection from "@/components/sections/CTASection";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata = seoMetadata({
  title: "Home Maintenance Plans in Sacramento & Nearby Cities",
  description: "Preventative care packages to keep your home in top shape.",
  path: "/services/maintenance-plans",
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Maintenance Plans", url: "/services/maintenance-plans" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Home Maintenance Plans"
        description="Seasonal service bundles for gutters, washing, inspections, and more."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Folsom", "Lincoln"]}
      />
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Maintenance Plans</h1>
          <p className="mt-2 text-slate max-w-2xl">
            Seasonal service bundles for gutters, exterior washing, inspections, and more.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Plan Options</h2>
            <p className="mt-3 text-slate">Choose the visits and services that fit your home and budget.</p>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Scheduling</h2>
            <p className="mt-3 text-slate">Managed with reminders and updates through ProFlow360.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
