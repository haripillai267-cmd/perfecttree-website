import type { Metadata } from "next";
import { siteConfig } from "./constants";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;

  return {
    title: pageTitle,
    description: description ?? siteConfig.description,
    openGraph: {
      title: pageTitle,
      description: description ?? siteConfig.description,
      siteName: siteConfig.name,
      type: "website",
      url: path ? `https://perfecttree.com${path}` : "https://perfecttree.com",
    },
  };
}
