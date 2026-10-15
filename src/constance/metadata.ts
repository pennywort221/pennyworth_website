export interface MetaData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

// Site configuration
export const SITE_CONFIG = {
  siteName: "Pennywort Clothing",
  siteUrl: "https://www.pennywort.in",
  defaultImage: "/og-default.svg",
  author: "Pennywort Clothing",
  locale: "en_US",
  type: "website",
} as const;

export const defaultMeta: MetaData = {
  title: "Pennywort Clothing | ISO Certified Workwear & Uniform Manufacturer India",
  description:
    "Pennywort Clothing is an ISO 9001:2015 certified workwear and uniform manufacturer in India. We supply flame-resistant FR coveralls, high-visibility vests, industrial work gloves, and custom corporate uniforms.",
  keywords:
    "workwear manufacturer India, uniform manufacturer India, industrial workwear supplier, safety workwear manufacturer, flame resistant clothing manufacturer, FR coveralls manufacturer, IFR coveralls supplier, custom uniform manufacturer, ISO certified uniform company, industrial gloves supplier",
  canonical: "/",
  openGraph: {
    title: "Pennywort Clothing | ISO Certified Workwear & Uniform Manufacturer India",
    description:
      "Pennywort Clothing is an ISO 9001:2015 certified workwear and uniform manufacturer in India. We supply flame-resistant FR coveralls, high-visibility vests, industrial work gloves, and custom corporate uniforms.",
    image: "/og-default.svg",
  },
};

export const pageMeta: Record<string, Partial<MetaData>> = {
  home: {
    title: "Pennywort Clothing | ISO Certified Workwear & Uniform Manufacturer India",
    description:
      "Pennywort Clothing manufactures certified industrial workwear, flame-resistant coveralls, high-visibility safety wear, corporate uniforms, and protective equipment for global industries.",
    keywords:
      "workwear manufacturer India, industrial workwear, corporate uniforms, safety apparel, FR coveralls, protective clothing manufacturer, high visibility workwear",
    canonical: "/",
  },
  "about-us": {
    title: "About Us | Industrial Workwear & Uniform Manufacturer | Pennywort Clothing",
    description:
      "Learn about Pennywort Clothing — our ISO 9001:2015 certified manufacturing mastery, three pillars of quality, core values, and commitment to protective industrial workwear.",
    keywords:
      "about Pennywort Clothing, workwear company profile, uniform manufacturer India, industrial apparel factory, safety clothing exporter, ISO 9001:2015 certified manufacturer",
    canonical: "/about-us",
  },
  products: {
    title: "Industrial Workwear & Protective Apparel Catalog | Pennywort Clothing",
    description:
      "Explore Pennywort Clothing's complete product line: Flame-Resistant FR coveralls, High-Visibility safety vests, corporate t-shirts, industrial work gloves, and medical scrubs.",
    keywords:
      "workwear catalog, flame resistant coveralls, high visibility safety vests, corporate t-shirts, industrial work gloves, medical scrubs, industrial protective clothing",
    canonical: "/products",
  },
  "contact-us": {
    title: "Contact Us | Get a Quote for Bulk Workwear & Uniforms | Pennywort Clothing",
    description:
      "Get in touch with Pennywort Clothing for bulk orders, custom uniform requirements, OEM manufacturing, and global industrial workwear supply inquiries.",
    keywords:
      "contact Pennywort Clothing, workwear manufacturer contact, bulk uniform supplier India, custom workwear inquiry, industrial clothing quote",
    canonical: "/contact-us",
  },
  blogs: {
    title: "Workwear & Safety Insights Blog | Pennywort Clothing",
    description:
      "Read the latest articles on industrial safety standards, flame-resistant fabric innovations, workwear compliance, and employee protective gear from Pennywort Clothing.",
    keywords:
      "workwear blog, industrial safety standards, flame resistant fabrics, OSHA compliance clothing, safety apparel guide, workwear manufacturing news",
    canonical: "/blogs",
  },

  // Product specific metadata
  "fr-coveralls": {
    title: "Flame-Resistant (FR) Coveralls & Workwear | Pennywort Clothing",
    description:
      "ISO certified flame-resistant (FR & IFR) coveralls engineered for oil & gas, welding, and petrochemical industries. 100% Cotton FR, Aramid, and Modacrylic blends.",
    keywords:
      "flame resistant coveralls, FR coveralls, IFR coveralls India, fire retardant boiler suits, oil and gas safety clothing, petrochemical workwear",
    canonical: "/product-details/fr-coveralls",
  },
  "safety-vests": {
    title: "High-Visibility Safety Vests & Reflective Workwear | Pennywort Clothing",
    description:
      "EN ISO 20471 compliant high-visibility safety vests with certified reflective tapes. Built for construction, roadwork, airport ground crew, and logistics.",
    keywords:
      "high visibility safety vests, reflective vests, hi-vis jackets, construction safety vest, road safety apparel, reflective workwear manufacturer",
    canonical: "/product-details/safety-vests",
  },
  "corporate-tshirts": {
    title: "Custom Corporate & Industrial T-Shirts | Pennywort Clothing",
    description:
      "Premium custom corporate t-shirts, polo shirts, and staff uniforms. Durable, breathable fabrics with custom embroidery and screen printing options.",
    keywords:
      "corporate t-shirts, custom polo uniforms, industrial t-shirts, company branded clothing, bulk corporate apparel India",
    canonical: "/product-details/corporate-tshirts",
  },
  "work-gloves": {
    title: "Heavy-Duty Industrial Work Gloves | Pennywort Clothing",
    description:
      "High-performance industrial work gloves engineered for cut resistance, chemical protection, mechanical safety, and extreme grip across heavy industries.",
    keywords:
      "industrial work gloves, cut resistant gloves, safety gloves manufacturer, mechanical gloves, leather work gloves supplier",
    canonical: "/product-details/work-gloves",
  },
  "medical-scrubs": {
    title: "Medical Scrubs & Healthcare Lab Coats | Pennywort Clothing",
    description:
      "Antimicrobial, fluid-resistant medical scrubs and doctor lab coats designed for healthcare workers, hospitals, clinics, and laboratory professionals.",
    keywords:
      "medical scrubs, healthcare uniforms, doctor lab coats, hospital scrubs supplier, antimicrobial medical apparel",
    canonical: "/product-details/medical-scrubs",
  },
};
