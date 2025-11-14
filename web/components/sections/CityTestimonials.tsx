export type CityTestimonial = {
  name: string;
  neighborhood?: string;
  quote: string;
  service: string;
};

export default function CityTestimonials({
  city,
  testimonials,
}: {
  city: string;
  testimonials: CityTestimonial[];
}) {
  if (!testimonials.length) return null;

  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            What {city} Homeowners Are Saying
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            A few recent notes from neighbors who trusted ProFlow with their gutters, painting, remodeling, and repairs.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name + t.service}
              className="rounded-lg border-2 border-mint_green-300 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 text-sm leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 border-t border-mint_green-200 pt-3">
                <div className="heading text-sm font-bold text-slate-900">
                  {t.name}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {t.neighborhood
                    ? `${t.neighborhood} – ${city}`
                    : `${city}, CA`}
                </div>
                <div className="mt-1 text-xs text-viridian-600 font-medium">
                  {t.service}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

