import { cn } from "@/lib/utils";

type AnimatedBackgroundProps = { className?: string; tone?: "light" | "dark"; animated?: boolean };

export function AnimatedBackground({ className, tone = "light", animated = false }: AnimatedBackgroundProps) {
  const isDark = tone === "dark";
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className={cn("absolute -left-[18%] -top-[28%] size-[70vw] rounded-full blur-3xl", animated && "animated-orb", isDark ? "bg-evergreen/35" : "bg-mint/55")} />
      <div className={cn("absolute -bottom-[35%] -right-[20%] size-[65vw] rounded-full blur-3xl", animated && "animated-orb-delayed", isDark ? "bg-lime/15" : "bg-lime/30")} />
      <div className={cn("absolute inset-0 opacity-40", isDark ? "bg-[radial-gradient(circle_at_50%_0%,rgb(255_255_255_/_10%),transparent_42%)]" : "bg-[radial-gradient(circle_at_50%_0%,rgb(255_255_255_/_80%),transparent_42%)]")} />
    </div>
  );
}
