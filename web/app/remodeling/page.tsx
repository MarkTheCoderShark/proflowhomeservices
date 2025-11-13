import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import ProcessTimeline from "@/components/sections/ProcessTimeline";

export const metadata: Metadata = {
  title: "Remodeling — Kitchens, Bathrooms, Conversions",
  description:
    "Licensed remodeling with transparent proposals, clean job sites, and tech-enabled communication.",
};

export default function Remodeling() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Remodeling</h1>
          <p className="mt-2 text-slate max-w-2xl">
            Kitchens, bathrooms, conversions & full home remodeling. Start your project with a consultation.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { slug: "bathroom", name: "Bathroom Remodeling" },
            { slug: "kitchen", name: "Kitchen Remodeling" },
            { slug: "garage-conversions", name: "Garage Conversions" },
            { slug: "flooring", name: "Flooring" },
            { slug: "drywall-framing", name: "Drywall & Framing" },
            { slug: "adu", name: "ADUs" },
          ].map((s) => (
            <Link
              key={s.slug}
              href={`/remodeling/${s.slug}`}
              className="rounded-lg border border-zinc-200 bg-white p-5 hover:shadow-sm transition"
            >
              <div className="heading text-lg text-evergreen font-semibold">{s.name}</div>
              <p className="mt-2 text-sm text-slate">Explore →</p>
            </Link>
          ))}
        </div>
      </section>
      <ProcessTimeline />
      <CTASection />
    </div>
  );
}
