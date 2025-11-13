import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import CityLinkList from "@/components/ui/CityLinkList";
import RemodelPageTemplate from "@/components/templates/RemodelPageTemplate";
import { remodelContent } from "@/data/remodels";
import { seoMetadata } from "@/lib/seo";

const slug = "bathroom" as const;
const data = remodelContent[slug];

export const metadata = seoMetadata({
  title: data.heroTitle,
  description: data.overview,
  path: `/remodeling/${slug}`,
});

export default function Page() {
  return (
    <div>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Remodeling", url: "/remodeling" },
          { name: data.heroTitle, url: `/remodeling/${slug}` },
        ]}
      />
      <RemodelPageTemplate
        data={data}
        notes={
          <>
            Serving <CityLinkList /> and surrounding Sacramento-area cities.
          </>
        }
      />
    </div>
  );
}
