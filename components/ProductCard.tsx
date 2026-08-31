import Image from "next/image";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card">
      <div className="relative aspect-square w-full overflow-hidden bg-paper-dim">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-berry-light/60 px-3 py-1 text-[11px] font-medium text-berry">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-medium leading-snug text-ink">
          {product.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          {product.price && (
            <span className="font-mono text-sm text-ink-faint">
              {product.price}
            </span>
          )}
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 rounded-full bg-berry px-4 py-2 text-xs font-medium text-paper transition-colors hover:bg-berry-dark"
          >
            View on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}
