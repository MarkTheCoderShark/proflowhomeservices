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
  { slug: "garage-conversions", name: "Garage Conversions" },
  { slug: "flooring", name: "Flooring" },
  { slug: "drywall-framing", name: "Drywall & Framing" },
  { slug: "adu", name: "ADUs" },
];

export default function Remodeling() {
  const data = remodelContent.remodeling;
  const extraSections = (
    <>
      <section className="section">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={`/remodeling/${s.slug}`}
              className="rounded-lg border border-zinc-200 bg-white p-5 hover:shadow-sm transition"
            >
              <div className="heading text-lg text-evergreen font-semibold">{s.name}</div>
              <p className="mt-2 text-sm text-slate">Explore →</p>
            </Link>
          ))}
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
