// Shared content types for Yog M Creations
// Keeping these centralized means every component and data file
// speaks the same shape, and new content never needs UI changes.

export type Brand = "bhavatu-sarvam" | "storykahani" | "smart-finds";

export type ContentType = "video" | "story" | "animation";

export interface Story {
  slug: string;
  brand: Extract<Brand, "bhavatu-sarvam" | "storykahani">;
  title: string;
  category: string; // must match one of the brand's category list in data/categories.ts
  description: string; // short synopsis shown on cards & used for SEO description
  essence: string; // one-line "story essence" — the quiet, poetic summary
  thumbnail: string; // path under /public/images/... or a hosted URL
  content: string; // full story/content body for the detail page
  type: ContentType;
  duration?: string; // e.g. "6 min read", "4:12"
  date: string; // ISO date
  featured?: boolean;
  readable?: boolean; // force-show the Read button regardless of type
  // Per-content platform links. Leave as "" (or omit) until the piece is
  // actually published on that platform — cards treat a missing link as
  // "not live yet" rather than inventing one.
  youtube?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  affiliateUrl: string; // Amazon.in affiliate link
  price?: string;
  featured?: boolean;
}

export interface Book {
  slug: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  buyUrl: string;
  format: "Paperback" | "eBook" | "Hardcover" | "Audiobook";
  featured?: boolean;
}

export interface SocialPlatformLink {
  platform: "YouTube" | "Instagram" | "Facebook" | "TikTok" | "Pinterest";
  url: string;
}

export interface BrandSocials {
  brand: Brand;
  label: string;
  links: SocialPlatformLink[];
}
