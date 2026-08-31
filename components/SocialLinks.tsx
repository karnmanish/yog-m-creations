import { SocialPlatformLink } from "@/types";

export function PlatformIcon({
  platform,
  size = 18,
}: {
  platform: SocialPlatformLink["platform"];
  size?: number;
}) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none" };
  switch (platform) {
    case "YouTube":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M21.6 7.2c-.2-1-.9-1.7-1.9-1.9C17.9 5 12 5 12 5s-5.9 0-7.7.3c-1 .2-1.7.9-1.9 1.9C2 9 2 12 2 12s0 3 .4 4.8c.2 1 .9 1.7 1.9 1.9C6.1 19 12 19 12 19s5.9 0 7.7-.3c1-.2 1.7-.9 1.9-1.9.4-1.8.4-4.8.4-4.8s0-3-.4-4.8Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M14 9h2.5V6.2h-2.5c-1.9 0-3.3 1.5-3.3 3.4V12H8.5v2.8h2.2V21H13v-6.2h2.3l.4-2.8H13V9.9c0-.5.4-.9.9-.9Z"
            fill="currentColor"
          />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M14 3.5c.4 1.9 1.7 3.3 3.6 3.6v2.6c-1.3 0-2.5-.4-3.6-1.1v6.1c0 3-2.4 5.3-5.3 5.3S3.4 17.7 3.4 14.7c0-2.8 2.1-5.1 4.9-5.3v2.7c-1.3.2-2.3 1.3-2.3 2.6 0 1.5 1.2 2.7 2.7 2.7s2.8-1.2 2.8-2.7V3.5H14Z"
            fill="currentColor"
          />
        </svg>
      );
    case "Pinterest":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M9.5 18c.4-1.1 1-3.6 1-3.6m0 0c.3.7 1.2 1.2 2.1 1.2 2.1 0 3.6-1.9 3.6-4.3 0-2.1-1.7-3.9-4.3-3.9-3.2 0-4.9 2.3-4.9 4.6 0 1.1.6 2.5 1.6 2.9M10.5 14.4l1.2-5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

interface SocialLinksProps {
  links: SocialPlatformLink[];
  className?: string;
  size?: "sm" | "md";
  accentHoverClass?: string; // e.g. "hover:text-teal" — defaults to marigold
}

const sizeMap = {
  sm: { button: "h-7 w-7", icon: 14 },
  md: { button: "h-9 w-9", icon: 18 },
};

export default function SocialLinks({
  links,
  className = "",
  size = "md",
  accentHoverClass = "hover:text-marigold-dark",
}: SocialLinksProps) {
  const dims = sizeMap[size];
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const isLive = link.url && link.url !== "#";
        return (
          <li key={link.platform}>
            <a
              href={isLive ? link.url : undefined}
              target={isLive ? "_blank" : undefined}
              rel={isLive ? "noopener noreferrer" : undefined}
              aria-disabled={!isLive}
              aria-label={`${link.platform}${isLive ? "" : " (coming soon)"}`}
              title={isLive ? link.platform : `${link.platform} — coming soon`}
              className={`flex ${dims.button} items-center justify-center rounded-full border transition-colors ${
                isLive
                  ? `border-ink/20 text-ink hover:border-ink/40 cursor-pointer ${accentHoverClass}`
                  : "border-ink/10 text-ink-faint/60 cursor-default"
              }`}
              onClick={(e) => {
                if (!isLive) e.preventDefault();
              }}
            >
              <PlatformIcon platform={link.platform} size={dims.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
