import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Kitchen Remodeling in Sacramento",
  description: "Functional, beautiful kitchens built with organized project management.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Kitchen Remodeling</h1>
          <p className="mt-2 text-slate max-w-2xl">
            Smart storage, durable finishes, and clean execution to elevate your home.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Scope</h2>
            <p className="mt-3 text-slate">Cabinetry, countertops, lighting, flooring, and layout improvements.</p>
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
      <CTASection />
    </div>
  );
}

