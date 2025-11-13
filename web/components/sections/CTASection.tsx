import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-viridian-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(/remodel-kitchen.jpeg)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-viridian-900/95 via-viridian-800/90 to-viridian-900/95" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg md:text-xl text-mint_cream-100 leading-relaxed max-w-2xl">
            Get a free, no-obligation estimate today. Our team responds quickly and provides transparent pricing on every project—big or small.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Button
              asChild
              href="/contact"
              darkBg
              className="text-lg"
              analyticsEvent={{ name: "cta_click", params: { location: "bottom", label: "get_estimate" } }}
            >
              Get Free Estimate
            </Button>
            <Button
              variant="secondary"
              asChild
              href="tel:"
              darkBg
              className="text-lg"
              analyticsEvent={{ name: "call_click", params: { location: "bottom", label: "call_cta" } }}
            >
              Call (###) ###-####
            </Button>
          </div>
          <p className="mt-4 text-sm text-mint_cream-200">
            Available across Sacramento, Roseville, Rocklin, and surrounding areas
          </p>
        </div>
      </div>
    </section>
  );
}
