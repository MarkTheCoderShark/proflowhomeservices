import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Drywall & Framing in Sacramento",
  description: "Framing, drywall, texture, and paint with clean finishes.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Drywall & Framing</h1>
          <p className="mt-2 text-slate max-w-2xl">
            From room build-outs to patch and repair, we deliver smooth results ready for paint.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Capabilities</h2>
            <p className="mt-3 text-slate">Wall builds, openings, repairs, texture matching, and more.</p>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Approach</h2>
            <p className="mt-3 text-slate">Clean job sites with sequencing to minimize disruption.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}

