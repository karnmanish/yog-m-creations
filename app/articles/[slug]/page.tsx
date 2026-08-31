import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <article className="py-16 sm:py-20">
      <div className="container-content max-w-2xl">
        <Link href="/articles" className="text-sm font-medium text-ink">
          ← Articles
        </Link>
        <p className="eyebrow mt-6 mb-3 text-ink-faint">
          {article.category} · {article.readTime}
        </p>
        <h1 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          {article.title}
        </h1>
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-paper-dim">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-[17px] leading-relaxed text-ink-soft">
          {article.excerpt}
        </p>
        <p className="mt-6 text-sm text-ink-faint">
          Full article text goes here.
        </p>
      </div>
    </article>
  );
}
