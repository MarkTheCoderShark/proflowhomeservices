import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-midnight text-white mt-16">
      <div className="container section">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="heading text-lg font-semibold">ProFlow Home Services</div>
            <p className="mt-3 text-sm text-white/80">
              Operations Powered by ProFlow360™
            </p>
          </div>
          <div>
            <div className="heading text-sm font-semibold">Services</div>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><Link href="/services/gutter-cleaning">Gutter Cleaning</Link></li>
              <li><Link href="/services/gutter-guards">Gutter Guards</Link></li>
              <li><Link href="/services/interior-painting">Interior Painting</Link></li>
              <li><Link href="/services/exterior-painting">Exterior Painting</Link></li>
              <li><Link href="/services/handyman">Handyman</Link></li>
            </ul>
          </div>
          <div>
            <div className="heading text-sm font-semibold">Remodeling</div>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><Link href="/remodeling/bathroom">Bathroom</Link></li>
              <li><Link href="/remodeling/kitchen">Kitchen</Link></li>
              <li><Link href="/remodeling/garage-conversions">Garage Conversions</Link></li>
              <li><Link href="/remodeling/flooring">Flooring</Link></li>
              <li><Link href="/remodeling/drywall-framing">Drywall & Framing</Link></li>
            </ul>
          </div>
          <div>
            <div className="heading text-sm font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><Link href="/service-areas">Service Areas</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} ProFlow Home Services™. All rights reserved.</p>
          <p>
            <span className="opacity-80">Brand & UI/UX by ProFlow.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

