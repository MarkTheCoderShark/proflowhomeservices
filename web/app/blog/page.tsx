import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, BlogJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import CTASection from "@/components/sections/CTASection";
import { blogArticles, blogCategories } from "@/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = seoMetadata({
  title: "Blog - Home Maintenance Tips & Guides",
  description:
    "Expert home maintenance guides and tips for Sacramento-area homeowners. Learn about gutter care, painting, pressure washing, and more from ProFlow Home Services.",
  path: "/blog",
});

export default function Blog() {
  const featuredArticle = blogArticles[0];
  const otherArticles = blogArticles.slice(1);

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <BlogJsonLd name="ProFlow Home Services Blog" url="/blog" />

      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-viridian-900 to-viridian-800">
        <div className="container">
          <h1 className="heading text-3xl sm:text-4xl font-bold text-white">
            Home Maintenance Blog
          </h1>
          <p className="mt-3 text-lg text-mint_green-100 max-w-2xl">
            Expert guides and tips to help Sacramento homeowners protect and maintain their properties.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section bg-white">
          <div className="container">
            <h2 className="heading text-sm font-semibold text-viridian-600 uppercase tracking-wider mb-6">
              Featured Article
            </h2>
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group block bg-mint_green-50 rounded-2xl overflow-hidden border-2 border-mint_green-200 hover:border-viridian-400 transition"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <span className="bg-viridian-600 px-3 py-1 rounded-full text-white text-xs font-medium">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredArticle.datePublished).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <h3 className="heading text-2xl font-semibold text-viridian-900 group-hover:text-viridian-700 transition mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-slate-700 mb-6">{featuredArticle.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-viridian-600 font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      {otherArticles.length > 0 && (
        <section className="section bg-mint_green-50">
          <div className="container">
            <h2 className="heading text-2xl font-semibold text-viridian-900 mb-8">More Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden border-2 border-mint_green-200 hover:border-viridian-400 hover:shadow-lg transition"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-slate-600 mb-3">
                      <span className="bg-viridian-100 text-viridian-700 px-2 py-0.5 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="heading text-lg font-semibold text-viridian-900 group-hover:text-viridian-700 transition mb-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="heading text-2xl font-semibold text-viridian-900 mb-6">
            Browse by Category
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {blogCategories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between p-4 bg-mint_green-50 rounded-lg border-2 border-mint_green-200"
              >
                <span className="font-medium text-viridian-900">{category.name}</span>
                <span className="text-sm text-slate-600">
                  {category.count} {category.count === 1 ? "article" : "articles"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="section bg-viridian-900">
        <div className="container text-center">
          <h2 className="heading text-2xl sm:text-3xl font-semibold text-white mb-4">
            Need Professional Home Maintenance?
          </h2>
          <p className="text-mint_green-100 max-w-2xl mx-auto mb-8">
            From gutter cleaning to painting, our Sacramento-area team delivers quality service with
            transparent pricing and real-time updates through ProFlow360.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block bg-white text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-mint_green-100 transition"
            >
              View All Services
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
