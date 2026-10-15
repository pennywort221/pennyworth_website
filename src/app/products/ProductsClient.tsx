"use client";

import Footer from "@/components/layout/Footer";
import NavigationMenu from "@/components/layout/NavigationMenu";
import HeroSection from "@/components/sections/products/HeroSection";
import SignatureProductSection from "@/components/sections/products/SignatureProductSection";
import React, { useState } from "react";

function ProductsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeroSection onMenuOpen={() => setIsMenuOpen(true)} />
      <SignatureProductSection />
      <Footer />
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default ProductsClient;
