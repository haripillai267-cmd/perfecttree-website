import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/constants";

const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    label: "Office",
    value: siteConfig.address,
  },
] as const;

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-xl font-semibold text-brand-navy">
          Contact Information
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Reach out directly or fill out the form and we&apos;ll respond within
          one business day.
        </p>
        <ul className="mt-6 space-y-4">
          {contactItems.map((item) => (
            <li key={item.label}>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                {item.label}
              </p>
              {"href" in item && item.href ? (
                <a
                  href={item.href}
                  className="mt-1 block text-sm text-slate-700 transition-colors hover:text-brand-green"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-sm text-slate-700">{item.value}</p>
              )}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="bg-brand-navy text-white">
        <h3 className="font-semibold">Business Hours</h3>
        <ul className="mt-3 space-y-1 text-sm text-slate-300">
          <li>Monday – Friday: 9:00 AM – 6:00 PM EST</li>
          <li>Saturday – Sunday: Closed</li>
        </ul>
      </Card>
    </div>
  );
}
