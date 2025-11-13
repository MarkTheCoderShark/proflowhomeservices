import CTASection from "@/components/sections/CTASection";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { cities } from "@/lib/routes";

export const metadata = seoMetadata({
  title: "Gutter Guards in Sacramento & Nearby Cities",
  description:
    "Reduce clogs and maintenance with professionally installed gutter guards. Local, licensed, and trusted.",
  path: "/services/gutter-guards",
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gutter Guards", url: "/services/gutter-guards" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Gutter Guards"
        description="Professional gutter guard recommendations and installation to reduce clogs."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Folsom", "Lincoln"]}
      />
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Gutter Guards</h1>
          <p className="mt-2 text-slate max-w-2xl">
            We recommend proven guard systems that fit your roof and budget. Get a free inspection and estimate.
          </p>
          <p className="mt-2 text-slate max-w-2xl">
            Popular in {cities.slice(0, 4).map((c, i) => (
              <>
                <a key={c} className="text-aqua" href={`/service-areas/${c}`}>
                  {c
                    .split("-")
                    .map((s) => s[0].toUpperCase() + s.slice(1))
                    .join(" ")}
                </a>
                {i < 3 ? ", " : ""}
              </>
            ))}
            and nearby.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Benefits</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              <li>Less frequent cleaning</li>
              <li>Reduced clogs and overflows</li>
              <li>Long-term gutter protection</li>
            </ul>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Installation</h2>
            <p className="mt-3 text-slate">
              We measure, recommend the right system, and install with clean workmanship and clear warranties.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
