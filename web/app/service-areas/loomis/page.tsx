import CTASection from "@/components/sections/CTASection";
import CityServices from "@/components/sections/CityServices";
import Neighborhoods from "@/components/sections/Neighborhoods";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { seoMetadata } from "@/lib/seo";
import { cityContent } from "@/lib/cities";

const slug = "loomis" as const;
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
      <section className="section bg-mist">
        <div className="container">
          <h1 className="heading text-3xl font-semibold text-evergreen">{city.heroTitle}</h1>
          <p className="mt-2 text-slate max-w-2xl">{city.heroSubtitle}</p>
        </div>
      </section>
      <CityServices />
      <Neighborhoods city={city.name} items={city.neighborhoods} />
      <CTASection />
    </div>
  );
}
