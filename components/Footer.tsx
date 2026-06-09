import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-bone mt-32 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-clay/15 blur-3xl" />
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-24 lg:pt-32 pb-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <p className="eyebrow opacity-60">— Established in care</p>
            <h2
              className="font-display text-[44px] sm:text-[60px] lg:text-[88px] leading-[0.95] tracking-tight mt-6"
              style={{ fontVariationSettings: "'SOFT' 30, 'opsz' 144" }}
            >
              Become a<br />
              <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>
                stockist.
              </em>
            </h2>
            <p className="mt-8 max-w-md text-bone/70 leading-relaxed">
              We work with a small, considered roster of boutiques, spas, and ateliers. Minimums
              start at twelve units. Margins, support, and dignity included.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 eyebrow border border-bone/30 hover:bg-bone hover:text-ink transition-colors duration-500 ease-silk px-5 py-3"
            >
              Request the wholesale book <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:pl-12 lg:border-l lg:border-bone/15">
            <div>
              <p className="eyebrow opacity-50 mb-5">House</p>
              <ul className="space-y-3 text-[15px]">
                <li><Link href="/about" className="link-draw">Our story</Link></li>
                <li><Link href="/about" className="link-draw">Formulation</Link></li>
                <li><Link href="/testimonials" className="link-draw">Press</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow opacity-50 mb-5">Trade</p>
              <ul className="space-y-3 text-[15px]">
                <li><Link href="/contact" className="link-draw">Wholesale</Link></li>
                <li><Link href="/contact" className="link-draw">Private label</Link></li>
                <li><Link href="/contact" className="link-draw">Lookbook</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow opacity-50 mb-5">Atelier</p>
              <address className="not-italic text-[15px] leading-relaxed text-bone/75">
                14 Rue de Sévigné<br />
                75004 Paris, France<br />
                <a href="mailto:trade@avcosmetic.co" className="link-draw mt-3 inline-block text-bone">
                  trade@avcosmetic.co
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="rule mt-16 lg:mt-24 opacity-25" />
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 eyebrow opacity-55">
          <span>© {new Date().getFullYear()} AV Cosmetic — All rights reserved</span>
          <span>Crafted in Paris · Shipped worldwide</span>
        </div>
      </div>
    </footer>
  );
}
