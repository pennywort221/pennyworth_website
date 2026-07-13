import Linkedin from "@/assets/svg/LinkedIn.svg";
import Instagram from "@/assets/svg/Instagram.svg";
import Facebook from "@/assets/svg/Facebook.svg";
import Youtube from "@/assets/svg/youtube.svg";
import x from "@/assets/svg/X.svg";

import GasPump from "@/assets/svg/GasPump.svg";
import Heartbeat from "@/assets/svg/Heartbeat.svg";
import BuildingOffice from "@/assets/svg/BuildingOffice.svg";
import FactoryTS from "@/assets/svg/Factory.svg";
import PipeWrench from "@/assets/svg/PipeWrench.svg";
import Island from "@/assets/svg/Island.svg";
import TruckTS from "@/assets/svg/Truck.svg";

import { ShieldCheck, Factory, Boxes, Palette, Leaf } from "lucide-react";

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact us", href: "/contact-us" },
];

export const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/pennyworthindia/?originalSubdomain=in",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/pennywort_limited/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/pennyworthclothing/",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCRZ5Eg0COuFubdiVovS2dAQ",
    label: "YouTube",
  },
  { icon: x, href: "https://x.com/PennyworthC", label: "Twitter" },
];

export const values = [
  { id: 0, heading: "ISO 9001", subHeading: "2015 Certified" },
  { id: 1, heading: "10+ Years", subHeading: "Experience" },
  { id: 2, heading: "100+", subHeading: "Corporate Clients" },
  { id: 3, heading: "Worldwide", subHeading: "Shipping" },
  { id: 4, heading: "500", subHeading: "Pieces Min. Order" },
];

export const features = [
  {
    icon: ShieldCheck,
    title: "Certified Safety Standards",
    description: "Adhering to EN ISO 11612, NFPA 2112, EN 1149 and other recognized international standards.",
  },
  {
    icon: Factory,
    title: "Competitive Factory Pricing",
    description: "Direct manufacturer rates with no middlemen",
  },
  {
    icon: Boxes,
    title: "Seamless Bulk Production",
    description: "500 to 550,000+ pieces delivered on time",
  },
  {
    icon: Palette,
    title: "Custom Design Excellence",
    description:
      "Full branding, embroidery, and color matching and panton Dying",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    description: "Eco-friendly materials and ethical manufacturing",
  },
];

export const industries = [
  {
    label: "Oil, Gas & Energy",
    icon: GasPump,
    image: "/assets/images/design/industries_1.png",
    discription: "FR/IFR coveralls, arc-rated clothing, flame-resistant gloves",
  },
  {
    label: "Healthcare & Medical",
    icon: Heartbeat,
    image: "/assets/images/design/industries_2.png",
    discription: "Scrubs, lab coats, patient gowns, medical uniforms",
  },
  {
    label: "Corporate & Retail",
    icon: BuildingOffice,
    image: "/assets/images/design/industries_3.png",
    discription:
      "Branded t-shirts, polo shirts, office uniforms, event apparel",
  },
  {
    label: "Manufacturing & Industrial",
    icon: FactoryTS,
    image: "/assets/images/design/industries_4.png",
    discription: "Coveralls, safety gloves, protective workwear, boiler suits",
  },
  {
    label: "Construction & Infrastructure",
    icon: PipeWrench,
    image: "/assets/images/design/industries_5.png",
    discription: "Safety vests, coveralls, work gloves, high-vis jackets",
  },
  {
    label: "Hospitality & Tourism",
    icon: Island,
    image: "/assets/images/design/industries_6.png",
    discription: "Chef uniforms, housekeeping attire, front-desk apparel",
  },
  {
    label: "Logistics & Warehousing",
    icon: TruckTS,
    image: "/assets/images/design/industries_7.png",
    discription: "Hi-vis vests, cargo pants, durable workwear",
  },
];

export const sustainabilityFeaturesData = [
  {
    title: "Eco-Friendly Fabrics",
    description: "Organic cotton, recycled polyester, Lenzing FR, viscose",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Ethical Manufacturing",
    description: "Fair wages, safe working conditions, zero child labor",
    bgColor: "bg-[#f3f3f3]",
    textColor: "text-primary",
  },
  {
    title: "Water Conservation",
    description: "Advanced dyeing processes that reduce water usage by 40%",
    bgColor: "bg-[#f3f3f3]",
    textColor: "text-primary",
  },
  {
    title: "Carbon Footprint Reduction",
    description: "Energy-efficient machinery and solar-powered facilities",
    bgColor: "bg-[#f3f3f3]",
    textColor: "text-primary",
  },
];

export const carouselItems = [
  {
    id: 1,
    image: "/assets/images/design/news_1.png",
    title: "Pennywort Meeting in Japan",
    description: "Advanced dyeing processes that reduce water usage by 40%",
  },
  {
    id: 2,
    image: "/assets/images/design/news_2.png",
    title: "Global Strategy Meet",
    description: "Leadership discussion on sustainable manufacturing",
  },
  {
    id: 3,
    image: "/assets/images/design/news_3.png",
    title: "Tech Collaboration",
    description: "Digital transformation with global partners",
  },
  {
    id: 4,
    image: "/assets/images/design/news_4.png",
    title: "Business Review",
    description: "Quarterly growth and expansion planning",
  },
  {
    id: 5,
    image: "/assets/images/design/news_4.png",
    title: "Business Review",
    description: "Quarterly growth and expansion planning",
  },
];

export const testimonials = [
  {
    quote:
      "Pennywort delivered 35,000 IFR coveralls for our refinery project—on time, on budget, and exceeding our safety standards.",
    author: "Safety Manager",
    company: "Major Petrochemical Corporation",
  },
  {
    quote:
      "We've ordered over multiple years. Pennywort’s quality, vibrant colors, and customer support are exceptional.",
    author: "Procurement Head",
    company: "Multi-Specialty Industry",
  },
  {
    quote:
      "Their attention to detail and compliance standards make them a trusted long-term partner.",
    author: "Operations Lead",
    company: "Manufacturing Group",
  },
];

export const footerLinksData = [
  {
    label: "Request a Quote",
    description: "Get custom pricing for your bulk order",
    url: "/contact-us",
  },
  {
    label: "Order Samples",
    description: "Test quality before bulk order",
    url: "/contact-us",
  },

  {
    label: "Design Your Uniform",
    description: "Use our online customization tool",
    url: "/contact-us",
  },
  {
    label: "Download Catalog",
    description: "Browse our complete product range",
    url: "/assets/files/COVERALL_BROCHURE.pdf",
    download: true,
  },
];

export const navigationLinks = [
  { label: "HOME", url: "/" },
  { label: "ABOUT US", url: "/about-us" },
  { label: "BLOG", url: "/blogs" },
  { label: "CONTACT US", url: "/contact-us" },
];

export const visitUsData = [
  {
    title: "Address",
    lines: [
      "2nd Floor, AIM Shopping Complex",
      "Vivekananda Road, Opposite Police Station",
      "Adimaly - 685561, Idukki District",
      "Kerala, India",
    ],
  },
  {
    title: "Contact",
    lines: [
      "+91-9446666055 | +91-9447544448",
      "office@pennywort.in",
      "www.pennywort.in",
    ],
  },
  {
    title: "Business Hours",
    lines: ["Monday – Friday: 9:00 AM – 6:00 PM", "Sat – Sunday: Closed"],
    highlightLast: true,
  },
];
