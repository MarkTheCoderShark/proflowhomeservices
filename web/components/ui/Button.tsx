"use client";
import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { track } from "@/lib/analytics";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  asChild?: boolean;
  href?: string;
  analyticsEvent?: { name: string; params?: Record<string, any> };
  darkBg?: boolean; // Use this for buttons on dark backgrounds (viridian-300, viridian-200, cambridge_blue-300)
};

export default function Button({
  variant = "primary",
  asChild,
  href,
  className = "",
  children,
  analyticsEvent,
  onClick,
  darkBg = false,
  ...props
}: ButtonProps) {
  const base =
    "heading inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-viridian-500/60";

  // Primary buttons: ProFlow CTA Green (#1B5C58) for all primary CTAs
  // Secondary buttons: White background with CTA green border/text, ultra-light teal hover
  const styles =
    variant === "primary"
      ? darkBg
        ? "bg-cta text-white font-semibold shadow-lg hover:bg-cta-hover px-6 py-3"
        : "bg-cta text-white font-semibold shadow-lg hover:bg-cta-hover"
      : darkBg
      ? "bg-white border-2 border-cta text-cta font-semibold hover:bg-mint_green-50 px-6 py-3"
      : "border-2 border-cta text-cta font-semibold hover:bg-mint_green-50 transition-all";

  function handleClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    if (analyticsEvent) {
      track(analyticsEvent.name, analyticsEvent.params);
    }
    onClick?.(event as any);
  }

  if (asChild && href) {
    return (
      <Link
        href={href}
        className={`${base} ${styles} ${className}`}
        onClick={handleClick as (event: MouseEvent<HTMLAnchorElement>) => void}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${base} ${styles} ${className}`}
      onClick={handleClick as (event: MouseEvent<HTMLButtonElement>) => void}
      {...props}
    >
      {children}
    </button>
  );
}
