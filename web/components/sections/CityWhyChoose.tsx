export type WhyBullet = {
  label: string;
  description?: string;
};

export default function CityWhyChoose({
  city,
  bullets,
}: {
  city: string;
  bullets?: WhyBullet[];
}) {
  const items: WhyBullet[] =
    bullets && bullets.length
      ? bullets
      : [
          {
            label: `Local technicians who know ${city}`,
            description: `Our crews work in ${city} every week and understand the homes, traffic patterns, and neighborhood expectations.`,
          },
          {
            label: "Fast scheduling and on‑time arrival",
            description: "We respect your time with tight arrival windows and clear communication before every visit.",
          },
          {
            label: "Clean, respectful crews",
            description: "Shoes covered, surfaces protected, and job sites left cleaner than we found them.",
          },
          {
            label: "Transparent pricing, no surprise fees",
            description: "You approve all work up front with clear, written estimates—no last‑minute add‑ons.",
          },
          {
            label: "ProFlow360 project updates",
            description: "Track progress, photos, and schedule changes from your phone or laptop.",
          },
          {
            label: "Licensed, insured, background‑checked partners",
            description: "Every subcontractor we send to your home is vetted to ProFlow standards.",
          },
        ];

  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900">
          Why Homeowners in {city} Choose ProFlow
        </h2>
        <p className="mt-3 text-slate-700 max-w-2xl">
          When you invite a crew into your home, you want more than a low price. You want a reliable partner who communicates clearly, protects your space, and delivers professional results every time.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border-2 border-mint_green-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-8 w-8 flex items-center justify-center rounded-full bg-viridian-50 text-viridian-700 font-semibold">
                  ✓
                </div>
                <div>
                  <h3 className="heading text-base font-semibold text-slate-900">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-slate-700">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

