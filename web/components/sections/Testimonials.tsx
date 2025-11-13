type Testimonial = { name: string; quote: string };

const list: Testimonial[] = [
  { name: "Roseville Homeowner", quote: "Skilled, clean, and on schedule. Highly recommend." },
  { name: "Rocklin Customer", quote: "Clear communication and great results across multiple services." },
  { name: "Sacramento Client", quote: "Professional crew and fair pricing. Will use again." },
];

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900">What Homeowners Say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {list.map((t) => (
            <figure key={t.name} className="rounded-lg border-2 border-mint_green-200 bg-mint_green-50 p-6 shadow-sm">
              <blockquote className="text-slate-700 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-4 heading text-sm font-semibold text-viridian-700">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

