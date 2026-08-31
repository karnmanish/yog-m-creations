import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-content flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow mb-4 text-marigold-dark">404</p>
      <h1 className="font-display text-3xl font-medium text-ink sm:text-4xl">
        This page hasn&apos;t been written yet
      </h1>
      <p className="mt-3 max-w-sm text-[15px] text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist, or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink/85"
      >
        Back to home
      </Link>
    </div>
  );
}
