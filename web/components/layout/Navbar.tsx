"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { track } from "@/lib/analytics";

const serviceCategories = [
  {
    name: "Gutter Services",
    items: [
      { href: "/services/gutter-cleaning", label: "Gutter Cleaning" },
      { href: "/services/gutter-guards", label: "Gutter Guards" },
      { href: "/services/gutter-repair-replacement", label: "Gutter Repair & Replacement" },
    ],
  },
  {
    name: "Painting",
    items: [
      { href: "/services/interior-painting", label: "Interior Painting" },
      { href: "/services/exterior-painting", label: "Exterior Painting" },
    ],
  },
  {
    name: "Cleaning & Maintenance",
    items: [
      { href: "/services/pressure-washing", label: "Pressure Washing" },
      { href: "/services/roof-solar-cleaning", label: "Roof & Solar Cleaning" },
      { href: "/services/maintenance-plans", label: "Maintenance Plans" },
    ],
  },
  {
    name: "Other Services",
    items: [
      { href: "/services/handyman", label: "Handyman Services" },
      { href: "/remodeling", label: "Remodeling" },
    ],
  },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isServiceActive = pathname?.startsWith("/services") || pathname === "/remodeling";

  return (
    <header className="sticky top-0 z-40">
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

      {/* Main Navigation Bar */}
      <div className="bg-viridian-800 border-b border-viridian-700">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center -my-4">
          <img src="/logo2.png" alt="ProFlow Home Services" className="h-32" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {/* Home Link */}
          <Link
            href="/"
            className={`text-white hover:text-mint_cream-500 transition-colors ${
              pathname === "/" ? "text-mint_cream-500 font-medium underline" : ""
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`text-white hover:text-mint_cream-500 transition-colors flex items-center gap-1 ${
                isServiceActive ? "text-mint_cream-500 font-medium underline" : ""
              }`}
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-slate-200 overflow-hidden">
                <div className="py-2">
                  {/* All Services Link */}
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-viridian-800 hover:bg-mint_cream-100 font-medium border-b border-slate-200"
                  >
                    View All Services
                  </Link>
                  {/* Service Categories */}
                  {serviceCategories.map((category) => (
                    <div key={category.name} className="py-2">
                      <div className="px-4 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {category.name}
                      </div>
                      {category.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2 text-sm text-viridian-800 hover:bg-mint_cream-100 ${
                            pathname === item.href ? "bg-mint_cream-50 font-medium" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {navItems.slice(1).map((item) => {
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
            className="rounded-md border border-white text-white px-4 py-2 heading text-sm font-medium hover:bg-white hover:text-green-700 transition"
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
            {/* Home Link */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`text-white hover:text-mint_cream-500 ${
                pathname === "/" ? "text-mint_cream-500 font-medium underline" : ""
              }`}
            >
              Home
            </Link>

            {/* Services Expandable Section */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full text-left text-white hover:text-mint_cream-500 flex items-center justify-between ${
                  isServiceActive ? "text-mint_cream-500 font-medium underline" : ""
                }`}
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  <Link
                    href="/services"
                    onClick={() => setOpen(false)}
                    className={`text-white hover:text-mint_cream-500 text-sm ${
                      pathname === "/services" ? "text-mint_cream-500 font-medium" : ""
                    }`}
                  >
                    View All Services
                  </Link>
                  {serviceCategories.map((category) => (
                    <div key={category.name} className="mt-2">
                      <div className="text-xs font-semibold text-mint_cream-300 uppercase tracking-wide mb-1">
                        {category.name}
                      </div>
                      {category.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`block text-white hover:text-mint_cream-500 text-sm py-1 ${
                            pathname === item.href ? "text-mint_cream-500 font-medium" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Items */}
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
              className="rounded-md border border-white text-white px-4 py-2 heading text-sm font-medium hover:bg-white hover:text-green-700 transition inline-flex w-max"
            >
              Get Estimate
            </Link>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
