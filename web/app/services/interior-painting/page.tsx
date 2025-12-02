import CityLinkList from "@/components/ui/CityLinkList";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { serviceContent } from "@/data/services";

export const metadata = seoMetadata({
  title: "Interior Painting in Sacramento & Nearby Cities",
  description: "Premium interior painting in Sacramento, Roseville & Rocklin. Flawless prep, professional finishes, zero mess. Get your free quote today!",
  path: "/services/interior-painting",
});

export default function Page() {
  const data = serviceContent["interior-painting"];
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Interior Painting", url: "/services/interior-painting" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Interior Painting"
        description="Professional interior painting with prep, patching, and premium finishes."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Folsom"]}
      />
      <ServicePageTemplate
        data={data}
        serviceSlug="interior-painting"
        notes={
          <>
            Serving <CityLinkList /> and nearby towns.
          </>
        }
      />
    </div>
  );
}
