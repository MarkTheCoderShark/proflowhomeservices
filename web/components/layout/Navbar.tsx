"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

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
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-mist">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="heading text-xl font-semibold text-evergreen">
          ProFlow Home Services
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-slate hover:text-evergreen transition-colors ${
                  active ? "text-evergreen font-medium" : ""
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
            className="rounded-md bg-aqua px-4 py-2 text-white heading text-sm font-semibold shadow-sm hover:opacity-90"
          >
            Get Estimate
          </Link>
        </div>
        <button
          aria-label="Open menu"
          className="md:hidden rounded-md p-2 text-evergreen"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-mist bg-white">
          <div className="container py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-slate hover:text-evergreen ${
                  pathname === item.href ? "text-evergreen font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-aqua px-4 py-2 text-white heading text-sm font-semibold shadow-sm hover:opacity-90 inline-flex w-max"
            >
              Get Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
