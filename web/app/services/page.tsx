import Link from "next/link";
import { MapPin, Shield, Star, Users } from "lucide-react";
import { seoMetadata, canonical } from "@/lib/seo";
import { BreadcrumbsJsonLd, CollectionPageJsonLd } from "@/components/seo/JsonLd";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import ServiceGrid from "@/components/sections/ServiceGrid";

export const metadata = seoMetadata({
  title: "Home Services & Remodeling in Sacramento & Placer County",
  description:
    "Gutter cleaning, gutter guards, painting, handyman repairs, pressure washing, roof & solar cleaning, and remodeling from one trusted local team.",
  path: "/services",
});

export default function ServicesIndex() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <CollectionPageJsonLd
        name="ProFlow Home Services – Services"
        url={canonical("/services")}
      />

      {/* Hero Section */}
      <section
        className="relative section overflow-hidden"
        style={{
          backgroundImage: "url(/hero-home.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-viridian-900/75 to-viridian-900/90" />
        <div className="container relative z-10 max-w-4xl">
          <h1 className="heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Complete Home Services &amp; Remodeling From One Local Team
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-mint_cream-100 drop-shadow-md leading-relaxed">
            Gutters, painting, handyman repairs, pressure washing, roof &amp; solar cleaning, and full kitchen
            and bathroom remodels for homeowners across Sacramento and Placer County.
          </p>

          {/* Service category links */}
          <p className="mt-4 text-sm text-mint_cream-200">
            <span className="font-semibold">Popular services:</span>{" "}
            <Link href="/services/gutter-cleaning" className="underline hover:text-white">
              Gutter Cleaning
            </Link>{" "}
            ·{" "}
            <Link href="/services/gutter-guards" className="underline hover:text-white">
              Gutter Guards
            </Link>{" "}
            ·{" "}
            <Link href="/services/interior-painting" className="underline hover:text-white">
              Interior Painting
            </Link>{" "}
            ·{" "}
            <Link href="/services/exterior-painting" className="underline hover:text-white">
              Exterior Painting
            </Link>{" "}
            ·{" "}
            <Link href="/services/handyman" className="underline hover:text-white">
              Handyman Repairs
            </Link>{" "}
            ·{" "}
            <Link href="/services/pressure-washing" className="underline hover:text-white">
              Pressure Washing
            </Link>{" "}
            ·{" "}
            <Link href="/services/roof-solar-cleaning" className="underline hover:text-white">
              Roof &amp; Solar Cleaning
            </Link>
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              darkBg
              className="text-lg px-8 py-3"
              analyticsEvent={{ name: "cta_click", params: { location: "services_hero", label: "get_estimate" } }}
            >
              <a href="/contact">Get Free Estimate</a>
            </Button>
            <Button
              asChild
              variant="secondary"
              darkBg
              className="text-lg px-8 py-3"
              analyticsEvent={{ name: "cta_click", params: { location: "services_hero", label: "view_services" } }}
            >
              <a href="#services">View All Services</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-mint_cream-200 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <span className="font-medium">5-Star Rated Home Services</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-mint_green-300 flex-shrink-0" />
              <span className="font-medium">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-mint_green-300 flex-shrink-0" />
              <span className="font-medium">1,000+ Home Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-mint_green-300 flex-shrink-0" />
              <span className="font-medium">Local Technicians &amp; Clean Job Sites</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview / Why Choose ProFlow For Your Home Projects */}
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">
              One Local Partner For Every Project
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              From seasonal gutter maintenance and fresh interior paint to pressure washing, handyman repairs, and
              full-scale kitchen or bathroom remodels, you get the same ProFlow standard—licensed crews, clean job
              sites, and clear communication through ProFlow360. Instead of juggling multiple contractors, you can
              call one team that understands how all the pieces of your home work together.
            </p>
          </div>
          <div>
            <h2 className="heading text-2xl font-bold text-viridian-900">
              Why Homeowners Choose ProFlow
            </h2>
            <ul className="mt-3 space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2">
                <Shield className="w-4 h-4 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Licensed, insured crews for both small jobs and large remodels</span>
              </li>
              <li className="flex gap-2">
                <Users className="w-4 h-4 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Background-checked technicians who care for your home like their own</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Local expertise in Sacramento &amp; Placer County neighborhoods</span>
              </li>
              <li className="flex gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0 mt-0.5" />
                <span>1,000+ projects completed with 5-star reviews from local homeowners</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services">
        <ServiceGrid />
      </section>

      {/* Local Content Paragraph */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900 mb-3">
            The Right Service For Every Part of Your Home
          </h2>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            Homes across Sacramento and Placer County deal with overflowing gutters, sun-faded exteriors, tired
            interiors, and outdated kitchens and bathrooms. ProFlow Home Services brings everything together under
            one roof—routine maintenance, repairs, pressure washing, and full remodeling—so you can tackle your list
            of projects with a single trusted team. Whether you&apos;re preparing for the rainy season, refreshing
            curb appeal, or planning a major renovation, we help you choose the right services and complete the work
            cleanly, safely, and on schedule.
          </p>
        </div>
      </section>

      <FAQAccordion />
      <CTASection />
    </>
  );
}
