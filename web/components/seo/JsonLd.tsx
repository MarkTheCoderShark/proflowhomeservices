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
      telephone: "(###) ###-####",
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

