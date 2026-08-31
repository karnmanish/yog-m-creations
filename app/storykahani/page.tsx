import type { Metadata } from "next";
import BrandContentGrid from "@/components/BrandContentGrid";
import SocialLinks from "@/components/SocialLinks";
import { getStoriesByBrand } from "@/data/stories";
import { storyKahaniCategories } from "@/data/categories";
import { getSocialsByBrand } from "@/data/socialLinks";

export const metadata: Metadata = {
  title: "StoryKahani — Short Stories & Animated Storytelling",
  description:
    "StoryKahani is a creative storytelling space where short visual stories turn simple moments into meaningful experiences — tiny monk tales, silent stories, paper animation and more.",
};

export default function StoryKahaniPage() {
  const content = getStoriesByBrand("storykahani");
  const socials = getSocialsByBrand("storykahani");

  return (
    <div>
      {/* Header */}
      <section className="border-b border-line bg-teal-dark py-16 text-paper sm:py-20">
        <div className="container-content">
          <p className="eyebrow mb-4 text-teal-light/80">Brand 02</p>
          <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
            StoryKahani
          </h1>
          <p className="mt-4 max-w-xl font-display text-lg italic text-teal-light">
            Tiny stories. Quiet moments. Deep meaning.
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/80">
            StoryKahani is a creative storytelling space where short visual
            stories turn simple moments into meaningful experiences.
          </p>
        </div>
      </section>

      {/* Searchable / filterable grid */}
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <BrandContentGrid
            stories={content}
            categories={storyKahaniCategories}
            accent="teal"
          />
        </div>
      </section>

      {/* Follow */}
      {socials && (
        <section className="border-t border-line bg-teal-light/20 py-16 sm:py-20">
          <div className="container-content text-center">
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Follow StoryKahani
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
              New tiny stories and animations, wherever you like to watch or
              scroll.
            </p>
            <div className="mt-6 flex justify-center">
              <SocialLinks links={socials.links} accentHoverClass="hover:text-teal" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
