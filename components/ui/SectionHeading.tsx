type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-green">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-brand-navy"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
