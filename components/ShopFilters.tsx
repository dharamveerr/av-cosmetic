"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories } from "@/lib/products";

export default function ShopFilters() {
  const params = useSearchParams();
  const active = params.get("category");

  const items: { label: string; href: string; key: string | null }[] = [
    { label: "All", href: "/shop", key: null },
    ...categories.map((c) => ({ label: c, href: `/shop?category=${c}`, key: c }))
  ];

  return (
    <div className="flex flex-wrap gap-2 lg:gap-3 mt-10">
      {items.map((it) => {
        const on = active === it.key;
        return (
          <Link
            key={it.label}
            href={it.href}
            className={`eyebrow px-4 py-2.5 border transition-colors duration-500 ease-silk ${
              on
                ? "bg-ink text-bone border-ink"
                : "border-ink/25 hover:border-ink"
            }`}
          >
            {it.label}
          </Link>
        );
      })}
    </div>
  );
}
