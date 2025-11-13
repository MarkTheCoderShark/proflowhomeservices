export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

  const staticRoutes = [
    "",
    "services",
    "remodeling",
    "service-areas",
    "projects",
    "reviews",
    "about",
    "contact",
    "blog",
    "financing",
    // Service pages
    "services/gutter-cleaning",
    "services/gutter-guards",
    "services/gutter-repair-replacement",
    "services/interior-painting",
    "services/exterior-painting",
    "services/handyman",
    "services/pressure-washing",
    "services/roof-solar-cleaning",
    "services/maintenance-plans",
    // Remodeling pages
    "remodeling/bathroom",
    "remodeling/kitchen",
    "remodeling/garage-conversions",
    "remodeling/flooring",
    "remodeling/drywall-framing",
    "remodeling/adu",
    // Cities
    "service-areas/citrus-heights",
    "service-areas/roseville",
    "service-areas/rocklin",
    "service-areas/loomis",
    "service-areas/auburn",
    "service-areas/folsom",
    "service-areas/granite-bay",
    "service-areas/lincoln",
    "service-areas/sacramento",
  ];

  return staticRoutes.map((path) => ({
    url: `${baseUrl}/${path}`.replace(/\/+$/, "/"),
    lastModified: new Date(),
  }));
}

