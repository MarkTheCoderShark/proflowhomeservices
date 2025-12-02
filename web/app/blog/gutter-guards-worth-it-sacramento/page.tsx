import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, ArticleJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import CTASection from "@/components/sections/CTASection";
import { getArticleBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const article = getArticleBySlug("gutter-guards-worth-it-sacramento")!;

export const metadata = seoMetadata({
  title: article.title,
  description: article.description,
  path: `/blog/${article.slug}`,
  image: article.image,
});

const faqs = [
  {
    question: "How much do gutter guards cost in Sacramento?",
    answer:
      "Gutter guard costs in Sacramento range from $7-$30 per linear foot installed, depending on type. Basic mesh screens cost $7-$12/ft, while premium micro-mesh systems run $20-$30/ft. For a typical Sacramento home with 150-200 linear feet of gutters, expect $1,500-$6,000 total installed.",
  },
  {
    question: "Do gutter guards work with Sacramento's oak trees?",
    answer:
      "Yes, but guard type matters. Oak trees drop leaves, acorns, catkins, and pollen. Micro-mesh guards handle oak debris best, while larger-opening guards can clog with small oak debris. Even with guards, annual inspection is recommended for homes near oaks.",
  },
  {
    question: "Will gutter guards void my gutter warranty?",
    answer:
      "Some gutter warranties have restrictions on modifications. Guards that attach properly without damaging gutters typically don't void warranties, but check your specific warranty terms. Professional installation using manufacturer-approved methods helps protect warranty coverage.",
  },
  {
    question: "How long do gutter guards last?",
    answer:
      "Quality aluminum or stainless steel micro-mesh guards last 20-25 years with minimal maintenance. Basic plastic or foam guards may need replacement every 3-5 years due to UV degradation in Sacramento's intense sun. Higher upfront investment in quality guards provides better long-term value.",
  },
  {
    question: "Can I install gutter guards myself?",
    answer:
      "Basic snap-on screens are DIY-friendly, but professional installation is recommended for micro-mesh systems and homes over one story. Improper installation can void warranties, damage gutters, or create water flow problems. Professional installers also ensure proper fit around corners and downspouts.",
  },
];

export default function GutterGuardsGuide() {
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
              If you&apos;re tired of climbing ladders to clean debris-filled gutters multiple times
              a year, gutter guards might seem like the perfect solution. But with prices ranging
              from a few hundred to several thousand dollars, are they actually worth the investment
              for Sacramento homes?
            </p>

            <h2>Understanding Sacramento&apos;s Gutter Challenges</h2>
            <p>
              Before evaluating gutter guards, it&apos;s important to understand what makes
              Sacramento particularly demanding on gutter systems:
            </p>
            <ul>
              <li>
                <strong>Valley oaks:</strong> Drop massive quantities of leaves, acorns, and
                catkins throughout fall and into winter
              </li>
              <li>
                <strong>Pine trees:</strong> Shed needles year-round, with heavy drops in
                late summer
              </li>
              <li>
                <strong>Cottonwoods:</strong> Release fluffy seeds that mat together and
                block gutters completely
              </li>
              <li>
                <strong>Intense sun:</strong> Degrades plastic and foam guard materials faster
                than in cooler climates
              </li>
              <li>
                <strong>Sudden rain events:</strong> When rain finally comes after dry months,
                gutters must handle heavy flow immediately
              </li>
            </ul>

            <h2>Types of Gutter Guards: Pros and Cons</h2>

            <h3>Mesh/Screen Guards</h3>
            <p>
              <strong>How they work:</strong> Metal or plastic screens with small holes cover
              gutter openings, allowing water through while blocking debris.
            </p>
            <p><strong>Best for:</strong> Moderate debris, leaves larger than mesh openings</p>
            <p><strong>Cost:</strong> $7-$15 per linear foot installed</p>
            <div className="grid md:grid-cols-2 gap-4 my-4 not-prose">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">Pros</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Affordable middle-ground option</li>
                  <li>• Blocks most leaves and large debris</li>
                  <li>• Relatively easy to remove for cleaning</li>
                  <li>• Good airflow prevents mold</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-800 mb-2">Cons</p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Pine needles and small debris pass through</li>
                  <li>• Can sag into gutters over time</li>
                  <li>• Seeds and shingle grit accumulate on top</li>
                  <li>• Plastic versions degrade in Sacramento sun</li>
                </ul>
              </div>
            </div>

            <h3>Micro-Mesh Guards</h3>
            <p>
              <strong>How they work:</strong> Ultra-fine stainless steel mesh blocks even
              tiny debris while allowing water through via surface tension.
            </p>
            <p><strong>Best for:</strong> Heavy debris areas, pine needles, oak catkins</p>
            <p><strong>Cost:</strong> $20-$30 per linear foot installed</p>
            <div className="grid md:grid-cols-2 gap-4 my-4 not-prose">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">Pros</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Blocks virtually all debris including pine needles</li>
                  <li>• Durable stainless steel construction</li>
                  <li>• 20+ year lifespan</li>
                  <li>• Handles heavy rainfall well</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-800 mb-2">Cons</p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Highest upfront cost</li>
                  <li>• Small debris can stick to surface</li>
                  <li>• Professional installation required</li>
                  <li>• May need occasional surface cleaning</li>
                </ul>
              </div>
            </div>

            <h3>Reverse Curve/Surface Tension Guards</h3>
            <p>
              <strong>How they work:</strong> Curved covers direct water into a narrow slot
              while debris slides off the rounded surface.
            </p>
            <p><strong>Best for:</strong> Leaves, visible from ground level</p>
            <p><strong>Cost:</strong> $15-$25 per linear foot installed</p>
            <div className="grid md:grid-cols-2 gap-4 my-4 not-prose">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">Pros</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Debris slides off curved surface</li>
                  <li>• No openings for pests to enter</li>
                  <li>• Attractive appearance</li>
                  <li>• Durable aluminum construction</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-800 mb-2">Cons</p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Heavy rain can overshoot narrow opening</li>
                  <li>• Visible from street level (changes roofline look)</li>
                  <li>• Small debris clogs slot opening</li>
                  <li>• Difficult to clean when clogged</li>
                </ul>
              </div>
            </div>

            <h3>Foam Inserts</h3>
            <p>
              <strong>How they work:</strong> Porous foam wedges sit inside gutters,
              allowing water to filter through while blocking debris.
            </p>
            <p><strong>Best for:</strong> Budget-conscious temporary solution</p>
            <p><strong>Cost:</strong> $2-$5 per linear foot</p>
            <div className="grid md:grid-cols-2 gap-4 my-4 not-prose">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">Pros</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Lowest upfront cost</li>
                  <li>• Easy DIY installation</li>
                  <li>• Blocks large debris</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-800 mb-2">Cons</p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Degrades quickly in Sacramento sun (2-3 years)</li>
                  <li>• Seeds sprout in foam material</li>
                  <li>• Retains moisture, promotes mold</li>
                  <li>• Restricts water flow when dirty</li>
                </ul>
              </div>
            </div>

            <div className="bg-mint_green-50 border-l-4 border-viridian-500 p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-viridian-900 mb-2">Sacramento Recommendation</p>
              <p className="text-slate-700 mb-0">
                For most Sacramento homes, micro-mesh guards offer the best long-term value
                despite higher upfront costs. Our oak and pine debris requires fine filtration
                that basic screens can&apos;t provide, and our intense sun destroys plastic and
                foam guards within a few years.
              </p>
            </div>

            <h2>The Real Cost-Benefit Analysis</h2>

            <h3>Costs Without Guards</h3>
            <p>
              Let&apos;s calculate what you spend on{" "}
              <Link href="/services/gutter-cleaning">gutter cleaning</Link> without guards:
            </p>
            <ul>
              <li>Professional cleaning: $150-$300 per visit</li>
              <li>Frequency for Sacramento homes: 2-3 times per year</li>
              <li>Annual cost: $300-$900</li>
              <li>10-year cost: $3,000-$9,000</li>
            </ul>

            <h3>Costs With Micro-Mesh Guards</h3>
            <ul>
              <li>Installation (150 linear feet): $3,000-$4,500</li>
              <li>Annual inspection: $75-$150 (recommended but optional)</li>
              <li>10-year cost: $3,750-$6,000</li>
              <li>Guard lifespan: 20-25 years</li>
            </ul>

            <h3>The Verdict</h3>
            <p>
              Quality gutter guards typically pay for themselves within 5-8 years through
              reduced cleaning costs. But the real value is in what they prevent:
            </p>
            <ul>
              <li>Emergency cleaning calls during storms</li>
              <li>Water damage from overflowing gutters</li>
              <li>Foundation issues from improper drainage</li>
              <li>Pest infestations in debris-filled gutters</li>
              <li>Time spent worrying about gutter maintenance</li>
            </ul>

            <div className="bg-viridian-900 text-white p-8 my-8 rounded-lg">
              <h3 className="text-white mt-0">Professional Gutter Guard Installation</h3>
              <p className="text-mint_green-100 mb-4">
                We install premium gutter guard systems designed for Sacramento&apos;s climate
                and tree species. Proper installation ensures optimal performance and protects
                your warranty.
              </p>
              <Link
                href="/services/gutter-guards"
                className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition no-underline"
              >
                Learn About Gutter Guards
              </Link>
            </div>

            <h2>When Gutter Guards Make Sense</h2>
            <p>Guards are a smart investment when:</p>
            <ul>
              <li>
                <strong>Heavy tree coverage:</strong> Homes surrounded by oaks, pines, or
                other debris-producing trees
              </li>
              <li>
                <strong>Multi-story homes:</strong> Where ladder access is difficult or
                dangerous
              </li>
              <li>
                <strong>Physical limitations:</strong> Homeowners unable to safely clean
                gutters themselves
              </li>
              <li>
                <strong>Rental properties:</strong> Reduces maintenance calls and protects
                property investment
              </li>
              <li>
                <strong>Historic homes:</strong> Protecting original gutters and preventing
                water damage to irreplaceable materials
              </li>
            </ul>

            <h2>When Guards May Not Be Necessary</h2>
            <p>You might skip guards if:</p>
            <ul>
              <li>
                <strong>Minimal trees:</strong> Newer developments with young or few trees
              </li>
              <li>
                <strong>Single-story, easy access:</strong> Quick to clean yourself
              </li>
              <li>
                <strong>Planning to sell soon:</strong> May not recoup investment
              </li>
              <li>
                <strong>Tight budget:</strong> Better to maintain regular cleaning schedule
                than install cheap guards that fail quickly
              </li>
            </ul>

            <h2>Professional Installation Matters</h2>
            <p>
              Even the best gutter guards fail when improperly installed. Professional
              installation ensures:
            </p>
            <ul>
              <li>Correct pitch for water flow</li>
              <li>Secure attachment without damaging gutters</li>
              <li>Proper fit at corners and downspouts</li>
              <li>No gaps for debris entry</li>
              <li>Warranty protection</li>
            </ul>
            <p>
              Before installing guards, professionals often recommend{" "}
              <Link href="/services/gutter-cleaning">thorough gutter cleaning</Link> and{" "}
              <Link href="/services/gutter-repair-replacement">any necessary repairs</Link>{" "}
              to ensure the system works optimally.
            </p>

            <h2>Maintaining Gutter Guards</h2>
            <p>
              While guards significantly reduce maintenance, they&apos;re not completely
              maintenance-free:
            </p>
            <ul>
              <li>
                <strong>Annual inspection:</strong> Check for debris accumulation on top
                of guards
              </li>
              <li>
                <strong>Surface brushing:</strong> Occasionally remove stuck debris from
                micro-mesh surfaces
              </li>
              <li>
                <strong>Check attachment:</strong> Ensure guards haven&apos;t shifted or loosened
              </li>
              <li>
                <strong>Downspout check:</strong> Verify downspouts remain clear
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
                  Complete Gutter Services
                </h2>
                <p className="text-slate-700 mb-6">
                  From cleaning to guards to repairs, we handle every aspect of gutter
                  maintenance for Sacramento homes. Get a free assessment to determine
                  the best solution for your property.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services/gutter-guards"
                    className="inline-block bg-viridian-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-viridian-700 transition text-center"
                  >
                    Gutter Guards
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
                  src="/hero-service-gutter-cleaning.jpeg"
                  alt="Professional gutter guard installation in Sacramento"
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
