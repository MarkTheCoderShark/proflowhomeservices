import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { getArticlesByService, type BlogArticle } from "@/data/blog";

interface ServiceBlogSectionProps {
  serviceSlug: string;
  serviceName: string;
}

export default function ServiceBlogSection({ serviceSlug, serviceName }: ServiceBlogSectionProps) {
  const articles = getArticlesByService(serviceSlug);

  // If no direct match, try to find related articles
  if (articles.length === 0) return null;

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading text-2xl font-semibold text-viridian-900">
            {serviceName} Resources
          </h2>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-viridian-600 font-medium hover:text-viridian-700 transition"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-viridian-600 font-medium hover:text-viridian-700 transition"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block bg-mint_green-50 rounded-xl overflow-hidden border-2 border-mint_green-200 hover:border-viridian-400 hover:shadow-lg transition"
    >
      <div className="relative h-40">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-viridian-900/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className="inline-block bg-white/90 text-viridian-700 px-2 py-0.5 rounded text-xs font-medium">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="heading text-base font-semibold text-viridian-900 group-hover:text-viridian-700 transition line-clamp-2 mb-2">
          {article.title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
          <span className="text-viridian-600 text-sm font-medium group-hover:underline">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
}
