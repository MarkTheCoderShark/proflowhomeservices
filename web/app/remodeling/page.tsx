import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  CheckCircle,
  Clock,
  Shield,
  Users,
  MessageSquare,
  ClipboardCheck,
  HardHat,
  Sparkles,
  MapPin,
  Award,
  Calendar
} from "lucide-react";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata = seoMetadata({
  title: "Home Remodeling Contractor | Sacramento, Roseville, Rocklin | ProFlow Home Services",
  description:
    "Transform your home with stress-free, high-quality remodeling. Licensed contractors specializing in kitchens, bathrooms, ADUs & full home renovations. Serving Sacramento & Placer County. Call (916) 740-7249.",
  path: "/remodeling",
});

const remodelingSections = [
  { slug: "bathroom", name: "Bathroom Remodeling", icon: "🛁" },
  { slug: "kitchen", name: "Kitchen Remodeling", icon: "🍳" },
  { slug: "flooring", name: "Flooring Installation", icon: "🪵" },
  { slug: "drywall-framing", name: "Drywall & Framing", icon: "🔨" },
  { slug: "adu", name: "ADU Construction", icon: "🏠" },
];

const processSteps = [
  {
    number: "1",
    title: "Consultation",
    desc: "Discuss your vision, budget, and timeline during an in-home consultation.",
    icon: MessageSquare,
  },
  {
    number: "2",
    title: "Scope & Estimate",
    desc: "Receive a clear proposal with detailed timeline and transparent pricing—no surprises.",
    icon: ClipboardCheck,
  },
  {
    number: "3",
    title: "Design & Planning",
    desc: "Finalize material selections, secure permits, and lock in your construction schedule.",
    icon: Sparkles,
  },
  {
    number: "4",
    title: "Construction",
    desc: "Our licensed team completes your remodel with daily updates via ProFlow360.",
    icon: HardHat,
  },
  {
    number: "5",
    title: "Final Walkthrough",
    desc: "Quality check, punch-list completion, and warranty documentation before you celebrate.",
    icon: CheckCircle,
  },
];

const testimonials = [
  {
    text: "ProFlow transformed our outdated kitchen into our dream space. On time, clean, and excellent communication throughout the entire project.",
    author: "Jessica R.",
    location: "Roseville",
    rating: 5,
  },
  {
    text: "Our bathroom remodel came out perfect. The ProFlow360 system kept me updated the entire time. I always knew what was happening next.",
    author: "Adam S.",
    location: "Folsom",
    rating: 5,
  },
  {
    text: "From consultation to final walkthrough, the ProFlow team was professional, clean, and detail-oriented. Highly recommend for any remodeling project.",
    author: "Maria L.",
    location: "Granite Bay",
    rating: 5,
  },
];

const faqs = [
  {
    q: "How long does a typical remodel take?",
    a: "Timeline varies by project scope: Bathroom remodels typically take 2-4 weeks, kitchen remodels 4-8 weeks, and full home renovations 8-16 weeks. We provide detailed timelines during your estimate and update you via ProFlow360 throughout construction.",
  },
  {
    q: "Do you help with design and material selection?",
    a: "Yes! Our team guides you through material selection, finishes, fixtures, and layout options. We can work with your designer or provide design consultation as part of our service. We help you make informed decisions that fit your style and budget.",
  },
  {
    q: "Do you handle permits and inspections?",
    a: "Absolutely. ProFlow manages all permits, code compliance, and inspection scheduling for your remodel. We coordinate with local building departments in Sacramento, Placer County, and surrounding areas to ensure everything is properly permitted and inspected.",
  },
  {
    q: "Do you use subcontractors or in-house crews?",
    a: "We use a combination of both. Our licensed project managers oversee all work, with specialized subcontractors for electrical, plumbing, and HVAC. All subcontractors are vetted, licensed, insured, and background-checked to ProFlow standards.",
  },
  {
    q: "What is your warranty coverage?",
    a: "We provide a comprehensive warranty on all workmanship and coordinate manufacturer warranties on materials and fixtures. Specific warranty terms are detailed in your contract and vary by project scope. We stand behind every remodel we complete.",
  },
  {
    q: "Do you offer financing options?",
    a: "Yes, we offer flexible financing options for qualified homeowners. Contact us to discuss payment plans and financing solutions that fit your budget and remodeling goals.",
  },
  {
    q: "What makes ProFlow different from other remodeling contractors?",
    a: "ProFlow combines licensed project management, ProFlow360 real-time communication, clean job sites, and transparent pricing. We're local to Roseville with 1,000+ completed projects across Sacramento and Placer County. Our multi-division capabilities mean one company handles gutters, painting, and remodeling—eliminating coordination headaches.",
  },
  {
    q: "Will my home be livable during the remodel?",
    a: "We plan phased construction to minimize disruption. For kitchen remodels, we set up temporary cooking areas. For bathrooms, we sequence work to ensure you have access to facilities. Our crews maintain clean, organized job sites with daily cleanup.",
  },
];

export default function Remodeling() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Remodeling", url: "/remodeling" },
        ]}
      />

      {/* Hero Section */}
      <section
        className="relative section overflow-hidden"
        style={{
          backgroundImage: "url(/hero-remodeling.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-viridian-900/75 to-viridian-900/85" />
        <div className="container relative z-10 max-w-4xl">
          <h1 className="heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Transform Your Home With Stress-Free, High-Quality Remodeling
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-mint_cream-100 drop-shadow-md leading-relaxed">
            Kitchens, bathrooms, ADUs, additions, flooring, and full-home renovations—with licensed project managers and clean job sites from start to finish.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              href="/contact"
              darkBg
              className="text-lg px-8 py-3"
            >
              Get Free Estimate
            </Button>
            <Button
              asChild
              href="#gallery"
              variant="secondary"
              darkBg
              className="text-lg px-8 py-3"
            >
              See Our Work
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-mint_cream-200 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <span className="font-medium">5-Star Rated in Sacramento & Placer County</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-mint_green-400 flex-shrink-0" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-mint_green-400 flex-shrink-0" />
              <span className="font-medium">1,000+ Home Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-mint_green-400 flex-shrink-0" />
              <span className="font-medium">Clean Job Sites, Professional Crews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Why Choose ProFlow */}
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="heading text-2xl font-bold text-viridian-900">Overview</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Licensed remodelers coordinate design, permits, and construction so your project moves forward without surprises. From initial consultation to final walkthrough, ProFlow manages every detail with transparent communication and professional execution.
            </p>
          </div>
          <div>
            <h2 className="heading text-2xl font-bold text-viridian-900">Why It Matters</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Transform outdated spaces into dream rooms</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Increase your home's value and enjoyment</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Avoid costly mistakes with professional oversight</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="heading text-2xl font-bold text-viridian-900">Why Choose ProFlow</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Tight project management with guaranteed work schedules</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Transparent pricing—no hidden fees or surprises</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>ProFlow360 communication system with daily updates</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>Clean crews, background-checked subcontractors</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-viridian-600 flex-shrink-0 mt-0.5" />
                <span>High-quality workmanship backed by warranty</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Process Timeline */}
      <section className="section bg-mint_green-50">
        <div className="container">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900 text-center mb-4">
            Our Remodeling Process
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            From vision to reality, we guide you through every step with clear communication and professional execution.
          </p>

          <div className="grid gap-6 md:grid-cols-5">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Card */}
                  <div className="bg-white rounded-lg border-2 border-mint_green-200 p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                    {/* Number Badge */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-viridian-600 text-white flex items-center justify-center font-bold shadow-md">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-viridian-100 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-viridian-700" />
                    </div>

                    {/* Content */}
                    <h3 className="heading text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="section bg-viridian-900">
        <div className="container">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            See The Transformation
          </h2>
          <p className="text-center text-mint_cream-200 mb-10 max-w-2xl mx-auto">
            Real ProFlow remodeling projects across Sacramento and Placer County.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20 overflow-hidden">
              <div className="aspect-[4/3] bg-slate-800 flex items-center justify-center text-white/60">
                <span className="text-lg font-medium">Before → After Kitchen</span>
              </div>
              <div className="p-4 text-white">
                <p className="font-semibold">White Shaker Kitchen Remodel, Rocklin, CA</p>
                <p className="text-sm text-mint_cream-200 mt-1">Cabinet replacements, quartz countertops, new lighting & flooring.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20 overflow-hidden">
              <div className="aspect-[4/3] bg-slate-800 flex items-center justify-center text-white/60">
                <span className="text-lg font-medium">Before → After Bathroom</span>
              </div>
              <div className="p-4 text-white">
                <p className="font-semibold">Master Bath Transformation, Roseville, CA</p>
                <p className="text-sm text-mint_cream-200 mt-1">Full tile surround, vanity upgrade, modern fixtures & lighting.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20 overflow-hidden">
              <div className="aspect-[4/3] bg-slate-800 flex items-center justify-center text-white/60">
                <span className="text-lg font-medium">Before → After Flooring</span>
              </div>
              <div className="p-4 text-white">
                <p className="font-semibold">Luxury Vinyl Plank Installation, Folsom, CA</p>
                <p className="text-sm text-mint_cream-200 mt-1">Waterproof flooring install completed in 2 days.</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-mint_cream-300 mt-6">
            * Before & After photos coming soon. Contact us to see our full project portfolio.
          </p>
        </div>
      </section>

      {/* Project Gallery with Enhanced Captions */}
      <section id="gallery" className="section bg-white">
        <div className="container">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900 mb-10 text-center">
            Remodeling Project Gallery
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg overflow-hidden border-2 border-mint_green-200 shadow-sm hover:shadow-lg transition-shadow">
              <Image src="/remodel-kitchen.jpeg" alt="Modern kitchen" width={400} height={300} className="h-64 w-full object-cover" />
              <div className="p-5 bg-white">
                <h3 className="heading text-lg font-bold text-slate-900">Modern Kitchen Remodel, Roseville</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Complete kitchen transformation with custom cabinetry, quartz countertops, stainless appliances, and recessed lighting.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border-2 border-mint_green-200 shadow-sm hover:shadow-lg transition-shadow">
              <Image src="/remodel-flooring.jpeg" alt="Flooring installation" width={400} height={300} className="h-64 w-full object-cover" />
              <div className="p-5 bg-white">
                <h3 className="heading text-lg font-bold text-slate-900">Luxury Vinyl Plank Installation, Rocklin</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Waterproof luxury vinyl plank flooring throughout main living areas, completed in 3 days with zero disruption.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border-2 border-mint_green-200 shadow-sm hover:shadow-lg transition-shadow">
              <Image src="/remodel-adu.jpeg" alt="ADU construction" width={400} height={300} className="h-64 w-full object-cover" />
              <div className="p-5 bg-white">
                <h3 className="heading text-lg font-bold text-slate-900">Detached ADU Build, Granite Bay</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Full design-build ADU project including permits, foundation, framing, and turnkey finish work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Remodeling Services */}
      <section className="section bg-mint_green-50">
        <div className="container">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900 mb-10 text-center">
            Explore Our Remodeling Services
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {remodelingSections.map((s) => (
              <Link
                key={s.slug}
                href={`/remodeling/${s.slug}`}
                className="group rounded-lg border-2 border-mint_green-300 bg-white p-6 transition hover:border-viridian-500 hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="heading text-xl font-bold text-slate-900 group-hover:text-viridian-700 transition-colors">
                  {s.name}
                </div>
                <p className="mt-2 text-sm text-viridian-600 font-medium">
                  Learn More →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="section bg-white">
        <div className="container text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-viridian-600" />
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">
              Serving Homeowners Across Sacramento & Placer County
            </h2>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Our remodeling contractors in <strong>Roseville, Rocklin, Granite Bay, Lincoln, Loomis, Folsom, Citrus Heights, Fair Oaks, Auburn, Sacramento</strong>, and surrounding areas deliver kitchen & bathroom remodels, ADU construction, flooring installation, and full-home renovations with licensed project management and guaranteed quality.
          </p>
          <p className="mt-4 text-slate-600">
            ProFlow Home Services is locally based in Roseville, CA, serving all of Placer and Sacramento counties with professional remodeling services.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-viridian-900">
        <div className="container">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            What Homeowners Say About ProFlow
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20 p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-white italic leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="text-mint_cream-200 text-sm">
                  <p className="font-semibold">— {testimonial.author}</p>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900 text-center mb-10">
            Frequently Asked Questions About Home Remodeling
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-mint_green-50 rounded-lg border-2 border-mint_green-200 overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-slate-900 hover:bg-mint_green-100 transition">
                  <span className="heading text-lg">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-viridian-600 transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
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

      {/* Enhanced CTA */}
      <section className="section bg-viridian-900">
        <div className="container max-w-3xl text-center">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Remodel?
          </h2>
          <p className="text-lg text-mint_cream-100 mb-3">
            Get a fast, no-pressure estimate. Our licensed team handles everything from design to final inspection.
          </p>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-mint_cream-200 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Same-day responses</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Licensed remodeling contractors</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Serving Sacramento & Placer County</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              href="/contact"
              darkBg
              className="text-lg px-8 py-3"
            >
              Get Free Estimate
            </Button>
            <Button
              asChild
              href="tel:+19167407249"
              variant="secondary"
              darkBg
              className="text-lg px-8 py-3"
            >
              Call (916) 740-7249
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
