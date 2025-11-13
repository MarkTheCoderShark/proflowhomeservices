import CityLinkList from "@/components/ui/CityLinkList";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { serviceContent } from "@/data/services";

export const metadata = seoMetadata({
  title: "Roof & Solar Panel Cleaning in Sacramento & Nearby Cities",
  description: "Safe roof & solar panel cleaning in Sacramento, Roseville & Rocklin. Boost solar efficiency and extend roof life. Schedule service now!",
  path: "/services/roof-solar-cleaning",
});

export default function Page() {
  const data = serviceContent["roof-solar-cleaning"];
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Roof & Solar Cleaning", url: "/services/roof-solar-cleaning" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Roof & Solar Cleaning"
        description="Safe methods for roofing materials and solar panels to extend lifespan and performance."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Granite Bay", "Folsom"]}
      />
      <ServicePageTemplate
        data={data}
        notes={
          <>
            Serving <CityLinkList /> and the greater Sacramento region.
          </>
        }
      />
    </div>
  );
}
