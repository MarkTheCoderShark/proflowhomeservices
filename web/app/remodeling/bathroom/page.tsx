import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import BeforeAfter from "@/components/ui/BeforeAfter";

export const metadata: Metadata = {
  title: "Bathroom Remodeling in Sacramento",
  description: "Start your bathroom remodel with a clear scope and clean execution.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Bathroom Remodeling</h1>
          <p className="mt-2 text-slate max-w-2xl">
            Smart layouts, durable materials, and tidy construction from consultation to walkthrough.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">What’s Included</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              <li>Layout and fixture planning</li>
              <li>Tile, vanity, lighting, and ventilation</li>
              <li>Permits and scheduling as needed</li>
            </ul>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Process</h2>
            <ol className="mt-3 list-decimal pl-5 text-slate space-y-2">
              <li>Consultation</li>
              <li>Scope & estimate</li>
              <li>Build and walkthrough</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <BeforeAfter />
        </div>
      </section>
      <CTASection />
    </div>
  );
}
