import { Book } from "@/types";

// Placeholder book entries. Update with real titles, covers and buy
// links (own publication, or affiliate links) as they go live.

export const books: Book[] = [
  {
    slug: "bhavatu-sarvam-stories-of-stillness",
    title: "Bhavatu Sarvam: Stories of Stillness",
    author: "Yog M",
    description:
      "A collection of retellings drawn from devotional traditions — short enough to read in one sitting, made to be returned to.",
    coverImage: "/images/books/bhavatu-sarvam-book.jpg",
    buyUrl: "https://www.amazon.in/",
    format: "Paperback",
    featured: true,
  },
  {
    slug: "storykahani-tiny-tales",
    title: "StoryKahani: Tiny Tales",
    author: "Yog M",
    description:
      "Fifty very short stories about ordinary people, written for the reader who has three quiet minutes.",
    coverImage: "/images/books/storykahani-book.jpg",
    buyUrl: "https://www.amazon.in/",
    format: "eBook",
    featured: true,
  },
];

export const getFeaturedBooks = () => books.filter((b) => b.featured);
