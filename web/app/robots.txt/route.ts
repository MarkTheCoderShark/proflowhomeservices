import { NextResponse } from "next/server";

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.proflowhomeservices.com";

  const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /search

Sitemap: ${baseUrl}/sitemap.xml`;

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain" },
  });
}

