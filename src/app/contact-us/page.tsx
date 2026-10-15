import type { Metadata } from "next";
import { getMetadata } from "@/lib/metadata";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = getMetadata("contact-us");

export default function ContactUsPage() {
  return <ContactUsClient />;
}
