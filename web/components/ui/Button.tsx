import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  asChild?: boolean;
  href?: string;
};

export default function Button({
  variant = "primary",
  asChild,
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "heading inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua/60";
  const styles =
    variant === "primary"
      ? "bg-aqua text-white shadow-sm hover:opacity-90"
      : "border border-aqua text-aqua hover:bg-aqua/10";

  if (asChild && href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

