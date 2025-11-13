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
    <section className="section">
      <div className="container">
        <h2 className="heading text-2xl sm:text-3xl font-semibold text-evergreen">Our Process</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-5">
          {steps.map((s, idx) => (
            <li key={s.title} className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="heading text-aqua font-semibold">Step {idx + 1}</div>
              <div className="heading text-evergreen font-semibold">{s.title}</div>
              {s.desc ? <p className="mt-1 text-slate text-sm">{s.desc}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

