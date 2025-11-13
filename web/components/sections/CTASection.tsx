import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="section bg-evergreen text-white">
      <div className="container">
        <div className="flex flex-col items-start gap-4">
          <h2 className="heading text-2xl sm:text-3xl font-semibold">Ready to get started?</h2>
          <p className="text-white/85">Get a free estimate today. We’ll reach out within minutes.</p>
          <div className="flex gap-3">
            <Button
              asChild
              href="/contact"
              analyticsEvent={{ name: "cta_click", params: { location: "bottom", label: "get_estimate" } }}
            >
              Get Free Estimate
            </Button>
            <Button
              variant="secondary"
              asChild
              href="tel:"
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
