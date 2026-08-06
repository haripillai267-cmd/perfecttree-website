import { ArrowRight, Check, MoveUpRight } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { approach, expertise, insights, reasons } from "./content";
import { GlobalMap } from "./GlobalMap";
import { ImpactCounters } from "./ImpactCounters";
import { HeroAtmosphere } from "./HeroAtmosphere";
import { HeroTitle } from "./HeroTitle";

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[56rem] items-end overflow-hidden bg-surface-inverse pb-12 pt-40 text-white sm:min-h-svh sm:pb-16 lg:pb-20">
      <AnimatedBackground tone="dark" animated />
      <HeroAtmosphere />
      <div className="relative mx-auto w-full max-w-[var(--container-max)] px-5 sm:px-8 lg:px-10">
        <Reveal><Badge tone="light">PerfectTree / Global advisory</Badge></Reveal>
        <div className="mt-7 max-w-6xl"><HeroTitle /></div>
        <Reveal delay={0.16} className="mt-10 flex flex-col justify-between gap-9 border-t border-white/15 pt-6 lg:flex-row lg:items-end">
          <p className="max-w-xl text-[length:var(--text-lead)] leading-relaxed text-white/70">PerfectTree partners with ambitious organizations to turn complexity into enduring advantage—across markets, systems, and industries.</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><Button href="/contact" size="lg" showIcon className="w-full sm:w-auto">Start a conversation</Button><Button href="#expertise" variant="outline" size="lg" className="w-full border-white/25 text-white hover:border-white hover:bg-white hover:text-ink sm:w-auto">Explore our expertise</Button></div>
        </Reveal>
      </div>
    </section>
  );
}

export function GlobalPresence() {
  return (
    <Section tone="dark" className="relative overflow-hidden" innerClassName="relative">
      <AnimatedBackground tone="dark" />
      <div className="relative grid gap-14 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-5"><Heading eyebrow="One standard, everywhere" size="lg" tone="light">Global Thinking.<br />Local Execution.</Heading><p className="mt-7 max-w-md text-lg leading-relaxed text-white/60">We combine a worldwide point of view with intimate knowledge of the markets where work gets done.</p></Reveal>
        <Reveal delay={0.12} className="lg:col-span-7"><GlobalMap /></Reveal>
      </div>
    </Section>
  );
}

export function WhoWeAre() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-y-28">
        <Reveal className="lg:col-span-7"><Heading eyebrow="Who we are" size="lg">A different kind of partner for consequential work.</Heading></Reveal>
        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9"><p className="text-[length:var(--text-lead)] leading-relaxed text-ink-muted">We are strategists, operators, and builders who work alongside leadership teams to create a future with more clarity, capacity, and momentum.</p><div className="mt-9 flex items-center gap-3 text-label text-evergreen"><Check aria-hidden="true" className="size-4" /> Ideas that become action</div></Reveal>
        <Reveal className="relative min-h-80 overflow-hidden rounded-[var(--radius-xl)] bg-evergreen-deep shadow-elevation-sm lg:col-span-5"><AnimatedBackground tone="dark" /><div className="relative flex h-full min-h-80 items-end p-7 sm:p-9"><p className="max-w-56 text-2xl font-semibold tracking-[-0.05em] text-white">Quiet confidence. Measurable change.</p></div></Reveal>
        <Reveal delay={0.1} className="relative min-h-80 overflow-hidden rounded-[var(--radius-xl)] border border-line bg-black/[0.025] shadow-elevation-xs lg:col-span-6 lg:col-start-7"><div aria-hidden="true" className="absolute inset-x-8 bottom-8 top-8 rounded-[var(--radius-lg)] border border-evergreen/15 bg-[linear-gradient(135deg,transparent_25%,rgb(15_92_72_/_10%)_25%,rgb(15_92_72_/_10%)_50%,transparent_50%,transparent_75%,rgb(216_255_114_/_25%)_75%)] bg-[length:40px_40px]" /><div aria-hidden="true" className="absolute inset-x-12 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" /><div className="absolute left-8 top-8"><Badge tone="accent">15 years of focus</Badge></div></Reveal>
      </div>
    </Section>
  );
}

export function Expertise() {
  return (
    <Section id="expertise" tone="quiet"><Reveal><Heading eyebrow="Our expertise" size="lg" description="Where technical depth and strategic imagination make the greatest difference.">Built for the work that changes the trajectory.</Heading></Reveal>
      <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{expertise.map((item, index) => { const Icon = item.icon; return <Reveal key={item.title} delay={index * 0.04}><Card className="group relative isolate min-h-72 overflow-hidden border-transparent p-6 transition-[transform,box-shadow,background-color,border-color] duration-[var(--duration-slow)] hover:-translate-y-1 hover:border-white/10 hover:bg-surface-inverse hover:shadow-elevation-lg"><div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgb(216_255_114_/_0%),transparent_40%)] transition-[background] duration-[var(--duration-slow)] group-hover:bg-[radial-gradient(circle_at_top_right,rgb(216_255_114_/_18%),transparent_42%)]" /><div className="flex items-start justify-between"><span className="text-label text-ink-muted transition-colors group-hover:text-mint">{item.number}</span><Icon aria-hidden="true" className="size-5 text-evergreen transition-all duration-[var(--duration-slow)] group-hover:rotate-[-8deg] group-hover:text-lime" /></div><div className="mt-20"><h3 className="text-3xl font-semibold tracking-[-0.05em] text-ink transition-colors group-hover:text-white">{item.title}</h3><p className="mt-4 max-w-xs leading-relaxed text-ink-muted transition-colors group-hover:text-white/60">{item.description}</p></div><MoveUpRight aria-hidden="true" className="mt-6 size-5 text-ink opacity-0 transition-all duration-[var(--duration-base)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime group-hover:opacity-100" /></Card></Reveal>; })}</div>
    </Section>
  );
}

export function WhyPerfectTree() {
  return (
    <Section><Reveal><Heading eyebrow="Why PerfectTree" size="lg">The caliber of the thinking matters. So does what happens next.</Heading></Reveal><div className="mt-16 grid gap-10 border-t border-line pt-8 lg:grid-cols-3">{reasons.map((reason, index) => { const Icon = reason.icon; return <Reveal key={reason.title} delay={index * 0.08}><article><div className="flex items-center justify-between"><span className="text-label text-evergreen">{reason.number}</span><Icon aria-hidden="true" className="size-5 text-evergreen" /></div><h3 className="mt-14 text-heading-sm">{reason.title}</h3><p className="mt-6 max-w-sm leading-relaxed text-ink-muted">{reason.copy}</p></article></Reveal>; })}</div></Section>
  );
}

export function BusinessImpact() {
  return <Section tone="dark"><Reveal><Heading eyebrow="Business impact" size="lg" tone="light" description="A record built through meaningful progress, not presentation decks.">The results travel further than the engagement.</Heading></Reveal><Reveal delay={0.1} className="mt-20"><ImpactCounters /></Reveal></Section>;
}

export function OurApproach() {
  return <Section><Reveal><Heading eyebrow="Our approach" size="lg">A disciplined path from ambiguity to advantage.</Heading></Reveal><div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">{approach.map((step, index) => <Reveal key={step.title} delay={index * 0.08} className="group relative"><div className="flex size-10 items-center justify-center rounded-full border border-evergreen/20 bg-surface text-label text-evergreen transition-[background-color,border-color,color,transform] duration-[var(--duration-base)] group-hover:scale-110 group-hover:border-evergreen group-hover:bg-evergreen group-hover:text-white"><span>{step.number}</span></div>{index < approach.length - 1 ? <div aria-hidden="true" className="absolute left-10 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-evergreen/20 transition-colors duration-[var(--duration-base)] group-hover:bg-evergreen md:block" /> : null}<h3 className="mt-7 text-2xl font-semibold tracking-[-0.04em] transition-colors duration-[var(--duration-base)] group-hover:text-evergreen">{step.title}</h3><p className="mt-3 max-w-56 text-sm leading-relaxed text-ink-muted">{step.copy}</p></Reveal>)}</div></Section>;
}

export function InsightsPreview() {
  return <Section tone="quiet"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><Reveal><Heading eyebrow="Latest thinking" size="lg">Ideas with a longer horizon.</Heading></Reveal><Button href="/insights" variant="ghost" showIcon>View all insights</Button></div><div className="mt-16 grid gap-4 lg:grid-cols-3">{insights.map((insight, index) => <Reveal key={insight.title} delay={index * 0.08}><article className="group relative min-h-96 overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface-raised p-6 transition-[transform,box-shadow] duration-[var(--duration-slow)] hover:-translate-y-1 hover:shadow-elevation-md"><div aria-hidden="true" className={cn("absolute inset-0 bg-gradient-to-br opacity-70 transition-opacity duration-[var(--duration-slow)] group-hover:opacity-100", insight.accent)} /><div className="relative flex h-full min-h-84 flex-col justify-between"><div className="flex items-center justify-between"><span className="text-label text-evergreen">{insight.category}</span><ArrowRight aria-hidden="true" className="size-5 transition-transform duration-[var(--duration-base)] group-hover:translate-x-1" /></div><div><h3 className="max-w-sm text-3xl font-semibold tracking-[-0.05em]">{insight.title}</h3><p className="mt-5 text-sm text-ink-muted">{insight.readTime}</p></div></div></article></Reveal>)}</div></Section>;
}

export function FinalCta() {
  return <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-surface-inverse py-28 text-white"><AnimatedBackground tone="dark" animated /><div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" /><div className="relative mx-auto w-full max-w-[var(--container-max)] px-5 text-center sm:px-8 lg:px-10"><Reveal><Badge tone="light">The next chapter starts here</Badge><h2 className="mt-8 text-display text-balance">Let’s Build<br /><span className="text-lime">Something Extraordinary.</span></h2><p className="mx-auto mt-8 max-w-xl text-[length:var(--text-lead)] leading-relaxed text-white/65">The work ahead deserves a partner with the ambition to match it.</p><Button href="/contact" size="lg" showIcon className="mt-10 bg-lime text-ink hover:bg-mint">Schedule consultation</Button></Reveal></div></section>;
}
