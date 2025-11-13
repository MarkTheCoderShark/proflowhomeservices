"use client";
import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { track } from "@/lib/analytics";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  asChild?: boolean;
  href?: string;
  analyticsEvent?: { name: string; params?: Record<string, any> };
};

export default function Button({
  variant = "primary",
  asChild,
  href,
  className = "",
  children,
  analyticsEvent,
  onClick,
  ...props
}: ButtonProps) {
  const base =
    "heading inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua/60";
  const styles =
    variant === "primary"
      ? "bg-aqua text-white shadow-sm hover:opacity-90"
      : "border border-aqua text-aqua hover:bg-aqua/10";

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
