import type { ReactNode } from "react";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BeforeAfter from "@/components/ui/BeforeAfter";
import RelatedServicesSpotlight from "@/components/sections/RelatedServicesSpotlight";
import ServiceAreasGrid from "@/components/sections/ServiceAreasGrid";
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
      {/* Hero Section - Background Image with dark overlay */}
      <section
        className="relative section overflow-hidden"
        style={{
          backgroundImage: `url(${data.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-viridian-900/60 to-viridian-900/70" />
        <div className="container relative z-10">
          <h1 className="heading text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">{data.heroTitle}</h1>
          <p className="mt-3 text-lg text-white drop-shadow-md max-w-2xl">{data.heroSubtitle}</p>
        </div>
      </section>

      {/* Section 1: Overview & Benefits - white */}
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="heading text-2xl font-semibold text-viridian-900">Overview</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">{data.overview}</p>
            {notes ? <p className="mt-3 text-slate-700 leading-relaxed">{notes}</p> : null}
          </div>
          <div>
            <h2 className="heading text-2xl font-semibold text-viridian-900">Why it matters</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
              {data.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 1.5: Before/After (Optional) - mint_green-50 */}
      {data.beforeAfter && (
        <section className="section bg-mint_green-50">
          <div className="container">
            <h2 className="heading text-2xl font-semibold text-viridian-900 mb-6">Before & After</h2>
            <BeforeAfter
              beforeImage={data.beforeAfter.before}
              afterImage={data.beforeAfter.after}
              beforeLabel={data.beforeAfter.beforeLabel}
              afterLabel={data.beforeAfter.afterLabel}
            />
          </div>
        </section>
      )}

      {/* Section 2: Process - mint_green-50 */}
      <section className="section bg-mint_green-50">
        <div className="container">
          <h2 className="heading text-2xl font-semibold text-viridian-900">Process & Expectations</h2>
          <ol className="mt-4 list-decimal pl-5 text-slate-700 space-y-3">
            {data.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 3: Highlights - viridian-900 (dark band) */}
      <section className="section bg-viridian-900">
        <div className="container">
          <h2 className="heading text-2xl font-semibold text-white mb-6">Key Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-lg bg-white p-6 shadow-lg">
                <div className="heading text-lg font-semibold text-slate-900">{highlight.title}</div>
                <p className="mt-2 text-slate-600 text-sm">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Gallery - white */}
      {data.gallery && data.gallery.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <h2 className="heading text-2xl font-semibold text-viridian-900">Project Gallery</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.gallery.map((item) => (
                <div key={item.src} className="rounded-lg overflow-hidden border-2 border-mint_green-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
                  <Image src={item.src} alt={item.alt} width={400} height={300} className="h-48 w-full object-cover" />
                  <p className="p-4 text-sm text-slate-700">{item.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5+: Copy Sections - alternating mint_green-50 and white */}
      {data.copySections.map((section, index) => (
        <section
          key={section.title}
          className={`section ${index % 2 === 0 ? 'bg-mint_green-50' : 'bg-white'}`}
        >
          <div className="container">
            <h3 className="heading text-xl font-semibold text-viridian-900">{section.title}</h3>
            <p className="mt-2 text-slate-700 leading-relaxed">{section.text}</p>
          </div>
        </section>
      ))}

      {/* Related Services Spotlight (if provided) */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesSpotlight services={data.relatedServices} />
      )}

      {/* Service Areas Grid */}
      {data.serviceAreas && data.serviceAreas.length > 0 ? (
        <ServiceAreasGrid areas={data.serviceAreas} />
      ) : (
        <ServiceAreasGrid limit={6} />
      )}

      {/* Internal Links - white (if no related services spotlight) */}
      {!data.relatedServices && data.internalLinks.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <h3 className="heading text-xl font-semibold text-viridian-900">Explore Related Topics</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {data.internalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-viridian-600 font-medium underline-offset-2 hover:text-viridian-700 hover:underline transition"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section - with service-specific FAQs if available */}
      {data.faqs && data.faqs.length > 0 ? (
        <section className="section bg-white">
          <div className="container">
            <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900 mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {data.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-mint_green-50 rounded-lg border-2 border-mint_green-200 overflow-hidden"
                >
                  <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-slate-900 hover:bg-mint_green-100 transition">
                    <span className="heading text-lg">{faq.q}</span>
                    <svg
                      className="w-5 h-5 text-viridian-600 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-slate-700 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <FAQAccordion />
      )}

      {/* CTA/Footer Section */}
      <CTASection />
    </div>
  );
}
