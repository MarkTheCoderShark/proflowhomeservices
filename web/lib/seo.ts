import type { Metadata } from "next";

export function baseUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com").replace(/\/$/, "");
}

export function canonical(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl()}${p}`;
}

export function seoMetadata({
  title,
  description,
  path,
  image = "/og/default.svg",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = canonical(path);
  const imageUrl = image.startsWith("http") ? image : `${baseUrl()}${image}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  } satisfies Metadata;
}

