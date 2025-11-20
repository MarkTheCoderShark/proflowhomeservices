import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-viridian-900 border-t border-viridian-800">
      <div className="container section">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="heading text-lg font-semibold text-white">ProFlow Home Services</div>
            <p className="mt-3 text-sm text-mint_cream-100">
              Operations Powered by ProFlow360™
            </p>
          </div>
          <div>
            <div className="heading text-sm font-semibold text-white">Services</div>
            <ul className="mt-3 space-y-2 text-mint_cream-200">
              <li><Link href="/services/gutter-cleaning" className="hover:text-white transition-colors">Gutter Cleaning</Link></li>
              <li><Link href="/services/gutter-guards" className="hover:text-white transition-colors">Gutter Guards</Link></li>
              <li><Link href="/services/interior-painting" className="hover:text-white transition-colors">Interior Painting</Link></li>
              <li><Link href="/services/exterior-painting" className="hover:text-white transition-colors">Exterior Painting</Link></li>
              <li><Link href="/services/handyman" className="hover:text-white transition-colors">Handyman</Link></li>
            </ul>
          </div>
          <div>
            <div className="heading text-sm font-semibold text-white">Remodeling</div>
            <ul className="mt-3 space-y-2 text-mint_cream-200">
              <li><Link href="/remodeling/bathroom" className="hover:text-white transition-colors">Bathroom</Link></li>
              <li><Link href="/remodeling/kitchen" className="hover:text-white transition-colors">Kitchen</Link></li>
              <li><Link href="/remodeling/flooring" className="hover:text-white transition-colors">Flooring</Link></li>
              <li><Link href="/remodeling/drywall-framing" className="hover:text-white transition-colors">Drywall & Framing</Link></li>
            </ul>
          </div>
          <div>
            <div className="heading text-sm font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 text-mint_cream-200">
              <li><Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-viridian-800 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-mint_cream-300">
          <p>© {new Date().getFullYear()} ProFlow Home Services™. All rights reserved.</p>
          <p>
            <span>Brand & UI/UX by ProFlow. Website by <a href="https://verlua.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Verlua.com</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
