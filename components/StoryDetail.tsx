import Image from "next/image";
import Link from "next/link";
import { Story, SocialPlatformLink } from "@/types";
import { isReadable } from "@/data/stories";
import SocialLinks from "./SocialLinks";
import StoryCard from "./StoryCard";

interface StoryDetailProps {
  story: Story;
  related: Story[];
  accent: "marigold" | "teal";
}

const accentStyles = {
  marigold: {
    eyebrow: "text-marigold-dark",
    quote: "border-marigold text-marigold-dark",
    solidBtn: "bg-marigold hover:bg-marigold-dark",
    backLink: "text-marigold-dark",
    hoverAccent: "hover:text-marigold-dark",
    brandLabel: "Bhavatu Sarvam",
    brandHref: "/bhavatu-sarvam",
  },
  teal: {
    eyebrow: "text-teal",
    quote: "border-teal text-teal",
    solidBtn: "bg-teal hover:bg-teal-dark",
    backLink: "text-teal",
    hoverAccent: "hover:text-teal",
    brandLabel: "StoryKahani",
    brandHref: "/storykahani",
  },
};

export default function StoryDetail({ story, related, accent }: StoryDetailProps) {
  const s = accentStyles[accent];
  const canWatch = story.type === "video" || story.type === "animation";
  const canRead = isReadable(story);
  const paragraphs = story.content.split("\n\n").filter(Boolean);

  const socialLinks: SocialPlatformLink[] = [
    { platform: "YouTube", url: story.youtube || "#" },
    { platform: "Instagram", url: story.instagram || "#" },
    { platform: "Facebook", url: story.facebook || "#" },
    { platform: "TikTok", url: story.tiktok || "#" },
  ];

  return (
    <article className="py-16 sm:py-20">
      <div className="container-content max-w-3xl">
        <Link href={s.brandHref} className={`text-sm font-medium ${s.backLink}`}>
          ← {s.brandLabel}
        </Link>

        <p className={`eyebrow mt-6 mb-3 ${s.eyebrow}`}>
          {story.category} · {story.type} {story.duration ? `· ${story.duration}` : ""}
        </p>
        <h1 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          {story.title}
        </h1>

        <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-paper-dim">
          <Image
            src={story.thumbnail}
            alt={story.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <blockquote className={`mt-8 border-l-2 pl-4 font-display text-lg italic leading-relaxed ${s.quote}`}>
          {story.essence}
        </blockquote>

        <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
          {story.description}
        </p>

        {/* Watch / Read actions */}
        <div id="watch" className="mt-8 flex flex-wrap gap-3 scroll-mt-24">
          {canWatch && story.youtube && (
            <a
              href={story.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-paper transition-colors ${s.solidBtn}`}
            >
              Watch on YouTube
            </a>
          )}
          {canWatch && !story.youtube && (
            <div className="flex aspect-video w-full max-w-xl items-center justify-center rounded-2xl border border-dashed border-line bg-paper-dim text-sm text-ink-faint">
              Video coming soon
            </div>
          )}
        </div>

        {/* Full story content */}
        {canRead && (
          <div className="mt-10 space-y-4 border-t border-line pt-8 text-[16px] leading-relaxed text-ink-soft">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {/* Social links */}
        <div className="mt-10 border-t border-line pt-8">
          <p className="eyebrow mb-3 text-ink-faint">Watch or follow elsewhere</p>
          <SocialLinks links={socialLinks} accentHoverClass={s.hoverAccent} />
        </div>
      </div>

      {/* Related content */}
      {related.length > 0 && (
        <div className="container-content mt-16 max-w-5xl border-t border-line pt-14">
          <h2 className="font-display text-2xl font-medium text-ink">
            Related content
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <StoryCard key={r.slug} story={r} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
