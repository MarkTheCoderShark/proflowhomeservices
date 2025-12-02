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
  { name: "Gutters", slug: "gutters", count: 3 },
  { name: "Painting", slug: "painting", count: 2 },
  { name: "Exterior Cleaning", slug: "exterior-cleaning", count: 2 },
  { name: "Home Maintenance", slug: "home-maintenance", count: 1 },
  { name: "Home Repairs", slug: "home-repairs", count: 1 },
];
