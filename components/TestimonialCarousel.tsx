"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  house: string;
};

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const t = items[i];
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="relative">
      <div className="min-h-[360px] lg:min-h-[440px] flex items-start">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-5xl"
          >
            <blockquote
              className="font-display text-[34px] sm:text-[48px] lg:text-[64px] leading-[1.08] tracking-[-0.01em]"
              style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144" }}
            >
              <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>“</em>
              {t.quote}
              <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>”</em>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="w-10 h-px bg-ink/40" />
              <span className="eyebrow">
                {t.name} — {t.role}, {t.house}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-12 border-t border-ink/15 pt-6">
        <p className="eyebrow opacity-60">
          {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            aria-label="Previous"
            onClick={() => setI((i - 1 + items.length) % items.length)}
            className="w-11 h-11 border border-ink/25 flex items-center justify-center hover:bg-ink hover:text-bone transition-colors duration-500 ease-silk"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            aria-label="Next"
            onClick={() => setI((i + 1) % items.length)}
            className="w-11 h-11 border border-ink/25 flex items-center justify-center hover:bg-ink hover:text-bone transition-colors duration-500 ease-silk"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
