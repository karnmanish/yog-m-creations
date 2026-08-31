import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="container-content grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <p className="eyebrow mb-5 text-marigold-dark">Yog M Creations</p>
          <h1 className="font-display text-[2.6rem] font-medium leading-[1.08] text-ink sm:text-6xl lg:text-[4.2rem]">
            Stories. Wisdom.
            <br />
            <span className="italic text-marigold-dark">Creativity.</span>{" "}
            Discoveries.
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-soft">
            Welcome to Yog M Creations — a creative space bringing together
            meaningful stories, spiritual content, visual storytelling, books
            and carefully selected discoveries.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/bhavatu-sarvam"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
            >
              Explore My Content
            </Link>
            <Link
              href="/smart-finds"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              Discover Smart Finds
            </Link>
          </div>
        </div>

        {/* Signature line-art: three woven threads, one per brand,
            meeting at a single knot — this creator's ecosystem in one mark. */}
        <div className="mx-auto hidden w-full max-w-sm sm:block lg:max-w-none">
          <svg
            viewBox="0 0 360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-hidden="true"
          >
            <circle cx="180" cy="180" r="150" stroke="#DED4BF" strokeWidth="1" />
            <path
              d="M180 180 C 90 140, 60 60, 70 30"
              stroke="#C68A2E"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M180 180 C 250 150, 300 90, 300 40"
              stroke="#1F4B4A"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M180 180 C 160 260, 190 320, 170 345"
              stroke="#9C4258"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="180" cy="180" r="5" fill="#211F1C" />
            <circle cx="70" cy="30" r="4" fill="#C68A2E" />
            <circle cx="300" cy="40" r="4" fill="#1F4B4A" />
            <circle cx="170" cy="345" r="4" fill="#9C4258" />
          </svg>
        </div>
      </div>
    </section>
  );
}
