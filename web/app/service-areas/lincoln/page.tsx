import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import CityServices from "@/components/sections/CityServices";

export const metadata: Metadata = {
  title: "Home Services in Lincoln, CA",
  description: "Local pros for Lincoln home services and remodeling.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Lincoln Home Services, Repairs & Remodeling</h1>
          <p className="mt-2 text-slate max-w-2xl">Serving Lincoln neighborhoods with professional results.</p>
        </div>
      </section>
      <CityServices />
      <CTASection />
    </div>
  );
}
