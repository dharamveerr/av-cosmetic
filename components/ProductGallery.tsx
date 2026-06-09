"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-6">
      {/* Thumbnails — vertical column on desktop */}
      <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 order-2 lg:order-1">
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => setI(idx)}
            aria-label={`View image ${idx + 1}`}
            className={`relative w-20 aspect-[4/5] lg:w-full bg-mist overflow-hidden transition-all duration-500 ease-silk ${
              i === idx ? "ring-1 ring-ink opacity-100" : "opacity-55 hover:opacity-100"
            }`}
          >
            <Image src={src} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main image with crossfade */}
      <div className="col-span-12 lg:col-span-10 order-1 lg:order-2">
        <div className="relative aspect-[4/5] bg-mist overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={images[i]}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease }}
              className="absolute inset-0"
            >
              <Image
                src={images[i]}
                alt={alt}
                fill
                priority
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-4 right-4 eyebrow bg-bone/85 backdrop-blur-sm px-2.5 py-1">
            {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}
