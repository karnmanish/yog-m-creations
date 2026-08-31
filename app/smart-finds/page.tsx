import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Yog M Smart Finds — Curated Products & Discoveries",
  description:
    "Yog M Smart Finds curates useful products and interesting discoveries, with Amazon.in affiliate links to the ones worth knowing about.",
};

export default function SmartFindsPage() {
  return (
    <div>
      <section className="border-b border-line bg-berry-light/25 py-16 sm:py-20">
        <div className="container-content">
          <p className="eyebrow mb-4 text-berry">Brand 03</p>
          <h1 className="font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Yog M Smart Finds
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Useful things, interesting finds and smarter discoveries —
            picked and used before they&apos;re recommended.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeader title="All curated finds" accent="berry" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <p className="mt-8 text-xs text-ink-faint">
            As an Amazon Associate, Yog M Creations earns from qualifying
            purchases made through the links above, at no extra cost to you.
          </p>
        </div>
      </section>
    </div>
  );
}
