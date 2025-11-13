type Testimonial = { name: string; city: string; quote: string; service: string };

const list: Testimonial[] = [
  {
    name: "Jennifer M.",
    city: "Roseville",
    service: "Bathroom Remodeling",
    quote: "The ProFlow team completely transformed our master bathroom. From the initial consultation to final walkthrough, everything was professional, on time, and exactly what we envisioned."
  },
  {
    name: "David R.",
    city: "Rocklin",
    service: "Gutter Cleaning & Guards",
    quote: "Best home service experience I've had. They installed gutter guards and the communication through their system kept me updated every step of the way. No more clogged gutters!"
  },
  {
    name: "Sarah L.",
    city: "Sacramento",
    service: "Exterior Painting",
    quote: "Our home looks brand new! The crew was meticulous with prep work and the paint job is flawless. Clean job site every day, and the price was very competitive."
  },
  {
    name: "Michael T.",
    city: "Citrus Heights",
    service: "Kitchen Remodeling",
    quote: "We couldn't be happier with our new kitchen. ProFlow handled everything from design to final installation, and their ProFlow360 system made it easy to track progress."
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            Customer Stories
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Hear from homeowners across Northern California who trust ProFlow for their home services and remodeling needs.
          </p>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((t) => (
            <figure key={t.name} className="rounded-lg border-2 border-mint_green-300 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed text-sm">"{t.quote}"</blockquote>
              <figcaption className="mt-5 border-t border-mint_green-200 pt-4">
                <div className="heading text-base font-bold text-slate-900">{t.name}</div>
                <div className="mt-1 text-sm text-slate-600">{t.city}, CA</div>
                <div className="mt-1 text-xs text-viridian-600 font-medium">{t.service}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

