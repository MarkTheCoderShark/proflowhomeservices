export const services = [
  { slug: "gutter-cleaning", name: "Gutter Cleaning" },
  { slug: "gutter-guards", name: "Gutter Guards" },
  { slug: "gutter-repair-replacement", name: "Gutter Repair & Replacement" },
  { slug: "interior-painting", name: "Interior Painting" },
  { slug: "exterior-painting", name: "Exterior Painting" },
  { slug: "handyman", name: "Handyman Services" },
  { slug: "pressure-washing", name: "Pressure Washing" },
  { slug: "roof-solar-cleaning", name: "Roof & Solar Cleaning" },
  { slug: "maintenance-plans", name: "Maintenance Plans" },
];

export const remodeling = [
  { slug: "bathroom", name: "Bathroom Remodeling" },
  { slug: "kitchen", name: "Kitchen Remodeling" },
  { slug: "flooring", name: "Flooring" },
  { slug: "drywall-framing", name: "Drywall & Framing" },
  { slug: "adu", name: "ADUs" },
];

export const cities = [
  "citrus-heights",
  "roseville",
  "rocklin",
  "loomis",
  "auburn",
  "folsom",
  "granite-bay",
  "lincoln",
  "sacramento",
];

export function getCityRoutes() {
  return cities.map((slug) => ({
    name: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    path: `/service-areas/${slug}`,
    slug,
  }));
}
