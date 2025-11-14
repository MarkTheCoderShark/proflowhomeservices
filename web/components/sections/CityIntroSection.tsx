import Link from "next/link";
import Button from "@/components/ui/Button";

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
  const paragraphs = intro.split("\n\n").filter(Boolean);

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          <div>
            <h2 className="heading text-2xl sm:text-3xl font-semibold text-viridian-900 mb-4">
              A Local Home Services Partner for {city}
            </h2>
            <div className="space-y-4 text-slate-800 max-w-3xl">
              {paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
            <div className="mt-4 text-sm text-slate-800">
              <span className="font-semibold">Services spotlight:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="text-viridian-400 hover:text-viridian-500 transition underline"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            {internalLinks.length > 0 && (
              <div className="mt-4 text-sm text-slate-800">
                <span className="font-semibold">Helpful links:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {internalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-viridian-400 hover:text-viridian-500 transition underline"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <aside className="rounded-2xl border-2 border-mint_green-300 bg-mint_green-50 p-6 shadow-sm">
            <div
              className="mb-4 h-32 w-full rounded-xl bg-cover bg-center"
              style={{ backgroundImage: "url(/hero-service-gutter-cleaning.jpeg)" }}
            />
            <h3 className="heading text-lg font-semibold text-viridian-900">
              Need Work Done in {city}?
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Tell us about your gutters, painting, remodeling, or repair project in {city}, and we&apos;ll send a fast, no-pressure estimate.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Button
                asChild
                className="w-full"
                analyticsEvent={{ name: "cta_click", params: { location: "city_intro", label: "get_estimate" } }}
              >
                <a href="/contact">Get Free Estimate</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full"
                analyticsEvent={{ name: "call_click", params: { location: "city_intro", label: "call_cta" } }}
              >
                <a href="tel:+19167407249">Call (916) 740-7249</a>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
