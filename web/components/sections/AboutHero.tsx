import { ShieldCheck, Users, Star } from "lucide-react";

const badges = [
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: Users, text: "1,000+ Happy Customers" },
  { icon: Star, text: "5-Star Google Rating" },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-viridian-900 text-white py-20 md:py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/tech1.jpeg)" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-viridian-900/95 via-viridian-800/90 to-viridian-900/95" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Building Homes, Trust, and Lasting Relationships
          </h1>
          <p className="mt-6 text-lg md:text-xl text-mint_cream-100 leading-relaxed max-w-3xl mx-auto">
            Serving Sacramento homeowners with integrity, craftsmanship, and modern technology since day one.
          </p>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.text} className="flex items-center gap-3">
                  <Icon size={24} className="text-mint_cream-300" />
                  <span className="text-white font-medium text-sm md:text-base">
                    {badge.text}
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
