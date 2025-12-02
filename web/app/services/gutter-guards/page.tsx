import CityLinkList from "@/components/ui/CityLinkList";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { seoMetadata } from "@/lib/seo";
import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { serviceContent } from "@/data/services";

export const metadata = seoMetadata({
  title: "Gutter Guards in Sacramento & Nearby Cities",
  description: "Expert gutter guard installation in Sacramento, Roseville & Rocklin. Eliminate clogs and reduce maintenance. Schedule your free quote now!",
  path: "/services/gutter-guards",
});

export default function Page() {
  const data = serviceContent["gutter-guards"];
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gutter Guards", url: "/services/gutter-guards" },
        ]}
      />
      <ServiceJsonLd
        serviceType="Gutter Guards"
        description="Professional gutter guard recommendations and installation to reduce clogs."
        areaServed={["Sacramento", "Roseville", "Rocklin", "Folsom", "Lincoln"]}
      />
      <ServicePageTemplate
        data={data}
        serviceSlug="gutter-guards"
        notes={
          <>
            Serving <CityLinkList /> and surrounding cities.
          </>
        }
      />
    </div>
  );
}
