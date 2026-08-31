import Image from "next/image";
import Link from "next/link";
import { Story, SocialPlatformLink } from "@/types";
import { isReadable } from "@/data/stories";
import SocialLinks from "./SocialLinks";

const brandAccent: Record<
  Story["brand"],
  { text: string; bg: string; solidBtn: string; outlineBtn: string; hover: string }
> = {
  "bhavatu-sarvam": {
    text: "text-marigold-dark",
    bg: "bg-marigold-light/50",
    solidBtn: "bg-marigold hover:bg-marigold-dark",
    outlineBtn: "border-marigold text-marigold-dark hover:bg-marigold-light/40",
    hover: "hover:text-marigold-dark",
  },
  storykahani: {
    text: "text-teal",
    bg: "bg-teal-light/50",
    solidBtn: "bg-teal hover:bg-teal-dark",
    outlineBtn: "border-teal text-teal hover:bg-teal-light/40",
    hover: "hover:text-teal",
  },
};

const typeLabel: Record<Story["type"], string> = {
  video: "Video",
  story: "Story",
  animation: "Animation",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function StoryCard({ story }: { story: Story }) {
  const accent = brandAccent[story.brand];
  const detailHref = `/${story.brand}/${story.slug}`;
  const canWatch = story.type === "video" || story.type === "animation";
  const canRead = isReadable(story);
  const watchHref = story.youtube && story.youtube !== "" ? story.youtube : `${detailHref}#watch`;

  const socialLinks: SocialPlatformLink[] = [
    { platform: "YouTube", url: story.youtube || "#" },
    { platform: "Instagram", url: story.instagram || "#" },
    { platform: "Facebook", url: story.facebook || "#" },
    { platform: "TikTok", url: story.tiktok || "#" },
  ];

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card transition-transform hover:-translate-y-0.5">
      <Link href={detailHref} className="group relative block aspect-[4/3] w-full overflow-hidden bg-paper-dim">
        <Image
          src={story.thumbnail}
          alt={story.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-medium ${accent.bg} ${accent.text}`}
        >
          {typeLabel[story.type]}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium text-ink-soft">
          {story.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={detailHref}>
          <h3 className={`font-display text-lg font-medium leading-snug text-ink transition-colors ${accent.hover}`}>
            {story.title}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {story.description}
        </p>

        <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-wide text-ink-faint">
          <span>{formatDate(story.date)}</span>
          {story.duration && <span>{story.duration}</span>}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {canWatch && (
            <a
              href={watchHref}
              target={story.youtube ? "_blank" : undefined}
              rel={story.youtube ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-paper transition-colors ${accent.solidBtn}`}
            >
              Watch
            </a>
          )}
          {canRead && (
            <Link
              href={detailHref}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${accent.outlineBtn}`}
            >
              Read
            </Link>
          )}
        </div>

        <div className="mt-4 border-t border-line pt-4">
          <SocialLinks
            links={socialLinks}
            size="sm"
            accentHoverClass={story.brand === "bhavatu-sarvam" ? "hover:text-marigold-dark" : "hover:text-teal"}
          />
        </div>
      </div>
    </div>
  );
}
