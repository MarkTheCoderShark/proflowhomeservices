import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import CityServices from "@/components/sections/CityServices";

export const metadata: Metadata = {
  title: "Home Services in Auburn, CA",
  description: "Local pros for Auburn home services and remodels.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Auburn Home Services, Repairs & Remodeling</h1>
          <p className="mt-2 text-slate max-w-2xl">Serving Auburn and surrounding foothill communities.</p>
        </div>
      </section>
      <CityServices />
      <CTASection />
    </div>
  );
}
