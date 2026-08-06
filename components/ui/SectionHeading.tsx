import { Heading } from "@/components/ui/Heading";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "center", light = false }: SectionHeadingProps) {
  return <Heading eyebrow={eyebrow} description={description} align={align} tone={light ? "light" : "default"} className="mb-12">{title}</Heading>;
}
