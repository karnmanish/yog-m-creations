import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import SectionHeader from "@/components/SectionHeader";
import StoryCard from "@/components/StoryCard";
import ProductCard from "@/components/ProductCard";
import BookCard from "@/components/BookCard";
import ContentCard from "@/components/ContentCard";
import SocialLinks from "@/components/SocialLinks";
import { getFeaturedStories, stories } from "@/data/stories";
import { getFeaturedProducts } from "@/data/products";
import { getFeaturedBooks } from "@/data/books";
import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";

export default function HomePage() {
  const bhavatuStories = getFeaturedStories("bhavatu-sarvam");
  const storykahaniStories = getFeaturedStories("storykahani");
  const featuredProducts = getFeaturedProducts().slice(0, 3);
  const featuredBooks = getFeaturedBooks();
  const latest = [...stories]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 4);

  return (
    <>
      <Hero />

      {/* Three brand cards */}
      <section className="border-b border-line py-16 sm:py-20">
        <div className="container-content">
          <SectionHeader
            eyebrow="One creator, three worlds"
            title="Where every thread lives"
            description="Each brand stands on its own, and all of them are stitched from the same hand."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <BrandCard
              name="Bhavatu Sarvam"
              tagline="Stories of devotion, spirituality and timeless wisdom."
              href="/bhavatu-sarvam"
              accent="marigold"
              mark="BS"
            />
            <BrandCard
              name="StoryKahani"
              tagline="Tiny stories, quiet moments and meaningful tales."
              href="/storykahani"
              accent="teal"
              mark="SK"
            />
            <BrandCard
              name="Yog M Smart Finds"
              tagline="Useful things, interesting finds and smarter discoveries."
              href="/smart-finds"
              accent="berry"
              mark="SF"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-line py-16 sm:py-20">
        <div className="container-content grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="About"
            title="A single creative hub, built slowly and on purpose"
          />
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft">
            <p>
              Yog M Creations began as a simple idea: that devotion, story
              and discovery aren&apos;t separate interests, they&apos;re parts of
              the same attention. Bhavatu Sarvam carries the spiritual
              stories. StoryKahani carries the quiet, human ones. Smart
              Finds carries the everyday objects worth knowing about.
            </p>
            <p>
              Everything here is made and chosen by one person, with the
              same care whether it&apos;s a five-minute retelling, a two-line
              story, or a single recommended product.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-marigold-dark"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Bhavatu Sarvam */}
      <section className="border-b border-line bg-marigold-light/15 py-16 sm:py-20">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Bhavatu Sarvam"
              title="Stories of devotion & wisdom"
              accent="marigold"
            />
            <Link
              href="/bhavatu-sarvam"
              className="text-sm font-medium text-marigold-dark"
            >
              View all →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bhavatuStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured StoryKahani */}
      <section className="border-b border-line bg-teal-light/15 py-16 sm:py-20">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="StoryKahani"
              title="Tiny stories & quiet moments"
              accent="teal"
            />
            <Link href="/storykahani" className="text-sm font-medium text-teal">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {storykahaniStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Smart Finds */}
      <section className="border-b border-line bg-berry-light/15 py-16 sm:py-20">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Yog M Smart Finds"
              title="Useful things worth knowing about"
              accent="berry"
            />
            <Link href="/smart-finds" className="text-sm font-medium text-berry">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-faint">
            As an Amazon Associate, Yog M Creations earns from qualifying
            purchases.
          </p>
        </div>
      </section>

      {/* Books */}
      <section className="border-b border-line py-16 sm:py-20">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader eyebrow="Books" title="From the page as well" />
            <Link href="/books" className="text-sm font-medium text-marigold-dark">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredBooks.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest content */}
      <section className="border-b border-line bg-paper-dim/50 py-16 sm:py-20">
        <div className="container-content">
          <SectionHeader eyebrow="Fresh" title="Latest content" />
          <div className="mt-10 grid grid-cols-1 gap-5">
            {latest.map((item) => (
              <ContentCard
                key={item.slug}
                title={item.title}
                excerpt={item.description}
                image={item.thumbnail}
                href={`/${item.brand}/${item.slug}`}
                tag={item.brand === "bhavatu-sarvam" ? "Bhavatu Sarvam" : "StoryKahani"}
                meta={item.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social media */}
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeader
            eyebrow="Stay close"
            title="Follow along"
            description="Each brand has its own home across platforms — find the one that fits how you like to watch, read or scroll."
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {socialLinks.map((brand) => (
              <div
                key={brand.brand}
                className="flex flex-col items-center rounded-2xl border border-line p-7 text-center"
              >
                <p className="font-display text-lg font-medium text-ink">
                  {brand.label}
                </p>
                <div className="mt-4">
                  <SocialLinks links={brand.links} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
