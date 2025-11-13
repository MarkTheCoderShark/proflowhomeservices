import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Flooring in Sacramento",
  description: "Durable flooring installations with clean prep and finish.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Flooring</h1>
          <p className="mt-2 text-slate max-w-2xl">
            LVP, hardwood, tile, and more installed to spec.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Options</h2>
            <p className="mt-3 text-slate">We help you select materials that fit your lifestyle and budget.</p>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Process</h2>
            <ol className="mt-3 list-decimal pl-5 text-slate space-y-2">
              <li>Consultation</li>
              <li>Prep & installation</li>
              <li>Final walkthrough</li>
            </ol>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}

