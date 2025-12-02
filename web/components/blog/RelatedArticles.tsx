import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { getRelatedArticles, type BlogArticle } from "@/data/blog";

interface RelatedArticlesProps {
  currentSlug: string;
  limit?: number;
}

export default function RelatedArticles({ currentSlug, limit = 3 }: RelatedArticlesProps) {
  const articles = getRelatedArticles(currentSlug, limit);

  if (articles.length === 0) return null;

  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <h2 className="heading text-2xl font-semibold text-viridian-900 mb-8">
          Related Articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link
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
        <h3 className="heading text-lg font-semibold text-viridian-900 group-hover:text-viridian-700 transition mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2">{article.excerpt}</p>
      </div>
    </Link>
  );
}

// Standalone component for service pages
interface ServiceBlogLinksProps {
  serviceSlug: string;
  serviceName: string;
}

export function ServiceBlogLinks({ serviceSlug, serviceName }: ServiceBlogLinksProps) {
  const { getArticlesByService } = require("@/data/blog");
  const articles = getArticlesByService(serviceSlug);

  if (articles.length === 0) return null;

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="heading text-2xl font-semibold text-viridian-900 mb-6">
          {serviceName} Resources
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: BlogArticle) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex items-start gap-4 p-4 bg-mint_green-50 rounded-lg border-2 border-mint_green-200 hover:border-viridian-400 transition"
            >
              <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="heading text-sm font-semibold text-viridian-900 group-hover:text-viridian-700 transition line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1">{article.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
