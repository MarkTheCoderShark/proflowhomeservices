import Link from "next/link";

const items = [
  {
    href: "/remodeling/bathroom",
    title: "Bathroom Remodeling",
    desc: "Smart layouts, durable finishes, and tidy build execution.",
    image: "/dreamina-2025-11-12-8102-A luxurious, freshly remodeled bathroom ....jpeg",
  },
  {
    href: "/remodeling/kitchen",
    title: "Kitchen Remodeling",
    desc: "Innovative storage, lighting, and premium surfaces.",
    image: "/remodel-kitchen.jpeg",
  },
  {
    href: "/remodeling/flooring",
    title: "Flooring",
    desc: "LVP, hardwood, tile, and stone installations.",
    image: "/lvp-flooring.jpeg",
  },
];

export default function RemodelingSpotlight() {
  return (
    <section className="section sand-bg">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="heading text-2xl sm:text-3xl font-semibold text-evergreen">Remodeling Spotlight</h2>
            <p className="mt-3 text-slate">
              High-ticket services done right: licensed contractor, clean job sites, and transparent proposals.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {items.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-md border border-zinc-200 bg-white px-4 py-2 heading text-sm hover:shadow-sm"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative block overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
              >
                <div
                  className="h-48 w-full bg-cover bg-center transition group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-4">
                  <div className="heading text-lg font-semibold text-evergreen">{item.title}</div>
                  <p className="mt-1 text-sm text-slate">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
