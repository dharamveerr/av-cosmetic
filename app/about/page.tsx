import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    n: "01",
    h: "Honest formulas",
    b: "Every ingredient is interrogated against a single question: does it earn its place? If not, it isn't here."
  },
  {
    n: "02",
    h: "Small batches",
    b: "We produce in batches of four hundred. Slower, costlier, and the only way we know to keep the standard."
  },
  {
    n: "03",
    h: "Quiet packaging",
    b: "Refillable porcelain, brushed brass, recycled glass. Made to belong on a counter for a decade."
  },
  {
    n: "04",
    h: "Partnered, not pushed",
    b: "We sell to people we know by name. Our trade list grows by invitation, not auction."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-44">
        <p className="eyebrow opacity-60">— The House</p>
        <h1
          className="font-display text-[56px] sm:text-[96px] lg:text-[148px] leading-[0.9] tracking-[-0.025em] mt-6"
          style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144" }}
        >
          A house built<br />
          <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>quietly,</em><br />
          in Grasse.
        </h1>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-20 lg:pt-28">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] bg-mist overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200"
                alt="Atelier"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:pl-12">
            <p className="eyebrow opacity-60">Origin</p>
            <p
              className="font-display text-[28px] lg:text-[40px] leading-[1.15] tracking-tight mt-4"
              style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 56" }}
            >
              In 2014, a chemist and a perfumer rented a fifty-square-metre atelier above a
              florist on Rue Marcel Journet. They had one rule:{" "}
              <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 56" }}>
                only make what we would happily give to our mothers.
              </em>
            </p>
            <p className="mt-8 text-[16.5px] leading-[1.8] text-ink/80 max-w-prose">
              Twelve years later, we still produce in Grasse, in batches of four hundred. We
              still know every supplier by first name. Our packaging is still drawn by the same
              illustrator. The atelier is now nine hundred square metres, but it is still above
              a florist. We move only when something stops being kind, effective, or beautiful
              to hold.
            </p>
            <p className="mt-6 text-[16.5px] leading-[1.8] text-ink/80 max-w-prose">
              We do not advertise. We do not chase trends. We supply a small, considered list
              of boutiques, spas, and ateliers — and we treat each of them like the first one.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-44">
        <p className="eyebrow opacity-60">The four pillars</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14 border-t border-ink/15 pt-12">
          {pillars.map((p) => (
            <div key={p.n} className="flex gap-6">
              <span className="eyebrow opacity-50 mt-2">{p.n}</span>
              <div>
                <h3
                  className="font-display text-[28px] lg:text-[36px] tracking-tight"
                  style={{ fontVariationSettings: "'opsz' 48" }}
                >
                  {p.h}
                </h3>
                <p className="mt-3 text-ink/75 leading-relaxed text-[15.5px] max-w-prose">
                  {p.b}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-44">
        <div className="bg-ink text-bone p-10 lg:p-20 relative overflow-hidden">
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-clay/25 blur-3xl" />
          <p className="eyebrow opacity-60">— Trade enquiry</p>
          <h2
            className="font-display text-[44px] lg:text-[88px] leading-[0.95] tracking-tight mt-5 max-w-3xl"
            style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144" }}
          >
            Stock AV in your house.
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-bone text-ink eyebrow px-6 py-4 hover:bg-clay hover:text-bone transition-colors duration-500 ease-silk"
          >
            Request the wholesale book <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
