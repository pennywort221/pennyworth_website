import type { Metadata } from "next";
import { getMetadata } from "@/lib/metadata";
import HomeClient from "./HomeClient";

export const metadata: Metadata = getMetadata("home");

export default function Home() {
  return <HomeClient />;
}
