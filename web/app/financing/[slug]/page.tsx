import CTASection from "@/components/sections/CTASection";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { financingPrograms, getFinancingProgram } from "@/data/financing";
import { seoMetadata } from "@/lib/seo";
import { BadgeDollarSign, CheckCircle, ClipboardCheck, Clock, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return financingPrograms.map((program) => ({ slug: program.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: PageProps) {
  const program = getFinancingProgram(params.slug);
  if (!program) {
    return seoMetadata({
      title: "Financing Program | ProFlow Home Services",
      description: "Explore financing paths for Sacramento-area remodeling projects.",
      path: `/financing/${params.slug}`,
    });
  }

  return seoMetadata({
    title: `${program.name} | ProFlow Financing Program`,
    description: program.summary,
    path: `/financing/${program.slug}`,
  });
}

export default function FinancingProgramPage({ params }: PageProps) {
  const program = getFinancingProgram(params.slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Financing", url: "/financing" },
          { name: program.name, url: `/financing/${program.slug}` },
        ]}
      />

      {/* Hero */}
      <section
        className="relative section overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(8, 51, 68, 0.9), rgba(6, 78, 59, 0.85)), url(${program.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10 grid gap-8 lg:grid-cols-[2fr,1fr] text-white">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-mint_cream-200">Financing Program</p>
            <h1 className="heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">{program.name}</h1>
            <p className="mt-3 text-lg text-mint_cream-100 leading-relaxed">{program.headline}</p>
            <p className="mt-4 text-base text-mint_cream-50 leading-relaxed">{program.summary}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {program.bestFor.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-mint_green-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-viridian-900 px-6 py-3 rounded-md font-semibold shadow hover:bg-mint_cream-100 transition"
              >
                Request This Program
              </Link>
              <Link
                href="/financing#programs"
                className="border border-white/70 px-6 py-3 rounded-md font-semibold text-white hover:bg-white/10 transition"
              >
                Back to Financing Overview
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur">
            <h2 className="heading text-xl font-semibold text-white">Program Snapshot</h2>
            <div className="mt-4 space-y-4 text-sm">
              <ProgramStat icon={BadgeDollarSign} label="APR Range" value={program.aprRange} />
              <ProgramStat icon={Clock} label="Term Options" value={program.termRange} />
              <ProgramStat icon={ClipboardCheck} label="Loan Amounts" value={program.loanAmounts} />
              <ProgramStat icon={Clock} label="Funding Speed" value={program.fundingSpeed} />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div>
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">Why Homeowners Choose {program.name}</h2>
            <ul className="mt-6 space-y-4">
              {program.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-viridian-600 flex-shrink-0 mt-1" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-mint_green-200 bg-mint_green-50 p-6">
            <h3 className="heading text-xl font-semibold text-viridian-900">Perfect for</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {program.bestFor.map((item) => (
                <li key={`${item}-sidebar`} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-viridian-600 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-mint_green-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">How the {program.name} Process Works</h2>
            <p className="mt-3 text-slate-700">ProFlow handles communication with lenders and keeps your project schedule moving.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {program.process.map((step, index) => (
              <div key={step.title} className="rounded-2xl border-2 border-mint_green-200 bg-white p-5">
                <div className="w-10 h-10 rounded-full bg-mint_green-100 text-viridian-700 font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="heading text-lg font-semibold text-viridian-900 mt-4">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr,1fr] items-center">
          <div>
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">Documents You’ll Need</h2>
            <p className="mt-3 text-slate-700">
              Having these items ready ensures the lender can confirm approval without delaying your construction start date.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-mint_green-200 bg-mint_green-50 p-6">
            <ul className="space-y-3 text-sm text-slate-700">
              {program.documents.map((doc) => (
                <li key={doc} className="flex gap-3">
                  <FileText className="w-5 h-5 text-viridian-600 flex-shrink-0 mt-0.5" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ProgramStat({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="w-5 h-5 text-mint_green-200 flex-shrink-0" />
      <div>
        <p className="text-xs uppercase tracking-wide text-mint_cream-200">{label}</p>
        <p className="text-base font-semibold">{value}</p>
      </div>
    </div>
  );
}
