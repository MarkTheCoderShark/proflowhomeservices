import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com";

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "remodeling", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "service-areas", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "projects", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "reviews", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "financing", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const servicePages = [
    "services/gutter-cleaning",
    "services/gutter-guards",
    "services/gutter-repair-replacement",
    "services/interior-painting",
    "services/exterior-painting",
    "services/handyman",
    "services/pressure-washing",
    "services/roof-solar-cleaning",
    "services/maintenance-plans",
  ].map((path) => ({ path, priority: 0.9, changeFrequency: "monthly" as const }));

  const remodelingPages = [
    "remodeling/bathroom",
    "remodeling/kitchen",
    "remodeling/flooring",
    "remodeling/drywall-framing",
    "remodeling/adu",
  ].map((path) => ({ path, priority: 0.8, changeFrequency: "monthly" as const }));

  const cityPages = [
    "service-areas/citrus-heights",
    "service-areas/roseville",
    "service-areas/rocklin",
    "service-areas/loomis",
    "service-areas/auburn",
    "service-areas/folsom",
    "service-areas/granite-bay",
    "service-areas/lincoln",
    "service-areas/sacramento",
  ].map((path) => ({ path, priority: 0.8, changeFrequency: "monthly" as const }));

  const allRoutes = [...staticRoutes, ...servicePages, ...remodelingPages, ...cityPages];

  return allRoutes.map((route) => ({
    url: `${baseUrl}/${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
