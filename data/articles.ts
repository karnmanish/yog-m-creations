export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  readTime: string;
  date: string;
  category: string;
}

// General-interest articles that sit outside the three content
// brands — reflections, behind-the-scenes notes, reading lists.

export const articles: Article[] = [
  {
    slug: "why-i-split-my-work-into-three-brands",
    title: "Why I Split My Work Into Three Brands",
    excerpt:
      "A short note on why Bhavatu Sarvam, StoryKahani and Smart Finds live separately, and what ties them back together.",
    coverImage: "/images/articles/three-brands.jpg",
    readTime: "6 min read",
    date: "2025-01-05",
    category: "Behind the scenes",
  },
  {
    slug: "how-i-choose-what-to-recommend",
    title: "How I Choose What to Recommend",
    excerpt:
      "The quiet rule behind every product on Smart Finds — used first, written about second.",
    coverImage: "/images/articles/how-i-choose.jpg",
    readTime: "4 min read",
    date: "2025-02-12",
    category: "Smart Finds",
  },
];
