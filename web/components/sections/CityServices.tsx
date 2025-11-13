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

export default function CityServices() {
  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900">Services Offered</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-lg border-2 border-mint_green-300 bg-mint_green-50 p-5 transition hover:border-viridian-500 hover:shadow-lg"
            >
              <div className="heading text-lg font-semibold text-slate-900 group-hover:text-viridian-700">{s.title}</div>
              <p className="mt-2 text-sm text-slate-600">Learn more →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

