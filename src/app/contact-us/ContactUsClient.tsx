"use client";

import Footer from "@/components/layout/Footer";
import NavigationMenu from "@/components/layout/NavigationMenu";
import ContactSection from "@/components/sections/contact-us/ContactSection";
import HeroSection from "@/components/sections/contact-us/HeroSection";
import React, { useState } from "react";

function ContactUsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeroSection onMenuOpen={() => setIsMenuOpen(true)} />
      <ContactSection />
      <Footer />
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default ContactUsClient;
