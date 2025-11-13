import CityLinkList from "@/components/ui/CityLinkList";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { serviceContent } from "@/data/services";

export const metadata = seoMetadata({
  title: "Home Maintenance Plans in Sacramento & Nearby Cities",
  description: "Preventative care packages to keep your home in top shape.",
  path: "/services/maintenance-plans",
});

export default function Page() {
  const data = serviceContent["maintenance-plans"];
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Maintenance Plans", url: "/services/maintenance-plans" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Home Maintenance Plans"
        description="Seasonal service bundles for gutters, washing, inspections, and more."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Folsom", "Lincoln"]}
      />
      <ServicePageTemplate
        data={data}
        notes={
          <>
            Serving <CityLinkList /> and nearby communities with recurring care.
          </>
        }
      />
    </div>
  );
}
