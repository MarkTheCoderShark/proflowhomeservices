import { Home, ShieldCheck, Smile, CalendarCheck2 } from "lucide-react";
type Feature = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const features: Feature[] = [
  {
    title: "Local, Family-Owned",
    desc: "Serving Sacramento, Roseville, Rocklin, and surrounding communities with pride.",
    icon: Home
  },
  {
    title: "Licensed & Insured",
    desc: "Professional crews, clean job sites, and full liability coverage on every project.",
    icon: ShieldCheck
  },
  {
    title: "1,000+ Happy Customers",
    desc: "Trusted craftsmanship and reliable service, proven by hundreds of five-star reviews.",
    icon: Smile
  },
  {
    title: "Tech-Enabled Operations",
    desc: "Real-time scheduling, updates, and transparent communication through ProFlow360™.",
    icon: CalendarCheck2
  },
];

export default function FeatureGrid() {
  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            Why Homeowners Choose ProFlow
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            We combine local expertise, professional standards, and modern technology to deliver exceptional home services.
          </p>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-lg border-2 border-mint_green-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-viridian-100 flex items-center justify-center">
                  <Icon size={28} className="text-viridian-700" />
                </div>
                <div className="mt-5 heading text-xl font-bold text-slate-900">{f.title}</div>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
