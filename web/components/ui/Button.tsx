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

  // Primary buttons: light bg uses viridian, dark bg uses white for primary, viridian for secondary
  // Secondary buttons: on dark = viridian-600 solid, on light = outline
  const styles =
    variant === "primary"
      ? darkBg
        ? "bg-white text-viridian-900 font-semibold shadow-lg hover:bg-mint_cream-50"
        : "bg-viridian-600 text-white font-semibold shadow-lg hover:bg-viridian-500"
      : darkBg
      ? "bg-viridian-600 text-white font-semibold shadow-lg hover:bg-viridian-500"
      : "border-2 border-viridian-600 text-viridian-600 font-semibold hover:bg-viridian-600 hover:text-white transition-all";

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
