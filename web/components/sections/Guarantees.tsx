import { Clock, MessageSquare, Sparkles, ShieldCheck, DollarSign, Award } from "lucide-react";

const guarantees = [
  {
    icon: Clock,
    title: "On-Time Arrival",
    desc: "We respect your schedule. Our crews arrive on time, every time."
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    desc: "No guesswork—just transparent updates through ProFlow360™."
  },
  {
    icon: Sparkles,
    title: "Clean Job Sites",
    desc: "We treat your property with respect and leave it spotless."
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed contractors with comprehensive liability coverage."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Detailed estimates upfront—no surprise charges or hidden fees."
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    desc: "We stand behind our work and won't rest until you're 100% satisfied."
  },
];

export default function Guarantees() {
  return (
    <section className="section bg-viridian-900 text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-white">
            Our Promises to You
          </h2>
          <p className="mt-4 text-lg text-mint_cream-100">
            These aren't just words—they're the commitments we make to every homeowner, every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all">
                <Icon size={32} className="text-mint_cream-300 mb-4" />
                <h3 className="heading text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-mint_cream-100 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
