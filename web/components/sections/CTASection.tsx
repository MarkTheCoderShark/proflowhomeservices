import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative section bg-viridian-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/remodel-kitchen.jpeg)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-viridian-900/80" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="heading text-2xl sm:text-3xl font-semibold text-white">Ready to get started?</h2>
          <p className="text-lg text-mint_cream-100">Get a free estimate today. We'll reach out within minutes.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              asChild
              href="/contact"
              darkBg
              analyticsEvent={{ name: "cta_click", params: { location: "bottom", label: "get_estimate" } }}
            >
              Get Free Estimate
            </Button>
            <Button
              variant="secondary"
              asChild
              href="tel:"
              darkBg
              analyticsEvent={{ name: "call_click", params: { location: "bottom", label: "call_cta" } }}
            >
              (###) ###-####
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
