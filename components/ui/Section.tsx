import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  tone?: "default" | "quiet" | "dark";
  as?: ElementType;
};

const tones = {
  default: "bg-surface",
  quiet: "bg-black/[0.025]",
  dark: "bg-surface-inverse text-white",
};

export function Section({ children, id, className, innerClassName, tone = "default", as: Component = "section" }: SectionProps) {
  return <Component id={id} className={cn("section-space", tones[tone], className)}><Container className={innerClassName}>{children}</Container></Component>;
}
