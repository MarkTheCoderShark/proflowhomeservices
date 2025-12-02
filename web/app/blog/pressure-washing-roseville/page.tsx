import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, ArticleJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import CTASection from "@/components/sections/CTASection";
import { getArticleBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const article = getArticleBySlug("pressure-washing-roseville")!;

export const metadata = seoMetadata({
  title: article.title,
  description: article.description,
  path: `/blog/${article.slug}`,
  image: article.image,
});

const faqs = [
  {
    question: "How often should I pressure wash my Roseville home?",
    answer:
      "Most Roseville homes benefit from annual pressure washing, typically in spring before outdoor entertaining season or fall before winter rains. Homes near major roads like Douglas Boulevard or Pleasant Grove, or in dusty areas near developments, may need service twice yearly. Driveways in Roseville's hot climate often need cleaning every 6-8 months.",
  },
  {
    question: "Can Roseville's heat damage pressure washing results?",
    answer:
      "Yes. Pressure washing during Roseville's 100°F+ summer days can cause cleaning solutions to dry too quickly, leaving streaks and reducing effectiveness. Professional companies schedule morning appointments during summer and avoid washing in direct afternoon sun. Spring and fall offer ideal conditions.",
  },
  {
    question: "Is pressure washing safe for Roseville's stucco homes?",
    answer:
      "Stucco requires soft washing (low pressure with cleaning solutions), not high-pressure washing. Many Roseville homes feature stucco exteriors that can chip, crack, or absorb water if pressure washed improperly. Professional soft washing safely cleans stucco without damage—critical for maintaining your home's appearance and value.",
  },
  {
    question: "How much does pressure washing cost in Roseville, CA?",
    answer:
      "Professional pressure washing in Roseville typically costs $150-$300 for driveways, $250-$450 for whole-house exterior cleaning, and $100-$200 for decks or patios. Pricing varies by square footage, surface type, and buildup level. Many Roseville companies offer neighborhood discounts when multiple homes schedule together.",
  },
  {
    question: "What surfaces can be pressure washed in Roseville?",
    answer:
      "Concrete driveways, sidewalks, and patios handle high-pressure washing well. Composite decking, brick, and stone are safe with moderate pressure. Stucco, vinyl siding, roofing, painted wood, and windows require soft washing techniques. Professional technicians match pressure and technique to each surface type.",
  },
];

export default function PressureWashingRoseville() {
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
              Nothing transforms a Roseville home&apos;s curb appeal faster than professional pressure washing.
              In Placer County&apos;s climate—where scorching summers bake dust onto every surface and winter
              rains deposit dirt and debris—your home&apos;s exterior accumulates grime that regular cleaning
              can&apos;t touch. Here&apos;s everything Roseville homeowners need to know about restoring their
              property&apos;s sparkle.
            </p>

            <h2>Why Roseville Homes Need Regular Pressure Washing</h2>
            <p>
              Roseville&apos;s unique position in Placer County creates specific challenges for home exteriors:
            </p>
            <ul>
              <li>
                <strong>Dust and construction debris:</strong> Ongoing development in areas like Fiddyment Farm
                and West Roseville creates constant airborne dust that settles on homes, driveways, and fences.
              </li>
              <li>
                <strong>Pollen accumulation:</strong> Spring brings heavy pollen from Roseville&apos;s extensive
                oak trees, coating surfaces in yellow-green film that stains if left untreated.
              </li>
              <li>
                <strong>Mold and mildew:</strong> North-facing walls and shaded areas develop green growth,
                especially in neighborhoods with mature tree cover like Highland Reserve and Blue Oaks.
              </li>
              <li>
                <strong>Heat-related oxidation:</strong> Roseville&apos;s 100°F+ summer temperatures cause paint
                oxidation, leaving chalky residue on stucco and siding.
              </li>
              <li>
                <strong>Hard water stains:</strong> Placer County&apos;s mineral-rich water leaves white calcium
                deposits from sprinklers—particularly visible on driveways and home exteriors.
              </li>
              <li>
                <strong>Oil and automotive stains:</strong> Driveways throughout Roseville accumulate stubborn
                oil stains, tire marks, and fluid leaks that diminish curb appeal.
              </li>
            </ul>

            <h2>Understanding Pressure Washing vs. Soft Washing</h2>
            <p>
              Not all cleaning methods work for all surfaces. Understanding the difference is critical for
              Roseville homeowners:
            </p>

            <h3>High-Pressure Washing (2,000-4,000 PSI)</h3>
            <p>
              Uses water pressure alone to blast away dirt and grime. Best for:
            </p>
            <ul>
              <li>Concrete driveways and sidewalks</li>
              <li>Brick and stone hardscaping</li>
              <li>Unpainted metal fences and railings</li>
              <li>Most composite decking materials</li>
            </ul>

            <h3>Soft Washing (Under 500 PSI)</h3>
            <p>
              Uses low pressure combined with specialized cleaning solutions to safely clean delicate surfaces.
              Essential for:
            </p>
            <ul>
              <li>Stucco exteriors (extremely common in Roseville)</li>
              <li>Vinyl and aluminum siding</li>
              <li>Roofing materials (tile, composition, metal)</li>
              <li>Painted wood surfaces</li>
              <li>Windows and glass</li>
            </ul>

            <div className="bg-mint_green-50 border-l-4 border-viridian-500 p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-viridian-900 mb-2">Roseville Homeowner Alert</p>
              <p className="text-slate-700 mb-0">
                Many Roseville homes feature stucco exteriors that can be permanently damaged by high-pressure
                washing. Stucco can crack, chip, or absorb water behind the surface, leading to mold and
                structural issues. Always use soft washing for stucco—if a company suggests high-pressure
                washing your stucco home, find a different provider.
              </p>
            </div>

            <h2>The Professional Pressure Washing Process for Roseville Homes</h2>

            <h3>1. Property Assessment and Preparation</h3>
            <p>
              Professional technicians start by evaluating your Roseville property to identify:
            </p>
            <ul>
              <li>Surface types and appropriate cleaning methods for each</li>
              <li>Problem areas needing special attention (oil stains, mold growth, heavy buildup)</li>
              <li>Potential hazards like loose stucco, damaged surfaces, or electrical fixtures</li>
              <li>Landscaping, vehicles, and outdoor furniture requiring protection</li>
            </ul>
            <p>
              For Roseville properties, technicians pay special attention to stucco condition, as our temperature
              extremes can create hairline cracks that require gentle treatment.
            </p>

            <h3>2. Pre-Treatment Application</h3>
            <p>
              Heavily soiled areas receive eco-friendly cleaning solutions that:
            </p>
            <ul>
              <li>Break down organic growth (mold, mildew, algae common in shaded Roseville areas)</li>
              <li>Emulsify oil and grease stains on driveways</li>
              <li>Dissolve mineral deposits from Placer County&apos;s hard water</li>
              <li>Reduce pressure needed for cleaning, protecting surface integrity</li>
            </ul>

            <h3>3. Pressure or Soft Washing</h3>
            <p>
              Using calibrated commercial equipment, each surface receives appropriate treatment:
            </p>
            <ul>
              <li>
                <strong>Driveways:</strong> High-pressure surface cleaner for even, stripe-free results
              </li>
              <li>
                <strong>Stucco exteriors:</strong> Soft wash application from bottom to top, gentle rinse from
                top to bottom
              </li>
              <li>
                <strong>Concrete patios:</strong> Medium-to-high pressure with surface cleaner attachment
              </li>
              <li>
                <strong>Fences:</strong> Pressure adjusted based on material (wood, vinyl, composite)
              </li>
              <li>
                <strong>Eaves and soffits:</strong> Low pressure to remove spider webs and nests without forcing
                water into vents
              </li>
            </ul>

            <h3>4. Final Rinse and Inspection</h3>
            <p>
              Complete rinsing ensures no cleaning solution residue remains to attract dirt or damage
              landscaping. Final walkthrough confirms quality and customer satisfaction.
            </p>

            <div className="bg-viridian-900 text-white p-8 my-8 rounded-lg">
              <h3 className="text-white mt-0">Transform Your Roseville Home&apos;s Curb Appeal</h3>
              <p className="text-mint_green-100 mb-4">
                Our trained technicians use commercial-grade equipment and eco-friendly solutions to safely
                clean every surface of your Roseville property. See the dramatic difference professional
                pressure washing makes for homes throughout Placer County.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition no-underline"
              >
                Get Your Free Roseville Estimate
              </Link>
            </div>

            <h2>Roseville Neighborhood-Specific Cleaning Considerations</h2>

            <h3>Blue Oaks and Fiddyment Farm</h3>
            <p>
              These newer developments feature primarily stucco exteriors with modern composite materials.
              Ongoing construction creates persistent dust that coats homes. Annual soft washing in spring
              removes accumulated dust before summer heat bakes it on. Driveways benefit from twice-yearly
              cleaning due to construction traffic and new concrete staining easily.
            </p>

            <h3>Highland Reserve and West Roseville</h3>
            <p>
              Established neighborhoods with mature trees face mold and mildew on north-facing exteriors.
              Driveways show age-related staining and may have oil deposits from decades of use. These areas
              benefit from fall cleaning after leaf drop and spring cleaning to remove winter grime.
            </p>

            <h3>Sun City Roseville</h3>
            <p>
              Single-story homes in the 55+ community are ideal candidates for regular maintenance. Annual
              washing maintains property values and curb appeal without homeowners risking DIY cleaning.
              Driveways here often show minimal oil staining but benefit from cleaning to remove dust and
              maintain appearance.
            </p>

            <h3>Near Galleria Mall and Downtown</h3>
            <p>
              Urban Roseville properties accumulate automotive exhaust, commercial debris, and street dust.
              More frequent cleaning (every 6-8 months) maintains professional appearance and prevents
              permanent staining on concrete and stucco.
            </p>

            <h2>Surface-by-Surface Cleaning Guide for Roseville Homes</h2>

            <h3>Driveways and Concrete</h3>
            <p>
              Roseville driveways face intense sun exposure that sets stains deep into concrete. Professional
              cleaning includes:
            </p>
            <ul>
              <li>Pre-treatment of oil stains with commercial degreasers (not available at retail stores)</li>
              <li>Surface cleaner attachment that prevents striping and ensures even results</li>
              <li>3,000-4,000 PSI for deep cleaning without etching concrete</li>
              <li>Edge detailing along garage doors, walkways, and landscape borders</li>
              <li>Optional sealing to protect cleaned concrete from future staining</li>
            </ul>

            <h3>Stucco Exteriors</h3>
            <p>
              As Roseville&apos;s most common exterior material, stucco requires specialized care:
            </p>
            <ul>
              <li>Soft wash solution applied at under 500 PSI</li>
              <li>Dwell time allowing solutions to break down dirt without scrubbing</li>
              <li>Gentle rinse from top to bottom to prevent water intrusion</li>
              <li>Special attention to areas under eaves where spiders nest and dirt accumulates</li>
              <li>Inspection for cracks or damage that could allow water penetration</li>
            </ul>

            <h3>Decks and Patios</h3>
            <p>
              Outdoor living spaces are essential in Roseville&apos;s lifestyle. Proper cleaning depends on
              material:
            </p>
            <ul>
              <li>
                <strong>Wood decks:</strong> Medium pressure with wood-safe cleaners, always following grain
                direction to prevent splintering
              </li>
              <li>
                <strong>Composite decking:</strong> Low pressure with manufacturer-approved techniques—improper
                cleaning voids warranties
              </li>
              <li>
                <strong>Concrete patios:</strong> High-pressure surface cleaning for even results
              </li>
              <li>
                <strong>Stamped or stained concrete:</strong> Lower pressure to protect decorative finishes
              </li>
              <li>
                <strong>Pavers:</strong> Medium pressure, followed by polymeric sand replacement if needed
              </li>
            </ul>

            <h3>Fences</h3>
            <p>
              Roseville&apos;s climate grays wood fences quickly and creates mildew on north-facing sections:
            </p>
            <ul>
              <li>
                <strong>Wood fences:</strong> Medium pressure restores natural color, prepares for staining
              </li>
              <li>
                <strong>Vinyl fences:</strong> Low pressure with cleaning solutions removes stubborn stains
              </li>
              <li>
                <strong>Composite fences:</strong> Manufacturer-specific techniques to avoid damage
              </li>
            </ul>

            <h2>Best Times for Pressure Washing in Roseville</h2>
            <p>
              Timing matters in Roseville&apos;s climate. Here&apos;s when to schedule service:
            </p>

            <h3>Spring (March-May)</h3>
            <ul>
              <li>Removes winter dirt, mildew, and pollen accumulation</li>
              <li>Prepares homes for outdoor entertaining season</li>
              <li>Ideal temperatures (60-80°F) for cleaning solution effectiveness</li>
              <li>Before summer heat sets stains permanently</li>
              <li>Perfect timing for homes in Roseville&apos;s established neighborhoods</li>
            </ul>

            <h3>Fall (September-November)</h3>
            <ul>
              <li>Clears summer dust and heat-related oxidation</li>
              <li>Removes organic debris before winter rains</li>
              <li>Prepares properties for holiday gatherings</li>
              <li>Prevents winter mold from establishing on damp surfaces</li>
              <li>Ideal for newer Roseville developments with less tree coverage</li>
            </ul>

            <h3>Avoid Summer (June-August)</h3>
            <p>
              While possible, Roseville&apos;s extreme summer heat creates challenges. Cleaning solutions can dry
              too quickly, leaving streaks. Surfaces become too hot to touch safely. If summer cleaning is
              necessary, professional companies schedule early morning appointments before temperatures climb.
            </p>

            <h2>DIY vs. Professional Pressure Washing in Roseville</h2>

            <h3>When DIY Might Work</h3>
            <ul>
              <li>Light cleaning of small concrete areas (patios, walkways)</li>
              <li>Rinsing patio furniture and planters</li>
              <li>Quick touchups between professional cleanings</li>
            </ul>

            <h3>When to Hire Professionals</h3>
            <ul>
              <li>
                <strong>Stucco homes:</strong> Roseville&apos;s most common exterior requires soft washing
                expertise to avoid expensive damage
              </li>
              <li>
                <strong>Two-story homes:</strong> Dangerous ladder work with heavy equipment—not worth the
                injury risk
              </li>
              <li>
                <strong>Whole-property cleaning:</strong> Requires multiple pressure settings, nozzles, and
                cleaning solutions
              </li>
              <li>
                <strong>Heavy staining:</strong> Oil, rust, and deep-set grime need professional-grade solutions
                and equipment
              </li>
              <li>
                <strong>Pre-painting preparation:</strong> Proper surface prep is critical for paint adhesion
                and longevity
              </li>
            </ul>

            <h2>Protecting Your Investment After Pressure Washing</h2>
            <p>
              Maximize the results of professional pressure washing with these maintenance tips:
            </p>
            <ul>
              <li>
                <strong>Adjust sprinklers:</strong> Redirect irrigation to minimize overspray on clean surfaces,
                especially important with Placer County&apos;s hard water
              </li>
              <li>
                <strong>Trim vegetation:</strong> Keep plants 12-18 inches from stucco and siding to reduce
                moisture and prevent mildew
              </li>
              <li>
                <strong>Address spills immediately:</strong> Fresh oil or fluid spills on driveways clean much
                easier than set-in stains
              </li>
              <li>
                <strong>Regular maintenance schedule:</strong> Annual cleaning prevents heavy buildup that
                requires aggressive treatment
              </li>
              <li>
                <strong>Consider sealing:</strong> After cleaning, concrete sealing protects driveways and
                patios from future staining
              </li>
            </ul>

            <h2>Combining Pressure Washing with Other Services</h2>
            <p>
              Smart Roseville homeowners bundle pressure washing with complementary services:
            </p>
            <ul>
              <li>
                <Link href="/services/exterior-painting">Exterior painting</Link>—pressure washing is essential
                prep that ensures proper paint adhesion
              </li>
              <li>
                <Link href="/services/gutter-cleaning">Gutter cleaning</Link>—clean gutters and exterior
                together for complete home refresh
              </li>
              <li>
                <Link href="/services/roof-solar-cleaning">Solar panel cleaning</Link>—whole-property cleaning
                maximizes efficiency and appearance
              </li>
              <li>
                Window cleaning—combine with soft washing for complete exterior transformation
              </li>
            </ul>

            <h2>What to Expect from Professional Roseville Pressure Washing</h2>
            <p>
              Quality pressure washing companies serving Roseville provide:
            </p>
            <ul>
              <li>
                <strong>Free estimates:</strong> On-site evaluation with detailed pricing before scheduling
              </li>
              <li>
                <strong>Licensed and insured:</strong> Protection for your property and workers
              </li>
              <li>
                <strong>Commercial equipment:</strong> Professional-grade pressure washers, surface cleaners,
                and solutions
              </li>
              <li>
                <strong>Trained technicians:</strong> Knowledge of proper pressure, techniques, and safety for
                each surface type
              </li>
              <li>
                <strong>Eco-friendly solutions:</strong> Biodegradable cleaning products safe for Roseville
                landscaping and pets
              </li>
              <li>
                <strong>Satisfaction guarantee:</strong> Commitment to quality results or return service at no
                charge
              </li>
              <li>
                <strong>Before/after photos:</strong> Documentation of dramatic improvement and value delivered
              </li>
            </ul>

            <h2>The ROI of Regular Pressure Washing</h2>
            <p>
              Professional pressure washing delivers measurable returns for Roseville homeowners:
            </p>
            <ul>
              <li>
                <strong>Increased property value:</strong> Clean homes in Roseville&apos;s competitive market
                show better and command higher prices
              </li>
              <li>
                <strong>Extended surface life:</strong> Regular cleaning prevents permanent staining, rot, and
                deterioration
              </li>
              <li>
                <strong>Reduced maintenance costs:</strong> Prevents expensive repairs to stucco, siding, and
                concrete
              </li>
              <li>
                <strong>Improved health:</strong> Removes mold, mildew, and allergens from home exteriors
              </li>
              <li>
                <strong>Pride of ownership:</strong> Enjoy your beautiful Roseville home and impress neighbors
                and guests
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
                  Professional Pressure Washing in Roseville
                </h2>
                <p className="text-slate-700 mb-6">
                  Restore your Roseville home&apos;s curb appeal with professional pressure washing. From
                  driveways and stucco to decks and fences, we have the right equipment and expertise for
                  every surface in Placer County.
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
                  alt="Professional pressure washing service in Roseville, CA"
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
