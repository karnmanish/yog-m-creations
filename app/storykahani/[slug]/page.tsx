import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StoryDetail from "@/components/StoryDetail";
import { getStoryBySlug, getRelatedStories, getStoriesByBrand } from "@/data/stories";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getStoriesByBrand("storykahani").map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const story = getStoryBySlug("storykahani", params.slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.description,
  };
}

export default function StoryKahaniStoryPage({ params }: Props) {
  const story = getStoryBySlug("storykahani", params.slug);
  if (!story) notFound();

  const related = getRelatedStories(story);

  return <StoryDetail story={story} related={related} accent="teal" />;
}
