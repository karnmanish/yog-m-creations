import type { Metadata } from "next";
import BrandContentGrid from "@/components/BrandContentGrid";
import SocialLinks from "@/components/SocialLinks";
import { getStoriesByBrand } from "@/data/stories";
import { bhavatuSarvamCategories } from "@/data/categories";
import { getSocialsByBrand } from "@/data/socialLinks";

export const metadata: Metadata = {
  title: "Bhavatu Sarvam — Devotional Stories & Videos",
  description:
    "Bhavatu Sarvam brings together stories of devotion, spirituality and timeless wisdom, told through short videos and written retellings — Krishna Leela, Jagannath, Vitthal, Radha Rani and more.",
};

export default function BhavatuSarvamPage() {
  const content = getStoriesByBrand("bhavatu-sarvam");
  const socials = getSocialsByBrand("bhavatu-sarvam");

  return (
    <div>
      {/* Header */}
      <section className="border-b border-line bg-marigold-light/20 py-16 sm:py-20">
        <div className="container-content">
          <p className="eyebrow mb-4 text-marigold-dark">Brand 01</p>
          <h1 className="font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Bhavatu Sarvam
          </h1>
          <p className="mt-4 max-w-xl font-display text-lg italic text-marigold-dark">
            Stories of devotion. Moments of wonder. Timeless wisdom.
          </p>
        </div>
      </section>

      {/* Searchable / filterable grid */}
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <BrandContentGrid
            stories={content}
            categories={bhavatuSarvamCategories}
            accent="marigold"
          />
        </div>
      </section>

      {/* Follow */}
      {socials && (
        <section className="border-t border-line bg-marigold-light/15 py-16 sm:py-20">
          <div className="container-content text-center">
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Follow Bhavatu Sarvam
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
              New retellings, videos and reflections — wherever you like to
              watch or scroll.
            </p>
            <div className="mt-6 flex justify-center">
              <SocialLinks
                links={socials.links}
                accentHoverClass="hover:text-marigold-dark"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
