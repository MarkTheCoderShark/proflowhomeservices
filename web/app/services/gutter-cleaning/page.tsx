import CityLinkList from "@/components/ui/CityLinkList";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { serviceContent } from "@/data/services";

export const metadata = seoMetadata({
  title: "Gutter Cleaning in Sacramento & Nearby Cities",
  description:
    "Professional gutter cleaning in Sacramento, Roseville & Rocklin. Prevent water damage and foundation issues. Get your free estimate today!",
  path: "/services/gutter-cleaning",
});

export default function Page() {
  const data = serviceContent["gutter-cleaning"];
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gutter Cleaning", url: "/services/gutter-cleaning" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Gutter Cleaning"
        description="Thorough gutter and downspout cleaning to protect your home."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Folsom", "Citrus Heights", "Granite Bay", "Lincoln", "Loomis", "Auburn"]}
      />
      <ServicePageTemplate
        data={data}
        notes={
          <>
            Serving <CityLinkList /> and surrounding areas.
          </>
        }
      />
    </div>
  );
}
