import CTASection from "@/components/sections/CTASection";
import { BreadcrumbsJsonLd, JsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import { MessageSquare, ShieldCheck, Star, StarHalf, Trophy } from "lucide-react";

export const metadata = seoMetadata({
  title: "Customer Reviews & Testimonials | ProFlow Home Services",
  description:
    "See why Sacramento, Roseville, and Rocklin homeowners rate ProFlow 4.9/5 for remodeling, gutters, painting, and maintenance.",
  path: "/reviews",
});

const reviewStats = [
  { label: "Average Rating", value: "4.9 / 5", detail: "Across Google, Yelp & Facebook" },
  { label: "Reviews Published", value: "1,200+", detail: "Verified homeowner testimonials" },
  { label: "Response Time", value: "< 1 hour", detail: "Dedicated ProFlow360 support" },
  { label: "Years Serving NorCal", value: "10+", detail: "Locally owned & operated" },
];

const reviewSources = [
  {
    name: "Google",
    rating: 4.9,
    count: 872,
    url: "https://g.co/kgs/bQL1Xy",
    summary: "Most homeowners find us on Google and highlight our communication and clean job sites.",
  },
  {
    name: "Yelp",
    rating: 4.8,
    count: 188,
    url: "https://www.yelp.com",
    summary: "Detailed project recaps from remodels to seasonal services.",
  },
  {
    name: "Facebook",
    rating: 5.0,
    count: 142,
    url: "https://www.facebook.com",
    summary: "Neighborhood referrals and repeat maintenance customers.",
  },
];

const reviews = [
  {
    name: "Jessica R.",
    city: "Roseville",
    service: "Kitchen Remodeling",
    platform: "Google",
    rating: 5,
    quote:
      "ProFlow removed a wall, installed new cabinets, and coordinated every inspection. Their daily updates made a big remodel feel easy.",
    date: "January 2024",
  },
  {
    name: "Marcus L.",
    city: "Rocklin",
    service: "Gutter Guards & Cleaning",
    platform: "Yelp",
    rating: 5,
    quote:
      "They cleared years of debris, installed guards, and sent before/after photos through ProFlow360. No mess left behind.",
    date: "November 2023",
  },
  {
    name: "Sarah M.",
    city: "Folsom",
    service: "Bathroom Remodel",
    platform: "Google",
    rating: 5,
    quote:
      "The crew protected our home, finished ahead of schedule, and the tile work is flawless. Communication was next-level.",
    date: "August 2023",
  },
  {
    name: "Michael T.",
    city: "Citrus Heights",
    service: "Kitchen + Flooring",
    platform: "Facebook",
    rating: 5,
    quote:
      "We used ProFlow for LVP flooring and a kitchen refresh. Same project manager handled everything and the result is beautiful.",
    date: "May 2023",
  },
  {
    name: "Priya D.",
    city: "Granite Bay",
    service: "Exterior Painting",
    platform: "Google",
    rating: 5,
    quote:
      "Prep work, masking, and final walkthrough were meticulous. They even coordinated with our HOA so we didn’t have to.",
    date: "February 2024",
  },
  {
    name: "Daniel H.",
    city: "Sacramento",
    service: "Handyman & Punch List",
    platform: "Yelp",
    rating: 4.8,
    quote:
      "A single visit knocked out drywall repairs, lighting, and door adjustments. Professional from booking to cleanup.",
    date: "October 2023",
  },
];

const proofPoints = [
  {
    icon: ShieldCheck,
    title: "Verified Crews",
    text: "Background-checked employees and licensed trade partners arrive with branded vehicles and full insurance certificates.",
  },
  {
    icon: MessageSquare,
    title: "Daily Updates",
    text: "ProFlow360 keeps you informed with schedule notices, site photos, and punch-list check-ins so there are no surprises.",
  },
  {
    icon: Trophy,
    title: "Quality Guaranteed",
    text: "We stand behind workmanship with clear warranty paperwork and post-project follow-ups.",
  },
];

export default function Reviews() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews" },
        ]}
      />
      <LocalBusinessJsonLd aggregateRating={{ ratingValue: 4.9, reviewCount: 1200 }} />
      <JsonLd
        id="ld-review-list"
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: reviews.map((review, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Review",
              author: review.name,
              reviewBody: review.quote,
              reviewRating: { "@type": "Rating", ratingValue: review.rating },
              itemReviewed: {
                "@type": "Service",
                name: review.service,
              },
              datePublished: review.date,
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="section bg-gradient-to-br from-mint_green-50 via-white to-mint_green-50">
        <div className="container grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-viridian-600">Customer Stories</p>
            <h1 className="heading text-3xl sm:text-4xl lg:text-5xl font-bold text-viridian-900 mt-4">
              Homeowners Rate ProFlow 4.9 out of 5 Stars
            </h1>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              From quick gutter cleanings to full-scale remodels, Sacramento and Placer County homeowners trust us for organized projects, respectful crews, and lasting craftsmanship.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-viridian-100 px-4 py-2 text-viridian-900 font-medium">
                <Star className="w-4 h-4 text-yellow-500" /> 1,200+ verified reviews
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-viridian-200 px-4 py-2 text-viridian-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-viridian-600" /> Licensed & insured
              </span>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-mint_green-200 bg-white p-6 shadow">
            <div className="grid gap-4 sm:grid-cols-2">
              {reviewStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-mint_green-100 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
                  <p className="mt-1 text-2xl font-bold text-viridian-900">{stat.value}</p>
                  <p className="text-sm text-slate-600">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">Recent Homeowner Highlights</h2>
            <p className="mt-3 text-slate-700">Real quotes pulled from Google, Yelp, and Facebook across the services we deliver every week.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-2xl border-2 border-mint_green-200 bg-mint_green-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={`${review.name}-${i}`}
                        className={`w-4 h-4 ${i + 1 <= Math.round(review.rating) ? "text-yellow-500" : "text-slate-300"}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-viridian-900">{review.rating.toFixed(1)} • {review.platform}</span>
                </div>
                <p className="mt-4 text-slate-700 leading-relaxed">“{review.quote}”</p>
                <div className="mt-5 border-t border-mint_green-200 pt-4 text-sm text-slate-600">
                  <p className="font-semibold text-viridian-900">{review.name} — {review.city}, CA</p>
                  <p>{review.service}</p>
                  <p className="text-xs text-slate-500">Reviewed {review.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="section bg-mint_green-50">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[2fr,1fr] items-start">
            <div>
              <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">Where to Read More Reviews</h2>
              <p className="mt-3 text-slate-700">Explore detailed stories, before-and-after photos, and project breakdowns on your favorite platforms.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {reviewSources.map((source) => (
                  <a
                    key={source.name}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border-2 border-mint_green-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="heading text-xl font-semibold text-viridian-900">{source.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4" fill="currentColor" />
                        <span className="text-sm font-semibold text-slate-700">{source.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{source.count}+ reviews</p>
                    <p className="mt-3 text-sm text-slate-700">{source.summary}</p>
                    <p className="mt-3 text-sm font-semibold text-viridian-700">View {source.name} reviews →</p>
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border-2 border-viridian-200 bg-viridian-900 text-white p-6">
              <h3 className="heading text-xl font-semibold">What Customers Mention Most</h3>
              <ul className="mt-4 space-y-4 text-sm text-mint_cream-100">
                <li className="flex gap-3"><StarHalf className="w-5 h-5 text-yellow-300" />Friendly, communicative crews</li>
                <li className="flex gap-3"><StarHalf className="w-5 h-5 text-yellow-300" />Detailed prep + cleanup on every job</li>
                <li className="flex gap-3"><StarHalf className="w-5 h-5 text-yellow-300" />Reliable scheduling with ProFlow360 updates</li>
                <li className="flex gap-3"><StarHalf className="w-5 h-5 text-yellow-300" />Respect for homes, pets, and neighbors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="heading text-2xl sm:text-3xl font-bold text-viridian-900">Why Reviews Mention Us By Name</h2>
            <p className="mt-3 text-slate-700">A consistent experience across every division keeps ratings high and referrals steady.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item.title} className="rounded-2xl border-2 border-mint_green-200 bg-mint_green-50 p-6 text-center">
                <item.icon className="w-10 h-10 mx-auto text-viridian-700" />
                <h3 className="heading text-xl font-semibold text-viridian-900 mt-4">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
