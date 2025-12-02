import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, ArticleJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import CTASection from "@/components/sections/CTASection";
import { getArticleBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";

const article = getArticleBySlug("handyman-services-guide-sacramento")!;

export const metadata = seoMetadata({
  title: article.title,
  description: article.description,
  path: `/blog/${article.slug}`,
  image: article.image,
});

const faqs = [
  {
    question: "What does a handyman do vs. a licensed contractor?",
    answer:
      "Handymen handle small to medium repairs and maintenance tasks that don't require permits—things like drywall patches, door adjustments, fixture installations, and minor plumbing/electrical work. Licensed contractors are required for major structural work, full room remodels, new electrical circuits, or plumbing rerouting. In California, jobs over $500 typically require a contractor's license.",
  },
  {
    question: "How much do handyman services cost in Sacramento?",
    answer:
      "Sacramento handyman rates typically range from $50-$100 per hour, with most companies having a minimum service call of 1-2 hours ($100-$200). Many handymen offer flat-rate pricing for common tasks: hanging a door ($150-$300), patching drywall ($100-$250), installing a ceiling fan ($150-$250). Get quotes for your specific project list.",
  },
  {
    question: "Should I hire a handyman or do it myself?",
    answer:
      "DIY makes sense for simple tasks you're confident completing correctly—changing filters, basic painting, assembling furniture. Hire a handyman when: the job requires specialized tools, mistakes would be costly, you lack time, or safety is a concern (electrical, heights, heavy lifting). Professional work also provides liability coverage if something goes wrong.",
  },
  {
    question: "How do I find a reliable handyman in Sacramento?",
    answer:
      "Look for: verified reviews on Google/Yelp, proper insurance and bonding, clear communication and written estimates, willingness to provide references, and transparent pricing. Avoid handymen who demand large upfront payments, won't provide written quotes, or pressure you into immediate decisions.",
  },
  {
    question: "What should I prepare before a handyman visit?",
    answer:
      "Create a complete list of all tasks (handymen can often bundle multiple small jobs efficiently). Clear the work area of furniture and belongings. Note any specific materials or finishes you want matched. Have photos ready if describing damage. Ensure someone 18+ will be home to provide access and answer questions.",
  },
];

export default function HandymanServicesGuide() {
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
              Every Sacramento homeowner knows the feeling: a growing list of small repairs that
              never quite make it to the top of the priority list. That sticky door, the drywall
              crack, the wobbly railing—individually minor, but collectively they diminish your
              home&apos;s comfort and value. Here&apos;s how to tackle them efficiently.
            </p>

            <h2>Common Handyman Tasks for Sacramento Homes</h2>
            <p>
              Sacramento&apos;s housing stock ranges from historic Craftsman bungalows in Midtown to
              modern tract homes in Natomas and Elk Grove. Each style has its own maintenance
              needs, but certain repairs are universal.
            </p>

            <h3>Drywall Repairs</h3>
            <p>
              Sacramento&apos;s clay soil causes foundation movement that shows up as drywall cracks,
              especially around door frames and corners. Common repairs include:
            </p>
            <ul>
              <li>Patching nail pops and small holes</li>
              <li>Repairing corner bead damage</li>
              <li>Fixing cracks from settling</li>
              <li>Texture matching for seamless repairs</li>
              <li>Water damage repair from roof or plumbing leaks</li>
            </ul>

            <h3>Door and Window Repairs</h3>
            <p>
              Temperature swings from Sacramento&apos;s hot summers to cool winters cause wood expansion
              and contraction:
            </p>
            <ul>
              <li>Adjusting sticking doors and windows</li>
              <li>Replacing worn weatherstripping</li>
              <li>Fixing broken hardware (handles, locks, hinges)</li>
              <li>Installing new doors or pet doors</li>
              <li>Repairing damaged frames</li>
            </ul>

            <h3>Trim and Molding Work</h3>
            <ul>
              <li>Replacing damaged baseboards</li>
              <li>Installing crown molding</li>
              <li>Repairing or replacing door casings</li>
              <li>Adding chair rails or wainscoting</li>
              <li>Caulking gaps between trim and walls</li>
            </ul>

            <div className="bg-mint_green-50 border-l-4 border-viridian-500 p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-viridian-900 mb-2">Bundle for Savings</p>
              <p className="text-slate-700 mb-0">
                Most handymen charge a minimum service fee. Maximize value by bundling multiple
                small tasks into one visit. That sticky door, loose towel bar, and squeaky step
                can all be addressed in a single appointment.
              </p>
            </div>

            <h2>Interior Repairs and Improvements</h2>

            <h3>Fixture Installation</h3>
            <div className="bg-mint_green-50 rounded-lg p-6 my-4 not-prose">
              <ul className="space-y-3">
                {[
                  "Ceiling fan installation or replacement",
                  "Light fixture updates",
                  "Towel bars, toilet paper holders, bathroom accessories",
                  "Shelf and closet organization systems",
                  "TV mounting and cable management",
                  "Smoke and CO detector installation",
                  "Doorbell and smart home device mounting",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-viridian-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3>Minor Plumbing</h3>
            <p>
              Many plumbing tasks don&apos;t require a licensed plumber:
            </p>
            <ul>
              <li>Fixing running toilets</li>
              <li>Replacing faucets and showerheads</li>
              <li>Clearing minor drain clogs</li>
              <li>Installing new toilet seats</li>
              <li>Replacing supply lines and shut-off valves</li>
              <li>Fixing garbage disposal issues</li>
            </ul>

            <h3>Minor Electrical</h3>
            <p>
              Basic electrical work that doesn&apos;t require permits:
            </p>
            <ul>
              <li>Replacing outlets and switches</li>
              <li>Installing dimmer switches</li>
              <li>Updating outlet covers and plates</li>
              <li>Replacing light fixtures (on existing circuits)</li>
              <li>Adding USB outlets</li>
            </ul>

            <div className="bg-viridian-900 text-white p-8 my-8 rounded-lg">
              <h3 className="text-white mt-0">Professional Handyman Services</h3>
              <p className="text-mint_green-100 mb-4">
                From quick fixes to project lists, our skilled handymen handle repairs efficiently
                with transparent pricing. One call covers drywall, doors, fixtures, and more.
              </p>
              <Link
                href="/services/handyman"
                className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition no-underline"
              >
                View Handyman Services
              </Link>
            </div>

            <h2>Exterior Handyman Tasks</h2>

            <h3>Deck and Fence Repairs</h3>
            <p>
              Sacramento&apos;s sun and occasional rain take a toll on outdoor wood:
            </p>
            <ul>
              <li>Replacing rotted deck boards</li>
              <li>Tightening loose railings</li>
              <li>Fixing sagging gates</li>
              <li>Replacing broken fence pickets</li>
              <li>Re-securing loose posts</li>
            </ul>

            <h3>Exterior Maintenance</h3>
            <ul>
              <li>Caulking windows and doors</li>
              <li>Replacing exterior light fixtures</li>
              <li>Installing house numbers and mailboxes</li>
              <li>Minor siding repairs</li>
              <li>Screen door installation and repair</li>
            </ul>

            <h2>When to Call a Handyman vs. Specialist</h2>

            <h3>Handyman Is Right For:</h3>
            <ul>
              <li>Jobs under $500 total cost</li>
              <li>Repairs not requiring permits</li>
              <li>Multiple small tasks in one visit</li>
              <li>General maintenance and upkeep</li>
              <li>Installations following manufacturer instructions</li>
            </ul>

            <h3>Call a Specialist For:</h3>
            <ul>
              <li>
                <strong>Electrical:</strong> New circuits, panel work, major rewiring
              </li>
              <li>
                <strong>Plumbing:</strong> Water heater replacement, re-piping, sewer work
              </li>
              <li>
                <strong>HVAC:</strong> System repairs, duct work, refrigerant handling
              </li>
              <li>
                <strong>Roofing:</strong> Major repairs, re-roofing, structural issues
              </li>
              <li>
                <strong>Structural:</strong> Load-bearing walls, foundation work
              </li>
            </ul>

            <h2>Getting the Most from Your Handyman Visit</h2>

            <h3>Before the Appointment</h3>
            <ul>
              <li>
                <strong>Make a complete list:</strong> Walk through your home and note every
                repair needed, no matter how small
              </li>
              <li>
                <strong>Prioritize:</strong> Mark must-do items vs. nice-to-have if time runs out
              </li>
              <li>
                <strong>Take photos:</strong> Document issues to share before the visit
              </li>
              <li>
                <strong>Note materials:</strong> If you want specific finishes or colors matched
              </li>
              <li>
                <strong>Clear access:</strong> Move furniture away from work areas
              </li>
            </ul>

            <h3>During the Visit</h3>
            <ul>
              <li>Walk through all tasks at the start</li>
              <li>Discuss any concerns or special requirements</li>
              <li>Ask about time estimates for each task</li>
              <li>Be available for questions but don&apos;t hover</li>
              <li>Inspect completed work before final payment</li>
            </ul>

            <h2>Seasonal Handyman Tasks for Sacramento</h2>

            <h3>Spring</h3>
            <ul>
              <li>Check and repair window screens</li>
              <li>Inspect deck for winter damage</li>
              <li>Test and repair outdoor faucets</li>
              <li>Touch up exterior caulking</li>
            </ul>

            <h3>Summer</h3>
            <ul>
              <li>Install ceiling fans for cooling</li>
              <li>Check weatherstripping for AC efficiency</li>
              <li>Repair irrigation system issues</li>
              <li>Address any indoor projects (AC makes it comfortable)</li>
            </ul>

            <h3>Fall</h3>
            <ul>
              <li>Seal gaps before heating season</li>
              <li>Check and clean dryer vents</li>
              <li>Install storm doors if needed</li>
              <li>Address exterior repairs before rain</li>
            </ul>

            <h3>Winter</h3>
            <ul>
              <li>Focus on interior projects</li>
              <li>Check for drafts and seal</li>
              <li>Repair any water damage from leaks</li>
              <li>Plan spring project list</li>
            </ul>

            <h2>Combining Services for Efficiency</h2>
            <p>
              Many handyman tasks pair well with other home services:
            </p>
            <ul>
              <li>
                <Link href="/services/interior-painting">Interior painting</Link> + drywall
                repairs (fix walls before painting)
              </li>
              <li>
                <Link href="/services/gutter-cleaning">Gutter cleaning</Link> + exterior caulking
                (while ladders are up)
              </li>
              <li>
                <Link href="/services/pressure-washing">Pressure washing</Link> + deck repairs
                (clean then fix)
              </li>
              <li>
                <Link href="/services/maintenance-plans">Maintenance plans</Link> bundle multiple
                services with scheduled handyman visits
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
                  Professional Handyman Services
                </h2>
                <p className="text-slate-700 mb-6">
                  Stop letting your to-do list grow. Our skilled handymen tackle repairs
                  efficiently with transparent flat-rate pricing and quality workmanship.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services/handyman"
                    className="inline-block bg-viridian-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-viridian-700 transition text-center"
                  >
                    Handyman Services
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
                  src="/hero-service-handyman.jpeg"
                  alt="Professional handyman services in Sacramento"
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
