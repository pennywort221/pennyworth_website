import type { Metadata } from "next";
import { getMetadata } from "@/lib/metadata";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = getMetadata("about-us");

export default function AboutUsPage() {
  return <AboutUsClient />;
}
