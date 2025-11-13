type Step = { title: string; desc?: string };

const defaultSteps: Step[] = [
  { title: "Consultation", desc: "Discuss goals, budget, and scope." },
  { title: "Scope & Estimate", desc: "Clear proposal with timeline." },
  { title: "Design & Planning", desc: "Selections and scheduling." },
  { title: "Construction", desc: "Organized build with updates." },
  { title: "Final Walkthrough", desc: "Quality check and closeout." },
];

export default function ProcessTimeline({ steps = defaultSteps }: { steps?: Step[] }) {
  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900">Our Process</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-5">
          {steps.map((s, idx) => (
            <li key={s.title} className="rounded-lg bg-white border-2 border-mint_green-200 p-5 shadow-sm">
              <div className="heading text-viridian-700 font-semibold text-sm">Step {idx + 1}</div>
              <div className="heading text-slate-900 font-semibold mt-1">{s.title}</div>
              {s.desc ? <p className="mt-2 text-slate-600 text-sm">{s.desc}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

