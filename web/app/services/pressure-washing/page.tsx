import CityLinkList from "@/components/ui/CityLinkList";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { serviceContent } from "@/data/services";

export const metadata = seoMetadata({
  title: "Pressure Washing in Sacramento & Nearby Cities",
  description: "House, driveway, and exterior washing to refresh curb appeal.",
  path: "/services/pressure-washing",
});

export default function Page() {
  const data = serviceContent["pressure-washing"];
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Pressure Washing", url: "/services/pressure-washing" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Pressure Washing"
        description="Safe, effective exterior cleaning for siding, concrete, and more."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Lincoln"]}
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
