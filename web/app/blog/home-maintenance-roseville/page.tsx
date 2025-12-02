import Image from "next/image";
import Link from "next/link";
import { BreadcrumbsJsonLd, ArticleJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import CTASection from "@/components/sections/CTASection";
import { getArticleBySlug } from "@/data/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const article = getArticleBySlug("home-maintenance-roseville")!;

export const metadata = seoMetadata({
  title: article.title,
  description: article.description,
  path: `/blog/${article.slug}`,
  image: article.image,
});

const faqs = [
  {
    question: "What's the most important seasonal maintenance task for Roseville homes?",
    answer:
      "Pre-winter gutter cleaning in late November is critical for Roseville homes. Our sudden winter storms can overwhelm clogged gutters, leading to water damage, foundation issues, and landscape erosion. This single task prevents thousands in potential repairs, especially important given Roseville's expansive clay soil.",
  },
  {
    question: "How does Roseville's climate affect home maintenance needs?",
    answer:
      "Roseville's hot, dry summers (often 100°F+) followed by wet winters create unique challenges. Heat causes paint oxidation, roof damage, and HVAC strain. Winter rains test drainage systems and reveal weaknesses. This extreme seasonal variation means Roseville homes need proactive maintenance timed to our specific climate patterns.",
  },
  {
    question: "Do newer Roseville homes in Fiddyment Farm or Blue Oaks need seasonal maintenance?",
    answer:
      "Absolutely. New construction doesn't exempt homes from maintenance—in fact, the first few years are critical for identifying builder-related issues before warranties expire. HVAC systems, irrigation, gutters, and paint all require regular attention regardless of home age. Newer Roseville developments also face construction dust that demands more frequent exterior cleaning.",
  },
  {
    question: "What maintenance tasks should I never skip in Roseville?",
    answer:
      "Never skip: (1) Pre-winter gutter cleaning in November, (2) HVAC filter changes before summer, (3) irrigation system checks in spring, and (4) annual roof inspections. These four tasks prevent the most expensive repairs Roseville homeowners face—water damage, HVAC failure, landscape loss, and roof leaks.",
  },
  {
    question: "Should I hire professionals or DIY maintenance in Roseville?",
    answer:
      "Mix both approaches. DIY works for filter changes, basic landscaping, and visual inspections. Hire professionals for gutter cleaning (safety), HVAC service (complexity), roof inspections (expertise), and pressure washing (equipment). Roseville's two-story homes make ladder work particularly dangerous for DIY.",
  },
];

export default function HomeMaintenanceRoseville() {
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
              Roseville&apos;s position in Placer County creates unique home maintenance challenges. From
              scorching summers that regularly exceed 100°F to sudden winter storms that test your home&apos;s
              defenses, staying ahead of seasonal maintenance is essential for protecting your investment.
              This comprehensive checklist covers everything Roseville homeowners need to know.
            </p>

            <h2>Why Roseville Homes Need Seasonal Maintenance</h2>
            <p>
              Roseville&apos;s climate swings from extreme heat to wet winters, putting stress on every system
              in your home. Unlike mild coastal areas, our temperature extremes cause materials to expand and
              contract dramatically, accelerating wear. The clay-heavy soil common throughout Roseville—from
              Blue Oaks to West Roseville—expands when wet and shrinks when dry, affecting foundations.
              Regular seasonal maintenance catches problems early, prevents expensive repairs, and extends the
              life of your home&apos;s major systems.
            </p>

            <h2>Spring Maintenance Checklist (March-May)</h2>
            <p>
              Spring in Roseville brings warming temperatures, blooming landscapes, and the perfect time to
              prepare your home for summer heat. Here&apos;s your comprehensive spring checklist:
            </p>

            <h3>Exterior Maintenance</h3>
            <ul>
              <li>
                <strong>Gutter cleaning:</strong> Remove pollen, seed pods, and early leaf drop accumulated
                over winter. This is critical before summer when organic material bakes into gutters. Pay
                special attention if you&apos;re in oak-heavy neighborhoods like Highland Reserve.
              </li>
              <li>
                <strong>Roof inspection:</strong> Check for winter storm damage, loose or missing shingles,
                and proper flashing around chimneys and vents. Roseville&apos;s occasional hail can cause damage
                that worsens in summer heat.
              </li>
              <li>
                <strong>Pressure washing:</strong> Clean driveways, walkways, stucco exteriors, and fences.
                Remove winter dirt and mildew before summer bakes it permanently onto surfaces.
              </li>
              <li>
                <strong>Irrigation system activation:</strong> Turn on sprinklers, check for winter damage,
                adjust sprinkler heads, and test zones. Replace broken heads and adjust timing for spring
                weather.
              </li>
              <li>
                <strong>Exterior paint inspection:</strong> Look for peeling, cracking, or fading paint.
                Roseville&apos;s sun is intense—early detection allows summer painting before damage worsens.
              </li>
              <li>
                <strong>Window and door seals:</strong> Check weather stripping and caulking. Replace damaged
                seals before summer heat tests your air conditioning efficiency.
              </li>
            </ul>

            <h3>HVAC Preparation</h3>
            <ul>
              <li>
                <strong>Air conditioning service:</strong> Schedule professional maintenance before June heat
                arrives. Technicians clean coils, check refrigerant, test electrical components, and ensure
                peak efficiency when you need it most.
              </li>
              <li>
                <strong>Replace air filters:</strong> Install fresh filters before running AC heavily. Consider
                upgrading to HEPA filters if you live near construction areas in Fiddyment Farm or Blue Oaks.
              </li>
              <li>
                <strong>Clean outdoor unit:</strong> Remove debris, leaves, and cottonwood fluff from around
                AC condenser. Trim vegetation to maintain 2-3 feet of clearance for proper airflow.
              </li>
              <li>
                <strong>Test thermostat:</strong> Verify proper operation and consider upgrading to
                programmable or smart thermostats to manage Roseville&apos;s summer cooling costs.
              </li>
            </ul>

            <h3>Interior Tasks</h3>
            <ul>
              <li>
                <strong>Ceiling fan direction:</strong> Switch fans to counterclockwise (summer mode) to create
                cooling downdraft
              </li>
              <li>
                <strong>Check smoke and CO detectors:</strong> Test batteries, replace units older than 10
                years
              </li>
              <li>
                <strong>Drain water heater:</strong> Flush sediment to maintain efficiency and extend lifespan
              </li>
            </ul>

            <div className="bg-mint_green-50 border-l-4 border-viridian-500 p-6 my-8 rounded-r-lg">
              <p className="font-semibold text-viridian-900 mb-2">Roseville Spring Priority</p>
              <p className="text-slate-700 mb-0">
                The single most important spring task for Roseville homes is air conditioning service. When
                June arrives and temperatures hit 100°F+, HVAC companies are booked solid and emergency repairs
                cost premium rates. Service in April or May ensures your system is ready and avoids the summer
                rush.
              </p>
            </div>

            <h2>Summer Maintenance Checklist (June-August)</h2>
            <p>
              Roseville summers are brutal, with temperatures regularly exceeding 100°F. Focus on keeping
              cooling systems running and protecting your home from heat damage:
            </p>

            <h3>Cooling System Maintenance</h3>
            <ul>
              <li>
                <strong>Monthly filter changes:</strong> During heavy use, change or clean filters monthly.
                Dirty filters force your AC to work harder, increasing costs and risking breakdowns.
              </li>
              <li>
                <strong>Keep condenser clear:</strong> Weekly visual checks ensure nothing blocks airflow to
                outdoor unit. Clear grass clippings and debris after lawn maintenance.
              </li>
              <li>
                <strong>Monitor performance:</strong> If your home isn&apos;t cooling properly or you notice ice
                on refrigerant lines, call professionals immediately. Don&apos;t wait in Roseville&apos;s heat.
              </li>
            </ul>

            <h3>Water Conservation and Irrigation</h3>
            <ul>
              <li>
                <strong>Adjust watering schedules:</strong> Increase run times as temperatures climb. Water in
                early morning (before 9 AM) to minimize evaporation.
              </li>
              <li>
                <strong>Check for leaks:</strong> Inspect irrigation system weekly. A single broken sprinkler
                head can waste thousands of gallons in Roseville&apos;s heat.
              </li>
              <li>
                <strong>Add mulch:</strong> Apply 2-3 inches of mulch around plants to retain moisture and
                reduce watering needs
              </li>
              <li>
                <strong>Monitor water usage:</strong> Watch your water bill for unexpected increases indicating
                leaks
              </li>
            </ul>

            <h3>Exterior Protection</h3>
            <ul>
              <li>
                <strong>Shade management:</strong> Keep blinds and curtains closed on south and west windows
                during peak heat
              </li>
              <li>
                <strong>Deck and fence care:</strong> Check wood surfaces for excessive dryness, cracking, or
                splitting. Apply protective sealant if needed.
              </li>
              <li>
                <strong>Pool and spa maintenance:</strong> If you have a pool (common in Ridgeview and Sun City
                Roseville), maintain proper chemical balance and clean filters regularly
              </li>
            </ul>

            <h2>Fall Maintenance Checklist (September-November)</h2>
            <p>
              Fall is Roseville&apos;s critical preparation season. Tasks completed now prevent winter problems
              and expensive emergency repairs:
            </p>

            <h3>Gutter and Drainage Systems</h3>
            <ul>
              <li>
                <strong>Late November gutter cleaning:</strong> This is THE most important maintenance task of
                the year. Oak leaves drop in October-November, right before winter rains. Clean gutters after
                leaf drop but before rain season begins.
              </li>
              <li>
                <strong>Downspout testing:</strong> Flush all downspouts and verify water flows away from
                foundations. This is critical in Roseville&apos;s expansive clay soil.
              </li>
              <li>
                <strong>Check underground drains:</strong> Ensure water flows freely through buried drainpipes.
                Clogs cause foundation pooling.
              </li>
              <li>
                <strong>Inspect gutter pitch:</strong> Standing water in gutters indicates improper slope.
                Repair before winter rains arrive.
              </li>
            </ul>

            <h3>Roof and Exterior</h3>
            <ul>
              <li>
                <strong>Roof inspection:</strong> Check for summer heat damage, loose shingles, and proper
                flashing. Small repairs now prevent leaks during winter storms.
              </li>
              <li>
                <strong>Chimney inspection:</strong> If you have a fireplace (common in Roseville homes), have
                chimney professionally cleaned and inspected before winter use.
              </li>
              <li>
                <strong>Caulk and seal:</strong> Check exterior caulking around windows, doors, and
                penetrations. Replace failed seals before rain tests them.
              </li>
              <li>
                <strong>Trim trees:</strong> Remove dead branches and trim limbs overhanging your roof. Winter
                storms can bring surprising winds to Placer County.
              </li>
            </ul>

            <h3>Heating System Preparation</h3>
            <ul>
              <li>
                <strong>Furnace service:</strong> Schedule professional inspection and cleaning before first
                use. Check heat exchanger, test safety controls, and verify proper operation.
              </li>
              <li>
                <strong>Replace filters:</strong> Install fresh furnace filters before heating season begins
              </li>
              <li>
                <strong>Test heating:</strong> Run your furnace in October to ensure it works before you need
                it. Identify problems before cold weather arrives.
              </li>
              <li>
                <strong>Check carbon monoxide detectors:</strong> Replace batteries and test all CO detectors
                before using heating systems
              </li>
            </ul>

            <div className="bg-viridian-900 text-white p-8 my-8 rounded-lg">
              <h3 className="text-white mt-0">Professional Maintenance Services in Roseville</h3>
              <p className="text-mint_green-100 mb-4">
                Don&apos;t tackle everything yourself. ProFlow offers comprehensive maintenance services
                tailored to Roseville&apos;s climate—from gutter cleaning to pressure washing to seasonal
                inspections. Let us handle the dangerous and complex tasks while you enjoy your home.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold-500 text-viridian-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition no-underline"
              >
                Schedule Maintenance Service
              </Link>
            </div>

            <h3>Irrigation Winterization</h3>
            <ul>
              <li>
                <strong>Adjust watering schedule:</strong> Reduce irrigation frequency and duration as
                temperatures cool and rain returns
              </li>
              <li>
                <strong>Winterize if needed:</strong> While rare freezes don&apos;t require full winterization
                like colder climates, consider draining exposed pipes if hard freeze is forecast
              </li>
              <li>
                <strong>Shut off unnecessary zones:</strong> Turn off irrigation to areas that receive adequate
                rainfall
              </li>
            </ul>

            <h2>Winter Maintenance Checklist (December-February)</h2>
            <p>
              Roseville winters are relatively mild but bring rain that tests your home&apos;s drainage and
              weather resistance:
            </p>

            <h3>Storm Preparation and Response</h3>
            <ul>
              <li>
                <strong>Monitor gutters during rain:</strong> Watch for overflow indicating clogs or drainage
                problems. Address issues immediately.
              </li>
              <li>
                <strong>Check for leaks:</strong> Inspect attic, ceilings, and walls during and after storms.
                Early leak detection prevents extensive damage.
              </li>
              <li>
                <strong>Clear storm drains:</strong> Keep street drains near your property clear of debris to
                prevent neighborhood flooding
              </li>
              <li>
                <strong>Inspect foundation:</strong> Look for pooling water or signs of moisture intrusion
                around foundations after heavy rain
              </li>
            </ul>

            <h3>Interior Comfort and Safety</h3>
            <ul>
              <li>
                <strong>Control humidity:</strong> Use dehumidifiers if needed to prevent mold growth during
                rainy periods
              </li>
              <li>
                <strong>Check windows for condensation:</strong> Excessive condensation indicates poor
                ventilation or seal failure
              </li>
              <li>
                <strong>Test sump pump:</strong> If you have one (common in newer Roseville developments),
                verify proper operation before heavy rains
              </li>
              <li>
                <strong>Fireplace maintenance:</strong> Clean ash regularly, check for proper draft, and keep
                fireplace screen in place
              </li>
            </ul>

            <h3>Planning Ahead</h3>
            <ul>
              <li>
                <strong>Document maintenance:</strong> Keep records of all maintenance performed, creating
                valuable documentation for warranties and home sales
              </li>
              <li>
                <strong>Plan spring projects:</strong> Use quiet winter months to plan and budget for spring
                maintenance and improvement projects
              </li>
              <li>
                <strong>Review insurance coverage:</strong> Ensure your homeowner&apos;s insurance provides
                adequate coverage for Roseville&apos;s specific risks
              </li>
            </ul>

            <h2>Neighborhood-Specific Considerations</h2>

            <h3>Blue Oaks and Fiddyment Farm</h3>
            <p>
              Newer developments face construction dust requiring more frequent exterior cleaning. HOA
              standards often mandate well-maintained appearances. Focus on:
            </p>
            <ul>
              <li>Bi-annual pressure washing to remove construction dust</li>
              <li>Regular gutter cleaning despite younger trees (they shed catkins and small debris heavily)</li>
              <li>Landscape irrigation monitoring—new landscaping needs consistent water management</li>
            </ul>

            <h3>Highland Reserve and West Roseville</h3>
            <p>
              Established neighborhoods with mature trees require:
            </p>
            <ul>
              <li>Quarterly gutter cleaning during heavy shedding seasons</li>
              <li>Annual tree trimming to protect roofs and gutters</li>
              <li>Regular roof inspections—falling branches and accumulated debris accelerate roof aging</li>
              <li>Increased mold/mildew monitoring on north-facing exteriors shaded by large trees</li>
            </ul>

            <h3>Sun City Roseville</h3>
            <p>
              The 55+ community benefits from professional maintenance to avoid ladder risks:
            </p>
            <ul>
              <li>Professional gutter cleaning eliminates fall hazards</li>
              <li>Seasonal maintenance plans ensure nothing gets overlooked</li>
              <li>Single-story homes make many tasks easier but don&apos;t eliminate maintenance needs</li>
            </ul>

            <h3>Near Galleria Mall and Downtown</h3>
            <p>
              Urban properties face unique challenges:
            </p>
            <ul>
              <li>More frequent exterior cleaning due to traffic dust and urban pollution</li>
              <li>Extra attention to security lighting and exterior fixtures</li>
              <li>Noise from HVAC equipment—ensure proper maintenance for quiet operation</li>
            </ul>

            <h2>Creating Your Roseville Maintenance Schedule</h2>
            <p>
              Use this calendar to plan your maintenance year:
            </p>

            <h3>January</h3>
            <p>
              Storm monitoring, leak checks, fireplace cleaning, plan spring projects
            </p>

            <h3>February</h3>
            <p>
              Check for winter damage, begin planning exterior painting or repairs for spring
            </p>

            <h3>March</h3>
            <p>
              Schedule AC service, activate irrigation system, spring gutter cleaning
            </p>

            <h3>April</h3>
            <p>
              Pressure washing, exterior inspections, window cleaning, landscape mulching
            </p>

            <h3>May</h3>
            <p>
              Final AC preparations, check roof before summer heat, trim trees and shrubs
            </p>

            <h3>June-August</h3>
            <p>
              Monthly AC filter changes, irrigation monitoring, summer heat protection
            </p>

            <h3>September</h3>
            <p>
              Schedule furnace service, begin fall preparations, check exterior before rain
            </p>

            <h3>October</h3>
            <p>
              Monitor leaf drop, prepare for gutter cleaning, test heating system
            </p>

            <h3>November</h3>
            <p>
              Critical pre-rain gutter cleaning, roof inspection, chimney service, winterize irrigation
            </p>

            <h3>December</h3>
            <p>
              Monitor first storms, check for leaks, verify heating efficiency
            </p>

            <h2>When to Call Professionals vs. DIY</h2>

            <h3>Safe for DIY</h3>
            <ul>
              <li>Air filter changes</li>
              <li>Thermostat adjustments</li>
              <li>Visual inspections from ground level</li>
              <li>Irrigation timer programming</li>
              <li>Basic landscape maintenance</li>
              <li>Interior cleaning and organization</li>
            </ul>

            <h3>Hire Professionals</h3>
            <ul>
              <li>
                <strong>Gutter cleaning:</strong> Ladder falls cause serious injuries. Two-story Roseville
                homes make this particularly dangerous.
              </li>
              <li>
                <strong>HVAC service:</strong> Complex systems requiring specialized tools and knowledge
              </li>
              <li>
                <strong>Roof inspections:</strong> Walking on roofs risks damage and injury. Professionals
                know what to look for.
              </li>
              <li>
                <strong>Electrical work:</strong> Always hire licensed electricians for safety and code
                compliance
              </li>
              <li>
                <strong>Pressure washing:</strong> Professional equipment and expertise prevent damage to
                stucco and other surfaces
              </li>
              <li>
                <strong>Tree trimming:</strong> Large trees near power lines or structures require
                professional tree services
              </li>
            </ul>

            <h2>The Cost of Neglected Maintenance</h2>
            <p>
              Understanding what deferred maintenance costs helps prioritize your budget:
            </p>
            <ul>
              <li>
                <strong>Clogged gutters → Foundation damage:</strong> $3,000-$15,000+ for repairs vs. $200-$400
                for gutter cleaning
              </li>
              <li>
                <strong>Skipped AC maintenance → Summer breakdown:</strong> $2,000-$5,000 emergency
                repair/replacement vs. $150-$250 annual service
              </li>
              <li>
                <strong>Ignored roof damage → Interior leaks:</strong> $5,000-$15,000 roof replacement plus
                interior repairs vs. $200-$500 preventive repairs
              </li>
              <li>
                <strong>Failed irrigation → Dead landscape:</strong> $2,000-$10,000 landscape replacement vs.
                $100-$200 irrigation repairs
              </li>
              <li>
                <strong>Deferred paint → Siding rot:</strong> $8,000-$25,000 siding replacement vs.
                $3,000-$6,000 preventive painting
              </li>
            </ul>

            <h2>Maintenance Planning Resources</h2>
            <p>
              Make maintenance easier with these tools:
            </p>
            <ul>
              <li>
                <strong>Digital calendar:</strong> Set annual reminders for seasonal tasks
              </li>
              <li>
                <strong>Service provider relationships:</strong> Establish relationships with trusted HVAC,
                plumbing, and maintenance companies
              </li>
              <li>
                <strong>Maintenance log:</strong> Document all work performed, creating valuable records
              </li>
              <li>
                <strong>Budget planning:</strong> Set aside 1-3% of home value annually for maintenance
              </li>
              <li>
                <strong>Professional maintenance plans:</strong> Consider annual service agreements that handle
                scheduling automatically
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
                  Professional Maintenance Services
                </h2>
                <p className="text-slate-700 mb-6">
                  Let ProFlow handle your Roseville home&apos;s seasonal maintenance. From gutter cleaning to
                  pressure washing to comprehensive inspections, we help homeowners throughout Placer County
                  protect their investments with expert service.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services/gutter-cleaning"
                    className="inline-block bg-viridian-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-viridian-700 transition text-center"
                  >
                    Gutter Cleaning
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
                  src="/hero-service-gutter-cleaning.jpeg"
                  alt="Professional home maintenance service in Roseville, CA"
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
