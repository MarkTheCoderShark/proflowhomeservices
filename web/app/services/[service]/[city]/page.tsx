import { notFound } from "next/navigation";
import Link from "next/link";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import {
  cityData,
  serviceCityContent,
  serviceDisplayNames,
  allServiceCityCombinations,
  CitySlug,
} from "@/data/service-cities";
import { ServiceSlug, serviceContent } from "@/data/services";
import CTASection from "@/components/sections/CTASection";
import { Phone, CheckCircle, MapPin, Clock, Shield, Star } from "lucide-react";

// Generate all static paths
export function generateStaticParams() {
  return allServiceCityCombinations.map(({ service, city }) => ({
    service,
    city,
  }));
}

// Generate metadata for each page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}) {
  const { service, city } = await params;
  const cityInfo = cityData[city as CitySlug];
  const serviceName = serviceDisplayNames[service as ServiceSlug];

  if (!cityInfo || !serviceName) {
    return {};
  }

  return seoMetadata({
    title: `${serviceName} in ${cityInfo.name}, CA | ProFlow Home Services`,
    description: `Professional ${serviceName.toLowerCase()} services in ${cityInfo.name}, California. Serving ${cityInfo.neighborhoods.slice(0, 3).join(", ")} and nearby areas. Licensed, insured, 5-star rated.`,
    path: `/services/${service}/${city}`,
  });
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}) {
  const { service, city } = await params;

  // Validate params
  const cityInfo = cityData[city as CitySlug];
  const serviceName = serviceDisplayNames[service as ServiceSlug];
  const serviceData = serviceContent[service as ServiceSlug];
  const cityContent = serviceCityContent[service as ServiceSlug];

  if (!cityInfo || !serviceName || !serviceData || !cityContent) {
    notFound();
  }

  const intro = cityContent.intro(cityInfo.name, cityInfo.neighborhoods);
  const benefits = cityContent.benefits(cityInfo.name);
  const challenges = cityContent.localChallenges(cityInfo.name);
  const whyChoose = cityContent.whyChoose(cityInfo.name);

  // Generate FAQs specific to this city+service
  const faqs = [
    {
      question: `How much does ${serviceName.toLowerCase()} cost in ${cityInfo.name}?`,
      answer: `${serviceName} pricing in ${cityInfo.name} varies based on home size, project scope, and specific requirements. We provide free, transparent quotes with no hidden fees. Contact us for a customized estimate for your ${cityInfo.name} property.`,
    },
    {
      question: `Do you serve all ${cityInfo.name} neighborhoods?`,
      answer: `Yes! We serve all ${cityInfo.name} neighborhoods including ${cityInfo.neighborhoods.join(", ")}, and surrounding areas in ${cityInfo.county}.`,
    },
    {
      question: `How quickly can you schedule ${serviceName.toLowerCase()} in ${cityInfo.name}?`,
      answer: `Most ${cityInfo.name} homeowners can be scheduled within 3-5 business days. We offer same-week appointments for urgent needs when available.`,
    },
    {
      question: `Are your ${cityInfo.name} crews licensed and insured?`,
      answer: `Absolutely. All ProFlow crews serving ${cityInfo.name} are fully licensed, bonded, and insured. We carry comprehensive liability coverage and workers' compensation for your protection.`,
    },
  ];

  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: serviceName, url: `/services/${service}` },
          { name: cityInfo.name, url: `/services/${service}/${city}` },
        ]}
      />
      <ServiceJsonLd
        serviceType={serviceName}
        description={cityContent.serviceDescription}
        areaServed={[cityInfo.name, ...cityInfo.neighborhoods.slice(0, 3)]}
      />
      <FAQPageJsonLd faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))} />

      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${serviceData.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-viridian-900/80 to-viridian-900/90" />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-mint_cream-200 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Serving {cityInfo.name}, {cityInfo.county}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {serviceName} in {cityInfo.name}, CA
          </h1>
          <p className="text-lg text-mint_cream-100 max-w-2xl mb-6">
            {cityContent.serviceDescription} Professional service for{" "}
            {cityInfo.neighborhoods.slice(0, 3).join(", ")}, and all {cityInfo.name} neighborhoods.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-viridian-800/80 px-3 py-1 text-sm text-mint_cream-100">
              <Star className="w-4 h-4 text-yellow-400" />
              5-Star Rated
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-viridian-800/80 px-3 py-1 text-sm text-mint_cream-100">
              <Shield className="w-4 h-4" />
              Licensed & Insured
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-viridian-800/80 px-3 py-1 text-sm text-mint_cream-100">
              <Clock className="w-4 h-4" />
              Same-Week Scheduling
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-asparagus-500 hover:bg-asparagus-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+19167407249"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5" />
              (916) 740-7249
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-viridian-900 mb-6">
              Professional {serviceName} for {cityInfo.name} Homeowners
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{intro}</p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-mint_cream-50">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-viridian-900 mb-8">
            Why {cityInfo.name} Homeowners Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <CheckCircle className="w-8 h-8 text-asparagus-500 mb-3" />
                <p className="text-gray-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-viridian-900 mb-6">
                Common {serviceName} Challenges in {cityInfo.name}
              </h2>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-asparagus-100 text-asparagus-700 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-viridian-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-viridian-900 mb-4">
                Why Choose ProFlow in {cityInfo.name}?
              </h3>
              <p className="text-gray-700 leading-relaxed">{whyChoose}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-asparagus-600 font-semibold hover:text-asparagus-700"
              >
                Schedule Your Free Estimate
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-viridian-900 text-white">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Our {serviceName} Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-viridian-700 mb-2">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-mint_cream-200 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-viridian-900 mb-6">
            {cityInfo.name} Neighborhoods We Serve
          </h2>
          <div className="flex flex-wrap gap-3">
            {cityInfo.neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="bg-mint_cream-100 text-viridian-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {neighborhood}
              </span>
            ))}
          </div>
          <p className="mt-6 text-gray-600">
            Plus all surrounding {cityInfo.name} communities in {cityInfo.county}. Not sure if we serve your area?{" "}
            <Link href="/contact" className="text-asparagus-600 hover:underline">
              Contact us
            </Link>{" "}
            to confirm.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-mint_cream-50">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-viridian-900 mb-8">
            {serviceName} FAQs for {cityInfo.name}
          </h2>
          <div className="grid gap-6 max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-viridian-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-viridian-900 mb-8">
            Other Services in {cityInfo.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(serviceDisplayNames)
              .filter(([slug]) => slug !== service)
              .slice(0, 6)
              .map(([slug, name]) => (
                <Link
                  key={slug}
                  href={`/services/${slug}/${city}`}
                  className="group bg-mint_cream-50 hover:bg-mint_cream-100 p-6 rounded-xl transition-colors"
                >
                  <h3 className="font-semibold text-viridian-900 group-hover:text-asparagus-600 transition-colors">
                    {name} in {cityInfo.name}
                  </h3>
                  <span className="text-sm text-gray-600">Learn more →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection city={cityInfo.name} />
    </div>
  );
}
