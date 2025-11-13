import Link from "next/link";
import { cities } from "@/lib/routes";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export const metadata = seoMetadata({
  title: "Service Areas",
  description:
    "Serving Sacramento, Roseville, Rocklin, Loomis, Auburn, Folsom, Granite Bay, Lincoln, and more.",
  path: "/service-areas",
});

function titleize(slug: string) {
  return slug
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
}

export default function ServiceAreas() {
  return (
    <>
      <div className="section bg-white">
        <div className="container">
          <BreadcrumbsJsonLd
            items={[
              { name: "Home", url: "/" },
              { name: "Service Areas", url: "/service-areas" },
            ]}
          />
          <h1 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">Service Areas</h1>
          <p className="mt-3 text-lg text-slate-700 max-w-2xl">
            Local, professional service across the greater Sacramento region.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cities.map((c) => (
              <Link
                key={c}
                href={`/service-areas/${c}`}
                className="rounded-md border-2 border-mint_green-200 bg-white p-4 text-center hover:border-viridian-500 hover:shadow-md transition-all"
              >
                <span className="heading text-slate-900 font-semibold">{titleize(c)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FAQAccordion />
      <CTASection />
    </>
  );
}
