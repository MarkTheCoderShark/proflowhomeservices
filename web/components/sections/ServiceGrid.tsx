import Link from "next/link";

const services = [
  { href: "/services/gutter-cleaning", title: "Gutter Cleaning" },
  { href: "/services/gutter-guards", title: "Gutter Guards" },
  { href: "/services/handyman", title: "Handyman Services" },
  { href: "/services/interior-painting", title: "Interior Painting" },
  { href: "/services/exterior-painting", title: "Exterior Painting" },
  { href: "/services/pressure-washing", title: "Pressure Washing" },
  { href: "/services/roof-solar-cleaning", title: "Roof & Solar Cleaning" },
  { href: "/remodeling", title: "Remodeling" },
];

export default function ServiceGrid() {
  return (
    <section className="section bg-mist">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-evergreen">Our Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-lg border border-zinc-200 bg-white p-5 hover:shadow-sm transition"
            >
              <div className="heading text-lg text-evergreen font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-slate">Learn more →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

