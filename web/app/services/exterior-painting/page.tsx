import CityLinkList from "@/components/ui/CityLinkList";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { serviceContent } from "@/data/services";

export const metadata = seoMetadata({
  title: "Exterior Painting in Sacramento & Nearby Cities",
  description: "Durable exterior painting built for California’s climate.",
  path: "/services/exterior-painting",
});

export default function Page() {
  const data = serviceContent["exterior-painting"];
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Exterior Painting", url: "/services/exterior-painting" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Exterior Painting"
        description="High-quality exterior painting with durable prep and coatings for longevity."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Granite Bay", "Lincoln"]}
      />
      <ServicePageTemplate
        data={data}
        notes={
          <>
            Serving <CityLinkList /> and surrounding neighborhoods.
          </>
        }
      />
    </div>
  );
}
