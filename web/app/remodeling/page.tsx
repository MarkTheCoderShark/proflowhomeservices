import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import RemodelPageTemplate from "@/components/templates/RemodelPageTemplate";
import { remodelContent } from "@/data/remodels";
import { seoMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = seoMetadata({
  title: "Remodeling — Kitchens, Bathrooms, Conversions",
  description:
    "Licensed remodeling with transparent proposals, clean job sites, and tech-enabled communication.",
  path: "/remodeling",
});

const sections = [
  { slug: "bathroom", name: "Bathroom Remodeling" },
  { slug: "kitchen", name: "Kitchen Remodeling" },
  { slug: "flooring", name: "Flooring" },
  { slug: "drywall-framing", name: "Drywall & Framing" },
  { slug: "adu", name: "ADUs" },
];

export default function Remodeling() {
  const data = remodelContent.remodeling;
  const extraSections = (
    <>
      <section className="section bg-white">
        <div className="container">
          <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900 mb-6">Explore Our Remodeling Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <Link
                key={s.slug}
                href={`/remodeling/${s.slug}`}
                className="group rounded-lg border-2 border-mint_green-300 bg-mint_green-50 p-6 transition hover:border-viridian-500 hover:shadow-lg"
              >
                <div className="heading text-lg font-semibold text-slate-900 group-hover:text-viridian-700">{s.name}</div>
                <p className="mt-2 text-sm text-slate-600">Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ProcessTimeline />
    </>
  );
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Remodeling", url: "/remodeling" },
        ]}
      />
      <RemodelPageTemplate data={data} extraSections={extraSections} />
    </div>
  );
}
