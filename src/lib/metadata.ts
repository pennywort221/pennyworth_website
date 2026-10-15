import type { Metadata } from "next";
import {
  defaultMeta,
  pageMeta,
  SITE_CONFIG,
  type MetaData,
} from "@/constance/metadata";

// Utility function to merge meta data
export function getMeta(
  pageKey?: string,
  customMeta?: Partial<MetaData>
): MetaData {
  const baseMeta =
    pageKey && pageMeta[pageKey]
      ? { ...defaultMeta, ...pageMeta[pageKey] }
      : defaultMeta;

  if (customMeta) {
    return {
      ...baseMeta,
      ...customMeta,
      openGraph: {
        ...baseMeta.openGraph,
        ...customMeta.openGraph,
      },
    };
  }

  return baseMeta;
}

// Generate Next.js compliant metadata
export function getMetadata(
  pageKey?: string,
  customMeta?: Partial<MetaData>
): Metadata {
  const meta = getMeta(pageKey, customMeta);

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.author,
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    alternates: {
      canonical: meta.canonical,
    },
    openGraph: {
      title: meta.openGraph?.title || meta.title,
      description: meta.openGraph?.description || meta.description,
      url: meta.canonical,
      siteName: SITE_CONFIG.siteName,
      images: [
        {
          url: meta.openGraph?.image || SITE_CONFIG.defaultImage,
          width: 1200,
          height: 630,
          alt: meta.openGraph?.title || meta.title,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.openGraph?.title || meta.title,
      description: meta.openGraph?.description || meta.description,
      images: [meta.openGraph?.image || SITE_CONFIG.defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "Industrial Workwear & Uniforms",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}
