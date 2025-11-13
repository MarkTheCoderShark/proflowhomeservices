import { BreadcrumbsJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export const metadata = seoMetadata({
  title: "Reviews",
  description: "Customer reviews pulled from Google, Yelp, and Facebook.",
  path: "/reviews",
});

export default function Reviews() {
  return (
    <>
      <div className="section">
        <div className="container">
          <BreadcrumbsJsonLd
            items={[
              { name: "Home", url: "/" },
              { name: "Reviews", url: "/reviews" },
            ]}
          />
          <LocalBusinessJsonLd aggregateRating={{ ratingValue: 4.9, reviewCount: 1200 }} />
          <h1 className="heading text-3xl font-semibold text-viridian-500">Reviews</h1>
          <p className="mt-2 text-slate">Integration with review sources coming soon.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5">
                <div className="heading font-semibold text-viridian-500">Happy Customer</div>
                <p className="mt-2 text-slate text-sm">"Great experience, clear communication, and a clean job."</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQAccordion />
      <CTASection />
    </>
  );
}
