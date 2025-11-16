import CTASection from "@/components/sections/CTASection";
import { BreadcrumbsJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  BadgeDollarSign,
  Calculator,
  CheckCircle,
  ClipboardCheck,
  Clock,
  FileText,
  HandCoins,
  Home,
  Phone,
  Shield,
} from "lucide-react";
import { financingPrograms } from "@/data/financing";

export const metadata = seoMetadata({
  title: "Home Improvement Financing | ProFlow Home Services",
  description:
    "Flexible payment programs for remodeling, repairs, and upgrades in Sacramento, Roseville, Rocklin, and nearby cities. Explore low monthly payments, 0% promos, and easy approvals.",
  path: "/financing",
});

const steps = [
  {
    title: "Share your project",
    desc: "Tell us about scope, budget, and timeline during a quick call or site visit.",
    icon: Phone,
    time: "15 minutes",
  },
  {
    title: "Pick a payment path",
    desc: "We recommend 0% promos, low APR terms, or equity options based on your goals.",
    icon: Calculator,
    time: "1 business day",
  },
  {
    title: "Submit and approve",
    desc: "Complete a secure application with our lending partners and receive a decision fast.",
    icon: ClipboardCheck,
    time: "Same day approvals available",
  },
  {
    title: "Schedule your project",
    desc: "Lock in materials and start dates once funding is confirmed—no delays.",
    icon: CheckCircle,
    time: "48 hours after approval",
  },
];

const faqs = [
  {
    q: "Which projects qualify for financing?",
    a: "Most services over $2,500 qualify, including kitchens, bathrooms, ADUs, flooring, exterior paint, and bundled maintenance plans.",
  },
  {
    q: "Do I need perfect credit?",
    a: "No. Our finance partners consider credit scores starting in the mid-600s and also review income and home equity for larger scopes.",
  },
  {
    q: "Can I combine financing with cash payments?",
    a: "Yes. Many homeowners finance a portion of the project and pay the rest up front to keep monthly payments low.",
  },
  {
    q: "How long does approval take?",
    a: "Most unsecured programs return a decision within minutes. HELOC or equity options typically take 5–10 business days depending on your lender.",
  },
];

const quickFacts = [
  { label: "Minimum project size", value: "$2,500", icon: HandCoins },
  { label: "Max financing", value: "Up to $150K", icon: BadgeDollarSign },
  { label: "Decision speed", value: "As fast as same-day", icon: Clock },
  { label: "Service area", value: "Sacramento & Placer County", icon: Home },
];

const documentChecklist = [
  "Driver's license or state ID",
  "Most recent paystub or proof of income",
  "Rough project estimate from ProFlow",
  "Mortgage or equity statement (if using HELOC)",
];

export default function Financing() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Financing", url: "/financing" },
        ]}
      />

      {/* Hero */}
      <section className="relative section overflow-hidden bg-gradient-to-br from-viridian-900 via-viridian-800 to-viridian-900 text-white">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-mint_cream-200">Flexible Payment Options</p>
            <h1 className="heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Finance Your Remodel or Home Upgrade With Confidence
            </h1>
            <p className="mt-4 text-lg text-mint_cream-100 leading-relaxed">
              Spread the cost of kitchens, bathrooms, ADUs, gutters, or bundled maintenance across monthly payments—without delaying your project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-white text-viridian-900 px-6 py-3 rounded-md font-semibold shadow hover:bg-mint_cream-100 transition"
              >
                Start Your Financing Request
              </a>
              <a
                href="tel:+19167407249"
                className="border border-white/70 px-6 py-3 rounded-md font-semibold text-white hover:bg-white/10 transition"
              >
                Call (916) 740-7249
              </a>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl border border-white/20 p-6 lg:p-8 backdrop-blur">
            <h2 className="heading text-xl font-semibold text-white">Financing Fast Facts</h2>
            <p className="text-sm text-mint_cream-200 mb-6">
              Simple programs curated for Sacramento and Placer County homeowners.
            </p>
            <div className="grid gap-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
                  <fact.icon className="w-5 h-5 text-mint_green-200" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-mint_cream-200">{fact.label}</p>
                    <p className="text-lg font-semibold">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div>
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">
              Funding That Matches Your Project Timeline
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Every project starts with a transparent scope and payment schedule. Whether you want to pay for a quick upgrade over 12 months or finance a multi-phase remodel over several years, we coordinate lenders, documentation, and draw schedules so the work never pauses for paperwork.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Our team regularly helps homeowners in Roseville, Rocklin, Granite Bay, Lincoln, Loomis, Folsom, and Sacramento secure competitive rates through trusted national finance partners and local credit unions.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Soft credit pulls to explore options", "Combine financing with cash or insurance proceeds", "Transparent payoff schedules", "Dedicated ProFlow coordinator"].map((item) => (
                <div key={item} className="flex gap-3">
                  <Shield className="w-5 h-5 text-viridian-600 flex-shrink-0" />
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border-2 border-mint_green-200 bg-mint_green-50 p-6">
            <h3 className="heading text-xl font-semibold text-viridian-900 mb-3">What We Can Finance</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-viridian-600 mt-0.5" />Kitchen, bathroom, and flooring remodels</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-viridian-600 mt-0.5" />ADUs, garage conversions, and additions</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-viridian-600 mt-0.5" />Exterior painting, siding, gutters, and roofing tie-ins</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-viridian-600 mt-0.5" />Bundles of maintenance services with annual plans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="section bg-mint_green-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">Popular Financing Programs</h2>
            <p className="mt-3 text-slate-700">
              Choose from promotional plans, longer-term fixed payments, or equity-backed options. We help you compare fees, timelines, and payoff strategies.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {financingPrograms.map((program) => (
              <article key={program.slug} className="rounded-2xl border-2 border-mint_green-200 bg-white p-6 shadow-sm flex flex-col">
                <div className="flex items-center gap-3">
                  <HandCoins className="w-6 h-6 text-viridian-600" />
                  <h3 className="heading text-xl font-bold text-viridian-900">{program.name}</h3>
                </div>
                <p className="mt-3 text-sm font-semibold text-viridian-700">{program.headline}</p>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{program.summary}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-slate-500">Best for</p>
                <p className="text-sm text-viridian-800 font-medium">{program.bestFor.join(", ")}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {program.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-viridian-600 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/financing/${program.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-viridian-700 hover:text-viridian-900"
                >
                  View program details
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">How Financing Works With ProFlow</h2>
            <p className="mt-3 text-slate-700">We guide you from first conversation to funding approval so there are zero surprises.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border-2 border-mint_green-200 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint_green-100 text-viridian-700 font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <step.icon className="w-6 h-6 text-viridian-700" />
                </div>
                <h3 className="heading text-lg font-semibold text-viridian-900 mt-4">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{step.desc}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-slate-500">Timeline</p>
                <p className="text-sm text-viridian-800 font-medium">{step.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section bg-viridian-900 text-white">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading text-2xl sm:text-3xl font-bold">Documents To Have Ready</h2>
            <p className="mt-3 text-mint_cream-100">
              Preparing these items speeds up approvals and keeps your project schedule on track.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {documentChecklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <FileText className="w-5 h-5 text-mint_green-300 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 rounded-2xl border border-white/20 p-6">
            <h3 className="heading text-xl font-semibold text-white">Why Homeowners Finance With ProFlow</h3>
            <ul className="mt-4 space-y-4 text-sm text-mint_cream-100">
              <li className="flex gap-3"><Shield className="w-5 h-5 text-mint_green-300" />Licensed, insured contractor coordinating directly with lenders</li>
              <li className="flex gap-3"><Clock className="w-5 h-5 text-mint_green-300" />Hold project dates while paperwork finalizes</li>
              <li className="flex gap-3"><HandCoins className="w-5 h-5 text-mint_green-300" />Draw schedules aligned with construction milestones</li>
              <li className="flex gap-3"><Phone className="w-5 h-5 text-mint_green-300" />Single point of contact for questions and status updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">Financing FAQs</h2>
            <p className="mt-3 text-slate-700">Answers to the most common questions homeowners ask before they apply.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border-2 border-mint_green-200 bg-mint_green-50 p-6">
                <h3 className="heading text-lg font-semibold text-viridian-900">{faq.q}</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQPageJsonLd faqs={faqs.map((item) => ({ question: item.q, answer: item.a }))} />
      <CTASection />
    </>
  );
}
