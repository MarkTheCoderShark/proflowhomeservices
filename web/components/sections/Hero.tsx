import Button from "@/components/ui/Button";
import type { ReactNode } from "react";

type HeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
};

export default function Hero({ title, subtitle, primaryCta, secondaryCta, backgroundImage }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-viridian-900 text-white min-h-[600px] md:min-h-[700px] flex items-center"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : undefined}
    >
      {/* Darker gradient overlay for premium, immersive feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/40" />
      <div className="container relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-white/95 max-w-3xl mx-auto">
              {subtitle}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCta ? (
              <Button asChild href={primaryCta.href} darkBg className="text-base md:text-lg">
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button variant="secondary" asChild href={secondaryCta.href} darkBg className="text-base md:text-lg">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
          <p className="mt-6 text-sm text-white/80 tracking-wide">Operations powered by ProFlow360™</p>
        </div>
      </div>
    </section>
  );
}
