import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

type CallToActionProps = { eyebrow?: string; title: string; description: string; href: string; action: string; className?: string };

export function CallToAction({ eyebrow = "A better next move", title, description, href, action, className }: CallToActionProps) {
  return (
    <section className={cn("relative isolate overflow-hidden rounded-[var(--radius-xl)] bg-surface-inverse px-6 py-16 sm:px-12 lg:px-16 lg:py-24", className)}>
      <AnimatedBackground tone="dark" />
      <div className="relative max-w-3xl">
        <Badge tone="light">{eyebrow}</Badge>
        <Heading as="h2" size="lg" tone="light" className="mt-7" description={description}>{title}</Heading>
        <Button href={href} variant="primary" size="lg" showIcon className="mt-10 bg-lime text-ink hover:bg-mint">{action}</Button>
      </div>
    </section>
  );
}
