import type { Metadata } from "next";
import { getMetadata } from "@/lib/metadata";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = getMetadata("products");

export default function ProductsPage() {
  return <ProductsClient />;
}
