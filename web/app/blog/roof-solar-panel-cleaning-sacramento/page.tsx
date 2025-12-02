import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, ArticleJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import CTASection from "@/components/sections/CTASection";
import { getArticleBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const article = getArticleBySlug("roof-solar-panel-cleaning-sacramento")!;

export const metadata = seoMetadata({
  title: article.title,
  description: article.description,
  path: `/blog/${article.slug}`,
  image: article.image,
});

const faqs = [
  {
    question: "How often should I clean my solar panels in Sacramento?",
    answer:
      "Most Sacramento solar panels benefit from cleaning 1-2 times per year. Clean in spring after pollen season and optionally in fall after leaves drop. Panels near trees, farms, or busy roads may need quarterly cleaning. Monitor your energy production—a 5-10% drop often indicates cleaning is needed.",
  },
  {
    question: "Does cleaning solar panels really improve efficiency?",
    answer:
      "Yes. Studies show dirty solar panels can lose 15-25% efficiency. Sacramento's dust, pollen, and bird droppings create a film that blocks sunlight. After professional cleaning, most homeowners see an immediate 5-15% increase in energy production, which translates to real savings on electricity bills.",
  },
  {
    question: "Can I clean solar panels myself?",
    answer:
      "While possible, DIY solar cleaning has risks: roof safety hazards, potential panel damage from improper technique, and warranty concerns. Most manufacturers recommend professional cleaning. If you DIY, never use abrasive materials, harsh chemicals, or high-pressure water, and avoid cleaning hot panels.",
  },
  {
    question: "How much does solar panel cleaning cost in Sacramento?",
    answer:
      "Professional solar panel cleaning in Sacramento typically costs $150-$350 for residential systems (15-30 panels). Pricing depends on panel count, roof accessibility, and current condition. Many companies offer discounts when bundled with gutter cleaning or roof washing.",
  },
  {
    question: "Will cleaning my roof damage shingles or tiles?",
    answer:
      "Professional roof cleaning uses soft wash techniques—low pressure with specialized cleaning solutions—that safely remove moss, algae, and debris without damaging roofing materials. High-pressure washing can damage shingles and should be avoided. Always hire professionals who understand proper techniques for your roof type.",
  },
];

export default function RoofSolarCleaningGuide() {
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
              Sacramento homeowners have embraced solar energy in record numbers, but many don&apos;t
              realize that dirty panels significantly reduce energy production. Combined with
              proper roof maintenance, regular cleaning protects your investment and maximizes
              returns for years to come.
            </p>

            <h2>Why Solar Panels Get Dirty in Sacramento</h2>
            <p>
              Sacramento&apos;s environment is particularly challenging for solar panels:
            </p>
            <ul>
              <li>
                <strong>Dust and dirt:</strong> Our dry summers create fine dust that settles
                on panels daily, building up into a light-blocking film
              </li>
              <li>
                <strong>Pollen:</strong> Spring brings heavy pollen from valley oaks, grasses,
                and agricultural areas that coats every outdoor surface
              </li>
              <li>
                <strong>Bird droppings:</strong> A single bird dropping can block significant
                panel area and cause &quot;hot spots&quot; that reduce efficiency
              </li>
              <li>
                <strong>Tree debris:</strong> Leaves, seeds, and sap from nearby trees
              </li>
              <li>
                <strong>Air pollution:</strong> Vehicle emissions and wildfire smoke residue
              </li>
              <li>
                <strong>Hard water spots:</strong> Mineral deposits from sprinkler overspray
                or rain evaporation
              </li>
            </ul>

            <h2>The Real Cost of Dirty Solar Panels</h2>
            <p>
              Dirty panels don&apos;t just look bad—they cost you money:
            </p>

            <h3>Efficiency Loss</h3>
            <p>
              Research shows that dirty panels lose 15-25% efficiency in dusty environments like
              Sacramento. For a typical 8kW residential system producing $150-200/month in
              savings, that&apos;s $25-50/month in lost production—$300-600 annually.
            </p>

            <h3>Compounding Effects</h3>
            <p>
              Dirt doesn&apos;t just block light uniformly. Bird droppings and debris create &quot;hot spots&quot;
              where cells work harder, potentially causing:
            </p>
            <ul>
              <li>Accelerated cell degradation</li>
              <li>Reduced panel lifespan</li>
              <li>Possible warranty issues if neglected</li>
            </ul>

            <div className="bg-mint_green-50 border-l-4 border-viridian-500 p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-viridian-900 mb-2">Monitor Your Production</p>
              <p className="text-slate-700 mb-0">
                Most solar systems include monitoring apps. If you notice production dropping
                5-10% compared to the same period last year (accounting for weather), it&apos;s
                likely time for cleaning. Some Sacramento homeowners clean panels twice yearly
                and see immediate production increases of 10-15%.
              </p>
            </div>

            <h2>Professional Solar Panel Cleaning Process</h2>

            <h3>1. Safety Setup</h3>
            <p>
              Professionals arrive with proper equipment for roof access, including:
            </p>
            <ul>
              <li>OSHA-compliant fall protection</li>
              <li>Soft-soled shoes that won&apos;t damage panels</li>
              <li>Deionized water systems (prevents water spots)</li>
              <li>Soft brushes and squeegees designed for solar panels</li>
            </ul>

            <h3>2. Initial Assessment</h3>
            <p>
              Before cleaning, technicians inspect for:
            </p>
            <ul>
              <li>Physical damage (cracks, chips, discoloration)</li>
              <li>Wiring issues or pest damage</li>
              <li>Mounting hardware condition</li>
              <li>Debris accumulation patterns</li>
            </ul>

            <h3>3. Gentle Cleaning</h3>
            <p>
              Professional cleaning uses:
            </p>
            <ul>
              <li>
                <strong>Deionized water:</strong> Leaves no mineral deposits
              </li>
              <li>
                <strong>Low pressure:</strong> Typically just gravity-fed or very light spray
              </li>
              <li>
                <strong>Soft tools:</strong> Microfiber, soft brushes, professional squeegees
              </li>
              <li>
                <strong>No harsh chemicals:</strong> Panel coatings can be damaged by improper cleaners
              </li>
            </ul>

            <h3>4. Rinse and Inspect</h3>
            <p>
              Thorough rinsing followed by visual inspection ensures complete cleaning without
              residue. Many services include before/after photos documenting results.
            </p>

            <div className="bg-viridian-900 text-white p-8 my-8 rounded-lg">
              <h3 className="text-white mt-0">Professional Roof & Solar Cleaning</h3>
              <p className="text-mint_green-100 mb-4">
                Our trained technicians safely clean solar panels and roofs using manufacturer-approved
                methods that protect your warranty and maximize energy production.
              </p>
              <Link
                href="/services/roof-solar-cleaning"
                className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition no-underline"
              >
                View Roof & Solar Services
              </Link>
            </div>

            <h2>Roof Cleaning: Protecting Your Home&apos;s First Defense</h2>
            <p>
              While you&apos;re thinking about solar panels, don&apos;t neglect the roof beneath them.
              Sacramento roofs face their own challenges:
            </p>

            <h3>Common Roof Issues</h3>
            <ul>
              <li>
                <strong>Moss and algae:</strong> Shaded areas and north-facing slopes develop
                green growth that holds moisture and degrades roofing materials
              </li>
              <li>
                <strong>Debris accumulation:</strong> Leaves and pine needles collect in valleys
                and around penetrations
              </li>
              <li>
                <strong>Black streaks:</strong> Algae (Gloeocapsa magma) creates dark staining
                that makes roofs look old
              </li>
              <li>
                <strong>Lichen:</strong> A moss-algae combination that can lift shingle edges
              </li>
            </ul>

            <h3>Soft Wash Roof Cleaning</h3>
            <p>
              Professional roof cleaning uses soft wash techniques—low pressure with specialized
              biodegradable cleaning solutions that:
            </p>
            <ul>
              <li>Kill moss, algae, and lichen at the root</li>
              <li>Break down organic staining</li>
              <li>Won&apos;t damage shingles, tiles, or metal roofing</li>
              <li>Results last 2-3 years typically</li>
            </ul>

            <p>
              <strong>Never use high-pressure washing on roofs.</strong> The force can:
            </p>
            <ul>
              <li>Strip protective granules from shingles</li>
              <li>Break tile roofing</li>
              <li>Force water under roofing materials</li>
              <li>Void manufacturer warranties</li>
            </ul>

            <h2>When to Clean: Sacramento&apos;s Optimal Schedule</h2>

            <h3>Solar Panels</h3>
            <ul>
              <li>
                <strong>Late Spring (May-June):</strong> After pollen season, before summer&apos;s
                peak production period
              </li>
              <li>
                <strong>Fall (October-November):</strong> After leaves drop, before winter&apos;s
                lower sun angles when every photon counts
              </li>
            </ul>

            <h3>Roof Cleaning</h3>
            <ul>
              <li>
                <strong>Spring or Fall:</strong> Moderate temperatures allow cleaning solutions
                to work without drying too quickly
              </li>
              <li>
                <strong>Before moss spreads:</strong> Small patches are easier to treat than
                extensive growth
              </li>
              <li>
                <strong>Before selling:</strong> Clean roofs significantly improve curb appeal
              </li>
            </ul>

            <h2>DIY vs. Professional Cleaning</h2>

            <h3>Why DIY Solar Cleaning Is Risky</h3>
            <ul>
              <li>
                <strong>Safety:</strong> Roof work is dangerous without proper equipment and training
              </li>
              <li>
                <strong>Panel damage:</strong> Wrong cleaning products or techniques can scratch
                glass coatings or damage seals
              </li>
              <li>
                <strong>Warranty concerns:</strong> Some manufacturers require professional cleaning
                to maintain warranty
              </li>
              <li>
                <strong>Water quality:</strong> Tap water leaves mineral spots; professionals use
                deionized water
              </li>
              <li>
                <strong>Incomplete cleaning:</strong> Hard-to-reach panels often get skipped
              </li>
            </ul>

            <h3>When DIY Might Work</h3>
            <p>
              If you have ground-mounted panels or a very low-pitch roof with safe access, and
              you use only:
            </p>
            <ul>
              <li>Plain water (ideally deionized)</li>
              <li>Soft sponge or cloth</li>
              <li>Early morning when panels are cool</li>
              <li>No abrasive materials whatsoever</li>
            </ul>

            <h2>Maximizing Your Solar Investment</h2>
            <p>
              Beyond cleaning, these practices help maintain solar efficiency:
            </p>
            <ul>
              <li>
                <strong>Trim nearby trees:</strong> Reduce shade and debris
              </li>
              <li>
                <strong>Monitor production:</strong> Catch issues early
              </li>
              <li>
                <strong>Keep gutters clean:</strong> Overflowing{" "}
                <Link href="/services/gutter-cleaning">gutters splash debris onto panels</Link>
              </li>
              <li>
                <strong>Annual inspection:</strong> Professional check of mounting, wiring, and
                panel condition
              </li>
              <li>
                <strong>Consider critter guards:</strong> Prevent birds and squirrels from nesting
                under panels
              </li>
            </ul>

            <h2>Combining Services for Best Value</h2>
            <p>
              Since professionals are already on your roof, bundling services saves money:
            </p>
            <ul>
              <li>
                <strong>Solar + gutter cleaning:</strong> Most logical combination—
                <Link href="/services/gutter-cleaning">clean gutters</Link> prevent splash-back
                onto panels
              </li>
              <li>
                <strong>Solar + roof wash:</strong> Complete roof care in one visit
              </li>
              <li>
                <strong>Add to maintenance plan:</strong> Our{" "}
                <Link href="/services/maintenance-plans">maintenance plans</Link> schedule
                automatic cleaning so you never forget
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
                  Roof & Solar Panel Cleaning
                </h2>
                <p className="text-slate-700 mb-6">
                  Maximize your solar investment and protect your roof with professional
                  cleaning services. Safe, effective methods that won&apos;t void warranties.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services/roof-solar-cleaning"
                    className="inline-block bg-viridian-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-viridian-700 transition text-center"
                  >
                    Roof & Solar Cleaning
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
                  src="/hero-service-roof-solar-cleaning.jpeg"
                  alt="Professional roof and solar panel cleaning in Sacramento"
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
