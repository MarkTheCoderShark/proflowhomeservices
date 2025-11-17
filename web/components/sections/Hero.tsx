"use client";
import Button from "@/components/ui/Button";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type HeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  backgroundVideo?: string;
};

export default function Hero({ title, subtitle, primaryCta, secondaryCta, backgroundImage, backgroundVideo }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down to 75% speed

      // Force play for Safari
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented, but we'll keep trying on user interaction
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-viridian-900 text-white min-h-[600px] md:min-h-[700px] flex items-center"
      style={backgroundImage && !backgroundVideo ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : undefined}
    >
      {/* Video Background */}
      {backgroundVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Enhanced overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/50" />
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
