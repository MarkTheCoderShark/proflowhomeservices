import type { ReactNode } from "react";
import CTASection from "@/components/sections/CTASection";
import type { ServicePageContent } from "@/data/services";

export default function ServicePageTemplate({
  data,
  notes,
}: {
  data: ServicePageContent;
  notes?: ReactNode;
}) {
  return (
    <div>
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">{data.heroTitle}</h1>
          <p className="mt-2 text-slate max-w-2xl">{data.heroSubtitle}</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Overview</h2>
            <p className="mt-3 text-slate">{data.overview}</p>
            {notes ? <p className="mt-3 text-slate">{notes}</p> : null}
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-evergreen">Why it matters</h2>
            <ul className="mt-3 list-disc pl-5 text-slate space-y-2">
              {data.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section bg-mist">
        <div className="container">
          <h2 className="heading text-2xl font-semibold text-evergreen">Process & Expectations</h2>
          <ol className="mt-4 list-decimal pl-5 text-slate space-y-3">
            {data.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="heading text-lg font-semibold text-evergreen">{highlight.title}</div>
              <p className="mt-2 text-slate text-sm">{highlight.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </div>
  );
}
