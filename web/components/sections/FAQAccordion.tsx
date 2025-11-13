type QA = { q: string; a: string };

export const faqs: QA[] = [
  { q: "How fast can you schedule?", a: "We confirm quickly and coordinate through ProFlow360 for smooth scheduling." },
  { q: "Are you licensed and insured?", a: "Yes, we are fully licensed and insured for your protection." },
  { q: "Do you serve my city?", a: "We cover Sacramento, Roseville, Rocklin, Folsom, and more." },
];

export default function FAQAccordion() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-evergreen">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
          {faqs.map((item) => (
            <details key={item.q} className="group p-4">
              <summary className="cursor-pointer list-none heading text-evergreen font-medium">
                {item.q}
              </summary>
              <p className="mt-2 text-slate">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
