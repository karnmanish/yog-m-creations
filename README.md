# Yog M Creations

The central creator hub for three brands:

1. **Bhavatu Sarvam** — spiritual / devotional stories and videos
2. **StoryKahani** — short stories, animated stories and visual storytelling
3. **Yog M Smart Finds** — curated products with Amazon.in affiliate links

Built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
yog-m-creations/
├── app/                        # Routes (Next.js App Router)
│   ├── layout.tsx              # Root layout — fonts, nav, footer, SEO defaults
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind + design tokens (thread-divider, eyebrow, etc.)
│   ├── sitemap.ts              # Auto-generated sitemap.xml
│   ├── robots.ts               # robots.txt
│   ├── not-found.tsx           # 404 page
│   ├── api/contact/route.ts    # Contact form API endpoint (stub — wire up email service)
│   ├── bhavatu-sarvam/
│   │   ├── page.tsx            # Brand listing page
│   │   └── [slug]/page.tsx     # Individual story/video page
│   ├── storykahani/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── smart-finds/page.tsx
│   ├── books/page.tsx
│   ├── articles/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/                 # Reusable, presentational components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── BrandCard.tsx
│   ├── ContentCard.tsx
│   ├── StoryCard.tsx            # Grid card — thumbnail, Watch/Read, per-item socials
│   ├── StoryDetail.tsx          # Shared layout for both [slug] detail pages
│   ├── BrandContentGrid.tsx     # Client component: search + category filter + grid
│   ├── ProductCard.tsx
│   ├── BookCard.tsx
│   ├── SocialLinks.tsx
│   ├── SectionHeader.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── data/                       # Structured content — edit these, never the UI
│   ├── stories.ts               # Bhavatu Sarvam + StoryKahani content
│   ├── categories.ts            # Category lists per brand (drives the filter UI)
│   ├── products.ts              # Smart Finds products (Amazon.in links)
│   ├── books.ts
│   ├── articles.ts
│   └── socialLinks.ts           # Centralized social URLs per brand
├── types/index.ts               # Shared TypeScript types
├── public/
│   ├── images/{bhavatu,storykahani,finds,books,articles}/  # Drop real images here
│   └── grain.svg
├── tailwind.config.ts           # Design tokens: colors, fonts, shadows
└── package.json
```

## Adding content

Nothing is hard-coded into the UI — everything renders from `/data`.

- **New story, video or animation** → add an entry to `data/stories.ts`
  matching the `Story` shape in `types/index.ts`:
  `slug`, `brand` (`"bhavatu-sarvam"` or `"storykahani"`), `category` (must
  match one of the lists in `data/categories.ts`), `description`,
  `essence`, `thumbnail`, `content`, `type` (`"video"` | `"story"` |
  `"animation"`), `date`, and optional `featured`, `readable`, `duration`,
  `youtube`, `instagram`, `facebook`, `tiktok`.
  - The **Watch** button shows for `video`/`animation` types and opens
    `youtube` if set, otherwise the detail page's video section.
  - The **Read** button shows automatically for `type: "story"`, or for
    any entry with `readable: true`.
  - Any of `youtube` / `instagram` / `facebook` / `tiktok` left as `""`
    renders as a muted "coming soon" icon on the card instead of a dead
    link.
  - The page auto-generates related content from stories sharing the same
    `category` — no manual linking needed.
- **New category** → add it to `bhavatuSarvamCategories` or
  `storyKahaniCategories` in `data/categories.ts`; it appears in the
  filter row automatically.
- **New product** → add an entry to `data/products.ts` with your real
  Amazon.in affiliate link in `affiliateUrl`.
- **New book** → add an entry to `data/books.ts`.
- **New article** → add an entry to `data/articles.ts`.
- **Social links** (brand-wide, shown in the footer and each brand's
  "Follow" section) → fill in the real profile URLs in
  `data/socialLinks.ts`. Any link left as `"#"` renders in a muted,
  non-clickable "coming soon" state automatically — nothing broken ships
  by accident.

## Images

Add real photos/thumbnails into the matching folder under
`public/images/` and update the `coverImage` / `image` paths in the data
files to match. Next.js's `<Image>` component handles optimization and
responsive sizing automatically — no extra setup needed.

## Contact form

`app/api/contact/route.ts` currently validates and logs submissions to the
server console. Before going live, connect it to a real email service
(Resend, SendGrid, Nodemailer + SMTP, etc.) inside that route handler.

## Design tokens

Colors, type and spacing live in `tailwind.config.ts`:

- `paper` / `ink` — the shared warm, neutral ground for the whole site
- `marigold` — Bhavatu Sarvam's accent
- `teal` — StoryKahani's accent
- `berry` — Smart Finds' accent
- Fonts: **Fraunces** (display/headings), **Work Sans** (body),
  **JetBrains Mono** (eyebrows/labels), loaded via `next/font` in
  `app/layout.tsx`.

## SEO

- Per-page `metadata` exports (title, description) on every route
- Auto-generated `sitemap.xml` (`app/sitemap.ts`) and `robots.txt`
  (`app/robots.ts`) — update `siteUrl` in both once the domain is live
- Semantic HTML, descriptive alt text on all images, mobile-first
  responsive layout throughout
