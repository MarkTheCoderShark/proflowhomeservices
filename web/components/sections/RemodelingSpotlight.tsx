import Link from "next/link";

const items = [
  { href: "/remodeling/bathroom", title: "Bathroom Remodeling" },
  { href: "/remodeling/kitchen", title: "Kitchen Remodeling" },
  { href: "/remodeling/garage-conversions", title: "Garage Conversions" },
];

export default function RemodelingSpotlight() {
  return (
    <section className="section">
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
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded-lg bg-mist" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

