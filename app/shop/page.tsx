import { Suspense } from "react";
import ProductGrid from "@/components/ProductGrid";
import ShopFilters from "@/components/ShopFilters";
import { products, categories } from "@/lib/products";

type Search = { category?: string };

export default function ShopPage({ searchParams }: { searchParams: Search }) {
  const cat = searchParams.category;
  const items = cat ? products.filter((p) => p.category === cat) : products;

  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 lg:pt-40 pb-24">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <p className="eyebrow opacity-60">— The Collection</p>
          <h1
            className="font-display text-[56px] sm:text-[88px] lg:text-[120px] leading-[0.92] tracking-[-0.02em] mt-4"
            style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 144" }}
          >
            {cat ? (
              <>
                <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>{cat}.</em>
              </>
            ) : (
              <>
                Catalogue<br />
                <em className="italic" style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144" }}>volume xiv.</em>
              </>
            )}
          </h1>
        </div>
        <div className="text-right">
          <p className="eyebrow opacity-55">Showing</p>
          <p className="font-display text-3xl" style={{ fontVariationSettings: "'opsz' 36" }}>
            {String(items.length).padStart(2, "0")}
            <span className="text-ink/40"> / {String(products.length).padStart(2, "0")}</span>
          </p>
        </div>
      </div>

      <Suspense fallback={null}>
        <ShopFilters />
      </Suspense>

      <div className="rule mt-10 mb-16" />

      {items.length > 0 ? (
        <ProductGrid items={items} />
      ) : (
        <p className="font-display text-3xl opacity-60 py-24 text-center">
          No references in {cat}.
        </p>
      )}
    </section>
  );
}
