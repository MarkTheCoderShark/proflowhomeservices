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
      className="relative overflow-hidden bg-mint_cream text-viridian-500"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : undefined}
    >
      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-viridian-900/60 to-viridian-900/70" />
      <div className="container relative section">
        <div className="max-w-3xl">
          <h1 className={`heading text-4xl sm:text-5xl font-bold leading-tight ${backgroundImage ? 'text-white drop-shadow-lg' : 'text-viridian-900'}`}>
            {title}
          </h1>
          {subtitle ? (
            <p className={`mt-4 text-lg sm:text-xl ${backgroundImage ? 'text-white drop-shadow-md' : 'text-slate-700'}`}>{subtitle}</p>
          ) : null}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {primaryCta ? (
              <Button asChild href={primaryCta.href} darkBg={!!backgroundImage}>
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button variant="secondary" asChild href={secondaryCta.href} darkBg={!!backgroundImage}>
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
          <p className={`mt-3 text-xs ${backgroundImage ? 'text-white/90' : 'text-slate-600'}`}>Powered by ProFlow360™</p>
        </div>
      </div>
    </section>
  );
}
