import Link from "next/link";

const services = [
  { href: "/services/gutter-cleaning", title: "Gutter Cleaning" },
  { href: "/services/gutter-guards", title: "Gutter Guards" },
  { href: "/services/interior-painting", title: "Interior Painting" },
  { href: "/services/exterior-painting", title: "Exterior Painting" },
  { href: "/services/handyman", title: "Handyman Services" },
  { href: "/services/pressure-washing", title: "Pressure Washing" },
  { href: "/services/roof-solar-cleaning", title: "Roof & Solar Cleaning" },
];

export default function CityServices({ city }: { city?: string }) {
  const heading = city ? `Home Services in ${city}` : "Services Offered";

  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900">
          {heading}
        </h2>
        <p className="mt-3 text-slate-700 max-w-2xl">
          {city
            ? `From quick fixes to full projects, we handle gutters, painting, handyman work, and more for homeowners across ${city}.`
            : "Explore our core home services including gutters, painting, handyman work, and more."}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const title = city ? `${s.title} in ${city}` : s.title;
            const description = city
              ? `Learn more about ${s.title.toLowerCase()} in ${city} →`
              : "Learn more →";
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-lg border-2 border-mint_green-300 bg-mint_green-50 p-5 transition hover:border-viridian-500 hover:shadow-lg"
              >
                <div className="heading text-lg font-semibold text-slate-900 group-hover:text-viridian-700">
                  {title}
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
