import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CityServices from "@/components/sections/CityServices";
import Neighborhoods from "@/components/sections/Neighborhoods";
import CityIntroSection from "@/components/sections/CityIntroSection";
import CityWhyChoose from "@/components/sections/CityWhyChoose";
import CityProjectShowcase from "@/components/sections/CityProjectShowcase";
import CityTestimonials from "@/components/sections/CityTestimonials";
import CityHomeIssues from "@/components/sections/CityHomeIssues";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import { cityContent } from "@/lib/cities";

const slug = "auburn" as const;
const city = cityContent[slug];

export const metadata = seoMetadata({
  title: city.metaTitle,
  description: city.metaDescription,
  path: `/service-areas/${slug}`,
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name: city.name, url: `/service-areas/${slug}` },
        ]}
      />
      <section
        className="relative section overflow-hidden !py-20"
        style={{
          backgroundImage: 'url(/hero-city-auburn.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-viridian-900/60 to-viridian-900/70" />
        <div className="container relative z-10">
          <h1 className="heading text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
            {city.heroTitle}
          </h1>
          <p className="mt-3 text-lg text-white drop-shadow-md max-w-2xl">
            {city.heroSubtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-mint_cream-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-viridian-800/80 px-3 py-1">
              <span className="text-yellow-300">★</span>
              1,000+ Homeowners Served
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-viridian-800/80 px-3 py-1">
              <span className="text-yellow-300">★</span>
              5-Star Rated Local Team
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-viridian-800/80 px-3 py-1">
              <span className="text-yellow-300">★</span>
              Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-viridian-800/80 px-3 py-1">
              <span className="text-yellow-300">★</span>
              Clean Job Sites, Local Technicians
            </span>
          </div>
        </div>
      </section>
      <ServiceJsonLd
        serviceType="Home Services, Repairs & Remodeling"
        description={city.metaDescription}
        areaServed={[city.name]}
      />
      <CityWhyChoose city={city.name} />
      <CityIntroSection
        intro={city.intro}
        services={city.serviceList}
        internalLinks={city.internalLinks}
        city={city.name}
      />
      <CityServices city={city.name} />
      <Neighborhoods city={city.name} items={city.neighborhoods} />
      <CityProjectShowcase city={city.name} projects={city.projects ?? []} />
      <CityTestimonials city={city.name} testimonials={city.testimonials ?? []} />
      <CityHomeIssues city={city.name} issues={city.issues ?? []} />
      <FAQAccordion cityName={city.name} localFaqs={city.localFaqs ?? []} />
      <CTASection city={city.name} />
    </div>
  );
}
