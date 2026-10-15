import type { Metadata } from "next";
import { getMetadata } from "@/lib/metadata";
import ProductDetailClient from "./ProductDetailClient";

type Props = {
  params: Promise<{ product: string }> | { product: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  return getMetadata(resolvedParams.product);
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}
