import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";
import SocialLinks from "./SocialLinks";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Bhavatu Sarvam", href: "/bhavatu-sarvam" },
      { label: "StoryKahani", href: "/storykahani" },
      { label: "Yog M Smart Finds", href: "/smart-finds" },
      { label: "Books", href: "/books" },
    ],
  },
  {
    title: "Site",
    links: [
      { label: "Articles", href: "/articles" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-dim/60">
      <div className="container-content py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div>
            <p className="font-display text-xl font-medium text-ink">
              Yog M <span className="text-marigold-dark">Creations</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Stories. Wisdom. Creativity. Discoveries. — one creative hub,
              three brands.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-4 text-ink-faint">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-soft hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow mb-4 text-ink-faint">Follow</p>
            <div className="space-y-4">
              {socialLinks.map((brand) => (
                <div key={brand.brand}>
                  <p className="mb-2 text-xs text-ink-faint">{brand.label}</p>
                  <SocialLinks links={brand.links} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="thread-divider my-10" />

        <div className="flex flex-col gap-4 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Yog M Creations. All rights reserved.</p>
          <p>
            As an Amazon Associate, Yog M Creations earns from qualifying
            purchases made through links on this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
