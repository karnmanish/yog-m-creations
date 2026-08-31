"use client";

import { useMemo, useState } from "react";
import { Story } from "@/types";
import StoryCard from "./StoryCard";
import { ALL_CATEGORIES } from "@/data/categories";

interface BrandContentGridProps {
  stories: Story[];
  categories: readonly string[];
  accent: "marigold" | "teal";
}

const accentClasses = {
  marigold: {
    active: "bg-marigold text-paper border-marigold",
    inactive: "border-line text-ink-soft hover:border-marigold/60 hover:text-marigold-dark",
    ring: "focus:border-marigold",
  },
  teal: {
    active: "bg-teal text-paper border-teal",
    inactive: "border-line text-ink-soft hover:border-teal/60 hover:text-teal",
    ring: "focus:border-teal",
  },
};

export default function BrandContentGrid({
  stories,
  categories,
  accent,
}: BrandContentGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORIES);
  const [query, setQuery] = useState("");
  const styles = accentClasses[accent];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stories.filter((s) => {
      const matchesCategory =
        activeCategory === ALL_CATEGORIES || s.category === activeCategory;
      const matchesQuery =
        q === "" ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.essence.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [stories, activeCategory, query]);

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <label htmlFor="content-search" className="sr-only">
          Search
        </label>
        <input
          id="content-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search stories, videos and titles…"
          className={`w-full max-w-md rounded-full border border-line bg-paper px-5 py-2.5 text-sm text-ink outline-none transition-colors ${styles.ring}`}
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button
          type="button"
          onClick={() => setActiveCategory(ALL_CATEGORIES)}
          className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
            activeCategory === ALL_CATEGORIES ? styles.active : styles.inactive
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === cat ? styles.active : styles.inactive
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="mt-5 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
        {filtered.length} {filtered.length === 1 ? "result" : "results"}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-line py-16 text-center">
          <p className="text-sm text-ink-soft">
            Nothing matches that search yet — try a different word or category.
          </p>
        </div>
      )}
    </div>
  );
}
