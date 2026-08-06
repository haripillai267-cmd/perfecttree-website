import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { team } from "@/lib/constants";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function TeamSection() {
  return (
    <section className="py-20">
      <Container as="div">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet Our Team"
          description="Experienced practitioners who combine strategic depth with hands-on delivery."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <Card key={member.name} className="flex gap-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white"
                aria-hidden="true"
              >
                {getInitials(member.name)}
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy">{member.name}</h3>
                <p className="text-sm font-medium text-brand-green">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
