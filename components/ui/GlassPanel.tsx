import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassPanelProps = { children: ReactNode; className?: string } & Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">;

export function GlassPanel({ children, className, ...props }: GlassPanelProps) {
  return <div className={cn("glass-surface rounded-[var(--radius-lg)]", className)} {...props}>{children}</div>;
}
