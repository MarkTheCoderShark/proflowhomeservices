import Link from "next/link";

const services = [
  { href: "/services/gutter-cleaning", title: "Gutter Cleaning", image: "/hero-service-gutter-cleaning.jpeg" },
  { href: "/services/gutter-guards", title: "Gutter Guards", image: "/hero-service-gutter-cleaning.jpeg" },
  { href: "/services/handyman", title: "Handyman Services", image: "/hero-service-handyman.jpeg" },
  { href: "/services/interior-painting", title: "Interior Painting", image: "/hero-service-interior-painting.jpeg" },
  { href: "/services/exterior-painting", title: "Exterior Painting", image: "/hero-service-exterior-painting.jpeg" },
  { href: "/services/pressure-washing", title: "Pressure Washing", image: "/hero-service-pressure-washing.jpeg" },
  { href: "/services/roof-solar-cleaning", title: "Roof & Solar Cleaning", image: "/hero-service-roof-solar-cleaning.jpeg" },
  { href: "/remodeling", title: "Remodeling", image: "/remodel-kitchen.jpeg" },
];

export default function ServiceGrid() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900">Our Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative rounded-lg border-2 border-mint_green-300 bg-mint_green-50 p-5 overflow-hidden transition hover:border-viridian-500 hover:shadow-lg"
            >
              {/* Background image that appears on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              {/* Dark overlay on hover for text readability */}
              <div className="absolute inset-0 bg-viridian-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="heading text-lg font-semibold text-slate-900 group-hover:text-white transition-colors duration-300">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600 group-hover:text-mint_cream-100 transition-colors duration-300">Learn more →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
