import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "ADUs in Sacramento",
  description: "Accessory Dwelling Units: compliant, efficient, and well-built.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">ADUs</h1>
          <p className="mt-2 text-slate max-w-2xl">
            Build accessory dwelling units with a licensed contractor and organized process.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Compliance</h2>
            <p className="mt-3 text-slate">We address codes, permits, and approvals for a smooth build.</p>
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Process</h2>
            <ol className="mt-3 list-decimal pl-5 text-slate space-y-2">
              <li>Consultation</li>
              <li>Design & scope</li>
              <li>Construction & walkthrough</li>
            </ol>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}

