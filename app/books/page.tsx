import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books — Yog M Creations",
  description:
    "Books written across the Yog M Creations universe — from Bhavatu Sarvam retellings to StoryKahani collections.",
};

export default function BooksPage() {
  return (
    <div>
      <section className="border-b border-line bg-paper-dim/60 py-16 sm:py-20">
        <div className="container-content">
          <p className="eyebrow mb-4 text-ink-faint">Books</p>
          <h1 className="font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            From the page as well
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            The same stories, in a slower format — for reading somewhere
            without a screen.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeader title="All books" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
