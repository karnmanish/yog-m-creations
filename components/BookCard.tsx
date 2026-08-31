import Image from "next/image";
import { Book } from "@/types";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card sm:flex-row">
      <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden bg-paper-dim sm:w-40">
        <Image
          src={book.coverImage}
          alt={`${book.title} cover`}
          fill
          sizes="(max-width: 768px) 100vw, 160px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-5">
        <span className="eyebrow mb-2 text-ink-faint">{book.format}</span>
        <h3 className="font-display text-lg font-medium leading-snug text-ink">
          {book.title}
        </h3>
        <p className="mt-1 text-sm text-ink-faint">by {book.author}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {book.description}
        </p>
        <a
          href={book.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-ink/20 px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-ink/40"
        >
          Get the book
        </a>
      </div>
    </div>
  );
}
