import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, ArticleJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import CTASection from "@/components/sections/CTASection";
import { getArticleBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const article = getArticleBySlug("exterior-painting-sacramento-climate")!;

export const metadata = seoMetadata({
  title: article.title,
  description: article.description,
  path: `/blog/${article.slug}`,
  image: article.image,
});

const faqs = [
  {
    question: "What's the best time of year to paint a house exterior in Sacramento?",
    answer:
      "The ideal seasons are spring (March-May) and fall (September-November) when temperatures are between 50-85°F and humidity is low. Avoid summer's extreme heat above 95°F which causes paint to dry too quickly, and winter's potential for morning dew and rain.",
  },
  {
    question: "How long does exterior paint last in Sacramento's climate?",
    answer:
      "Quality exterior paint in Sacramento typically lasts 7-10 years on properly prepared surfaces. South and west-facing walls exposed to intense afternoon sun may need repainting sooner (5-7 years). Using premium UV-resistant paints and proper prep extends longevity significantly.",
  },
  {
    question: "How much does exterior house painting cost in Sacramento?",
    answer:
      "Exterior painting in Sacramento ranges from $3,500-$8,000 for average single-story homes and $6,000-$15,000 for two-story homes. Factors include square footage, stories, trim complexity, prep work needed, and paint quality. Premium paints add 15-20% but last significantly longer.",
  },
  {
    question: "Should I pressure wash before exterior painting?",
    answer:
      "Yes, pressure washing is essential for Sacramento homes. Our dry, dusty climate leaves buildup that prevents paint adhesion. Professional painters use appropriate PSI settings to clean without damaging surfaces, then allow 24-48 hours for complete drying before painting.",
  },
  {
    question: "What type of exterior paint is best for Sacramento homes?",
    answer:
      "100% acrylic latex paints with UV inhibitors and mildew resistance perform best in Sacramento. Brands like Sherwin-Williams Duration, Benjamin Moore Aura, and PPG Manor Hall are excellent choices. Look for paints rated for temperature extremes and low maintenance.",
  },
];

export default function ExteriorPaintingGuide() {
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
              Sacramento&apos;s Mediterranean climate presents unique challenges for exterior paint.
              From scorching summer sun to sudden winter storms, your home&apos;s exterior endures
              extreme conditions that demand the right paint, proper timing, and professional
              preparation.
            </p>

            <h2>Understanding Sacramento&apos;s Climate Impact on Exterior Paint</h2>
            <p>
              Our region experiences temperature swings from below freezing on winter nights to
              well over 100°F during summer days. This thermal cycling causes paint to expand
              and contract repeatedly, leading to cracking and peeling if the wrong products
              or techniques are used.
            </p>

            <h3>Summer Heat Challenges</h3>
            <p>
              Sacramento summers regularly exceed 100°F, creating several paint problems:
            </p>
            <ul>
              <li>
                <strong>UV degradation:</strong> Intense sunlight breaks down paint binders,
                causing fading and chalking, especially on south and west-facing walls.
              </li>
              <li>
                <strong>Rapid drying:</strong> Paint applied in extreme heat dries too quickly,
                preventing proper adhesion and leading to brush marks and lap lines.
              </li>
              <li>
                <strong>Surface temperature:</strong> Dark-colored siding can reach 150°F+,
                making summer painting nearly impossible without early morning starts.
              </li>
            </ul>

            <h3>Winter and Rain Concerns</h3>
            <p>
              While Sacramento winters are mild compared to other regions, they present challenges:
            </p>
            <ul>
              <li>Morning dew and fog can add moisture to surfaces</li>
              <li>Rain events require 24-48 hours of dry time before and after painting</li>
              <li>Temperatures below 50°F prevent proper paint curing</li>
              <li>Shorter days limit working hours</li>
            </ul>

            <div className="bg-mint_green-50 border-l-4 border-viridian-500 p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-viridian-900 mb-2">Best Painting Windows</p>
              <p className="text-slate-700 mb-0">
                <strong>Spring (March-May):</strong> Ideal temperatures, low humidity, minimal rain risk.<br />
                <strong>Fall (September-November):</strong> Cooling temperatures, dry conditions, before winter rains.
              </p>
            </div>

            <h2>Choosing the Right Exterior Paint</h2>
            <p>
              For Sacramento&apos;s demanding climate, not all paints perform equally. Here&apos;s what to look for:
            </p>

            <h3>Paint Type: 100% Acrylic Latex</h3>
            <p>
              100% acrylic latex paints outperform oil-based and vinyl-acrylic alternatives in our climate.
              They offer superior flexibility for thermal expansion, excellent UV resistance, and
              better color retention. Premium brands like Sherwin-Williams Duration, Benjamin Moore
              Aura Exterior, and PPG Manor Hall are designed for extreme conditions.
            </p>

            <h3>Essential Features for Sacramento</h3>
            <ul>
              <li>
                <strong>UV inhibitors:</strong> Protect against Sacramento&apos;s intense sunlight
              </li>
              <li>
                <strong>Mildew resistance:</strong> Prevents growth in shaded, damp areas
              </li>
              <li>
                <strong>Dirt resistance:</strong> Self-cleaning properties minimize maintenance
              </li>
              <li>
                <strong>Flexibility:</strong> Accommodates thermal expansion/contraction
              </li>
              <li>
                <strong>Breathability:</strong> Allows moisture vapor to escape from substrate
              </li>
            </ul>

            <h3>Color Considerations</h3>
            <p>
              Sacramento&apos;s intense sun affects color choices more than you might expect:
            </p>
            <ul>
              <li>
                Lighter colors reflect heat, reducing cooling costs and paint stress
              </li>
              <li>
                Dark colors absorb heat, accelerating wear on south/west walls
              </li>
              <li>
                Colors appear 1-2 shades lighter in bright Sacramento sunlight than on paint chips
              </li>
              <li>
                Earth tones and warm neutrals complement our natural landscape
              </li>
            </ul>

            <h2>Proper Surface Preparation</h2>
            <p>
              Preparation determines 80% of your paint job&apos;s success. In Sacramento&apos;s dusty
              environment, thorough prep is even more critical.
            </p>

            <h3>Pressure Washing</h3>
            <p>
              Sacramento&apos;s dry climate creates significant dust and pollen buildup on exterior
              surfaces. Professional <Link href="/services/pressure-washing">pressure washing</Link> removes:
            </p>
            <ul>
              <li>Accumulated dust and dirt</li>
              <li>Chalking from degraded old paint</li>
              <li>Mold and mildew in shaded areas</li>
              <li>Pollen and environmental contaminants</li>
            </ul>
            <p>
              Allow 24-48 hours for complete drying before any painting begins. Professional
              painters know the right PSI settings to clean effectively without damaging
              wood siding, stucco, or other materials.
            </p>

            <h3>Scraping and Sanding</h3>
            <p>
              Remove all loose, peeling, or flaking paint down to a sound substrate. In
              Sacramento&apos;s older neighborhoods like East Sacramento, Land Park, and Curtis
              Park, this may reveal multiple paint layers requiring careful attention.
            </p>

            <h3>Caulking and Repairs</h3>
            <p>
              Sacramento&apos;s temperature swings cause caulk to fail faster than in milder climates.
              Inspect and replace caulk around:
            </p>
            <ul>
              <li>Window and door frames</li>
              <li>Where siding meets trim</li>
              <li>Corner boards and fascia joints</li>
              <li>Penetrations for lights, outlets, and vents</li>
            </ul>

            <h3>Priming Bare Surfaces</h3>
            <p>
              Any bare wood, repaired areas, or stains require quality primer before topcoating.
              Use stain-blocking primer for water stains and tannin bleed from redwood or cedar.
            </p>

            <div className="bg-viridian-900 text-white p-8 my-8 rounded-lg">
              <h3 className="text-white mt-0">Professional Exterior Painting</h3>
              <p className="text-mint_green-100 mb-4">
                Our crews handle every aspect of exterior painting—from pressure washing and
                prep work to premium paint application and detailed trim work. Sacramento
                homeowners trust ProFlow for lasting results.
              </p>
              <Link
                href="/services/exterior-painting"
                className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition no-underline"
              >
                Get Your Free Estimate
              </Link>
            </div>

            <h2>Application Best Practices</h2>

            <h3>Timing Your Painting</h3>
            <p>
              Even in ideal seasons, daily timing matters in Sacramento:
            </p>
            <ul>
              <li>
                <strong>Start early:</strong> Begin on the shaded side of the house in morning
              </li>
              <li>
                <strong>Follow the sun:</strong> Paint shaded surfaces as sun moves
              </li>
              <li>
                <strong>Watch surface temperature:</strong> Avoid painting surfaces above 90°F
              </li>
              <li>
                <strong>Stop before dew:</strong> Finish with enough time for paint to dry
                before evening moisture
              </li>
            </ul>

            <h3>Number of Coats</h3>
            <p>
              Quality exterior paint jobs require two coats over primer for:
            </p>
            <ul>
              <li>Complete, even coverage</li>
              <li>Proper film thickness for durability</li>
              <li>Maximum color depth and uniformity</li>
              <li>Warranty compliance (most manufacturers require two coats)</li>
            </ul>

            <h3>Protecting Landscaping</h3>
            <p>
              Sacramento&apos;s mature landscaping—especially in established neighborhoods—needs
              protection during painting. Professional painters use drop cloths, plastic
              sheeting, and careful spray techniques to protect plants, walkways, and
              outdoor living areas.
            </p>

            <h2>Maintaining Your Exterior Paint</h2>
            <p>
              Extend the life of your exterior paint with regular maintenance:
            </p>

            <h3>Annual Inspection</h3>
            <p>
              Each spring, walk around your home looking for:
            </p>
            <ul>
              <li>Cracking or peeling paint</li>
              <li>Failing caulk around windows and doors</li>
              <li>Mildew growth in shaded areas</li>
              <li>Fading on sun-exposed surfaces</li>
              <li>Damage from sprinkler spray</li>
            </ul>

            <h3>Cleaning</h3>
            <p>
              Annual cleaning extends paint life significantly. A gentle rinse with a garden
              hose removes dust buildup. For stubborn dirt or mildew, light pressure washing
              or hand scrubbing with mild detergent helps. Regular{" "}
              <Link href="/services/pressure-washing">pressure washing</Link> as part of a{" "}
              <Link href="/services/maintenance-plans">maintenance plan</Link> keeps your
              exterior looking fresh.
            </p>

            <h3>Touch-Up Strategy</h3>
            <p>
              Address small problems before they become big ones:
            </p>
            <ul>
              <li>Keep leftover paint for touch-ups (store properly—not in garage heat)</li>
              <li>Fix peeling areas immediately to prevent moisture infiltration</li>
              <li>Re-caulk failing joints before water damage occurs</li>
            </ul>

            <h2>Cost Factors for Sacramento Exterior Painting</h2>
            <p>
              Understanding what drives exterior painting costs helps you budget appropriately:
            </p>
            <ul>
              <li>
                <strong>Home size and stories:</strong> More square footage and height increase
                time, materials, and equipment needs
              </li>
              <li>
                <strong>Prep work required:</strong> Extensive scraping, repairs, or priming
                adds labor time
              </li>
              <li>
                <strong>Architectural details:</strong> Intricate trim, multiple colors, and
                decorative elements require more time
              </li>
              <li>
                <strong>Paint quality:</strong> Premium paints cost 30-50% more but last
                significantly longer
              </li>
              <li>
                <strong>Access challenges:</strong> Steep lots, limited access, or complex
                landscaping affect pricing
              </li>
            </ul>

            <h2>Combining Services for Best Value</h2>
            <p>
              Many Sacramento homeowners combine exterior painting with complementary services:
            </p>
            <ul>
              <li>
                <Link href="/services/pressure-washing">Pressure washing</Link> before painting
                (often included in painting quotes)
              </li>
              <li>
                <Link href="/services/gutter-cleaning">Gutter cleaning</Link> while crews have
                ladders set up
              </li>
              <li>
                <Link href="/services/interior-painting">Interior painting</Link> for a
                complete home refresh
              </li>
              <li>
                <Link href="/services/handyman">Handyman repairs</Link> for rot, trim damage,
                or other issues discovered during prep
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
                  Professional Exterior Painting
                </h2>
                <p className="text-slate-700 mb-6">
                  Transform your Sacramento home&apos;s curb appeal with professional exterior
                  painting. Our crews handle everything from pressure washing to final
                  touch-ups, using premium paints built for our climate.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services/exterior-painting"
                    className="inline-block bg-viridian-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-viridian-700 transition text-center"
                  >
                    Exterior Painting
                  </Link>
                  <Link
                    href="/services/pressure-washing"
                    className="inline-block bg-white text-viridian-600 border-2 border-viridian-600 px-6 py-3 rounded-lg font-semibold hover:bg-viridian-50 transition text-center"
                  >
                    Pressure Washing
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-full min-h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/hero-service-exterior-painting.jpeg"
                  alt="Professional exterior painting service in Sacramento"
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
