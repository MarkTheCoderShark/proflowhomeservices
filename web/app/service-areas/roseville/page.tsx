import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import CityServices from "@/components/sections/CityServices";

export const metadata: Metadata = {
  title: "Home Services in Roseville, CA",
  description: "Local team for gutters, painting, handyman & remodeling in Roseville.",
};

export default function Page() {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">Roseville Home Services, Repairs & Remodeling</h1>
          <p className="mt-2 text-slate max-w-2xl">Serving neighborhoods near Blue Oaks and throughout the city.</p>
        </div>
      </section>
      <CityServices />
      <CTASection />
    </div>
  );
}
