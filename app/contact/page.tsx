import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-44 pb-24">
      <div className="grid grid-cols-12 gap-10 lg:gap-16">
        <div className="col-span-12 lg:col-span-5">
          <p className="eyebrow opacity-60">— Inquiries</p>
          <h1
            className="font-display text-[48px] sm:text-[72px] lg:text-[96px] leading-[0.95] tracking-[-0.02em] mt-5"
            style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144" }}
          >
            Begin a<br />
            <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>conversation.</em>
          </h1>

          <div className="mt-12 space-y-8 text-[15.5px] leading-relaxed">
            <div>
              <p className="eyebrow opacity-55 mb-2">Trade & wholesale</p>
              <a href="mailto:trade@avcosmetic.co" className="link-draw">trade@avcosmetic.co</a><br />
              <span className="text-ink/65">+33 4 92 38 11 04</span>
            </div>
            <div>
              <p className="eyebrow opacity-55 mb-2">Press & samples</p>
              <a href="mailto:press@avcosmetic.co" className="link-draw">press@avcosmetic.co</a>
            </div>
            <div>
              <p className="eyebrow opacity-55 mb-2">Atelier</p>
              <address className="not-italic text-ink/75">
                14 Rue de Sévigné<br />
                75004 Paris, France
              </address>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:pl-12 lg:border-l lg:border-ink/15">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
