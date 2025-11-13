import Link from "next/link";

const services = [
  {
    href: "/services/gutter-cleaning",
    title: "Gutter Cleaning",
    desc: "Professional cleaning to prevent water damage and protect your foundation.",
    image: "/hero-service-gutter-cleaning.jpeg"
  },
  {
    href: "/services/gutter-guards",
    title: "Gutter Guards",
    desc: "Premium guard systems that keep debris out and reduce maintenance.",
    image: "/hero-service-gutter-cleaning.jpeg"
  },
  {
    href: "/services/handyman",
    title: "Handyman Services",
    desc: "Reliable repairs, installations, and home improvements, all in one call.",
    image: "/hero-service-handyman.jpeg"
  },
  {
    href: "/services/interior-painting",
    title: "Interior Painting",
    desc: "Refresh your spaces with precise prep work and smooth, lasting finishes.",
    image: "/hero-service-interior-painting.jpeg"
  },
  {
    href: "/services/exterior-painting",
    title: "Exterior Painting",
    desc: "Curb appeal and weather protection with quality paints and expert application.",
    image: "/hero-service-exterior-painting.jpeg"
  },
  {
    href: "/services/pressure-washing",
    title: "Pressure Washing",
    desc: "Remove dirt, mold, and grime from siding, driveways, decks, and patios.",
    image: "/hero-service-pressure-washing.jpeg"
  },
  {
    href: "/services/roof-solar-cleaning",
    title: "Roof & Solar Cleaning",
    desc: "Safe cleaning to extend roof life and maximize solar panel efficiency.",
    image: "/hero-service-roof-solar-cleaning.jpeg"
  },
  {
    href: "/remodeling",
    title: "Remodeling",
    desc: "Full-service kitchen, bathroom, flooring, and ADU projects from start to finish.",
    image: "/remodel-kitchen.jpeg"
  },
];

export default function ServiceGrid() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            Complete Home Services
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            From routine maintenance to full-scale remodels, we handle it all with professional care.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative rounded-lg border-2 border-mint_green-300 bg-mint_green-50 p-6 overflow-hidden transition hover:border-viridian-500 hover:shadow-xl"
            >
              {/* Background image that appears on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              {/* Dark overlay on hover for text readability */}
              <div className="absolute inset-0 bg-viridian-900/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="heading text-xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
                  {s.title}
                </div>
                <p className="mt-3 text-sm text-slate-600 group-hover:text-mint_cream-100 transition-colors duration-300 leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4 text-sm font-semibold text-viridian-600 group-hover:text-white transition-colors duration-300">
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
