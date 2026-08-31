interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: "marigold" | "teal" | "berry" | "ink";
}

const accentMap = {
  marigold: "text-marigold",
  teal: "text-teal",
  berry: "text-berry",
  ink: "text-ink-faint",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  accent = "ink",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${accentMap[accent]}`}>{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-medium leading-tight text-ink">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 max-w-2xl text-base text-ink-soft ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
