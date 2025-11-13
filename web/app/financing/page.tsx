import type { Metadata } from "next";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Financing",
  description: "Flexible payment options for remodeling and bigger projects.",
};

export default function Financing() {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-viridian-500">Financing</h1>
          <p className="mt-2 text-slate">Learn about financing options, payment plans, and how to apply.</p>
          <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-5">
            <ul className="list-disc pl-5 text-slate space-y-2">
              <li>Financing options overview</li>
              <li>How to qualify</li>
              <li>Apply link (coming soon)</li>
            </ul>
          </div>
        </div>
      </div>
      <FAQAccordion />
      <CTASection />
    </>
  );
}

