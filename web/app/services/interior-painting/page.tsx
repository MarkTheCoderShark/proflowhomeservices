import CTASection from "@/components/sections/CTASection";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata = seoMetadata({
  title: "Interior Painting in Sacramento & Nearby Cities",
  description:
    "Clean, professional interior painting with premium prep, products, and finishes.",
  path: "/services/interior-painting",
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Interior Painting", url: "/services/interior-painting" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Interior Painting"
        description="Professional interior painting with prep, patching, priming and premium finishes."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Folsom"]}
      />
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Interior Painting</h1>
          <p className="mt-2 text-slate max-w-2xl">
            Crisp lines, careful prep, and low-VOC products for a beautiful finish.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">What’s Included</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              <li>Masking and protection</li>
              <li>Patch, sand, prime as needed</li>
              <li>Premium paints and clean finish</li>
            </ul>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Process</h2>
            <ol className="mt-3 list-decimal pl-5 text-slate space-y-2">
              <li>Consultation and color guidance</li>
              <li>Detailed prep and priming</li>
              <li>Finish coats and walkthrough</li>
            </ol>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
