"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Collection" },
  { href: "/about", label: "House" },
  { href: "/testimonials", label: "Trade Notes" },
  { href: "/contact", label: "Inquiries" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ease-silk ${
          scrolled
            ? "bg-bone/80 backdrop-blur-md border-b border-ink/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl lg:text-[26px] tracking-tight italic" style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 20" }}>
              AV
            </span>
            <span className="eyebrow opacity-70 group-hover:opacity-100 transition-opacity">Cosmetic</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="eyebrow font-semibold link-draw text-ink/80 hover:text-ink">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 eyebrow border border-ink/25 hover:border-ink hover:bg-ink hover:text-bone transition-colors duration-500 ease-silk px-4 py-2.5"
            >
              Open Trade Account <ArrowUpRight className="w-3 h-3" />
            </Link>
            <button
              aria-label="Menu"
              className="lg:hidden p-2 -mr-2"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink text-bone lg:hidden"
          >
            <div className="flex items-center justify-between h-16 px-6 border-b border-bone/15">
              <span className="font-display italic text-2xl text-bone" style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 20" }}>AV</span>
              <button aria-label="Close" onClick={() => setOpen(false)} className="p-2 -mr-2">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="px-6 py-10 flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl tracking-tight"
                    style={{ fontVariationSettings: "'opsz' 90" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
