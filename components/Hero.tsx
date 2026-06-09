"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-24 lg:pb-32 overflow-hidden">
      {/* Diffuse colour wash */}
      <div className="pointer-events-none absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[760px] max-h-[760px] rounded-full bg-clay/25 blur-[120px] -translate-y-1/4 translate-x-1/4" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] rounded-full bg-moss/15 blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end">
          {/* Left text */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="flex items-center gap-3"
            >
              <span className="eyebrow">Maison · Est. 2014</span>
              <span className="w-10 h-px bg-ink/30" />
              <span className="eyebrow opacity-60">Paris — Tokyo — New York</span>
            </motion.div>

            <h1 className="mt-8 font-display tracking-[-0.02em] leading-[0.92] text-[64px] sm:text-[96px] lg:text-[148px]">
              <Lines lines={["Cosmetics,", <em key="i" className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>considered.</em>]} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease }}
              className="mt-10 max-w-[44ch] text-[17px] leading-[1.65] text-ink/75"
            >
              AV Cosmetic supplies considered, high-performance cosmetics to a small roster of
              boutiques, spas, and ateliers. Small batch. Honest formulas. White-glove trade
              service.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 bg-ink text-bone eyebrow px-6 py-4 hover:bg-clay transition-colors duration-500 ease-silk"
              >
                Browse the collection
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 ease-silk group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/contact" className="eyebrow link-draw">
                Open a trade account
              </Link>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="col-span-12 lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full bg-mist overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1400"
                alt="AV Cosmetic editorial"
                fill
                priority
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 1.2, delay: 0.9, ease }}
              className="hidden lg:block absolute -left-16 bottom-10 w-44 h-56 bg-bone shadow-[0_30px_60px_-30px_rgba(26,20,16,0.35)] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=600"
                alt=""
                fill
                sizes="200px"
                className="object-cover"
              />
            </motion.div>

            <div className="absolute -top-4 -right-2 lg:-top-6 lg:-right-6 rotate-90 origin-bottom-right">
              <span className="eyebrow opacity-70">№ 014 — Spring Catalogue</span>
            </div>
          </motion.div>
        </div>

        {/* Stat row */}
        <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-ink/15 pt-10">
          {([
            [240, "+", "Stockists worldwide", true],
            [96, "", "SKUs in current catalogue", true],
            [2014, "", "Founded in Grasse", false],
            [12, "", "Unit minimum order", true]
          ] as [number, string, string, boolean][]).map(([target, suffix, label, group], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
            >
              <p className="font-display text-[40px] lg:text-[52px] tracking-tight tabular-nums" style={{ fontVariationSettings: "'opsz' 60" }}>
                <CountUp target={target} suffix={suffix} group={group} delay={i * 0.08} />
              </p>
              <p className="eyebrow opacity-60 mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Eased count-up that triggers once when scrolled into view.
// Plain IntersectionObserver + rAF — no library state to get out of sync.
function CountUp({ target, suffix = "", delay = 0, group = true }: { target: number; suffix?: string; delay?: number; group?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let started = false;
    const duration = 1600;
    const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

    const run = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        setValue(Math.round(easeOutQuint(p) * target));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          io.disconnect();
          timeout = setTimeout(run, delay * 1000 + 200);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [target, delay]);

  return (
    <span ref={ref}>
      {group ? value.toLocaleString("en-US") : value}
      {suffix}
    </span>
  );
}

function Lines({ lines }: { lines: React.ReactNode[] }) {
  return (
    <>
      {lines.map((l, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 + i * 0.12, ease }}
          className="block"
        >
          {l}
        </motion.span>
      ))}
    </>
  );
}
