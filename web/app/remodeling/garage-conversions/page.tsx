import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Garage Conversions in Sacramento",
  description: "Convert your garage to livable space with compliance and quality.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Garage Conversions</h1>
          <p className="mt-2 text-slate max-w-2xl">
            Add bedrooms, offices, or ADU-ready space with proper insulation and code requirements.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">What’s Included</h2>
            <p className="mt-3 text-slate">Framing, electrical, insulation, windows/doors, and finishes.</p>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Process</h2>
            <ol className="mt-3 list-decimal pl-5 text-slate space-y-2">
              <li>Consultation & feasibility</li>
              <li>Scope & estimate</li>
              <li>Build and walkthrough</li>
            </ol>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}

