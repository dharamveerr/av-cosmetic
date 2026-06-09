"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Product } from "@/lib/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/shop/${product.slug}`} className="group block">
        <div className="relative aspect-[4/5] bg-mist overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width:1024px) 24vw, 50vw"
            className="object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.04]"
          />
          <Image
            src={product.images[1] ?? product.images[0]}
            alt=""
            aria-hidden
            fill
            sizes="(min-width:1024px) 24vw, 50vw"
            className="object-cover opacity-0 transition-opacity duration-700 ease-silk group-hover:opacity-100"
          />
          <span className="absolute top-4 left-4 eyebrow text-ink/70 bg-bone/80 backdrop-blur-sm px-2.5 py-1">
            {product.category}
          </span>
        </div>

        <div className="pt-5 flex items-start justify-between gap-4">
          <div>
            <h3
              className="font-display text-[22px] leading-tight tracking-tight"
              style={{ fontVariationSettings: "'opsz' 36" }}
            >
              {product.name}
            </h3>
            {product.shade && (
              <p className="eyebrow opacity-55 mt-1">{product.shade}</p>
            )}
            <p className="text-[14px] text-ash mt-2 max-w-[28ch]">{product.tagline}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="eyebrow opacity-55">Trade</p>
            <p className="font-display text-[20px]" style={{ fontVariationSettings: "'opsz' 24" }}>
              Rs. {product.wholesalePrice}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
