import CityLinkList from "@/components/ui/CityLinkList";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { serviceContent } from "@/data/services";

export const metadata = seoMetadata({
  title: "Handyman Services in Sacramento & Nearby Cities",
  description: "Dependable home repairs and punch list fixes by a professional, local team.",
  path: "/services/handyman",
});

export default function Page() {
  const data = serviceContent["handyman"];
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Handyman Services", url: "/services/handyman" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Handyman Services"
        description="Reliable home repairs, maintenance, and punch list tasks."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Folsom"]}
      />
      <ServicePageTemplate
        data={data}
        notes={
          <>
            Serving <CityLinkList /> and nearby neighborhoods.
          </>
        }
      />
    </div>
  );
}
