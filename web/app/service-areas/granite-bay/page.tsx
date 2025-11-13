import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import CityServices from "@/components/sections/CityServices";

export const metadata: Metadata = {
  title: "Home Services in Granite Bay, CA",
  description: "Premium home services and remodeling for Granite Bay.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Granite Bay Home Services, Repairs & Remodeling</h1>
          <p className="mt-2 text-slate max-w-2xl">Quality-driven service for Granite Bay homeowners.</p>
        </div>
      </section>
      <CityServices />
      <CTASection />
    </div>
  );
}
