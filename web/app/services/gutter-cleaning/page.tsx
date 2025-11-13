import CTASection from "@/components/sections/CTASection";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { cities } from "@/lib/routes";

export const metadata = seoMetadata({
  title: "Gutter Cleaning in Sacramento & Nearby Cities",
  description:
    "Professional gutter cleaning for Sacramento, Roseville, Rocklin, and nearby cities. Prevent damage and keep water flowing right.",
  path: "/services/gutter-cleaning",
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gutter Cleaning", url: "/services/gutter-cleaning" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Gutter Cleaning"
        description="Thorough gutter and downspout cleaning to protect your home."
        areaServed={[
          "Sacramento",
          "Roseville",
          "Rocklin",
          "Folsom",
          "Citrus Heights",
          "Granite Bay",
          "Lincoln",
          "Loomis",
          "Auburn",
        ]}
      />
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Gutter Cleaning</h1>
          <p className="mt-2 text-slate max-w-2xl">
            Keep your home protected with thorough, safe gutter cleaning. We clear debris, flush downspouts, and ensure proper drainage.
          </p>
          <p className="mt-2 text-slate max-w-2xl">
            Serving {cities.slice(0, 5).map((c, i) => (
              <>
                <a key={c} className="text-aqua" href={`/service-areas/${c}`}>
                  {c
                    .split("-")
                    .map((s) => s[0].toUpperCase() + s.slice(1))
                    .join(" ")}
                </a>
                {i < 4 ? ", " : ""}
              </>
            ))}
            and surrounding areas.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Why it matters</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              <li>Avoid fascia, siding, and foundation damage</li>
              <li>Prevent water overflow and leaks</li>
              <li>Extend roof and gutter lifespan</li>
            </ul>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Our process</h2>
            <ol className="mt-3 list-decimal pl-5 text-slate space-y-2">
              <li>Inspection and safety setup</li>
              <li>Hand removal and bagging of debris</li>
              <li>Downspout flush and flow test</li>
              <li>Cleanup and before/after photos</li>
            </ol>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
