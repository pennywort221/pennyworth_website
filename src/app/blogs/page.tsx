import type { Metadata } from "next";
import { getMetadata } from "@/lib/metadata";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = getMetadata("blogs");

export default function BlogsPage() {
  return <BlogsClient />;
}
