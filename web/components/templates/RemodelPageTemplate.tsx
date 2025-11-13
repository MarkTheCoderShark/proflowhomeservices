import type { ReactNode } from "react";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import type { RemodelContent } from "@/data/remodels";

export default function RemodelPageTemplate({
  data,
  notes,
  extraSections,
  includeCTA = true,
}: {
  data: RemodelContent;
  notes?: ReactNode;
  extraSections?: ReactNode;
  includeCTA?: boolean;
}) {
  return (
    <div>
      <section
        className="relative section overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.6)), url(${data.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <h1 className="heading text-3xl font-semibold text-white">{data.heroTitle}</h1>
          <p className="mt-2 text-white/80 max-w-2xl">{data.heroSubtitle}</p>
        </div>
        <div className="absolute inset-0 bg-black/10" />
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
              {data.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section bg-mist">
        <div className="container">
          <h2 className="heading text-2xl font-semibold text-evergreen">Process</h2>
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
            <div key={highlight.title} className="rounded-lg border border-zinc-200 bg-white p-5">
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
      {data.copySections.map((section) => (
        <section key={section.title} className="section bg-white">
          <div className="container">
            <h3 className="heading text-xl font-semibold text-evergreen">{section.title}</h3>
            <p className="mt-2 text-slate">{section.text}</p>
          </div>
        </section>
      ))}
      {data.internalLinks.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container">
            <h3 className="heading text-xl font-semibold text-evergreen">Explore related remodeling topics</h3>
            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              {data.internalLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-aqua underline-offset-2 hover:underline">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
      {extraSections}
      {notes ? (
        <section className="section bg-slate-50">
          <div className="container">
            <p className="text-slate">{notes}</p>
          </div>
        </section>
      ) : null}
      {includeCTA ? <CTASection /> : null}
    </div>
  );
}
