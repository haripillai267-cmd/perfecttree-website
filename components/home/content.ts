import type { LucideIcon } from "lucide-react";
import { Activity, ArrowUpRight, BrainCircuit, FlaskConical, Globe2, HeartPulse, Rocket, Sparkles, Target } from "lucide-react";

export const expertise: { title: string; description: string; icon: LucideIcon; number: string }[] = [
  { title: "Healthcare", description: "Building resilient systems around better outcomes.", icon: HeartPulse, number: "01" },
  { title: "Biotechnology", description: "Turning scientific promise into scalable progress.", icon: FlaskConical, number: "02" },
  { title: "Strategy", description: "Making the few decisions that change everything.", icon: Target, number: "03" },
  { title: "Technology", description: "Creating the operating advantage of tomorrow.", icon: BrainCircuit, number: "04" },
  { title: "Digital Transformation", description: "Connecting ambition to modern execution.", icon: Sparkles, number: "05" },
  { title: "Market Expansion", description: "Opening new terrain with confidence and clarity.", icon: Rocket, number: "06" },
];

export const reasons = [
  { number: "01", title: "Business Strategy", copy: "We bring the signal into focus—so leaders can make consequential choices with conviction.", icon: Target },
  { number: "02", title: "Execution Excellence", copy: "Our work does not stop at the recommendation. We stay close to the moments that make change real.", icon: Activity },
  { number: "03", title: "Long-Term Partnership", copy: "The most valuable work compounds. We earn trust through a shared standard for what exceptional looks like.", icon: Globe2 },
];

export const impact = [
  { value: 250, suffix: "+", label: "Projects delivered" },
  { value: 40, suffix: "+", label: "Countries reached" },
  { value: 12, suffix: "+", label: "Industries shaped" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];

export const approach = [
  { number: "01", title: "Discover", copy: "Listen deeply. Find the friction worth solving." },
  { number: "02", title: "Strategize", copy: "Translate insight into a sharp, shared direction." },
  { number: "03", title: "Execute", copy: "Move with precision from decision to delivery." },
  { number: "04", title: "Scale", copy: "Build the capability that sustains the advantage." },
];

export const insights = [
  { category: "Perspective", title: "The new architecture of resilient growth", readTime: "6 min read", accent: "from-mint/80 via-mint/20 to-transparent" },
  { category: "Research", title: "When technology becomes a strategic operating system", readTime: "8 min read", accent: "from-lime/75 via-lime/20 to-transparent" },
  { category: "Field note", title: "The human side of transformation at scale", readTime: "5 min read", accent: "from-gold/50 via-gold/10 to-transparent" },
];

export { ArrowUpRight };
