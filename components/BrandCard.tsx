import Link from "next/link";

interface BrandCardProps {
  name: string;
  tagline: string;
  href: string;
  accent: "marigold" | "teal" | "berry";
  mark: string; // a short glyph / initials used as the card's mark
}

const accentStyles = {
  marigold: {
    bg: "bg-marigold-light/40",
    ring: "group-hover:border-marigold",
    text: "text-marigold-dark",
    dot: "bg-marigold",
  },
  teal: {
    bg: "bg-teal-light/50",
    ring: "group-hover:border-teal",
    text: "text-teal",
    dot: "bg-teal",
  },
  berry: {
    bg: "bg-berry-light/45",
    ring: "group-hover:border-berry",
    text: "text-berry",
    dot: "bg-berry",
  },
};

export default function BrandCard({
  name,
  tagline,
  href,
  accent,
  mark,
}: BrandCardProps) {
  const s = accentStyles[accent];
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-7 transition-colors ${s.ring}`}
    >
      <div>
        <div
          className={`mb-5 flex h-11 w-11 items-center justify-center rounded-full font-display text-base ${s.bg} ${s.text}`}
        >
          {mark}
        </div>
        <h3 className="font-display text-2xl font-medium text-ink">{name}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          {tagline}
        </p>
      </div>
      <span
        className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${s.text}`}
      >
        Explore
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
