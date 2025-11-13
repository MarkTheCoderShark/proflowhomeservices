import { Home, ShieldCheck, Smile, CalendarCheck2 } from "lucide-react";
type Feature = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const features: Feature[] = [
  { title: "Local, family-owned", desc: "Serving Sacramento area homeowners.", icon: Home },
  { title: "Licensed & insured", desc: "Professional crews and clean job sites.", icon: ShieldCheck },
  { title: "1,000+ happy customers", desc: "Trusted craft and reliable service.", icon: Smile },
  { title: "Tech-enabled scheduling", desc: "Communication powered by ProFlow360.", icon: CalendarCheck2 },
];

export default function FeatureGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-evergreen">Why Choose ProFlow</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
            <div key={f.title} className="rounded-lg card-soft p-5 text-slate">
              <Icon size={20} className="text-sage" />
              <div className="mt-2 heading card-title text-lg font-semibold">{f.title}</div>
              <p className="mt-1 text-sm text-slate/80">{f.desc}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
