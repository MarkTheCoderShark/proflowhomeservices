import ContactForm from "@/components/forms/ContactForm";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import { CheckCircle, Clock, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";

export const metadata = seoMetadata({
  title: "Contact / Get Free Estimate | ProFlow Home Services",
  description: "Get your free home service estimate. Fast response, licensed & insured, serving Roseville, Rocklin, Sacramento & surrounding areas. Call (916) 740-7249.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-viridian-900 via-viridian-800 to-viridian-900 py-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading text-3xl sm:text-4xl font-bold text-white">
              Request Your Free Home Service Estimate
            </h1>
            <p className="mt-3 text-lg text-mint_cream-100">
              Fast, friendly, and no-pressure quotes for remodeling, painting, gutters, and handyman services.
            </p>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-mint_cream-200">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">1,000+ Homeowners Served</span>
              </div>
              <div className="flex items-center gap-2 text-mint_cream-200">
                <CheckCircle className="w-5 h-5 text-mint_green-400" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-mint_cream-200">
                <Clock className="w-5 h-5 text-mint_green-400" />
                <span className="font-medium">Fast Response – Same-Day Estimates</span>
              </div>
              <div className="flex items-center gap-2 text-mint_cream-200">
                <MapPin className="w-5 h-5 text-mint_green-400" />
                <span className="font-medium">Local Roseville-Based Company</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section bg-mint_green-50">
        <div className="container grid gap-10 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border-2 border-mint_green-200 bg-white p-6 sm:p-8 shadow-md">
              <ContactForm />
            </div>

            {/* What Happens Next */}
            <div className="mt-8 bg-white rounded-lg border-2 border-viridian-200 p-6">
              <h2 className="heading text-xl font-bold text-viridian-900 mb-4">
                What Happens After You Submit:
              </h2>
              <ol className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-viridian-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                  <span>We review your project details and service request.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-viridian-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                  <span>A ProFlow team member reaches out within <strong>5–15 minutes</strong> (Mon–Sat, 8am–6pm).</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-viridian-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                  <span>We schedule your free estimate at your convenience—no obligation, no pressure.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Phone CTA */}
            <div className="bg-viridian-900 rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5" />
                <span className="heading text-lg font-bold">Prefer to Call?</span>
              </div>
              <a
                href="tel:+19167407249"
                className="block mt-3 text-center bg-white text-viridian-900 px-6 py-3 rounded-md font-bold hover:bg-mint_cream-100 transition"
              >
                (916) 740-7249
              </a>
              <p className="mt-2 text-sm text-mint_cream-200 text-center">
                Mon–Sat: 8am–6pm
              </p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg border-2 border-mint_green-200 p-5 shadow-sm">
              <div className="heading text-lg font-bold text-viridian-900 mb-3">
                📍 Visit Our Office
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                1508 Eureka Rd Suite 170<br />
                Roseville, CA 95661
              </p>
              <p className="mt-3 text-xs text-slate-500">
                *By appointment only
              </p>
            </div>

            {/* Social Proof */}
            <div className="bg-white rounded-lg border-2 border-mint_green-200 p-5 shadow-sm">
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="heading text-sm font-bold text-viridian-900">
                5-Star Rated Home Services
              </p>
              <p className="mt-2 text-sm text-slate-700 italic leading-relaxed">
                "ProFlow handled our bathroom remodel perfectly. Great communication, fast work, and excellent quality."
              </p>
              <p className="mt-2 text-xs text-slate-500">
                — Sarah M., Roseville
              </p>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-lg border-2 border-mint_green-200 p-5 shadow-sm">
              <div className="heading text-lg font-bold text-viridian-900 mb-3">
                🗺 Service Areas
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Roseville, Rocklin, Granite Bay, Lincoln, Loomis, Folsom, Citrus Heights, Fair Oaks, Auburn, Sacramento, and surrounding areas in Placer and Sacramento counties.
              </p>
            </div>

            {/* Team Photo Placeholder */}
            <div className="bg-white rounded-lg border-2 border-mint_green-200 overflow-hidden shadow-sm">
              <div className="aspect-[4/3] bg-viridian-100 flex items-center justify-center text-viridian-600">
                <div className="text-center p-6">
                  <p className="text-sm font-medium">ProFlow Team Photo</p>
                  <p className="text-xs mt-1 text-viridian-500">Coming Soon</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12">
        <div className="container">
          <h2 className="heading text-2xl font-bold text-viridian-900 mb-6 text-center">
            Find Us in Roseville
          </h2>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border-2 border-mint_green-200 shadow-md">
            <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center text-slate-600">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-viridian-600" />
                <p className="text-lg font-medium">Google Maps Embed</p>
                <p className="text-sm mt-2 text-slate-500">
                  1508 Eureka Rd Suite 170, Roseville, CA 95661
                </p>
                <p className="text-xs mt-1 text-slate-400">
                  (Map will be embedded once GBP is verified)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
