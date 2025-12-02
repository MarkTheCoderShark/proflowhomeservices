import { MetadataRoute } from "next";
import { blogArticles } from "@/data/blog";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "daily" | "yearly";
  lastModified?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.proflowhomeservices.com";

  const staticRoutes: SitemapRoute[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "services", priority: 0.9, changeFrequency: "weekly" },
    { path: "remodeling", priority: 0.9, changeFrequency: "weekly" },
    { path: "service-areas", priority: 0.9, changeFrequency: "monthly" },
    { path: "projects", priority: 0.8, changeFrequency: "weekly" },
    { path: "reviews", priority: 0.7, changeFrequency: "weekly" },
    { path: "about", priority: 0.7, changeFrequency: "monthly" },
    { path: "contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "financing", priority: 0.7, changeFrequency: "monthly" },
  ];

  const servicePages: SitemapRoute[] = [
    "services/gutter-cleaning",
    "services/gutter-guards",
    "services/gutter-repair-replacement",
    "services/interior-painting",
    "services/exterior-painting",
    "services/handyman",
    "services/pressure-washing",
    "services/roof-solar-cleaning",
    "services/maintenance-plans",
  ].map((path) => ({ path, priority: 0.9, changeFrequency: "monthly" }));

  const remodelingPages: SitemapRoute[] = [
    "remodeling/bathroom",
    "remodeling/kitchen",
    "remodeling/flooring",
    "remodeling/drywall-framing",
    "remodeling/adu",
  ].map((path) => ({ path, priority: 0.8, changeFrequency: "monthly" }));

  const cityPages: SitemapRoute[] = [
    "service-areas/citrus-heights",
    "service-areas/roseville",
    "service-areas/rocklin",
    "service-areas/loomis",
    "service-areas/auburn",
    "service-areas/folsom",
    "service-areas/granite-bay",
    "service-areas/lincoln",
    "service-areas/sacramento",
  ].map((path) => ({ path, priority: 0.8, changeFrequency: "monthly" }));

  const blogPages: SitemapRoute[] = blogArticles.map((article) => ({
    path: `blog/${article.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: article.dateModified ?? article.datePublished,
  }));

  const allRoutes = [...staticRoutes, ...servicePages, ...remodelingPages, ...cityPages, ...blogPages];

  return allRoutes.map((route) => ({
    url: `${baseUrl}/${route.path}`,
    lastModified: route.lastModified ? new Date(route.lastModified) : new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
