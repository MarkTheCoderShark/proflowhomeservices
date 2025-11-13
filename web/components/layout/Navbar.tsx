"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { track } from "@/lib/analytics";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/remodeling", label: "Remodeling" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-viridian-800 border-b border-viridian-700">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center -my-4">
          <img src="/logo2.png" alt="ProFlow Home Services" className="h-32" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-mint_cream-500 transition-colors ${
                  active ? "text-mint_cream-500 font-medium underline" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-md bg-white px-4 py-2 text-viridian-900 heading text-sm font-semibold shadow-sm hover:bg-mint_cream-100 transition"
            onClick={() => track("cta_click", { location: "navbar", label: "get_estimate" })}
          >
            Get Estimate
          </Link>
        </div>
        <button
          aria-label="Open menu"
          className="md:hidden rounded-md p-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-viridian-700 bg-viridian-800">
          <div className="container py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-white hover:text-mint_cream-500 ${
                  pathname === item.href ? "text-mint_cream-500 font-medium underline" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => {
                track("cta_click", { location: "mobile_nav", label: "get_estimate" });
                setOpen(false);
              }}
              className="rounded-md bg-white px-4 py-2 text-viridian-900 heading text-sm font-semibold shadow-sm hover:bg-mint_cream-100 transition inline-flex w-max"
            >
              Get Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
