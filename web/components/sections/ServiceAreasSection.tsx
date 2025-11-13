import Link from "next/link";
import { cities } from "@/lib/routes";

function titleize(slug: string) {
  return slug
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
}

export default function ServiceAreasSection() {
  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900">Service Areas</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map((c) => (
            <Link
              key={c}
              href={`/service-areas/${c}`}
              className="rounded-md border-2 border-mint_green-200 bg-white px-4 py-2.5 text-center text-slate-900 font-medium hover:border-viridian-500 hover:shadow-md transition-all"
            >
              {titleize(c)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

