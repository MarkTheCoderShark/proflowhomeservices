export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  category: string;
  datePublished: string;
  dateModified?: string;
  readTime: string;
  relatedService?: string;
};

export const blogArticles: BlogArticle[] = [
  // Gutter Articles
  {
    slug: "gutter-maintenance-guide-sacramento",
    title: "The Complete Gutter Maintenance Guide for Sacramento Homeowners",
    description:
      "Learn when to clean your gutters, signs of damage to watch for, and how to protect your Sacramento home from water damage with proper gutter maintenance.",
    excerpt:
      "Sacramento's unique climate demands special attention to gutter maintenance. Learn the essential tips every homeowner needs to protect their property.",
    image: "/hero-service-gutter-cleaning.jpeg",
    category: "Gutters",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "8 min read",
    relatedService: "gutter-cleaning",
  },
  {
    slug: "gutter-guards-worth-it-sacramento",
    title: "Are Gutter Guards Worth It? A Sacramento Homeowner's Guide",
    description:
      "Compare gutter guard types, costs, and performance for Sacramento homes. Learn which guards work best with oak and pine trees and calculate your ROI.",
    excerpt:
      "Tired of cleaning gutters multiple times a year? Learn whether gutter guards are worth the investment for your Sacramento home.",
    image: "/hero-service-gutter-cleaning.jpeg",
    category: "Gutters",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "10 min read",
    relatedService: "gutter-guards",
  },
  {
    slug: "gutter-repair-vs-replacement",
    title: "Gutter Repair vs Replacement: How to Know Which Your Sacramento Home Needs",
    description:
      "When should you repair gutters and when is replacement the smarter choice? Cost comparisons, warning signs, and expert guidance for Sacramento homeowners.",
    excerpt:
      "Leaking gutters? Sagging sections? Learn when repair makes sense and when it's time for replacement with this comprehensive guide.",
    image: "/hero-service-gutter-cleaning.jpeg",
    category: "Gutters",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "9 min read",
    relatedService: "gutter-repair-replacement",
  },

  // Painting Articles
  {
    slug: "interior-painting-guide-sacramento",
    title: "Interior Painting Guide: Colors, Prep & Pro Tips for Sacramento Homes",
    description:
      "Expert interior painting tips for Sacramento homeowners. Learn color selection, prep techniques, paint types, and when to hire professionals.",
    excerpt:
      "Transform your Sacramento home with the right paint colors and techniques. From prep work to final coat, here's everything you need to know.",
    image: "/hero-service-interior-painting.jpeg",
    category: "Painting",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "9 min read",
    relatedService: "interior-painting",
  },
  {
    slug: "exterior-painting-sacramento-climate",
    title: "Exterior Painting in Sacramento: Best Seasons, Paint Types & Maintenance",
    description:
      "Sacramento's climate demands the right approach to exterior painting. Learn optimal timing, paint selection, and maintenance for lasting results.",
    excerpt:
      "Hot summers and sudden winter storms challenge exterior paint. Here's how to protect your Sacramento home with the right products and timing.",
    image: "/hero-service-exterior-painting.jpeg",
    category: "Painting",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "10 min read",
    relatedService: "exterior-painting",
  },

  // Pressure Washing
  {
    slug: "pressure-washing-guide-sacramento",
    title: "Pressure Washing Your Sacramento Home: Complete Guide to Curb Appeal",
    description:
      "Everything Sacramento homeowners need to know about pressure washing: surfaces, techniques, timing, and when to call professionals.",
    excerpt:
      "Restore your home's curb appeal with professional pressure washing. Learn what to clean, when to clean it, and how to protect every surface.",
    image: "/hero-service-pressure-washing.jpeg",
    category: "Exterior Cleaning",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "8 min read",
    relatedService: "pressure-washing",
  },

  // Home Maintenance
  {
    slug: "home-maintenance-checklist-sacramento",
    title: "Sacramento Home Maintenance Checklist: Seasonal Tasks for Every Homeowner",
    description:
      "Complete seasonal maintenance checklist for Sacramento homes. Spring, summer, fall, and winter tasks to protect your investment year-round.",
    excerpt:
      "Sacramento's climate requires specific maintenance timing. Follow this seasonal checklist to prevent expensive repairs and keep your home in top condition.",
    image: "/hero-service-gutter-cleaning.jpeg",
    category: "Home Maintenance",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "12 min read",
    relatedService: "maintenance-plans",
  },

  // Handyman
  {
    slug: "handyman-services-guide-sacramento",
    title: "Handyman Services Guide: What to Fix, When to Call a Pro in Sacramento",
    description:
      "Complete guide to handyman services for Sacramento homeowners. Learn what tasks a handyman handles, costs, and how to get the most from your service call.",
    excerpt:
      "From drywall patches to door adjustments, learn which repairs a handyman can tackle and how to maximize your service appointment.",
    image: "/hero-service-handyman.jpeg",
    category: "Home Repairs",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "10 min read",
    relatedService: "handyman",
  },

  // Roof & Solar
  {
    slug: "roof-solar-panel-cleaning-sacramento",
    title: "Roof & Solar Panel Cleaning: Maximize Efficiency in Sacramento's Climate",
    description:
      "Learn how dirty solar panels reduce efficiency by 15-25% and how professional cleaning restores production. Plus roof cleaning tips for Sacramento homes.",
    excerpt:
      "Dirty solar panels cost you money. Learn the cleaning schedule, techniques, and ROI of professional solar and roof cleaning for Sacramento homes.",
    image: "/hero-service-roof-solar-cleaning.jpeg",
    category: "Exterior Cleaning",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "9 min read",
    relatedService: "roof-solar-cleaning",
  },

  // Roseville Local SEO Articles
  {
    slug: "gutter-cleaning-roseville",
    title: "Gutter Cleaning in Roseville: Complete Homeowner's Guide",
    description:
      "Expert gutter cleaning guide for Roseville, CA homeowners. Learn optimal cleaning schedules for Placer County's climate, neighborhood-specific challenges from Blue Oaks to Sun City, and how to protect your home from water damage.",
    excerpt:
      "Roseville's oak trees and Placer County weather create unique gutter challenges. Learn when to clean, what to watch for, and how to protect your investment.",
    image: "/hero-service-gutter-cleaning.jpeg",
    category: "Gutters",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "12 min read",
    relatedService: "gutter-cleaning",
  },
  {
    slug: "pressure-washing-roseville",
    title: "Pressure Washing Services in Roseville, CA: Complete Guide",
    description:
      "Professional pressure washing guide for Roseville homes. Learn safe techniques for stucco, driveways, and decks, best timing for Placer County's climate, and why soft washing matters for your property.",
    excerpt:
      "Transform your Roseville home's curb appeal with professional pressure washing. Learn what works for stucco, concrete, and every surface.",
    image: "/hero-service-pressure-washing.jpeg",
    category: "Exterior Cleaning",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "11 min read",
    relatedService: "pressure-washing",
  },
  {
    slug: "home-maintenance-roseville",
    title: "Roseville Home Maintenance: Seasonal Checklist for Placer County",
    description:
      "Comprehensive seasonal maintenance checklist for Roseville homeowners. Spring, summer, fall, and winter tasks tailored to Placer County's climate, from gutter cleaning to HVAC service.",
    excerpt:
      "Roseville's extreme temperatures demand proactive home maintenance. Follow this seasonal guide to protect your investment and prevent expensive repairs.",
    image: "/hero-service-gutter-cleaning.jpeg",
    category: "Home Maintenance",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "15 min read",
    relatedService: "maintenance-plans",
  },

  // Lincoln Local SEO Articles
  {
    slug: "gutter-guards-lincoln",
    title: "Gutter Guards in Lincoln, CA: Are They Worth It?",
    description:
      "Discover if gutter guards are worth the investment for Lincoln, CA homes. Expert analysis for 12 Bridges, Sun City Lincoln Hills, and Catta Verdera neighborhoods.",
    excerpt:
      "Lincoln homeowners face unique gutter challenges from oak debris. Learn whether gutter guards make sense for your 12 Bridges, Sun City, or Catta Verdera property.",
    image: "/hero-service-gutter-cleaning.jpeg",
    category: "Gutters",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "10 min read",
    relatedService: "gutter-guards",
  },
  {
    slug: "interior-painting-lincoln",
    title: "Interior Painting in Lincoln: Transform Your Home",
    description:
      "Complete guide to interior painting for Lincoln, CA homes. Expert tips for 12 Bridges, Sun City Lincoln Hills, and Catta Verdera properties. Color trends and professional techniques.",
    excerpt:
      "Transform your Lincoln home with professional interior painting. From color selection to finish quality, here's everything 12 Bridges and Sun City homeowners need to know.",
    image: "/hero-service-interior-painting.jpeg",
    category: "Painting",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "11 min read",
    relatedService: "interior-painting",
  },

  // Granite Bay Local SEO Articles
  {
    slug: "home-services-granite-bay",
    title: "Premium Home Services in Granite Bay, CA",
    description:
      "Comprehensive guide to home services for Granite Bay luxury properties. Expert care for Treelake, Wexford, Douglas Ranch, and custom estates near Folsom Lake.",
    excerpt:
      "Granite Bay luxury homes demand premium service. Complete guide to maintaining Treelake, Wexford, and Douglas Ranch properties with professional care.",
    image: "/hero-service-handyman.jpeg",
    category: "Home Maintenance",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "12 min read",
  },
  {
    slug: "gutter-cleaning-granite-bay",
    title: "Gutter Cleaning in Granite Bay: Protect Your Investment",
    description:
      "Essential guide to gutter cleaning for Granite Bay luxury homes. Protect your Treelake, Wexford, or Douglas Ranch property from water damage with expert maintenance.",
    excerpt:
      "Protect your Granite Bay investment with professional gutter cleaning. Learn why Treelake, Wexford, and Douglas Ranch properties need specialized care.",
    image: "/hero-service-gutter-cleaning.jpeg",
    category: "Gutters",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "10 min read",
    relatedService: "gutter-cleaning",
  },

  // Citrus Heights Local SEO Articles
  {
    slug: "gutter-cleaning-citrus-heights",
    title: "Gutter Cleaning in Citrus Heights: Essential Home Care",
    description:
      "Expert gutter cleaning guide for Citrus Heights homeowners. Learn how mature oak trees, seasonal debris, and local climate create unique maintenance needs for Sunrise Ranch, Arcade Creek, and Stock Ranch properties.",
    excerpt:
      "Citrus Heights' mature oak trees demand specialized gutter care. Discover the cleaning schedule and techniques that protect your ranch-style home.",
    image: "/hero-service-gutter-cleaning.jpeg",
    category: "Gutters",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "11 min read",
    relatedService: "gutter-cleaning",
  },
  {
    slug: "interior-painting-citrus-heights",
    title: "Interior Painting in Citrus Heights, CA",
    description:
      "Complete interior painting guide for Citrus Heights homes. Color selection for ranch-style properties, dealing with 1970s-1990s features, and transforming your Rusch Park or Birdcage Village home.",
    excerpt:
      "Transform your Citrus Heights ranch home with the right paint colors and professional techniques. From prep to final coat.",
    image: "/hero-service-interior-painting.jpeg",
    category: "Painting",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "10 min read",
    relatedService: "interior-painting",
  },

  // Rocklin Local SEO Articles
  {
    slug: "gutter-cleaning-rocklin",
    title: "Gutter Cleaning in Rocklin: Professional Guide for Homeowners",
    description:
      "Expert gutter cleaning guide for Rocklin, CA homeowners. Learn maintenance schedules for Stanford Ranch, Whitney Oaks, Sunset West, and surrounding Placer County neighborhoods.",
    excerpt:
      "Rocklin's foothill location and granite soil create unique drainage challenges. Learn how to protect your property with professional gutter maintenance.",
    image: "/hero-service-gutter-cleaning.jpeg",
    category: "Gutters",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "11 min read",
    relatedService: "gutter-cleaning",
  },
  {
    slug: "exterior-painting-rocklin",
    title: "Exterior Painting in Rocklin, CA: Protect Your Home Investment",
    description:
      "Complete exterior painting guide for Rocklin homes. HOA-compliant colors, climate-appropriate products, and professional techniques for Stanford Ranch, Whitney Oaks, and Sunset West properties.",
    excerpt:
      "Rocklin's temperature swings and foothill sun demand quality exterior paint. Learn colors, timing, and techniques that protect your investment.",
    image: "/hero-service-exterior-painting.jpeg",
    category: "Painting",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "12 min read",
    relatedService: "exterior-painting",
  },
  {
    slug: "handyman-services-rocklin",
    title: "Rocklin Handyman Services: Your Complete Home Repair Guide",
    description:
      "Comprehensive handyman services guide for Rocklin homeowners. From Stanford Ranch to Whitney Oaks, learn what repairs to prioritize and when to call professionals.",
    excerpt:
      "Rocklin homes need reliable handyman support. Discover what repairs to tackle, costs to expect, and how to get your to-do list done right.",
    image: "/hero-service-handyman.jpeg",
    category: "Home Repairs",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "10 min read",
    relatedService: "handyman",
  },

  // Loomis Local SEO Articles
  {
    slug: "pressure-washing-loomis",
    title: "Pressure Washing in Loomis: Rural Property Care",
    description:
      "Comprehensive pressure washing guide for Loomis rural properties. Learn how to clean homes, barns, driveways, and outbuildings while managing red dust and acreage maintenance challenges.",
    excerpt:
      "Loomis acreage properties need specialized pressure washing approaches. From farmhouses to barns, discover rural property cleaning techniques.",
    image: "/hero-service-pressure-washing.jpeg",
    category: "Exterior Cleaning",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "11 min read",
    relatedService: "pressure-washing",
  },
  {
    slug: "exterior-painting-loomis",
    title: "Exterior Painting in Loomis, CA: Farmhouse to Modern",
    description:
      "Expert exterior painting for Loomis properties from classic farmhouses to modern designs. Color selection, timing, and techniques for foothill climate and rural acreage homes.",
    excerpt:
      "Loomis homes deserve painting that honors their character. Learn color strategies and techniques for farmhouse, ranch, and modern rural properties.",
    image: "/hero-service-exterior-painting.jpeg",
    category: "Painting",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    readTime: "12 min read",
    relatedService: "exterior-painting",
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter((article) => article.category === category);
}

export function getRelatedArticles(
  currentSlug: string,
  limit = 3
): BlogArticle[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return blogArticles.slice(0, limit);

  // First, get articles in the same category
  const sameCategory = blogArticles.filter(
    (article) =>
      article.slug !== currentSlug && article.category === current.category
  );

  // If we need more, add articles from other categories
  const otherArticles = blogArticles.filter(
    (article) =>
      article.slug !== currentSlug && article.category !== current.category
  );

  return [...sameCategory, ...otherArticles].slice(0, limit);
}

export function getArticlesByService(serviceSlug: string): BlogArticle[] {
  return blogArticles.filter((article) => article.relatedService === serviceSlug);
}

export const blogCategories = [
  { name: "Gutters", slug: "gutters", count: 8 },
  { name: "Painting", slug: "painting", count: 6 },
  { name: "Exterior Cleaning", slug: "exterior-cleaning", count: 4 },
  { name: "Home Maintenance", slug: "home-maintenance", count: 3 },
  { name: "Home Repairs", slug: "home-repairs", count: 2 },
];
