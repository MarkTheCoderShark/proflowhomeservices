import { BreadcrumbsJsonLd, CollectionPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export const metadata = seoMetadata({
  title: "Projects",
  description: "A gallery of recent ProFlow projects across services and remodeling.",
  path: "/projects",
});

export default function Projects() {
  return (
    <>
      <div className="section bg-white">
        <div className="container">
          <BreadcrumbsJsonLd
            items={[
              { name: "Home", url: "/" },
              { name: "Projects", url: "/projects" },
            ]}
          />
          <CollectionPageJsonLd name="Projects" url="/projects" />
          <h1 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">Projects</h1>
          <p className="mt-3 text-slate-700">Filters coming soon: Painting | Gutters | Remodeling | Handyman</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg bg-mint_green-100 border-2 border-mint_green-200" />
            ))}
          </div>
        </div>
      </div>
      <FAQAccordion />
      <CTASection />
    </>
  );
}
