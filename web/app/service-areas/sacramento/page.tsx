import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CityServices from "@/components/sections/CityServices";
import Neighborhoods from "@/components/sections/Neighborhoods";
import CityIntroSection from "@/components/sections/CityIntroSection";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import { cityContent } from "@/lib/cities";

const slug = "sacramento" as const;
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
          backgroundImage: 'url(/hero-home.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-viridian-900/60 to-viridian-900/70" />
        <div className="container relative z-10">
          <h1 className="heading text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">{city.heroTitle}</h1>
          <p className="mt-3 text-lg text-white drop-shadow-md max-w-2xl">{city.heroSubtitle}</p>
        </div>
      </section>
      <CityIntroSection
        intro={city.intro}
        services={city.serviceList}
        internalLinks={city.internalLinks}
        city={city.name}
      />
      <CityServices />
      <Neighborhoods city={city.name} items={city.neighborhoods} />
      <FAQAccordion />
      <CTASection />
    </div>
  );
}
