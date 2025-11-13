import Link from "next/link";

export default function CityIntroSection({
  intro,
  services,
  internalLinks,
  city,
}: {
  intro: string;
  services: { title: string; href: string }[];
  internalLinks: { text: string; href: string }[];
  city: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <p className="text-slate max-w-3xl">{intro}</p>
        <div className="mt-4 text-sm text-slate">
          <span className="font-semibold">Services spotlight:</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="text-aqua underline">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        {internalLinks.length > 0 && (
          <div className="mt-4 text-sm text-slate">
            <span className="font-semibold">Helpful links:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {internalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-aqua underline">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
