import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import CityServices from "@/components/sections/CityServices";

export const metadata: Metadata = {
  title: "Home Services in Loomis, CA",
  description: "Professional home services and remodeling for Loomis.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Loomis Home Services, Repairs & Remodeling</h1>
          <p className="mt-2 text-slate max-w-2xl">Trusted local team serving Loomis homeowners.</p>
        </div>
      </section>
      <CityServices />
      <CTASection />
    </div>
  );
}
