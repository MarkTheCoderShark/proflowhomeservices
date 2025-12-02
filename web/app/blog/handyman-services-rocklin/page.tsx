import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, ArticleJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export const metadata = seoMetadata({
  title: "Rocklin Handyman Services: Your Complete Home Repair Guide",
  description:
    "Comprehensive guide to handyman services for Rocklin homeowners. Learn what repairs handymen handle, costs, and how to maximize service calls for Stanford Ranch, Whitney Oaks, and all Rocklin neighborhoods.",
  path: "/blog/handyman-services-rocklin",
});

const faqs = [
  {
    question: "What services does a handyman provide in Rocklin?",
    answer:
      "Professional handymen in Rocklin handle drywall repair, door adjustments, fence repairs, minor plumbing fixes, electrical outlet installation, pressure washing, gutter cleaning, deck maintenance, cabinet hardware installation, tile work, and general home repairs. They tackle projects too small for specialized contractors but requiring professional skills.",
  },
  {
    question: "How much do handyman services cost in Rocklin?",
    answer:
      "Rocklin handyman services typically charge $75-$150 per hour depending on complexity and company. Many offer 2-3 hour minimums. Project-based pricing ranges from $150-$500 for common repairs. Jobs requiring specialized skills or materials may cost more. Get written estimates for larger projects.",
  },
  {
    question: "Do handymen need to be licensed in Rocklin, CA?",
    answer:
      "California requires contractor licenses for projects exceeding $500 in labor and materials. Many handyman services operate legally under this threshold. For larger projects, verify the company holds appropriate California contractor licenses. Always confirm insurance coverage regardless of project size.",
  },
  {
    question: "How can I maximize the value of a handyman service call?",
    answer:
      "Create a detailed list of all needed repairs before scheduling. Group similar tasks together—all door adjustments, all drywall patches, etc. Provide clear access to work areas. Have materials ready if you purchased them. Prioritize tasks so most important items complete first if time runs short.",
  },
  {
    question: "What is the difference between a handyman and specialized contractor?",
    answer:
      "Handymen handle general repairs and maintenance across multiple trades. Specialized contractors focus on specific areas like electrical, plumbing, or HVAC. Use handymen for minor repairs, quick fixes, and projects under $500. Call specialized contractors for major installations, permits, or complex technical work.",
  },
];

export default function HandymanServicesRocklin() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Rocklin Handyman Services", url: "/blog/handyman-services-rocklin" },
        ]}
      />
      <ArticleJsonLd
        headline="Rocklin Handyman Services: Your Complete Home Repair Guide"
        description="Comprehensive guide to handyman services for Rocklin homeowners. Learn what repairs handymen handle, costs, and how to maximize service calls."
        image="/hero-service-handyman.jpeg"
        datePublished="2024-12-01"
        dateModified="2024-12-01"
        url="/blog/handyman-services-rocklin"
      />
      <FAQPageJsonLd faqs={faqs} />

      {/* Hero Section */}
      <section
        className="relative section overflow-hidden"
        style={{
          backgroundImage: "url(/hero-service-handyman.jpeg)",
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
              Home Repairs
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              December 1, 2024
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              13 min read
            </span>
          </div>
          <h1 className="heading text-3xl sm:text-4xl font-bold text-white drop-shadow-lg max-w-4xl">
            Rocklin Handyman Services: Your Complete Home Repair Guide
          </h1>
          <p className="mt-4 text-lg text-mint_green-100 max-w-2xl">
            Everything Rocklin homeowners need to know about handyman services—what they handle,
            costs, and how to get maximum value from every service call.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:text-viridian-900 prose-a:text-viridian-600 prose-a:no-underline hover:prose-a:underline">
            <p className="lead text-xl text-slate-600">
              Every Rocklin homeowner accumulates a list of small repairs and improvements that need
              attention. A door that sticks, drywall damage from moving furniture, fence boards
              needing replacement, or cabinet hardware that never quite worked right. Professional
              handyman services handle these exact situations—providing skilled labor for projects
              too small for specialized contractors but requiring expertise beyond typical DIY
              comfort levels.
            </p>

            <h2>Understanding Handyman Services in Rocklin</h2>
            <p>
              Handyman services fill the crucial middle ground between simple DIY tasks and major
              contracting projects. In Rocklin&apos;s neighborhoods—from established homes in Whitney
              Oaks to newer construction in Sunset West—properties constantly need minor repairs,
              adjustments, and maintenance that handymen handle efficiently and affordably.
            </p>
            <p>
              The handyman model works perfectly for busy Rocklin professionals, growing families,
              and retirees who lack time, tools, or inclination to tackle repairs themselves. Rather
              than calling multiple specialized contractors for various small jobs—each with minimum
              charges and scheduling challenges—a single handyman visit addresses your entire list
              efficiently.
            </p>

            <h2>Common Handyman Services for Rocklin Homes</h2>
            <p>
              Professional handymen handle an impressive range of tasks. Here&apos;s what Rocklin
              homeowners commonly request:
            </p>

            <h3>Interior Repairs and Improvements</h3>
            <p>
              <strong>Drywall repair:</strong> From small nail holes to larger damage from furniture
              moves or doorknob impacts, handymen patch, texture, and paint drywall seamlessly.
              This ranks among the most common requests in Rocklin homes.
            </p>
            <p>
              <strong>Door adjustments and repairs:</strong> Doors that stick, won&apos;t latch, or
              hang crooked frustrate homeowners daily. Handymen adjust hinges, plane edges, fix
              locksets, and replace weatherstripping. Rocklin&apos;s temperature swings cause wood
              doors to swell and shrink, making adjustments necessary.
            </p>
            <p>
              <strong>Cabinet hardware installation:</strong> Updating cabinet pulls and knobs
              transforms kitchen and bathroom appearance. Handymen ensure proper alignment and
              secure installation—seemingly simple but requiring precision for professional results.
            </p>
            <p>
              <strong>Shelving and organizational systems:</strong> Installing closet systems,
              garage shelving, and custom storage solutions requires proper wall anchoring and
              leveling. Handymen have the tools and expertise for secure, lasting installations.
            </p>
            <p>
              <strong>Tile work and caulking:</strong> Minor tile repairs, grout restoration, and
              caulking around tubs, showers, and sinks prevent water damage and maintain bathroom
              appearance.
            </p>

            <h3>Exterior Maintenance and Repairs</h3>
            <p>
              <strong>Fence repairs:</strong> Rocklin&apos;s many fenced yards require ongoing
              maintenance. Handymen replace boards, repair gates, address leaning posts, and restore
              fence function without the expense of complete replacement.
            </p>
            <p>
              <strong>Deck maintenance:</strong> Wood decks in Rocklin neighborhoods need regular
              care including board replacement, railing repairs, and staining. Handymen handle minor
              deck projects that maintain safety and appearance.
            </p>
            <p>
              <strong>Gutter repairs:</strong> Leaking seams, loose hangers, and damaged downspouts
              compromise gutter systems. Handymen make targeted repairs that extend gutter life
              without full replacement.
            </p>
            <p>
              <strong>Pressure washing:</strong> Driveways, walkways, patios, and home exteriors
              accumulate dirt and organic growth. Professional pressure washing restores curb appeal
              and prevents surface deterioration.
            </p>
            <p>
              <strong>Minor painting:</strong> Touch-up painting, single room projects, and exterior
              trim work fall within handyman capabilities. For whole-house painting, specialized
              painting contractors deliver better results.
            </p>

            <h3>Minor Plumbing and Electrical</h3>
            <p>
              <strong>Fixture installation:</strong> Installing new faucets, showerheads, toilet
              seats, and similar fixtures doesn&apos;t require licensed plumbers but benefits from
              professional installation ensuring leak-free operation.
            </p>
            <p>
              <strong>Drain cleaning:</strong> Basic drain clearing for sinks, tubs, and floor
              drains addresses common clogs without calling expensive emergency plumbers.
            </p>
            <p>
              <strong>Electrical outlets and switches:</strong> Replacing outdated outlets,
              installing USB charging outlets, and swapping light switches modernizes homes safely.
              Major electrical work requires licensed electricians, but simple replacements fall
              within handyman scope.
            </p>
            <p>
              <strong>Light fixture installation:</strong> Updating ceiling lights, adding recessed
              lighting, or installing dimmer switches enhances home function and appearance.
            </p>

            <div className="bg-mint_green-50 border-l-4 border-viridian-500 p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-viridian-900 mb-2">Rocklin Handyman Pro Tip</p>
              <p className="text-slate-700 mb-0">
                Before your scheduled handyman appointment, walk through your Rocklin home with a
                notepad documenting every needed repair. Check door operation, test outlets,
                examine walls for damage, and inspect exterior areas. Comprehensive lists ensure you
                maximize service call value by addressing everything at once.
              </p>
            </div>

            <h2>Handyman Costs in Rocklin</h2>
            <p>
              Understanding pricing helps you budget appropriately and evaluate service quotes:
            </p>

            <h3>Hourly Rates</h3>
            <p>
              Most Rocklin handyman services charge $75-$150 per hour depending on company
              reputation, technician experience, and project complexity. Many companies implement
              2-3 hour minimums, meaning you pay for at least two hours even if work takes 90
              minutes. This minimum charge structure makes creating comprehensive task lists
              valuable—you&apos;re already paying for the time, so use it fully.
            </p>

            <h3>Project-Based Pricing</h3>
            <p>
              Some handymen quote flat rates for specific projects rather than hourly charges.
              Common Rocklin project pricing includes:
            </p>
            <ul>
              <li>Drywall repair (per patch): $75-$200 depending on size and complexity</li>
              <li>Door adjustment: $100-$175 per door</li>
              <li>Fence board replacement: $15-$30 per board plus labor</li>
              <li>Cabinet hardware installation: $3-$8 per pull/knob for labor</li>
              <li>Gutter repair: $100-$300 depending on extent of damage</li>
              <li>Pressure washing: $0.15-$0.40 per square foot</li>
            </ul>

            <h3>Factors Affecting Cost</h3>
            <p>
              Several variables influence final pricing. Complex repairs requiring specialized
              skills cost more than straightforward tasks. Material costs add to labor charges—some
              companies mark up materials while others charge only actual costs. Emergency or
              same-day service typically carries premium pricing. Location within Rocklin matters
              minimally, though properties far from service areas might incur travel charges.
            </p>

            <h2>Maximizing Your Handyman Service Call Value</h2>
            <p>
              Smart preparation ensures you get maximum benefit from every handyman visit to your
              Rocklin home:
            </p>

            <h3>Create a Comprehensive Task List</h3>
            <p>
              Walk through your entire property—inside and out—documenting every needed repair.
              Group similar tasks together: all door issues in one section, all drywall repairs in
              another, exterior items separately. Prioritize tasks so critical items complete first
              if time runs short.
            </p>

            <h3>Provide Clear Access</h3>
            <p>
              Before the handyman arrives, clear access to all work areas. Move furniture away from
              walls needing drywall repair. Clear countertops if kitchen work is scheduled. Ensure
              gate access for exterior projects. Remove items blocking attics, crawl spaces, or
              utility areas. Every minute spent moving obstacles is a minute not spent on repairs.
            </p>

            <h3>Have Materials Ready</h3>
            <p>
              If you&apos;ve purchased specific materials—new cabinet hardware, light fixtures, or
              supplies—have everything on-site and accessible. Missing materials delay projects and
              waste your paid time.
            </p>

            <h3>Communicate Clearly</h3>
            <p>
              Show the handyman every item on your list at the start of the appointment. This allows
              them to plan work sequence efficiently, gathering needed tools once rather than making
              multiple trips. Discuss priorities so the most important tasks complete first.
            </p>

            <h3>Ask Questions</h3>
            <p>
              Use your handyman&apos;s expertise. Ask about maintenance tips, recommended products, or
              early warning signs of developing problems. Quality handymen share knowledge that
              helps you maintain your Rocklin home better.
            </p>

            <h2>When to Use Handyman Services vs. Specialized Contractors</h2>
            <p>
              Understanding the appropriate professional for each situation saves money and ensures
              proper work:
            </p>

            <h3>Handyman Services Work Best For:</h3>
            <ul>
              <li>Minor repairs under $500 total cost</li>
              <li>Projects not requiring permits or inspections</li>
              <li>Tasks involving multiple trade skills in one visit</li>
              <li>Cosmetic improvements and basic maintenance</li>
              <li>Projects where you need quick turnaround</li>
            </ul>

            <h3>Specialized Contractors Are Required For:</h3>
            <ul>
              <li>
                <strong>Major electrical work:</strong> Panel upgrades, whole-house rewiring, or
                new circuits require licensed electricians
              </li>
              <li>
                <strong>Significant plumbing:</strong> Gas line work, main line repairs, or water
                heater installation need licensed plumbers
              </li>
              <li>
                <strong>HVAC installation:</strong> Heating and cooling system work requires HVAC
                contractors
              </li>
              <li>
                <strong>Structural modifications:</strong> Removing walls, adding beams, or
                foundation work needs structural engineers and general contractors
              </li>
              <li>
                <strong>Roofing:</strong> Roof repairs and replacement require specialized roofing
                contractors
              </li>
              <li>
                <strong>Projects requiring permits:</strong> Rocklin and Placer County require
                permits for major work, necessitating licensed contractors
              </li>
            </ul>

            <div className="bg-viridian-900 text-white p-8 my-8 rounded-lg">
              <h3 className="text-white mt-0">Professional Handyman Service for Rocklin Homes</h3>
              <p className="text-mint_green-100 mb-4">
                ProFlow provides skilled handyman services throughout Rocklin—from Stanford Ranch to
                Whitney Oaks and every neighborhood between. Our experienced technicians handle your
                entire repair list efficiently with transparent pricing and real-time updates.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition no-underline"
              >
                Schedule Your Handyman Service
              </Link>
            </div>

            <h2>Common Handyman Projects in Rocklin Neighborhoods</h2>
            <p>
              Different Rocklin neighborhoods face characteristic maintenance needs based on home
              age, style, and construction:
            </p>

            <h3>Stanford Ranch</h3>
            <p>
              This master-planned community features homes built primarily in the 2000s. Common
              handyman requests include door adjustments as houses settle, drywall repairs from
              active families, fence maintenance from energetic pets, and minor electrical updates.
              HOA compliance sometimes requires exterior repairs that handymen handle efficiently.
            </p>

            <h3>Whitney Oaks</h3>
            <p>
              Established neighborhood with mature landscaping and homes showing natural aging.
              Handyman services frequently address rotted trim boards, deck maintenance, fence
              repairs from large trees, door and window adjustments, and ongoing interior
              maintenance. The larger lots common in Whitney Oaks mean more fence and deck area
              requiring attention.
            </p>

            <h3>Sunset West</h3>
            <p>
              Newer construction brings different challenges. Handymen help homeowners with
              customization projects including shelving installation, garage organization systems,
              minor touch-up work from construction, and updating builder-grade fixtures. Many
              homeowners want immediate improvements after moving in.
            </p>

            <h3>Rocklin Ranch and Clover Valley</h3>
            <p>
              Larger properties with more substantial outdoor features create unique handyman
              opportunities. Extensive decking, complex fencing, larger patios and hardscaping, and
              more square footage mean regular maintenance needs. Many properties include RV storage
              areas requiring occasional repairs.
            </p>

            <h2>HOA Considerations for Rocklin Handyman Projects</h2>
            <p>
              Many Rocklin neighborhoods operate under homeowners associations with exterior
              modification guidelines:
            </p>

            <h3>What Typically Requires HOA Approval</h3>
            <ul>
              <li>Fence replacements or style changes</li>
              <li>Exterior painting color changes</li>
              <li>Permanent structures like arbors or pergolas</li>
              <li>Significant landscape modifications</li>
              <li>Solar panel installation</li>
            </ul>

            <h3>What Usually Doesn&apos;t Require Approval</h3>
            <ul>
              <li>Interior repairs and modifications</li>
              <li>Maintenance repairs maintaining existing appearance</li>
              <li>Replacing damaged fence boards with matching materials</li>
              <li>Door and window repairs</li>
              <li>Gutter repairs and cleaning</li>
            </ul>

            <p>
              When uncertain about HOA requirements for your Rocklin neighborhood, check your
              CC&amp;Rs or contact your HOA management company before scheduling work. Handymen
              familiar with local communities understand typical HOA requirements and can offer
              guidance.
            </p>

            <h2>Seasonal Handyman Needs in Rocklin</h2>
            <p>
              Rocklin&apos;s climate creates predictable seasonal maintenance and repair patterns:
            </p>

            <h3>Spring (March-May)</h3>
            <p>
              Spring brings fence and deck maintenance after winter weather, exterior touch-up
              painting and repairs, gutter cleaning and minor repairs, pressure washing driveways
              and patios, and preparation for outdoor living season. Many Rocklin homeowners tackle
              accumulated projects as weather improves.
            </p>

            <h3>Summer (June-August)</h3>
            <p>
              Hot weather focuses activity on interior projects: drywall repairs before holiday
              guests, cabinet hardware updates, interior painting, organizing garages and storage
              areas, and door adjustments as wood expands in heat. Exterior work happens early
              morning or evening to avoid peak temperatures.
            </p>

            <h3>Fall (September-November)</h3>
            <p>
              Fall preparation includes weatherstripping installation before winter, final gutter
              cleaning before rainy season, exterior caulking and sealing, storm door adjustments,
              and addressing any exterior issues before weather deteriorates.
            </p>

            <h3>Winter (December-February)</h3>
            <p>
              Winter focuses on interior projects plus occasional weather-damage repairs. Indoor
              comfort improvements, holiday preparation repairs, addressing door drafts, minor
              plumbing fixes, and weather-related damage repair keep handymen busy despite cooler
              temperatures.
            </p>

            <h2>Vetting Handyman Services in Rocklin</h2>
            <p>
              Choosing the right handyman service protects your home and investment:
            </p>

            <h3>Verify Insurance</h3>
            <p>
              Always confirm general liability insurance covering property damage. Request
              certificates of insurance rather than taking verbal confirmation. Ask about workers
              compensation coverage if the company employs multiple technicians. Uninsured handymen
              create serious liability if accidents occur.
            </p>

            <h3>Check References</h3>
            <p>
              Request references from recent Rocklin projects similar to yours. Contact these
              references asking about quality, professionalism, pricing accuracy, and whether
              they&apos;d use the service again. Online reviews provide additional perspective but
              shouldn&apos;t replace direct reference checks.
            </p>

            <h3>Understand Licensing Requirements</h3>
            <p>
              California law allows unlicensed handymen to perform work under $500 total (labor and
              materials). Larger projects require appropriate contractor licensing. Verify licenses
              through the California Contractors State License Board website. Never hire unlicensed
              contractors for work requiring licenses—you lose legal recourse if problems develop.
            </p>

            <h3>Get Written Estimates</h3>
            <p>
              For projects exceeding a few hundred dollars, request written estimates detailing work
              scope, materials included, labor costs, timeline, and payment terms. Written
              agreements prevent misunderstandings and provide documentation if disputes arise.
            </p>

            <h3>Communication Quality</h3>
            <p>
              Evaluate communication during initial contacts. Do they return calls promptly? Answer
              questions thoroughly? Provide clear explanations? Communication quality during sales
              predicts service experience. Companies offering digital communication like text
              updates and photo documentation provide superior customer experience.
            </p>

            <h2>DIY vs. Handyman: Making Smart Decisions</h2>
            <p>
              Some projects suit DIY approaches while others warrant professional help:
            </p>

            <h3>Good DIY Projects for Rocklin Homeowners</h3>
            <ul>
              <li>Basic caulking around tubs and sinks</li>
              <li>Replacing outlet and switch covers</li>
              <li>Simple shelf installation on studs</li>
              <li>Basic yard maintenance and landscaping</li>
              <li>Changing air filters and smoke detector batteries</li>
            </ul>

            <h3>Projects Better Left to Handymen</h3>
            <ul>
              <li>Drywall repair requiring texture matching</li>
              <li>Door adjustments needing precise planing</li>
              <li>Electrical outlet replacement involving wiring</li>
              <li>Fence repairs requiring structural knowledge</li>
              <li>Any project where mistakes create expensive repairs</li>
            </ul>

            <p>
              Consider your skill level, available time, tool access, and the cost of potential
              mistakes. A $150 handyman call that prevents a $1,000 DIY disaster represents
              excellent value. Rocklin homeowners with busy professional schedules often find
              handyman services deliver better return on investment than spending weekends on
              unfamiliar projects.
            </p>

            <h2>The Value of Regular Handyman Maintenance</h2>
            <p>
              Establishing relationships with quality handyman services provides ongoing benefits
              for your Rocklin home:
            </p>

            <h3>Preventing Major Repairs</h3>
            <p>
              Regular handyman visits catch small problems before they become expensive disasters.
              That minor leak identified early prevents major water damage. The loose fence board
              repaired promptly avoids entire fence panel replacement.
            </p>

            <h3>Maintaining Home Value</h3>
            <p>
              Well-maintained homes command premium prices in Rocklin&apos;s competitive real estate
              market. Regular handyman maintenance keeps your home in top condition, protecting your
              investment and ensuring maximum value when selling.
            </p>

            <h3>Improving Daily Living</h3>
            <p>
              Living with broken items, stuck doors, and deferred maintenance creates constant
              low-level frustration. Professional handyman service eliminates these annoyances,
              making your Rocklin home more comfortable and enjoyable.
            </p>

            <h3>Time Freedom</h3>
            <p>
              Rocklin offers incredible outdoor recreation—from Quarry Park Adventures to nearby
              Folsom Lake. Professional handyman services free your weekends for enjoying these
              amenities rather than struggling with unfamiliar repairs.
            </p>

            <h2>Choosing ProFlow for Rocklin Handyman Services</h2>
            <p>
              When selecting handyman services for your Rocklin home, look for companies offering
              comprehensive capabilities, transparent pricing with no hidden fees, skilled
              technicians with broad experience, full insurance coverage, excellent communication
              including real-time updates, and local expertise understanding Rocklin homes and
              neighborhoods.
            </p>
            <p>
              Quality handyman services deliver tremendous value for busy Rocklin homeowners. From
              quick repairs to comprehensive project lists, professional handymen maintain your
              home&apos;s condition, protect your investment, and free your time for the activities and
              people you value most. With Rocklin&apos;s median home values exceeding $600,000,
              professional maintenance through quality handyman services proves its worth many times
              over.
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

      {/* Service CTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-viridian-50 to-mint_green-50 rounded-2xl p-8 md:p-12 border-2 border-mint_green-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading text-2xl font-semibold text-viridian-900 mb-4">
                  Professional Handyman Services for Rocklin
                </h2>
                <p className="text-slate-700 mb-6">
                  Serving Stanford Ranch, Whitney Oaks, Sunset West, Rocklin Ranch, Clover Valley,
                  and all Rocklin neighborhoods. Our skilled technicians handle your complete repair
                  list with transparent pricing, quality workmanship, and excellent communication.
                </p>
                <Link
                  href="/services/handyman"
                  className="inline-block bg-viridian-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-viridian-700 transition"
                >
                  Learn About Our Handyman Service
                </Link>
              </div>
              <div className="relative h-64 md:h-full min-h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/hero-service-handyman.jpeg"
                  alt="Professional handyman services in Rocklin, CA"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles currentSlug="handyman-services-rocklin" />
    </>
  );
}
