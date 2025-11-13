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
