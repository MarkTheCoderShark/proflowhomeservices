import type { ReactNode } from "react";
import Image from "next/image";
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
      <section
        className="relative section overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.24), rgba(0,0,0,0.5)), url(${data.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <h1 className="heading text-3xl font-semibold text-white">{data.heroTitle}</h1>
          <p className="mt-2 text-white/80 max-w-2xl">{data.heroSubtitle}</p>
        </div>
        <div className="absolute inset-0 bg-black/20" />
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
            <div key={highlight.title} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="heading text-lg font-semibold text-evergreen">{highlight.title}</div>
              <p className="mt-2 text-slate text-sm">{highlight.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {data.gallery && data.gallery.length > 0 && (
        <section className="section bg-mist">
          <div className="container">
            <h2 className="heading text-2xl font-semibold text-evergreen">Project gallery</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.gallery.map((item) => (
                <div key={item.src} className="rounded-lg overflow-hidden border border-zinc-200 bg-white">
                  <Image src={item.src} alt={item.alt} width={400} height={300} className="h-48 w-full object-cover" />
                  <p className="p-3 text-sm text-slate">{item.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {notes ? (
        <section className="section bg-slate-50">
          <div className="container">
            <p className="text-slate">{notes}</p>
          </div>
        </section>
      ) : null}
      <CTASection />
    </div>
  );
}
