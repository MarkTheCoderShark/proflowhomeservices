import { getCityRoutes } from "@/lib/routes";

type ServiceArea = {
  title: string;
  href: string;
  image?: string;
};

type ServiceAreasGridProps = {
  areas?: ServiceArea[];
  title?: string;
  linkText?: string;
  limit?: number;
};

export default function ServiceAreasGrid({
  areas,
  title = "Service Areas",
  linkText = "View All Service Areas",
  limit,
}: ServiceAreasGridProps) {
  // If no areas provided, use city routes
  const cityRoutes: ServiceArea[] = areas || getCityRoutes().map((city) => ({
    title: city.name,
    href: city.path,
    image: undefined,
  }));

  const displayedAreas = limit ? cityRoutes.slice(0, limit) : cityRoutes;

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900">{title}</h2>
          <a
            href="/service-areas"
            className="text-viridian-600 heading text-sm font-medium hover:text-viridian-700 transition"
          >
            {linkText} →
          </a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedAreas.map((area) => (
            <a
              key={area.href}
              href={area.href}
              className="group relative block overflow-hidden rounded-lg border-2 border-mint_green-200 bg-white shadow-sm hover:shadow-lg transition-all"
            >
              {area.image && (
                <div
                  className="h-48 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${area.image})` }}
                />
              )}
              <div className="p-4 bg-white">
                <div className="heading text-lg font-semibold text-slate-900">{area.title}</div>
                <p className="text-sm text-viridian-600 font-medium">View Service Area</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
