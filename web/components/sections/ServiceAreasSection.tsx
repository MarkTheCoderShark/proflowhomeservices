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
    <section className="section bg-mist">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-evergreen">Service Areas</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map((c) => (
            <Link
              key={c}
              href={`/service-areas/${c}`}
              className="rounded-md border border-zinc-200 bg-white px-4 py-2 text-slate hover:shadow-sm"
            >
              {titleize(c)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

