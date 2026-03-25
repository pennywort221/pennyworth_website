import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "Pennywort Clothing";
const SITE_URL = "https://pennywortclothing.com"; 
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.svg`; 

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),


  title: {
    default: `${SITE_NAME} | ISO Certified Workwear & Uniform Manufacturer India`,
    template: `%s | ${SITE_NAME}`,
  },


  description:
    "Pennywort Clothing is an ISO 9001:2015 certified workwear and uniform manufacturer in India. We supply FR coveralls, safety workwear, industrial gloves, and custom uniforms for global industries.",


  keywords: [
    "workwear manufacturer India",
    "uniform manufacturer India",
    "industrial workwear supplier",
    "safety workwear manufacturer",
    "flame resistant clothing manufacturer",
    "FR coveralls manufacturer",
    "IFR coveralls supplier",
    "custom uniform manufacturer",
    "ISO certified uniform company",
    "industrial gloves supplier",
    "cut resistant gloves supplier",
    "impact resistant gloves manufacturer",
  ],


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },


  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,


  alternates: {
    canonical: "/",
  },

  
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ISO Certified Workwear & Uniform Manufacturer India`,
    description:
      "ISO 9001:2015 certified manufacturer of workwear, FR coveralls, safety gloves, and custom uniforms for construction, oil & gas, healthcare, hospitality, and corporates.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Workwear & Uniform Manufacturer`,
      },
    ],
    locale: "en_IN",
  },

  
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ISO Certified Workwear & Uniform Manufacturer India`,
    description:
      "ISO certified workwear and uniform manufacturer in India. FR coveralls, safety workwear, industrial gloves & custom uniforms for global supply.",
    images: [DEFAULT_OG_IMAGE],
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
