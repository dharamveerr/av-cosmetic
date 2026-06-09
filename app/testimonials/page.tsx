import TestimonialCarousel, { Testimonial } from "@/components/TestimonialCarousel";

const items: Testimonial[] = [
  {
    quote:
      "We brought AV in on a small order in 2019. Today it is the highest-margin counter in the boutique — and the easiest conversation we have.",
    name: "Margaux H.",
    role: "Buyer",
    house: "Maison Liberté, London"
  },
  {
    quote:
      "The first brand our team asked to keep on the floor. The packaging photographs better than any sample we've handled this year.",
    name: "Sayuri T.",
    role: "Beauty Director",
    house: "Isetan Shinjuku"
  },
  {
    quote:
      "Trade support that does what it promises. Replenishment forecasts that are accurate within three units a month.",
    name: "Patricia W.",
    role: "Owner",
    house: "The Conservatory, San Francisco"
  },
  {
    quote:
      "We've stocked a hundred brands. AV is the only one our staff buys for themselves with their own money.",
    name: "Daniel A.",
    role: "Managing Partner",
    house: "Atelier Mara, Stockholm"
  },
  {
    quote:
      "Private label that holds. We launched our house line on AV's white-label programme — twenty-four months in, the formulas have not slipped a millimetre.",
    name: "Léa B.",
    role: "Founder",
    house: "Spa Saint-Honoré, Paris"
  }
];

const press = [
  ["Vogue Paris", "“A house worth knowing.”"],
  ["Monocle", "“Quiet, confident, exact.”"],
  ["The Business of Fashion", "“The boutique-brand other boutique brands ask for.”"],
  ["Cabana", "“The kohl is the best on the market — by some distance.”"]
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-44">
        <p className="eyebrow opacity-60">— Trade notes</p>
        <h1
          className="font-display text-[56px] sm:text-[96px] lg:text-[148px] leading-[0.9] tracking-[-0.025em] mt-6"
          style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144" }}
        >
          Said about us,<br />
          <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>kindly.</em>
        </h1>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-24 lg:pt-32">
        <TestimonialCarousel items={items} />
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-40">
        <p className="eyebrow opacity-60">In the press</p>
        <ul className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
          {press.map(([h, q]) => (
            <li key={h} className="grid grid-cols-12 gap-6 py-7 lg:py-9 items-baseline">
              <span
                className="col-span-12 lg:col-span-4 font-display text-[24px] lg:text-[32px] tracking-tight"
                style={{ fontVariationSettings: "'opsz' 36" }}
              >
                {h}
              </span>
              <span className="col-span-12 lg:col-span-8 text-[17px] lg:text-[20px] text-ink/80 leading-relaxed">
                {q}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
