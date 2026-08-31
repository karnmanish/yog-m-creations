import { Product } from "@/types";

// Curated product placeholders. Swap affiliateUrl with real Amazon.in
// affiliate links before publishing — every link on this page must
// carry your Associates tag.

export const products: Product[] = [
  {
    slug: "brass-diya-set",
    title: "Handcrafted Brass Diya Set",
    description:
      "A set of traditional brass diyas for daily lighting or festival evenings — simple, durable, and made to last years.",
    image: "/images/finds/brass-diya-set.jpg",
    category: "Home & Devotion",
    affiliateUrl: "https://www.amazon.in/",
    price: "₹899",
    featured: true,
  },
  {
    slug: "linen-journal",
    title: "Linen-Bound Notebook",
    description:
      "A softcover, linen-textured journal with cream pages — good for morning notes, story drafts, or quiet reflection.",
    image: "/images/finds/linen-journal.jpg",
    category: "Stationery",
    affiliateUrl: "https://www.amazon.in/",
    price: "₹449",
    featured: true,
  },
  {
    slug: "copper-water-bottle",
    title: "Pure Copper Water Bottle",
    description:
      "A hand-finished copper bottle, the kind that quietly earns its place on a desk or a nightstand.",
    image: "/images/finds/copper-bottle.jpg",
    category: "Everyday",
    affiliateUrl: "https://www.amazon.in/",
    price: "₹649",
    featured: true,
  },
  {
    slug: "sandalwood-incense",
    title: "Pure Sandalwood Incense Sticks",
    description:
      "Slow-burning, single-note sandalwood incense — no synthetic overlay, just the one scent done well.",
    image: "/images/finds/sandalwood-incense.jpg",
    category: "Home & Devotion",
    affiliateUrl: "https://www.amazon.in/",
    price: "₹299",
    featured: false,
  },
  {
    slug: "wooden-bookstand",
    title: "Foldable Wooden Bookstand",
    description:
      "A compact wooden stand that holds a book open at reading angle — useful for cooking, studying or long reads.",
    image: "/images/finds/wooden-bookstand.jpg",
    category: "Reading",
    affiliateUrl: "https://www.amazon.in/",
    price: "₹549",
    featured: false,
  },
  {
    slug: "cotton-meditation-cushion",
    title: "Cotton Meditation Cushion",
    description:
      "A firm, floor-friendly cushion for sitting practice — simple cotton cover, no unnecessary branding.",
    image: "/images/finds/meditation-cushion.jpg",
    category: "Wellness",
    affiliateUrl: "https://www.amazon.in/",
    price: "₹1,199",
    featured: false,
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.featured);
