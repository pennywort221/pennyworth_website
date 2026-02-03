"use client";

import Footer from "@/components/layout/Footer";
import NavigationMenu from "@/components/layout/NavigationMenu";
import HeroSection from "@/components/sections/product-details/HeroSection";
import { PRODUCT_CONFIGS, ProductSlug } from "@/config/products/productConfigs";
import { PRODUCT_SECTIONS } from "@/config/products/productSectionRegistry";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { client } from "@/sanity/client";
import { productBySlugQuery } from "@/sanity/queries";
import { mapSanityProductToConfig } from "@/lib/productAdapter";
import { V4MAPPED } from "dns";

function Product() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hardcoded config
  const { product } = useParams<{ product: ProductSlug }>();
  const hardConfig = PRODUCT_CONFIGS[product];

  // CMS config
  const [cmsConfig, setCmsConfig] = useState<any | null>(null);
  const [cmsChecked, setCmsChecked] = useState(false);
  
  useEffect(() => {
    if (!product) return;

    client.fetch(productBySlugQuery, { slug: product }).then((data) => {
      if (data) {
        setCmsConfig(mapSanityProductToConfig(data));
      }
      setCmsChecked(true);
    });
  }, [product]);

  
  if (cmsChecked && !cmsConfig && !hardConfig) {
    return <div className="p-10">Product not found.</div>;
  }

  if (!cmsChecked) return null;
  const finalHero = cmsConfig?.hero ?? hardConfig?.hero;

  const finalSections = [
    ...(cmsConfig?.sections ?? []), 
    ...(hardConfig?.sections ?? []).filter(
      (s: any) =>
        s.type !== "productAbout" &&
        s.type !== "overview"
    ),
  ];

  return (
    <>
      <HeroSection {...finalHero} onMenuOpen={() => setIsMenuOpen(true)} />

      {finalSections.map((section: any, index: number) => {
        const SectionComponent = PRODUCT_SECTIONS[section.type];
        if (!SectionComponent) return null;
        return <SectionComponent key={index} {...section.props} />;
      })}

      <Footer />

      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Product;
