import Link from "next/link";
import { MapPin, Shield, Star, Users } from "lucide-react";
import { cities } from "@/lib/routes";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";

export const metadata = seoMetadata({
  title: "Service Areas",
  description:
    "Serving Sacramento, Roseville, Rocklin, Loomis, Auburn, Folsom, Granite Bay, Lincoln, and more.",
  path: "/service-areas",
});

function titleize(slug: string) {
  return slug
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
}

export default function ServiceAreas() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
        ]}
      />
      <LocalBusinessJsonLd
        areaServed={[
          "Roseville CA",
          "Rocklin CA",
          "Folsom CA",
          "Citrus Heights CA",
          "Granite Bay CA",
          "Lincoln CA",
          "Loomis CA",
          "Auburn CA",
          "Sacramento CA",
        ]}
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
            Local Home Services Across Sacramento & Placer County
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-mint_cream-100 drop-shadow-md leading-relaxed">
            Gutters, painting, handyman repairs, pressure washing, and remodeling for homeowners in Sacramento, Roseville, Rocklin, Folsom, Granite Bay, Lincoln, Loomis, Citrus Heights, Auburn and nearby communities.
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
            <Link href="/remodeling/kitchen" className="underline hover:text-white">
              Kitchen Remodels
            </Link>{" "}
            ·{" "}
            <Link href="/remodeling/bathroom" className="underline hover:text-white">
              Bathroom Remodels
            </Link>
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              darkBg
              className="text-lg px-8 py-3"
              analyticsEvent={{ name: "cta_click", params: { location: "service_areas_hero", label: "get_estimate" } }}
            >
              <a href="/contact">Get Free Estimate</a>
            </Button>
            <Button
              asChild
              variant="secondary"
              darkBg
              className="text-lg px-8 py-3"
              analyticsEvent={{ name: "cta_click", params: { location: "service_areas_hero", label: "view_cities" } }}
            >
              <a href="#cities">View Cities We Serve</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-mint_cream-200 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <span className="font-medium">5-Star Rated in Sacramento & Placer County</span>
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

      {/* Overview / Why Choose ProFlow For Your Area */}
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">
              One Local Partner For Every City
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Whether you&apos;re in Roseville, Rocklin, Folsom, Granite Bay, Lincoln, Loomis, Citrus Heights, Auburn, or Sacramento, you get the same ProFlow standard—licensed crews, clean job sites, and tech-enabled communication through ProFlow360. Each city page below gives you a local view of the services, neighborhoods, and common home issues we help with every week.
            </p>
          </div>
          <div>
            <h2 className="heading text-2xl font-bold text-viridian-900">
              Why Homeowners Choose ProFlow
            </h2>
            <ul className="mt-3 space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2">
                <Shield className="w-4 h-4 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Licensed, insured crews serving every listed city</span>
              </li>
              <li className="flex gap-2">
                <Users className="w-4 h-4 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Background-checked technicians with clean, respectful job sites</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Local knowledge of neighborhoods and housing styles</span>
              </li>
              <li className="flex gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0 mt-0.5" />
                <span>1,000+ projects completed across Sacramento &amp; Placer County</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section id="cities" className="section bg-mint_green-50">
        <div className="container">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900 mb-6 text-center">
            Cities We Serve
          </h2>
          <p className="text-center text-slate-700 mb-8 max-w-2xl mx-auto">
            Click any city below to see the specific neighborhoods, common home issues, and recent projects we handle in that area.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {cities.map((c) => (
              <Link
                key={c}
                href={`/service-areas/${c}`}
                className="group rounded-lg border-2 border-mint_green-300 bg-white px-5 py-3.5 text-center hover:border-viridian-600 hover:bg-viridian-50 hover:shadow-lg transition-all"
              >
                <div className="heading text-slate-900 font-semibold group-hover:text-viridian-700">
                  {titleize(c)}
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Gutters, painting, remodeling &amp; repairs in {titleize(c)}, CA
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900 mb-4 text-center">
            Common Neighborhoods We Serve
          </h2>
          <p className="text-center text-slate-700 mb-6 max-w-3xl mx-auto text-sm">
            From tree-lined streets to newer developments, we work in the neighborhoods where Sacramento and Placer County homeowners live every day.
          </p>
          <div className="mt-2 flex flex-wrap gap-2 justify-center">
            {[
              "East Roseville Pkwy",
              "West Roseville / Fiddyment",
              "Stanford Ranch (Rocklin)",
              "Whitney Ranch (Rocklin)",
              "Old Town Folsom",
              "Empire Ranch (Folsom)",
              "Granite Bay Hills",
              "Treelake & Wexford",
              "Citrus Heights – Sunrise Ranch",
              "Citrus Heights – Antelope Crossing",
              "Loomis Lakes Estates",
              "Downtown Auburn & North Auburn",
              "Natomas (Sacramento)",
              "East Sacramento & Land Park",
            ].map((n) => (
              <span
                key={n}
                className="inline-flex items-center rounded-full border border-mint_green-300 bg-mint_green-50 px-3 py-1 text-xs font-medium text-slate-800"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Project Highlights */}
      <section className="section bg-mint_green-50">
        <div className="container">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900 mb-4 text-center">
            Recent Projects in the Sacramento &amp; Placer County Area
          </h2>
          <p className="text-center text-slate-700 mb-8 max-w-3xl mx-auto text-sm">
            A sample of the kitchen remodels, gutter cleanings, paint projects, and bathroom upgrades we complete for local homeowners.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Kitchen remodel – Roseville, CA",
                description:
                  "Opened up a closed-off kitchen, added quartz countertops, new lighting, and durable flooring for a busy Roseville family.",
                image: "/remodel-kitchen.jpeg",
              },
              {
                title: "Gutter cleaning – Folsom, CA",
                description:
                  "Cleared debris, flushed downspouts, and inspected fascia boards ahead of the rainy season on a Folsom two-story home.",
                image: "/hero-service-gutter-cleaning.jpeg",
              },
              {
                title: "Exterior paint refresh – Rocklin, CA",
                description:
                  "Repainted a sun-faded exterior in Stanford Ranch with HOA-approved colors and careful prep on trim and siding.",
                image: "/hero-service-exterior-painting.jpeg",
              },
              {
                title: "Bathroom remodel – Citrus Heights, CA",
                description:
                  "Converted a dated tub/shower combo into a bright walk-in shower with new tile, fixtures, and moisture-resistant finishes.",
                image: "/bathroom.jpeg",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-lg border-2 border-mint_green-300 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="h-40 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-4">
                  <h3 className="heading text-base font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content Paragraph */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900 mb-3">
            Homes Across Sacramento &amp; Placer County Have Unique Service Needs
          </h2>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            Homes across Sacramento and Placer County range from 1970s ranch houses and East Sacramento bungalows to newer developments in Roseville, Rocklin, Lincoln, and Folsom. Tree-lined streets create constant gutter maintenance, while long, hot summers leave many exteriors sun-faded and ready for fresh paint. Inside, original bathrooms, kitchens, and flooring are being updated to match how families live today—with more open layouts, durable surfaces, and energy-efficient lighting. ProFlow Home Services provides dependable painting, gutter care, remodeling, and handyman repairs tailored to each city&apos;s home styles, neighborhood guidelines, and local climate so your projects are completed cleanly, safely, and on schedule.
          </p>
        </div>
      </section>

      <FAQAccordion />
      <CTASection />
    </>
  );
}
