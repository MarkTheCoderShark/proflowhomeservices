import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, ArticleJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import CTASection from "@/components/sections/CTASection";
import { getArticleBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const article = getArticleBySlug("gutter-repair-vs-replacement")!;

export const metadata = seoMetadata({
  title: article.title,
  description: article.description,
  path: `/blog/${article.slug}`,
  image: article.image,
});

const faqs = [
  {
    question: "How much does gutter repair cost in Sacramento?",
    answer:
      "Basic gutter repairs in Sacramento typically cost $75-$250 per repair, including sealing leaks, reattaching sections, and replacing hangers. More extensive repairs like replacing sections or fixing pitch problems range from $200-$600. Full repairs across a home average $300-$800 total.",
  },
  {
    question: "How much does gutter replacement cost in Sacramento?",
    answer:
      "Complete gutter replacement in Sacramento costs $1,000-$2,500 for aluminum seamless gutters on an average single-story home (150-200 linear feet). Two-story homes run $1,500-$4,000. Premium materials like copper or zinc increase costs significantly. Prices include removal of old gutters.",
  },
  {
    question: "How long do gutters last in Sacramento's climate?",
    answer:
      "Aluminum gutters typically last 20-30 years in Sacramento when properly maintained. Vinyl gutters last 10-15 years before UV degradation becomes problematic. Copper and zinc gutters can last 50+ years. Lack of maintenance significantly shortens lifespan regardless of material.",
  },
  {
    question: "What are signs my gutters need replacement, not just repair?",
    answer:
      "Replace rather than repair when you see: multiple leaking seams throughout the system, significant rust or corrosion, gutters pulling away from the house in multiple locations, visible sagging that doesn't correct with new hangers, or cracks/holes in more than 25% of the system.",
  },
  {
    question: "Should I repair or replace 20-year-old gutters?",
    answer:
      "It depends on condition. Well-maintained aluminum gutters at 20 years may have 10+ years left with repairs. If they're showing widespread issues, replacement is more economical. Get a professional assessment—sometimes strategic repairs extend life significantly, other times replacement is the smarter investment.",
  },
];

export default function GutterRepairVsReplacement() {
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
              When gutters start showing their age, Sacramento homeowners face a common dilemma:
              is it worth repairing the existing system, or is it time for complete replacement?
              The answer depends on multiple factors unique to your situation.
            </p>

            <h2>Understanding Your Gutter&apos;s Condition</h2>
            <p>
              Before deciding between repair and replacement, you need an honest assessment of
              your gutter system&apos;s condition. Here&apos;s what to look for:
            </p>

            <h3>Signs That Indicate Repair May Be Sufficient</h3>
            <ul>
              <li>
                <strong>Isolated leaks:</strong> One or two leaking joints or seams can be
                sealed effectively
              </li>
              <li>
                <strong>Loose sections:</strong> Gutters pulling away from fascia in one
                or two spots
              </li>
              <li>
                <strong>Minor sagging:</strong> Slight pitch problems correctable with new
                hangers or adjustments
              </li>
              <li>
                <strong>Small holes:</strong> Pinhole leaks in otherwise sound material
              </li>
              <li>
                <strong>Clogged downspouts:</strong> Blockages causing backup but no
                structural damage
              </li>
              <li>
                <strong>Cosmetic issues:</strong> Faded paint or surface rust on steel gutters
              </li>
            </ul>

            <h3>Signs That Replacement Is Needed</h3>
            <ul>
              <li>
                <strong>Widespread leaking:</strong> Multiple seams failing throughout system
              </li>
              <li>
                <strong>Significant rust/corrosion:</strong> Metal deterioration affecting
                structural integrity
              </li>
              <li>
                <strong>Persistent sagging:</strong> Gutters that won&apos;t hold proper pitch
                despite repairs
              </li>
              <li>
                <strong>Separation from fascia:</strong> Multiple areas pulling away,
                indicating systemic failure
              </li>
              <li>
                <strong>Cracks in vinyl:</strong> UV damage causing brittleness (common in
                Sacramento)
              </li>
              <li>
                <strong>Visible damage to fascia:</strong> Rotting wood behind gutters from
                long-term leaking
              </li>
              <li>
                <strong>Outdated sizing:</strong> Gutters too small for your roof area or
                Sacramento&apos;s occasional heavy rains
              </li>
            </ul>

            <div className="bg-mint_green-50 border-l-4 border-viridian-500 p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-viridian-900 mb-2">The 25% Rule</p>
              <p className="text-slate-700 mb-0">
                If more than 25% of your gutter system needs repair, replacement often makes
                more financial sense. You&apos;ll get a consistent system with warranty coverage
                rather than patchwork repairs on aging materials.
              </p>
            </div>

            <h2>Common Gutter Repairs for Sacramento Homes</h2>

            <h3>Sealing Leaky Seams</h3>
            <p>
              Sectional gutters have joints that eventually fail. Professional repair involves:
            </p>
            <ul>
              <li>Cleaning and drying the joint area</li>
              <li>Removing old sealant completely</li>
              <li>Applying professional-grade gutter sealant</li>
              <li>Reinforcing with gutter tape if needed</li>
            </ul>
            <p><strong>Cost:</strong> $75-$150 per repair</p>
            <p><strong>Longevity:</strong> 5-10 years if done properly</p>

            <h3>Reattaching Loose Sections</h3>
            <p>
              Sacramento&apos;s clay soil shifts seasonally, and homes settle over time. This
              causes gutters to pull away from fascia boards. Repairs include:
            </p>
            <ul>
              <li>Installing new gutter hangers or spikes</li>
              <li>Adding additional support brackets</li>
              <li>Re-securing existing hardware</li>
            </ul>
            <p><strong>Cost:</strong> $100-$250 depending on extent</p>
            <p><strong>Longevity:</strong> 10+ years with quality hardware</p>

            <h3>Fixing Pitch Problems</h3>
            <p>
              Gutters need proper slope (typically 1/4&quot; per 10 feet) to drain correctly.
              Pitch correction involves:
            </p>
            <ul>
              <li>Assessing current slope with level</li>
              <li>Adjusting hanger positions</li>
              <li>Repositioning sections as needed</li>
            </ul>
            <p><strong>Cost:</strong> $150-$400</p>
            <p><strong>Longevity:</strong> Permanent if underlying structure is sound</p>

            <h3>Patching Holes</h3>
            <p>
              Small holes from corrosion or physical damage can be patched if surrounding
              material is healthy:
            </p>
            <ul>
              <li>Small holes: Gutter sealant or repair tape</li>
              <li>Larger holes: Metal patches with sealant</li>
            </ul>
            <p><strong>Cost:</strong> $50-$150 per patch</p>
            <p><strong>Longevity:</strong> 3-7 years typically</p>

            <h3>Replacing Sections</h3>
            <p>
              Sometimes individual sections fail while the rest of the system is sound.
              Section replacement involves:
            </p>
            <ul>
              <li>Cutting out damaged section</li>
              <li>Installing new matching section</li>
              <li>Sealing new joints</li>
            </ul>
            <p><strong>Cost:</strong> $150-$400 per section</p>
            <p><strong>Note:</strong> Matching color on older gutters can be challenging</p>

            <div className="bg-viridian-900 text-white p-8 my-8 rounded-lg">
              <h3 className="text-white mt-0">Professional Gutter Assessment</h3>
              <p className="text-mint_green-100 mb-4">
                Not sure if your gutters need repair or replacement? Our technicians provide
                honest assessments with photo documentation, explaining exactly what your
                system needs and why.
              </p>
              <Link
                href="/services/gutter-repair-replacement"
                className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition no-underline"
              >
                Schedule Assessment
              </Link>
            </div>

            <h2>When Replacement Is the Better Investment</h2>

            <h3>The Math on Repair vs. Replace</h3>
            <p>Consider these scenarios for a typical Sacramento home (175 linear feet):</p>

            <p><strong>Scenario A: Repair Multiple Issues</strong></p>
            <ul>
              <li>3 seam repairs: $375</li>
              <li>Reattach 4 sections: $400</li>
              <li>Patch 2 holes: $200</li>
              <li>Fix pitch in 2 areas: $300</li>
              <li><strong>Total: $1,275</strong></li>
              <li>Expected additional repairs in 3-5 years</li>
            </ul>

            <p><strong>Scenario B: Complete Replacement</strong></p>
            <ul>
              <li>Seamless aluminum gutters: $1,800-$2,200</li>
              <li>Includes old gutter removal</li>
              <li>20-30 year lifespan</li>
              <li>Full warranty coverage</li>
            </ul>

            <p>
              When repairs approach 50-60% of replacement cost, and the system has other
              underlying issues, replacement provides better long-term value.
            </p>

            <h3>Benefits of New Seamless Gutters</h3>
            <p>Modern seamless gutters offer significant advantages over sectional systems:</p>
            <ul>
              <li>
                <strong>No seams to leak:</strong> Eliminates the most common failure point
              </li>
              <li>
                <strong>Custom fit:</strong> Made on-site to exact measurements
              </li>
              <li>
                <strong>Improved appearance:</strong> Clean lines without visible joints
              </li>
              <li>
                <strong>Better flow:</strong> Smooth interior reduces debris accumulation
              </li>
              <li>
                <strong>Proper sizing:</strong> Can upgrade to larger capacity if needed
              </li>
              <li>
                <strong>Color options:</strong> Match your home&apos;s current exterior
              </li>
            </ul>

            <h2>Gutter Material Options for Sacramento</h2>

            <h3>Aluminum (Most Popular)</h3>
            <p><strong>Cost:</strong> $8-$15 per linear foot installed</p>
            <ul>
              <li>Lightweight and rust-resistant</li>
              <li>Available in many colors</li>
              <li>20-30 year lifespan</li>
              <li>Best value for most Sacramento homes</li>
            </ul>

            <h3>Steel</h3>
            <p><strong>Cost:</strong> $10-$20 per linear foot installed</p>
            <ul>
              <li>Stronger than aluminum</li>
              <li>Can rust if coating is damaged</li>
              <li>Good for areas with heavy debris impact</li>
              <li>15-25 year lifespan</li>
            </ul>

            <h3>Copper</h3>
            <p><strong>Cost:</strong> $25-$50 per linear foot installed</p>
            <ul>
              <li>Premium appearance, develops patina</li>
              <li>50+ year lifespan</li>
              <li>Excellent for historic or high-end homes</li>
              <li>Significant investment</li>
            </ul>

            <h3>Vinyl</h3>
            <p><strong>Cost:</strong> $5-$10 per linear foot installed</p>
            <ul>
              <li>Lowest initial cost</li>
              <li>Becomes brittle in Sacramento&apos;s UV exposure</li>
              <li>10-15 year lifespan maximum</li>
              <li>Not recommended for Sacramento</li>
            </ul>

            <h2>Protecting Your Investment</h2>
            <p>
              Whether you repair or replace, maximize your gutter lifespan with proper
              maintenance:
            </p>
            <ul>
              <li>
                <Link href="/services/gutter-cleaning">Regular cleaning</Link> (2-3 times
                yearly in Sacramento)
              </li>
              <li>
                Consider <Link href="/services/gutter-guards">gutter guards</Link> to
                reduce debris accumulation
              </li>
              <li>Annual inspections to catch small problems early</li>
              <li>Trim trees to reduce debris load</li>
              <li>Ensure downspouts direct water away from foundation</li>
            </ul>

            <h2>Getting the Right Diagnosis</h2>
            <p>
              A professional assessment is the best way to determine whether your gutters
              need repair or replacement. Look for a contractor who:
            </p>
            <ul>
              <li>Provides photo documentation of all issues found</li>
              <li>Explains repair vs. replacement options honestly</li>
              <li>Offers written estimates for both approaches</li>
              <li>Doesn&apos;t pressure you toward the most expensive option</li>
              <li>Has experience with Sacramento&apos;s specific climate challenges</li>
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
                  Gutter Repair & Replacement
                </h2>
                <p className="text-slate-700 mb-6">
                  From minor repairs to complete replacement, our team handles all gutter
                  services for Sacramento homes. Get an honest assessment and transparent
                  pricing for your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services/gutter-repair-replacement"
                    className="inline-block bg-viridian-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-viridian-700 transition text-center"
                  >
                    Repair & Replacement
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
                  alt="Professional gutter repair and replacement in Sacramento"
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
