import Link from "next/link";
import { services } from "@/lib/routes";
import type { Metadata } from "next";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service home improvement: gutters, painting, handyman, pressure washing, roof & solar cleaning, and more.",
};

export default function ServicesIndex() {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-viridian-500">Services</h1>
          <p className="mt-2 text-slate">One company for everything your home needs.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-lg border border-zinc-200 bg-white p-5 hover:shadow-sm transition"
              >
                <div className="heading text-lg text-viridian-500 font-semibold">{s.name}</div>
                <p className="mt-2 text-sm text-slate">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FAQAccordion />
      <CTASection />
    </>
  );
}

