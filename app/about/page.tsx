import type { Metadata } from "next";
import BrandCard from "@/components/BrandCard";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About — Yog M Creations",
  description:
    "The story behind Yog M Creations and the three brands it holds together: Bhavatu Sarvam, StoryKahani and Yog M Smart Finds.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-line py-16 sm:py-20">
        <div className="container-content max-w-3xl">
          <p className="eyebrow mb-4 text-marigold-dark">About</p>
          <h1 className="font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            One creator, working in three directions at once
          </h1>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
            <p>
              Yog M Creations is the hub behind everything I make — the
              devotional stories, the short fiction, the animated pieces,
              and the products I actually use and would tell a friend
              about.
            </p>
            <p>
              I started Bhavatu Sarvam because the old teachings I grew up
              with felt worth retelling simply, without losing what made
              them worth keeping. StoryKahani came from the opposite
              instinct — wanting to say something true in as few words as
              possible. Smart Finds is the practical side: things I&apos;ve
              bought, used, and would happily buy again.
            </p>
            <p>
              None of it is run by a team. It&apos;s one person, working
              slowly, trying to keep each brand honest to what it&apos;s
              actually for.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-dim/50 py-16 sm:py-20">
        <div className="container-content">
          <SectionHeader
            eyebrow="The three brands"
            title="What each one is for"
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
    </div>
  );
}
