import Script from "next/script";

export function JsonLd({ data, id }: { data: any; id?: string }) {
  return (
    <Script id={id ?? undefined} type="application/ld+json">
      {JSON.stringify(data)}
    </Script>
  );
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return <JsonLd id="ld-breadcrumbs" data={data} />;
}

export function ServiceJsonLd({
  serviceType,
  description,
  areaServed,
}: {
  serviceType: string;
  description: string;
  areaServed: string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: "ProFlow Home Services",
      url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com",
      telephone: "(916) 740-7249",
      areaServed,
    },
    description,
  };
  return <JsonLd id="ld-service" data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ProFlow Home Services",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com",
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com"}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return <JsonLd id="ld-website" data={data} />;
}

export function LocalBusinessJsonLd({
  name = "ProFlow Home Services",
  url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com",
  telephone = "(916) 740-7249",
  areaServed = [
    "Sacramento",
    "Roseville",
    "Rocklin",
    "Loomis",
    "Auburn",
    "Folsom",
    "Granite Bay",
    "Lincoln",
  ],
  aggregateRating,
}: {
  name?: string;
  url?: string;
  telephone?: string;
  areaServed?: string[];
  aggregateRating?: { ratingValue: number; reviewCount: number };
}) {
  const data: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    telephone,
    areaServed,
  };
  if (aggregateRating) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    };
  }
  return <JsonLd id="ld-localbusiness-page" data={data} />;
}

export function CollectionPageJsonLd({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url,
  };
  return <JsonLd id="ld-collection" data={data} />;
}

export function BlogJsonLd({ name, url }: { name: string; url: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name,
    url,
  };
  return <JsonLd id="ld-blog" data={data} />;
}

export function FAQPageJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return <JsonLd id="ld-faq" data={data} />;
}

export function ArticleJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "ProFlow Home Services Team",
  authorType = "Organization",
  url,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  authorType?: "Person" | "Organization";
  url: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com";

  const authorSchema = authorType === "Organization"
    ? {
        "@type": "Organization",
        name: author,
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
        sameAs: [
          "https://www.facebook.com/proflowhomeservices",
          "https://www.instagram.com/proflowhomeservices",
        ],
      }
    : {
        "@type": "Person",
        name: author,
        url: `${baseUrl}/about`,
        worksFor: {
          "@type": "Organization",
          name: "ProFlow Home Services",
          url: baseUrl,
        },
      };

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image.startsWith("http") ? image : `${baseUrl}${image}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: authorSchema,
    publisher: {
      "@type": "Organization",
      name: "ProFlow Home Services",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "(916) 740-7249",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${baseUrl}${url}`,
    },
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };
  return <JsonLd id="ld-article" data={data} />;
}

export function OrganizationJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com";
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}/#organization`,
    name: "ProFlow Home Services",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${baseUrl}/logo.png`,
    description: "Professional home services including gutter cleaning, pressure washing, painting, and handyman services in Sacramento, Roseville, and Rocklin, CA.",
    telephone: "(916) 740-7249",
    email: "info@proflowhomeservices.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5816,
      longitude: -121.4944,
    },
    areaServed: [
      { "@type": "City", name: "Sacramento" },
      { "@type": "City", name: "Roseville" },
      { "@type": "City", name: "Rocklin" },
      { "@type": "City", name: "Folsom" },
      { "@type": "City", name: "Lincoln" },
      { "@type": "City", name: "Granite Bay" },
      { "@type": "City", name: "Loomis" },
      { "@type": "City", name: "Auburn" },
      { "@type": "City", name: "Citrus Heights" },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/proflowhomeservices",
      "https://www.instagram.com/proflowhomeservices",
      "https://www.yelp.com/biz/proflow-home-services-sacramento",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Guard Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Handyman Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof & Solar Cleaning" } },
      ],
    },
  };
  return <JsonLd id="ld-organization" data={data} />;
}

export function HowToJsonLd({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string; image?: string }[];
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com";
  const data: any = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image.startsWith("http") ? step.image : `${baseUrl}${step.image}` }),
    })),
  };
  if (totalTime) {
    data.totalTime = totalTime;
  }
  if (estimatedCost) {
    data.estimatedCost = {
      "@type": "MonetaryAmount",
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    };
  }
  return <JsonLd id="ld-howto" data={data} />;
}
