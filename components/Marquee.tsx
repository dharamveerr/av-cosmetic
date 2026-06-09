const items = [
  "Bergdorf Goodman",
  "Liberty London",
  "Isetan Tokyo",
  "Le Bon Marché",
  "The Conservatory",
  "Violet Grey",
  "10 Corso Como",
  "Net-a-Porter",
  "Selfridges"
];

export default function Marquee() {
  const seq = [...items, ...items];
  return (
    <section className="border-y border-ink/15 bg-bone overflow-hidden py-6">
      <div className="marquee-track flex gap-14 whitespace-nowrap will-change-transform">
        {seq.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-14 eyebrow opacity-65">
            {it}
            <span className="w-1.5 h-1.5 rounded-full bg-clay" />
          </span>
        ))}
      </div>
    </section>
  );
}
