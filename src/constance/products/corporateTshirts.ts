import { ProductAboutConfig } from "@/types/products";

export const heroTShirtsConfig = {
  badge: "Corporate T-Shirts",

  title: "Custom Corporate T-Shirts - Premium Quality, Unlimited Customization",

  logo: {
    src: "/assets/images/design/penny-wort-logo.png",
    alt: "Pennywort Logo",
  },

  images: [
    {
      src: "/assets/images/design/tShirts/tshirt_1.png",
      alt: "Workwear Model Blue",
      className:
        "relative md:col-start-1 row-start-1 row-end-4 md:col-span-1 col-span-2 md:row-start-7 md:row-end-2",
    },
    {
      src: "/assets/images/design/tShirts/tshirt_2.png",
      alt: "Workwear Model Orange",
      className:
        "relative md:col-start-2 col-start-3 row-start-7 row-end-3 md:row-start-1 md:row-end-6",
    },
  ],
};

export const TShirtsAbout: ProductAboutConfig = {
  images: [
    "/assets/images/design/product_1.png",
    "/assets/images/design/product_2.png",
    "/assets/images/design/product_3.png",
    "/assets/images/design/product_4.png",
  ],
  title: "Be Seen. Stay Safe. Work Confidently.",
  description:
    "In construction zones, highways, warehouses, and industrial sites—visibility isn't optional, it's essential. Pennywort's safety vests combine compliance-certified high-visibility materials with durable construction, ensuring your team stays visible and protected.",
};

export const printingOptionsSection = {
  heading: "Customization Options",
  features: [
    {
      title: "Screen Printing (Most Popular)",
      points: [
        "Best for large quantities, bold designs",
        "Up to 6 colors per design",
        "Print size up to 14” × 16”",
        "Excellent wash resistance",
        "Most economical for bulk orders",
      ],
    },
    {
      title: "Heat Transfer Printing",
      points: [
        "Photo-realistic images",
        "Full-color capability",
        "Quick turnaround",
        "Ideal for complex designs",
      ],
    },
    {
      title: "Vinyl Transfer",
      points: [
        "Best for names & numbers",
        "Excellent durability",
        "Premium finish",
        "Ideal for employee IDs",
      ],
    },
    {
      title: "Direct-to-Garment (DTG) Printing",
      points: [
        "Complex artwork support",
        "Photo-quality prints",
        "Eco-friendly inks",
        "No minimum order quantity",
      ],
    },
    {
      title: "Sublimation Printing",
      points: [
        "Polyester fabrics only",
        "Vibrant permanent colors",
        "All-over print capability",
        "No added fabric weight",
      ],
    },
  ],
  image: {
    src: "/assets/images/design/black-tshirt.png",
    alt: "Printed t-shirt",
    colSpan: 1,
  },
};

export const steps = [
  { id: "01", title: "Choose your t-shirt style and fabric" },
  {
    id: "02",
    title: "Select colors and sizes",
    subtitle: "(provide size breakdown)",
  },
  { id: "03", title: "Submit your design or work with our team" },
  { id: "04", title: "Approve digital mockup" },
  {
    id: "05",
    title: "Order sample for quality verification",
    subtitle: "(recommended)",
  },
  {
    id: "06",
    title: "Confirm order with 100% advance payment",
  },
  { id: "07", title: "Receive your custom t-shirts in 25–30 days" },
];

export const volumeDiscounts = [
  "100–500 pieces: Base pricing",
  "500–1,000 pieces: 5% discount",
  "1,000–2,500 pieces: 12% discount",
  "2,500+ pieces: 15% discount + free design services",
];

export const leadTimes = [
  "Standard orders: 25–30 days",
  "With printing only: 25 days",
  "With embroidery: 30–35 days",
  "Rush orders: 20 days (15% premium)",
];

export const fitStyleData = {
  title: "Fit Styles",
  fitStyles: [
    "Regular Fit (classic, comfortable)",
    "Slim Fit (modern, tapered)",
    "Oversized Fit (contemporary, relaxed)",
    "Athletic Fit (active wear styling)",
  ],
  images: [
    {
      src: "/assets/images/design/fit_style_t.png",
      alt: "Neck label detail",
    },
    {
      src: "/assets/images/design/fit_style_t_2.png",
      alt: "Model wearing t-shirt",
    },
  ],
};
export const fitStyleGlove = {
  title: "Bulk Order Benefits",
  fitStyles: [
    "100-500 pairs: Standard pricing",
    "500-1,000 pairs: 8% discount",
    "1,000-2,500 pairs: 12% discount",
    "2,500+ pairs: 15% discount",
  ],
  images: [
    {
      src: "/assets/images/design/glove_2.png",
      alt: "Neck label detail",
    },
    {
      src: "/assets/images/design/glove_1.png",
      alt: "Model wearing t-shirt",
    },
  ],
};
export const fitStyleScrub = {
  title: "Color-Coding Benefits",
  fitStyles: [
    "Department identification",
    "Role distinction (nurses, techs, students)",
    "Enhanced professional organization",
    "Custom Colors: Available for orders 500+ pieces (Pantone matching)",
  ],
  images: [
    {
      src: "/assets/images/design/scrub_1.png",
      alt: "Neck label detail",
    },
    {
      src: "/assets/images/design/scrub_2.png",
      alt: "Model wearing t-shirt",
    },
  ],
};

export const designPlacementGuide = {
  heading: "Design & Placement Guide",
  columns: [
    {
      title: "Popular Placement Options",
      items: [
        "Left Chest: 3–4 inch logo (most common)",
        "Full Front: Large design up to 12” × 14”",
        "Oversized Front: Modern, bold statement (14” × 16”)",
        "Back: Full back prints, large logos, slogans",
        "Sleeve: Small logo, text, or graphics",
        "Pocket: Subtle branding (pocket t-shirts)",
        "Collar/Neck: Inside tag printing for brand identity",
      ],
    },
    {
      title: "Design Tips",
      items: [
        "Vector files (AI, EPS, PDF) preferred for best quality",
        "High-resolution images (300 DPI minimum) for photo printing",
        "Pantone color matching available",
        "Free design consultation for orders 500+ pieces",
      ],
    },
  ],
  image: {
    src: "/assets/images/design/design-placement.png",
    alt: "Design placement example",
  },
};

export const customizationOptions = {
  title: "Embroidery Services",
  sections: [
    {
      title: "Standard Embroidery",
      items: [
        'Logo size: Up to 4" x 4"',
        "Thread colors: Unlimited",
        "Premium, professional finish",
        "Excellent durability (100+ washes)",
        "Locations: Left chest, right chest, sleeve, back",
      ],
    },
    {
      title: "3D Puff Embroidery",
      items: [
        "Raised, dimensional logo effect",
        "Premium brand presentation",
        "Eye-catching texture",
        "Ideal for caps and premium apparel",
      ],
    },
    {
      title: "Appliqué Embroidery",
      items: [
        "Fabric patches with embroidered borders",
        "Best for large logos or intricate designs",
        "Adds texture and visual interest",
      ],
    },
  ],
};
