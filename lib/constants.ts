export const siteConfig = {
  name: "PerfectTree",
  tagline: "Global Business Solutions",
  description:
    "Transforming businesses, accelerating growth, and delivering measurable results for organizations worldwide.",
  email: "hello@perfecttree.com",
  phone: "+1 (555) 123-4567",
  address: "1200 Commerce Drive, Suite 400, New York, NY 10001",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroContent = {
  headline: "Transforming Businesses.",
  subheadline: "Accelerating Growth.",
  closing: "Delivering Measurable Results.",
  description:
    "PerfectTree partners with ambitious organizations to unlock performance, scale operations, and build lasting competitive advantage across global markets.",
} as const;

export const stats = [
  { value: "250+", label: "Clients Served" },
  { value: "40+", label: "Countries" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Years Experience" },
] as const;

export const services = [
  {
    slug: "strategic-consulting",
    title: "Strategic Consulting",
    description:
      "Define clear direction with data-driven strategy, market analysis, and actionable roadmaps tailored to your business goals.",
    highlights: [
      "Market entry strategy",
      "Competitive positioning",
      "Long-term growth planning",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Modernize operations with technology, automation, and digital workflows that improve efficiency and customer experience.",
    highlights: [
      "Process digitization",
      "Platform modernization",
      "Data & analytics enablement",
    ],
  },
  {
    slug: "operations-excellence",
    title: "Operations Excellence",
    description:
      "Optimize supply chains, workflows, and organizational structures to reduce cost and increase operational resilience.",
    highlights: [
      "Supply chain optimization",
      "Performance management",
      "Lean process design",
    ],
  },
  {
    slug: "growth-expansion",
    title: "Growth & Market Expansion",
    description:
      "Enter new markets confidently with localized strategies, partnership models, and scalable go-to-market plans.",
    highlights: [
      "International expansion",
      "Revenue acceleration",
      "Partnership development",
    ],
  },
  {
    slug: "financial-advisory",
    title: "Financial Advisory",
    description:
      "Strengthen financial performance through forecasting, capital planning, and investment prioritization frameworks.",
    highlights: [
      "Financial modeling",
      "Cost optimization",
      "Investment analysis",
    ],
  },
  {
    slug: "change-management",
    title: "Change Management",
    description:
      "Drive adoption and alignment across teams with structured change programs that minimize disruption and maximize impact.",
    highlights: [
      "Stakeholder alignment",
      "Training & enablement",
      "Culture transformation",
    ],
  },
] as const;

export const values = [
  {
    title: "Integrity",
    description:
      "We operate with transparency and accountability in every engagement, building trust that lasts beyond the project.",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, delivering work that is rigorous, practical, and built to perform.",
  },
  {
    title: "Partnership",
    description:
      "We embed with your teams as true partners, aligning our success with yours from discovery through delivery.",
  },
  {
    title: "Impact",
    description:
      "We focus on outcomes that matter — measurable improvements in revenue, efficiency, and organizational capability.",
  },
] as const;

export const team = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Former McKinsey partner with 20 years leading global transformation programs across finance and technology.",
  },
  {
    name: "Marcus Williams",
    role: "Managing Director, Strategy",
    bio: "Specializes in market expansion and M&A integration for mid-market and enterprise clients worldwide.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Digital Practice",
    bio: "Leads digital modernization initiatives with deep expertise in cloud, data platforms, and product-led growth.",
  },
  {
    name: "David Okonkwo",
    role: "Director of Operations",
    bio: "Brings supply chain and operational excellence experience from Fortune 500 manufacturing and logistics firms.",
  },
] as const;

export const aboutContent = {
  mission:
    "PerfectTree exists to help organizations navigate complexity and achieve sustainable growth. We combine strategic insight with hands-on execution to deliver results our clients can measure and build upon.",
  vision:
    "To be the most trusted global partner for businesses seeking transformation — known for integrity, impact, and enduring relationships.",
  story:
    "Founded in 2010, PerfectTree began as a boutique strategy firm focused on helping growing companies scale with confidence. Over fifteen years, we have expanded into a global practice serving clients across six continents, while staying true to our founding belief: great consulting is about people, clarity, and measurable outcomes.",
} as const;
