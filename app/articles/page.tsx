import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ContentCard from "@/components/ContentCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles — Yog M Creations",
  description:
    "Reflections, behind-the-scenes notes and reading around the Yog M Creations ecosystem.",
};

export default function ArticlesPage() {
  return (
    <div>
      <section className="border-b border-line bg-paper-dim/60 py-16 sm:py-20">
        <div className="container-content">
          <p className="eyebrow mb-4 text-ink-faint">Articles</p>
          <h1 className="font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Notes, in between the stories
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Shorter, plainer writing about how this work gets made and why.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeader title="All articles" />
          <div className="mt-10 grid grid-cols-1 gap-5">
            {articles.map((article) => (
              <ContentCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                image={article.coverImage}
                href={`/articles/${article.slug}`}
                tag={article.category}
                meta={`${article.readTime} · ${new Date(
                  article.date
                ).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
