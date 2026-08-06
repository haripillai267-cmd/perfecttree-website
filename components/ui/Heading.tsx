import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  children: ReactNode;
  eyebrow?: string;
  description?: string;
  as?: ElementType;
  size?: "display" | "lg" | "md" | "sm";
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
};

const sizes = { display: "text-display", lg: "text-heading-md", md: "text-heading-sm", sm: "text-3xl font-semibold tracking-[-0.04em]" };

export function Heading({ children, eyebrow, description, as: Component = "h2", size = "md", align = "left", tone = "default", className }: HeadingProps) {
  const isLight = tone === "light";
  return (
    <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className={cn("text-label mb-5", isLight ? "text-mint" : "text-evergreen")}>{eyebrow}</p> : null}
      <Component className={cn(sizes[size], isLight ? "text-white" : "text-ink")}>{children}</Component>
      {description ? <p className={cn("mt-6 max-w-2xl text-[length:var(--text-lead)] leading-relaxed", align === "center" && "mx-auto", isLight ? "text-white/70" : "text-ink-muted")}>{description}</p> : null}
    </div>
  );
}
