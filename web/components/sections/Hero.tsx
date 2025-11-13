import Button from "@/components/ui/Button";
import type { ReactNode } from "react";

type HeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      <div className="container relative section">
        <div className="max-w-3xl">
          <h1 className="heading text-4xl sm:text-5xl font-bold leading-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-white/85 text-lg sm:text-xl">{subtitle}</p>
          ) : null}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {primaryCta ? (
              <Button asChild href={primaryCta.href}>
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button variant="secondary" asChild href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
          <p className="mt-3 text-xs text-white/70">Powered by ProFlow360™</p>
        </div>
      </div>
    </section>
  );
}

