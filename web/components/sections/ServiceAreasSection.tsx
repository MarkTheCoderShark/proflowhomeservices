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
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            Proudly Serving Northern California
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            ProFlow Home Services brings professional home care and remodeling to communities across the Sacramento region.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {cities.map((c) => (
            <Link
              key={c}
              href={`/service-areas/${c}`}
              className="rounded-lg border-2 border-mint_green-300 bg-mint_green-50 px-5 py-3.5 text-center text-slate-900 font-semibold hover:border-viridian-600 hover:bg-viridian-50 hover:shadow-lg transition-all"
            >
              {titleize(c)}
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-slate-600">
          <p>Don't see your city? <a href="/contact" className="text-viridian-700 font-semibold hover:text-viridian-800 underline">Contact us</a> to confirm service availability.</p>
        </div>
      </div>
    </section>
  );
}

