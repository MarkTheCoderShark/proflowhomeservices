import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, ArticleJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import CTASection from "@/components/sections/CTASection";
import { getArticleBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const article = getArticleBySlug("pressure-washing-guide-sacramento")!;

export const metadata = seoMetadata({
  title: article.title,
  description: article.description,
  path: `/blog/${article.slug}`,
  image: article.image,
});

const faqs = [
  {
    question: "How often should I pressure wash my Sacramento home?",
    answer:
      "Most Sacramento homes benefit from annual pressure washing, typically in spring before summer entertaining or fall before the rainy season. Homes near major roads, with significant tree coverage, or in dusty areas may need cleaning twice yearly. Driveways and high-traffic areas often need more frequent attention.",
  },
  {
    question: "What's the difference between pressure washing and soft washing?",
    answer:
      "Pressure washing uses high-pressure water (1,500-4,000 PSI) to blast away dirt from hard surfaces like concrete and brick. Soft washing uses low pressure (under 500 PSI) with specialized cleaning solutions to safely clean delicate surfaces like roofs, siding, and painted surfaces without damage.",
  },
  {
    question: "Can pressure washing damage my home?",
    answer:
      "Yes, improper pressure washing can damage siding, strip paint, etch concrete, and force water behind walls. Professional technicians know the correct PSI, nozzle angles, and techniques for each surface. DIY pressure washing causes thousands of dollars in damage to Sacramento homes each year.",
  },
  {
    question: "How much does pressure washing cost in Sacramento?",
    answer:
      "Professional pressure washing in Sacramento typically costs $150-$300 for driveways, $200-$400 for house exteriors, and $100-$200 for decks/patios. Whole-property packages range from $400-$800. Pricing depends on square footage, surface types, and level of buildup.",
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer:
      "No. High-pressure washing can damage wood, vinyl siding, stucco, painted surfaces, and roofing materials. These surfaces require soft washing techniques. Concrete, brick, and stone typically handle high pressure well. Always match technique to surface type.",
  },
];

export default function PressureWashingGuide() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: article.title, url: `/blog/${article.slug}` },
        ]}
      />
      <ArticleJsonLd
        headline={article.title}
        description={article.description}
        image={article.image}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        url={`/blog/${article.slug}`}
      />
      <FAQPageJsonLd faqs={faqs} />

      {/* Hero Section */}
      <section
        className="relative section overflow-hidden"
        style={{
          backgroundImage: `url(${article.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-viridian-900/70 to-viridian-900/80" />
        <div className="container relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-mint_green-200 hover:text-white transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-mint_green-200 text-sm mb-3">
            <span className="bg-viridian-600 px-3 py-1 rounded-full text-white text-xs font-medium">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(article.datePublished).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
          <h1 className="heading text-3xl sm:text-4xl font-bold text-white drop-shadow-lg max-w-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-mint_green-100 max-w-2xl">
            {article.description}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:text-viridian-900 prose-a:text-viridian-600 prose-a:no-underline hover:prose-a:underline">
            <p className="lead text-xl text-slate-600">
              Nothing transforms your Sacramento home&apos;s curb appeal faster than professional
              pressure washing. In our dusty climate with hot summers and occasional rain,
              exterior surfaces accumulate grime that regular cleaning can&apos;t touch. Here&apos;s
              everything you need to know about restoring your home&apos;s sparkle.
            </p>

            <h2>Why Sacramento Homes Need Regular Pressure Washing</h2>
            <p>
              Sacramento&apos;s unique climate creates a perfect storm for exterior buildup:
            </p>
            <ul>
              <li>
                <strong>Dust and pollen:</strong> Our dry summers coat every surface in fine dust,
                while spring brings heavy pollen from valley oaks and grasses.
              </li>
              <li>
                <strong>Mold and mildew:</strong> North-facing walls and shaded areas develop
                green growth, especially after winter rains.
              </li>
              <li>
                <strong>Oxidation:</strong> Hot sun causes oxidation on painted surfaces,
                leaving chalky residue.
              </li>
              <li>
                <strong>Hard water stains:</strong> Sacramento&apos;s mineral-rich water leaves
                white deposits from sprinklers.
              </li>
              <li>
                <strong>Oil and automotive fluids:</strong> Driveways accumulate stains from
                vehicles.
              </li>
            </ul>

            <h2>Surfaces You Can (and Can&apos;t) Pressure Wash</h2>

            <h3>Safe for High-Pressure Washing (1,500-3,000+ PSI)</h3>
            <ul>
              <li>
                <strong>Concrete driveways and sidewalks:</strong> Can handle 3,000+ PSI for
                deep cleaning
              </li>
              <li>
                <strong>Brick and stone:</strong> Generally safe at 1,500-2,500 PSI
              </li>
              <li>
                <strong>Unpainted metal:</strong> Fences, railings, outdoor furniture
              </li>
              <li>
                <strong>Composite decking:</strong> Most brands handle moderate pressure
              </li>
            </ul>

            <h3>Requires Soft Washing (Under 500 PSI)</h3>
            <ul>
              <li>
                <strong>Roofing materials:</strong> Shingles, tiles, and metal roofs need
                gentle treatment
              </li>
              <li>
                <strong>Vinyl and aluminum siding:</strong> High pressure forces water behind
                panels
              </li>
              <li>
                <strong>Stucco:</strong> Sacramento&apos;s popular exterior can chip and crack
              </li>
              <li>
                <strong>Painted wood:</strong> High pressure strips paint instantly
              </li>
              <li>
                <strong>Windows:</strong> Can break seals and crack glass
              </li>
            </ul>

            <div className="bg-mint_green-50 border-l-4 border-viridian-500 p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-viridian-900 mb-2">Pro Tip</p>
              <p className="text-slate-700 mb-0">
                When in doubt, start with lower pressure and test an inconspicuous area.
                You can always increase pressure, but you can&apos;t undo damage from too much.
                Professional cleaners carry multiple nozzles and know exactly which to use
                for each surface.
              </p>
            </div>

            <h2>The Professional Pressure Washing Process</h2>

            <h3>1. Pre-Inspection and Assessment</h3>
            <p>
              Professional technicians evaluate your property to identify:
            </p>
            <ul>
              <li>Surface types and appropriate cleaning methods</li>
              <li>Problem areas needing special attention</li>
              <li>Potential hazards (loose paint, damaged surfaces)</li>
              <li>Landscaping and items needing protection</li>
            </ul>

            <h3>2. Pre-Treatment Application</h3>
            <p>
              For heavily soiled areas, we apply eco-friendly cleaning solutions that:
            </p>
            <ul>
              <li>Break down organic growth (mold, mildew, algae)</li>
              <li>Loosen embedded dirt and stains</li>
              <li>Reduce pressure needed for cleaning</li>
              <li>Sanitize surfaces</li>
            </ul>

            <h3>3. Pressure/Soft Washing</h3>
            <p>
              Using calibrated equipment, each surface receives appropriate treatment:
            </p>
            <ul>
              <li>High-pressure surface cleaning for concrete</li>
              <li>Soft wash application for siding and roofs</li>
              <li>Detailed work around fixtures and landscaping</li>
              <li>Proper technique to prevent streaking</li>
            </ul>

            <h3>4. Rinsing and Final Inspection</h3>
            <p>
              Complete rinse of all surfaces and surrounding areas ensures no cleaning
              solution residue remains. Final walkthrough confirms quality results.
            </p>

            <div className="bg-viridian-900 text-white p-8 my-8 rounded-lg">
              <h3 className="text-white mt-0">Professional Pressure Washing Services</h3>
              <p className="text-mint_green-100 mb-4">
                Our trained technicians use commercial-grade equipment and eco-friendly
                solutions to safely clean every surface of your Sacramento home. See the
                difference professional pressure washing makes.
              </p>
              <Link
                href="/services/pressure-washing"
                className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition no-underline"
              >
                Get Your Free Estimate
              </Link>
            </div>

            <h2>Surface-by-Surface Cleaning Guide</h2>

            <h3>Driveways and Concrete</h3>
            <p>
              Sacramento driveways face heavy soiling from vehicle fluids, tire marks, and
              our dusty environment. Professional cleaning involves:
            </p>
            <ul>
              <li>Pre-treatment of oil stains with degreasers</li>
              <li>Surface cleaner attachment for even results (no striping)</li>
              <li>3,000-4,000 PSI for deep cleaning</li>
              <li>Edge detailing along borders and expansion joints</li>
            </ul>
            <p>
              A clean driveway dramatically improves curb appeal and can add perceived
              value when selling your home.
            </p>

            <h3>House Siding</h3>
            <p>
              Most Sacramento homes have stucco, vinyl, or wood siding—all requiring soft
              wash techniques:
            </p>
            <ul>
              <li>Low-pressure application of cleaning solution</li>
              <li>Dwell time for solution to work</li>
              <li>Gentle rinse from top to bottom</li>
              <li>Special attention to areas under eaves where spiders nest</li>
            </ul>

            <h3>Decks and Patios</h3>
            <p>
              Outdoor living spaces are Sacramento lifestyle essentials. Proper cleaning
              depends on material:
            </p>
            <ul>
              <li>
                <strong>Wood decks:</strong> Medium pressure with wood-safe cleaners,
                following grain direction
              </li>
              <li>
                <strong>Composite:</strong> Low-to-medium pressure, check manufacturer
                recommendations
              </li>
              <li>
                <strong>Concrete patios:</strong> Higher pressure with surface cleaner
              </li>
              <li>
                <strong>Pavers:</strong> Medium pressure, followed by polymeric sand
                replacement if needed
              </li>
            </ul>

            <h3>Fences</h3>
            <p>
              Wood fences in Sacramento&apos;s climate gray quickly and develop mildew on
              north-facing sides. Pressure washing can restore natural wood color, preparing
              surfaces for staining or sealing.
            </p>

            <h2>Best Times for Pressure Washing in Sacramento</h2>
            <p>
              Timing your pressure washing maximizes results:
            </p>

            <h3>Spring (March-May)</h3>
            <ul>
              <li>Removes winter grime and mold growth</li>
              <li>Prepares surfaces for summer entertaining</li>
              <li>Ideal temperatures for cleaning solution effectiveness</li>
              <li>Before heavy pollen season peaks</li>
            </ul>

            <h3>Fall (September-November)</h3>
            <ul>
              <li>Clears summer dust accumulation</li>
              <li>Removes organic debris before winter rains</li>
              <li>Prepares surfaces for holiday gatherings</li>
              <li>Before winter mold growth begins</li>
            </ul>

            <h2>DIY vs. Professional Pressure Washing</h2>

            <h3>When DIY Works</h3>
            <ul>
              <li>Light cleaning of small concrete areas</li>
              <li>Rinsing patio furniture and planters</li>
              <li>Quick touchups between professional cleanings</li>
            </ul>

            <h3>When to Hire Professionals</h3>
            <ul>
              <li>
                <strong>Whole-house cleaning:</strong> Requires proper technique for
                each surface type
              </li>
              <li>
                <strong>Two-story homes:</strong> Dangerous ladder work with heavy equipment
              </li>
              <li>
                <strong>Delicate surfaces:</strong> Stucco, siding, and roofs need soft washing
              </li>
              <li>
                <strong>Heavy staining:</strong> Oil, rust, and deep-set grime need
                professional solutions
              </li>
              <li>
                <strong>Pre-painting prep:</strong> Critical for paint adhesion
              </li>
            </ul>

            <h2>Combining Services for Maximum Impact</h2>
            <p>
              Pressure washing pairs perfectly with other home maintenance:
            </p>
            <ul>
              <li>
                <Link href="/services/exterior-painting">Exterior painting</Link>—pressure
                washing is essential prep work
              </li>
              <li>
                <Link href="/services/gutter-cleaning">Gutter cleaning</Link>—clean gutters
                and exterior together
              </li>
              <li>
                <Link href="/services/roof-solar-cleaning">Roof cleaning</Link>—whole-roof
                soft wash with house wash
              </li>
              <li>
                <Link href="/services/maintenance-plans">Maintenance plans</Link>—schedule
                regular cleanings automatically
              </li>
            </ul>

            <h2>Protecting Your Investment</h2>
            <p>
              After professional pressure washing, maintain your home&apos;s cleanliness:
            </p>
            <ul>
              <li>
                <strong>Adjust sprinklers:</strong> Prevent overspray on clean surfaces
              </li>
              <li>
                <strong>Trim vegetation:</strong> Keep plants away from siding to reduce
                moisture and mildew
              </li>
              <li>
                <strong>Address stains quickly:</strong> Fresh spills clean easier than
                set-in stains
              </li>
              <li>
                <strong>Schedule annual cleaning:</strong> Prevent heavy buildup that&apos;s
                harder to remove
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* FAQ Section */}
      <section className="section bg-mint_green-50">
        <div className="container">
          <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg border-2 border-mint_green-200 overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-slate-900 hover:bg-mint_green-50 transition">
                  <span className="heading text-lg pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-viridian-600 transition-transform group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-700 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Service CTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-viridian-50 to-mint_green-50 rounded-2xl p-8 md:p-12 border-2 border-mint_green-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading text-2xl font-semibold text-viridian-900 mb-4">
                  Professional Pressure Washing
                </h2>
                <p className="text-slate-700 mb-6">
                  Restore your Sacramento home&apos;s curb appeal with professional pressure
                  washing. Driveways, siding, decks, and more—we have the right equipment
                  and expertise for every surface.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services/pressure-washing"
                    className="inline-block bg-viridian-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-viridian-700 transition text-center"
                  >
                    Pressure Washing
                  </Link>
                  <Link
                    href="/services/gutter-cleaning"
                    className="inline-block bg-white text-viridian-600 border-2 border-viridian-600 px-6 py-3 rounded-lg font-semibold hover:bg-viridian-50 transition text-center"
                  >
                    Gutter Cleaning
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-full min-h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/hero-service-pressure-washing.jpeg"
                  alt="Professional pressure washing service in Sacramento"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
