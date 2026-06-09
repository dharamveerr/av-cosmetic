import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-44 pb-32 min-h-[80vh] flex flex-col justify-center">
      <p className="eyebrow opacity-60">— 404</p>
      <h1
        className="font-display text-[64px] sm:text-[96px] lg:text-[148px] leading-[0.9] tracking-[-0.025em] mt-6"
        style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144" }}
      >
        Out of stock.<br />
        <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>
          For now.
        </em>
      </h1>
      <Link href="/" className="mt-12 eyebrow link-draw inline-block">
        Return to the index →
      </Link>
    </section>
  );
}
