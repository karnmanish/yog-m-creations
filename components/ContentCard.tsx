import Image from "next/image";
import Link from "next/link";

interface ContentCardProps {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  tag?: string;
  meta?: string;
}

export default function ContentCard({
  title,
  excerpt,
  image,
  href,
  tag,
  meta,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-card transition-transform hover:-translate-y-0.5 sm:flex-row"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-paper-dim sm:aspect-square sm:w-48">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 192px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-5">
        {tag && (
          <span className="eyebrow mb-2 text-ink-faint">{tag}</span>
        )}
        <h3 className="font-display text-lg font-medium leading-snug text-ink">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{excerpt}</p>
        {meta && (
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
            {meta}
          </p>
        )}
      </div>
    </Link>
  );
}
