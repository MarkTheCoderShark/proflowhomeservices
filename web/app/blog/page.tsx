import { BreadcrumbsJsonLd, BlogJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export const metadata = seoMetadata({
  title: "Blog",
  description: "Guides and resources for Sacramento-area homeowners.",
  path: "/blog",
});

export default function Blog() {
  return (
    <>
      <div className="section">
          <div className="container">
            <BreadcrumbsJsonLd
              items={[
                { name: "Home", url: "/" },
                { name: "Blog", url: "/blog" },
              ]}
            />
            <BlogJsonLd name="ProFlow Blog" url="/blog" />
            <h1 className="heading text-3xl font-semibold text-viridian-500">Blog</h1>
          <p className="mt-2 text-slate">Articles coming soon.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <article key={i} className="rounded-lg border border-zinc-200 bg-white p-5">
                <h2 className="heading text-lg font-semibold text-viridian-500">Post Title {i}</h2>
                <p className="mt-2 text-slate text-sm">Short excerpt appears here.</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <FAQAccordion />
      <CTASection />
    </>
  );
}
