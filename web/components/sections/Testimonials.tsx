type Testimonial = { name: string; quote: string };

const list: Testimonial[] = [
  { name: "Roseville Homeowner", quote: "Skilled, clean, and on schedule. Highly recommend." },
  { name: "Rocklin Customer", quote: "Clear communication and great results across multiple services." },
  { name: "Sacramento Client", quote: "Professional crew and fair pricing. Will use again." },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-evergreen">What Homeowners Say</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {list.map((t) => (
            <figure key={t.name} className="rounded-lg border border-zinc-200 bg-white p-5">
              <blockquote className="text-slate">“{t.quote}”</blockquote>
              <figcaption className="mt-3 heading text-sm text-evergreen">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

