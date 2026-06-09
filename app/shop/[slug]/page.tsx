import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import ProductGallery from "@/components/ProductGallery";
import ProductGrid from "@/components/ProductGrid";
import { ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  const tiers = [
    { min: product.moq, label: `From ${product.moq} units`, price: product.wholesalePrice },
    { min: 60, label: "From 60 units", price: Math.round(product.wholesalePrice * 0.9) },
    { min: 240, label: "From 240 units · Private label", price: Math.round(product.wholesalePrice * 0.78) }
  ];

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-28 lg:pt-36">
        <div className="flex items-center gap-3 eyebrow opacity-60">
          <Link href="/shop" className="link-draw">Catalogue</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`} className="link-draw">{product.category}</Link>
          <span>/</span>
          <span className="opacity-100">{product.name}</span>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16 mt-10">
          <div className="col-span-12 lg:col-span-7">
            <ProductGallery images={product.images} alt={product.name} />
          </div>

          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow opacity-60">{product.category}{product.shade ? ` — ${product.shade}` : ""}</p>
            <h1
              className="font-display text-[40px] lg:text-[64px] leading-[0.98] tracking-[-0.015em] mt-4"
              style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 96" }}
            >
              {product.name}
            </h1>
            <p className="mt-6 text-[18px] leading-[1.6] text-ink/80">{product.tagline}</p>

            <div className="rule my-8" />

            <p className="text-[15.5px] leading-[1.75] text-ink/80">{product.about}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {product.notes.map((n) => (
                <span key={n} className="eyebrow border border-ink/25 px-3 py-1.5">
                  {n}
                </span>
              ))}
              <span className="eyebrow border border-ink/25 px-3 py-1.5">{product.volume}</span>
            </div>

            {/* Wholesale pricing tiers */}
            <div className="mt-12 bg-mist/70 p-6 lg:p-8 border border-ink/10">
              <div className="flex items-baseline justify-between">
                <p className="eyebrow opacity-70">Trade pricing</p>
                <p className="eyebrow opacity-50">RRP Rs. {product.retailPrice}</p>
              </div>
              <ul className="mt-5 divide-y divide-ink/15">
                {tiers.map((t) => (
                  <li key={t.min} className="flex items-baseline justify-between py-3">
                    <span className="text-[14.5px] text-ink/80">{t.label}</span>
                    <span
                      className="font-display text-2xl tracking-tight"
                      style={{ fontVariationSettings: "'opsz' 32" }}
                    >
                      Rs. {t.price}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?sku=${product.slug}`}
                className="mt-6 flex items-center justify-between bg-ink text-bone px-5 py-4 eyebrow hover:bg-clay transition-colors duration-500 ease-silk"
              >
                Request quote & samples <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <details className="mt-10 group">
              <summary className="eyebrow opacity-70 cursor-pointer list-none flex items-center justify-between border-b border-ink/15 pb-3">
                <span>Ingredients</span>
                <span className="transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="text-[13.5px] text-ink/70 leading-[1.7] mt-4">
                {product.ingredients.join(" · ")}
              </p>
            </details>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-40 pb-24">
          <div className="flex items-end justify-between mb-12">
            <h2
              className="font-display text-[36px] lg:text-[56px] tracking-tight"
              style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 72" }}
            >
              From the same chapter
            </h2>
            <Link href={`/shop?category=${product.category}`} className="eyebrow link-draw">
              See all {product.category}
            </Link>
          </div>
          <ProductGrid items={related} />
        </section>
      )}
    </>
  );
}
