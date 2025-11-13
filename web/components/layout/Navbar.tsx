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
    <header className="sticky top-0 z-50">
      {/* Secondary Top Bar - Trust Indicators */}
      <div className="bg-topbar border-b border-slate-300">
        <div className="container">
          <div className="py-2 text-center">
            <p
              className="text-topbar-text font-medium"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.2px'
              }}
            >
              <span className="hidden md:inline">Licensed & Insured • 1,000+ Happy Customers • ★★★★★ Google Rating</span>
              <span className="md:hidden">Licensed & Insured • ★★★★★ Google Rating</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with Cut-out Logo Design */}
      <div className="relative">
        {/* Logo - Overlaps hero, positioned absolutely */}
        <div className="absolute left-4 md:left-8 top-2 z-10">
          <Link href="/" className="block">
            <img
              src="/logo2.png"
              alt="ProFlow Home Services"
              className="h-24 md:h-28 drop-shadow-2xl hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Green Navigation Bar - Starts after logo */}
        <div className="bg-viridian-800 border-b border-viridian-700 ml-28 md:ml-36">
          <div className="container flex h-20 items-center justify-between pl-4 md:pl-8">
            {/* Spacer for logo on mobile */}
            <div className="md:hidden w-8"></div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 ml-4">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-white hover:text-mint_cream-300 transition-colors font-medium ${
                      active ? "text-mint_cream-300 underline" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="rounded-md bg-cta text-white px-5 py-2.5 heading text-sm font-semibold hover:bg-cta-hover transition shadow-lg"
                onClick={() => track("cta_click", { location: "navbar", label: "get_estimate" })}
              >
                Get Free Estimate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Open menu"
              className="md:hidden rounded-md p-2 text-white hover:bg-viridian-700 transition"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {open && (
            <div className="md:hidden border-t border-viridian-700 bg-viridian-800">
              <div className="container py-4 flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-white hover:text-mint_cream-300 font-medium transition-colors ${
                      pathname === item.href ? "text-mint_cream-300 underline" : ""
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
                  className="rounded-md bg-cta text-white px-5 py-2.5 heading text-sm font-semibold hover:bg-cta-hover transition shadow-lg inline-flex w-max mt-2"
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
