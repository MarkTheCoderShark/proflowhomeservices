import Link from "next/link";
import { cities } from "@/lib/routes";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata = seoMetadata({
  title: "Service Areas",
  description:
    "Serving Sacramento, Roseville, Rocklin, Loomis, Auburn, Folsom, Granite Bay, Lincoln, and more.",
  path: "/service-areas",
});

function titleize(slug: string) {
  return slug
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
}

export default function ServiceAreas() {
  return (
    <div className="section">
      <div className="container">
        <BreadcrumbsJsonLd
          items={[
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/service-areas" },
          ]}
        />
        <h1 className="heading text-3xl font-semibold text-evergreen">Service Areas</h1>
        <p className="mt-2 text-slate max-w-2xl">
          Local, professional service across the greater Sacramento region.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {cities.map((c) => (
            <Link
              key={c}
              href={`/service-areas/${c}`}
              className="rounded-md border border-zinc-200 bg-white p-4 hover:shadow-sm transition"
            >
              <span className="heading text-evergreen font-medium">{titleize(c)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
