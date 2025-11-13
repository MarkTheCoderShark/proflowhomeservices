import CityLinkList from "@/components/ui/CityLinkList";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { serviceContent } from "@/data/services";

export const metadata = seoMetadata({
  title: "Gutter Repair & Replacement in Sacramento & Nearby Cities",
  description: "Repair leaks, fix sagging runs, or replace failing gutters with pro-grade materials and installation.",
  path: "/services/gutter-repair-replacement",
});

export default function Page() {
  const data = serviceContent["gutter-repair-replacement"];
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gutter Repair & Replacement", url: "/services/gutter-repair-replacement" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Gutter Repair & Replacement"
        description="Repairs or replacement to keep water flowing correctly."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Granite Bay", "Lincoln"]}
      />
      <ServicePageTemplate
        data={data}
        notes={
          <>
            Serving <CityLinkList /> and nearby areas.
          </>
        }
      />
    </div>
  );
}
