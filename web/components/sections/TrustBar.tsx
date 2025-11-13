import { ShieldCheck, Users, Star } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: Users, text: "1,000+ Happy Customers" },
  { icon: Star, text: "★★★★★ Google Rating" },
];

export default function TrustBar() {
  return (
    <section className="bg-topbar border-y border-slate-300">
      <div className="container">
        <div className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3">
                  <Icon size={20} className="text-topbar-text" />
                  <span className="text-topbar-text font-medium text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
