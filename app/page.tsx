import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductGrid from "@/components/ProductGrid";
import { products, featured, categories } from "@/lib/products";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const featuredItems = products.filter((p) => featured.includes(p.slug));

  return (
    <>
      <Hero />
      <Marquee />

      {/* Categories — editorial numbered list */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-24 lg:pt-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="eyebrow opacity-60">01 — Discipline</p>
            <h2
              className="font-display text-[44px] lg:text-[72px] leading-[0.95] tracking-tight mt-3"
              style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 96" }}
            >
              Five categories.<br />
              <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 96" }}>One standard.</em>
            </h2>
          </div>
          <Link href="/shop" className="eyebrow link-draw inline-flex items-center gap-2">
            View full catalogue <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ul className="mt-14 divide-y divide-ink/15 border-y border-ink/15">
          {categories.map((c, i) => {
            const count = products.filter((p) => p.category === c).length;
            return (
              <li key={c}>
                <Link
                  href={`/shop?category=${c}`}
                  className="group grid grid-cols-[1fr_auto_1fr] items-center py-6 lg:py-8 transition-colors duration-500 ease-silk hover:bg-mist/60 -mx-3 lg:-mx-6 px-3 lg:px-6"
                >
                  <span className="flex items-baseline gap-6 lg:gap-12 min-w-0">
                    <span className="eyebrow font-semibold opacity-80 w-8 text-[13px]">0{i + 1}</span>
                    <span
                      className="font-display text-[32px] lg:text-[56px] leading-none tracking-tight transition-transform duration-700 ease-silk group-hover:italic"
                      style={{ fontVariationSettings: "'opsz' 72, 'wght' 600" }}
                    >
                      {c}
                    </span>
                  </span>
                  <span className="hidden md:inline eyebrow font-semibold opacity-90 justify-self-center text-center text-[13px]">
                    {count} {count === 1 ? "reference" : "references"}
                  </span>
                  <span className="justify-self-end">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-700 ease-silk group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-40">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="eyebrow opacity-60">02 — Counter Favourites</p>
            <h2
              className="font-display text-[44px] lg:text-[72px] leading-[0.95] tracking-tight mt-3"
              style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 96" }}
            >
              The current<br />
              <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 96" }}>
                bestsellers.
              </em>
            </h2>
          </div>
          <p className="max-w-md text-ink/70 text-[15px] leading-relaxed">
            Four pieces our partner houses re-order most often. Each is available with bespoke
            packaging and private-label options on quantities over 240 units.
          </p>
        </div>
        <ProductGrid items={featuredItems} />
      </section>

      {/* House / Story */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-40">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[5/6] bg-mist overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=1400"
                alt="Atelier"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:pl-12 order-1 lg:order-2">
            <p className="eyebrow opacity-60">03 — The House</p>
            <h2
              className="font-display text-[40px] lg:text-[64px] leading-[1] tracking-tight mt-4"
              style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 96" }}
            >
              An atelier, not a factory.
            </h2>
            <p className="mt-8 text-[17px] leading-[1.75] text-ink/80">
              Founded in Grasse in 2014 by a chemist and a perfumer, AV Cosmetic produces in
              batches of four hundred. Every formula is reviewed against three honest
              questions: is it kind, is it effective, is it beautiful to hold.
            </p>
            <p className="mt-5 text-[17px] leading-[1.75] text-ink/80">
              The result is a small, slow catalogue — and a list of trade partners that grows
              by invitation.
            </p>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 eyebrow link-draw"
            >
              Read the long story <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial pull-quote */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-40">
        <figure className="max-w-4xl">
          <p className="eyebrow opacity-60">04 — Trade notes</p>
          <blockquote
            className="font-display text-[36px] sm:text-[52px] lg:text-[72px] leading-[1.05] tracking-[-0.01em] mt-6"
            style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 144" }}
          >
            <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>“</em>
            We brought AV in on a small order in 2019. Today it is the highest-margin counter in
            the boutique — and the easiest conversation we have.
            <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>”</em>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4">
            <span className="w-12 h-px bg-ink/40" />
            <span className="eyebrow">Margaux H. — Buyer, Maison Liberté, London</span>
          </figcaption>
        </figure>
      </section>

      {/* Value props before footer */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 border-t border-ink/15 pt-14">
          {[
            ["Honest minimums", "Twelve units. Mix categories freely. No deck-stacking, no penalties."],
            ["White-glove support", "A dedicated trade liaison. Replenishment forecasts. Counter training, on us."],
            ["Margin you can hold", "A 55–62% wholesale margin across the range, with rebates above plan."]
          ].map(([h, b]) => (
            <div key={h}>
              <p className="font-display text-[26px] tracking-tight" style={{ fontVariationSettings: "'opsz' 32" }}>
                {h}
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed text-[15px]">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
