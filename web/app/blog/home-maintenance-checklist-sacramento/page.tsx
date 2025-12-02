import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, ArticleJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import CTASection from "@/components/sections/CTASection";
import { getArticleBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";

const article = getArticleBySlug("home-maintenance-checklist-sacramento")!;

export const metadata = seoMetadata({
  title: article.title,
  description: article.description,
  path: `/blog/${article.slug}`,
  image: article.image,
});

const faqs = [
  {
    question: "What home maintenance tasks are most important in Sacramento?",
    answer:
      "The most critical tasks for Sacramento homes are: gutter cleaning (2-3x yearly due to tree debris), HVAC maintenance (essential for our hot summers), exterior cleaning (combat dust buildup), and checking weatherstripping (for energy efficiency). These address our specific climate challenges.",
  },
  {
    question: "How much should I budget for annual home maintenance in Sacramento?",
    answer:
      "A good rule is 1-2% of your home's value annually for maintenance. For a $500,000 Sacramento home, budget $5,000-$10,000 per year. This covers routine maintenance, minor repairs, and occasional larger projects. Consistent maintenance prevents expensive emergency repairs.",
  },
  {
    question: "When should I clean my gutters in Sacramento?",
    answer:
      "Clean gutters in late spring (after pollen season), late fall (after leaf drop), and optionally mid-winter for homes with heavy tree coverage. Sacramento's oak and pine trees create significant debris that clogs gutters and causes water damage if not addressed.",
  },
  {
    question: "How do I prepare my Sacramento home for summer heat?",
    answer:
      "Key summer prep includes: servicing your AC (ideally in April-May), checking attic insulation and ventilation, inspecting weatherstripping around doors/windows, cleaning ceiling fans, and ensuring outdoor irrigation systems work properly. These steps reduce cooling costs significantly.",
  },
  {
    question: "What maintenance prevents the most expensive repairs?",
    answer:
      "Gutter maintenance prevents foundation and water damage ($10,000+ repairs). Roof inspection catches small issues before leaks cause interior damage. HVAC maintenance extends system life (replacement costs $8,000-15,000). These three areas offer the highest return on maintenance investment.",
  },
];

export default function HomeMaintenanceChecklist() {
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
              Sacramento&apos;s Mediterranean climate—with hot, dry summers and mild, wet winters—creates
              unique maintenance demands for homeowners. This seasonal checklist helps you protect
              your investment and prevent costly repairs throughout the year.
            </p>

            <h2>Spring Maintenance (March - May)</h2>
            <p>
              Spring is prime maintenance season in Sacramento. Comfortable temperatures and minimal
              rain make it ideal for outdoor projects before summer heat arrives.
            </p>

            <h3>Exterior Tasks</h3>
            <div className="bg-mint_green-50 rounded-lg p-6 my-4 not-prose">
              <ul className="space-y-3">
                {[
                  "Clean gutters and downspouts after pollen season",
                  "Inspect roof for winter storm damage",
                  "Pressure wash driveway, walkways, and siding",
                  "Check exterior paint for peeling or fading",
                  "Inspect and repair caulking around windows and doors",
                  "Service irrigation system and adjust for spring",
                  "Trim trees and shrubs away from house",
                  "Check deck/patio for winter damage",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viridian-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3>HVAC and Systems</h3>
            <div className="bg-mint_green-50 rounded-lg p-6 my-4 not-prose">
              <ul className="space-y-3">
                {[
                  "Schedule AC tune-up before summer rush",
                  "Replace HVAC filters",
                  "Test thermostat operation",
                  "Clean dryer vent",
                  "Test smoke and CO detectors",
                  "Inspect water heater for sediment",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viridian-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Spring is also the best time for{" "}
              <Link href="/services/exterior-painting">exterior painting</Link> in Sacramento.
              Temperatures between 50-85°F provide ideal conditions for paint application and curing.
            </p>

            <h2>Summer Maintenance (June - August)</h2>
            <p>
              Sacramento summers regularly exceed 100°F. Focus on keeping your home comfortable
              and efficient while protecting it from heat stress.
            </p>

            <h3>Beat the Heat</h3>
            <div className="bg-mint_green-50 rounded-lg p-6 my-4 not-prose">
              <ul className="space-y-3">
                {[
                  "Check attic insulation and ventilation",
                  "Inspect and clean ceiling fans",
                  "Add weatherstripping to doors if needed",
                  "Check window seals for air leaks",
                  "Clean AC condenser coils monthly",
                  "Replace AC filters monthly during peak use",
                  "Shade AC unit (without blocking airflow)",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viridian-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3>Landscape and Exterior</h3>
            <div className="bg-mint_green-50 rounded-lg p-6 my-4 not-prose">
              <ul className="space-y-3">
                {[
                  "Adjust irrigation for summer water needs",
                  "Mulch garden beds to retain moisture",
                  "Check for wasp and bee nests near home",
                  "Inspect foundation for cracks (dry soil movement)",
                  "Water foundation during extreme heat to prevent shifting",
                  "Clean and inspect pool equipment",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viridian-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-viridian-900 text-white p-8 my-8 rounded-lg">
              <h3 className="text-white mt-0">Simplify Your Maintenance</h3>
              <p className="text-mint_green-100 mb-4">
                Our maintenance plans handle scheduling and reminders so you never miss critical
                tasks. Combine gutter cleaning, pressure washing, and inspections into one
                trusted relationship.
              </p>
              <Link
                href="/services/maintenance-plans"
                className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition no-underline"
              >
                View Maintenance Plans
              </Link>
            </div>

            <h2>Fall Maintenance (September - November)</h2>
            <p>
              Fall is critical preparation time in Sacramento. Address these tasks before the
              rainy season arrives in late November or December.
            </p>

            <h3>Gutter and Roof Priority</h3>
            <div className="bg-mint_green-50 rounded-lg p-6 my-4 not-prose">
              <ul className="space-y-3">
                {[
                  "Clean gutters after leaves fall (critical!)",
                  "Inspect gutter hangers and pitch",
                  "Check downspout extensions direct water away from foundation",
                  "Inspect roof for damaged or missing shingles",
                  "Clear debris from roof valleys",
                  "Check flashing around chimneys and vents",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viridian-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              <Link href="/services/gutter-cleaning">Professional gutter cleaning</Link> in fall
              is the single most important maintenance task for Sacramento homes. Clogged gutters
              during winter rains cause foundation damage, flooding, and water intrusion.
            </p>

            <h3>Prepare for Winter</h3>
            <div className="bg-mint_green-50 rounded-lg p-6 my-4 not-prose">
              <ul className="space-y-3">
                {[
                  "Service furnace/heating system",
                  "Seal air leaks around windows and doors",
                  "Insulate exposed pipes in unheated areas",
                  "Store or cover outdoor furniture",
                  "Winterize irrigation system",
                  "Clean and store outdoor cushions",
                  "Check fireplace and chimney if applicable",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viridian-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3>Exterior Touch-Ups</h3>
            <div className="bg-mint_green-50 rounded-lg p-6 my-4 not-prose">
              <ul className="space-y-3">
                {[
                  "Touch up exterior paint before rain season",
                  "Re-caulk gaps around windows and doors",
                  "Pressure wash before winter (optional but recommended)",
                  "Apply deck sealant if needed",
                  "Check fence for loose boards or rot",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viridian-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>Winter Maintenance (December - February)</h2>
            <p>
              Sacramento winters are mild but rainy. Focus on monitoring systems and addressing
              issues that arise from wet weather.
            </p>

            <h3>Wet Weather Monitoring</h3>
            <div className="bg-mint_green-50 rounded-lg p-6 my-4 not-prose">
              <ul className="space-y-3">
                {[
                  "Check gutters during storms for overflow",
                  "Monitor for leaks around windows and doors",
                  "Inspect attic for roof leaks after storms",
                  "Clear leaves from drainage areas",
                  "Check sump pump operation if applicable",
                  "Watch for standing water near foundation",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viridian-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3>Indoor Focus</h3>
            <div className="bg-mint_green-50 rounded-lg p-6 my-4 not-prose">
              <ul className="space-y-3">
                {[
                  "Replace HVAC filters",
                  "Test smoke and CO detectors",
                  "Check for drafts and seal as needed",
                  "Deep clean kitchen exhaust fan",
                  "Inspect under sinks for leaks",
                  "Test garage door safety features",
                  "Check water heater relief valve",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viridian-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Winter is perfect for{" "}
              <Link href="/services/interior-painting">interior painting</Link> projects.
              Windows stay closed for climate control, and low humidity helps paint cure properly.
            </p>

            <h2>Monthly Maintenance Tasks</h2>
            <p>
              Some tasks need attention year-round regardless of season:
            </p>
            <ul>
              <li>Replace HVAC filters (or check if using high-quality filters)</li>
              <li>Test smoke and CO detectors</li>
              <li>Clean kitchen sink disposal with ice and citrus</li>
              <li>Check for water leaks under sinks</li>
              <li>Inspect exterior for pest activity</li>
              <li>Clear debris from drains and vents</li>
            </ul>

            <h2>Professional Services Schedule</h2>
            <p>
              Some maintenance is best left to professionals. Here&apos;s when to call:
            </p>

            <h3>Twice Yearly</h3>
            <ul>
              <li>
                <Link href="/services/gutter-cleaning">Gutter cleaning</Link> (spring and fall minimum)
              </li>
              <li>HVAC inspection and tune-up (spring for AC, fall for heating)</li>
            </ul>

            <h3>Annually</h3>
            <ul>
              <li>
                <Link href="/services/pressure-washing">Pressure washing</Link> (spring or fall)
              </li>
              <li>Roof inspection</li>
              <li>Chimney cleaning (if wood-burning fireplace)</li>
              <li>Dryer vent professional cleaning</li>
            </ul>

            <h3>Every 5-10 Years</h3>
            <ul>
              <li>
                <Link href="/services/exterior-painting">Exterior painting</Link>
              </li>
              <li>
                <Link href="/services/interior-painting">Interior painting</Link>
              </li>
              <li>Deck staining/sealing</li>
              <li>
                <Link href="/services/gutter-repair-replacement">Gutter replacement</Link>
              </li>
            </ul>

            <h2>The Cost of Neglect</h2>
            <p>
              Skipping maintenance always costs more in the long run. Here&apos;s what Sacramento
              homeowners risk:
            </p>
            <ul>
              <li>
                <strong>Clogged gutters:</strong> Foundation repair costs $5,000-$15,000+
              </li>
              <li>
                <strong>Neglected HVAC:</strong> Premature replacement at $8,000-$15,000
              </li>
              <li>
                <strong>Ignored roof damage:</strong> Water damage and mold remediation
                $10,000-$30,000+
              </li>
              <li>
                <strong>Deferred painting:</strong> Wood rot requiring replacement vs.
                simple repainting
              </li>
            </ul>

            <p>
              A comprehensive <Link href="/services/maintenance-plans">maintenance plan</Link>{" "}
              ensures nothing falls through the cracks while often providing cost savings
              through bundled services.
            </p>
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
                  Maintenance Plans Made Easy
                </h2>
                <p className="text-slate-700 mb-6">
                  Stop tracking seasonal tasks yourself. Our maintenance plans bundle gutter
                  cleaning, pressure washing, and inspections with automatic scheduling.
                  One trusted team for all your home maintenance needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services/maintenance-plans"
                    className="inline-block bg-viridian-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-viridian-700 transition text-center"
                  >
                    View Plans
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-viridian-600 border-2 border-viridian-600 px-6 py-3 rounded-lg font-semibold hover:bg-viridian-50 transition text-center"
                  >
                    Get Free Estimate
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-full min-h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/hero-service-gutter-cleaning.jpeg"
                  alt="Professional home maintenance services in Sacramento"
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
