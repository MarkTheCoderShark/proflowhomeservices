import Link from "next/link";

const items = [
  {
    href: "/remodeling/bathroom",
    title: "Bathroom Remodeling",
    desc: "Smart layouts, durable finishes, and tidy build execution.",
    image: "/bathroom.jpeg",
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
    <section className="section bg-viridian-900">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-white">Remodeling Spotlight</h2>
          <p className="mt-4 text-lg text-mint_cream-100">
            High-ticket services done right: licensed contractor, clean job sites, and transparent proposals.
          </p>
        </div>

        {/* Alternating Cards */}
        <div className="space-y-16">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group block"
              >
                <div className={`grid gap-8 md:grid-cols-2 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-lg shadow-xl ${!isEven ? 'md:col-start-2' : ''}`}>
                    <div
                      className="aspect-[4/3] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>

                  {/* Description */}
                  <div className={`${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg p-8 hover:bg-white/15 transition-all">
                      <h3 className="heading text-2xl font-bold text-white">{item.title}</h3>
                      <p className="mt-4 text-mint_cream-100 text-lg leading-relaxed">{item.desc}</p>
                      <div className="mt-6 inline-flex items-center text-white font-semibold group-hover:text-mint_cream-300 transition-colors">
                        Learn More
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
