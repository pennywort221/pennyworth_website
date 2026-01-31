"use client";

import Footer from "@/components/layout/Footer";
import NavigationMenu from "@/components/layout/NavigationMenu";
import CertificationsSection from "@/components/sections/about-us/CertificationsSection";
import CoreValuesSection from "@/components/sections/about-us/CoreValuesSection";
import HeroSection from "@/components/sections/about-us/HeroSection";
import ManufacturingMasterySection from "@/components/sections/about-us/ManufacturingMasterySection";
import MissionVisionSection from "@/components/sections/about-us/MissionVisionSection";
import PartnerValuesSection from "@/components/sections/about-us/PartnerValuesSection";
import PartnerWithUsSection from "@/components/sections/about-us/PartnerWithUsSection";
import ThreePillarsSection from "@/components/sections/about-us/ThreePillarsSection";
import WhatSetsApartSection from "@/components/sections/about-us/WhatSetsApartSection";
import WhyCorporateLeadersSection from "@/components/sections/about-us/WhyLeadersSection";
import LeadershipSection from "@/components/sections/home/LeadershipSection";
import { useState } from "react";

const AboutUsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="overflow-x-hidden">
      <HeroSection onMenuOpen={() => setIsMenuOpen(true)} />
      <ManufacturingMasterySection />
      <ThreePillarsSection />
      <MissionVisionSection />
      <WhatSetsApartSection />
      <CertificationsSection />
      <LeadershipSection />
      <CoreValuesSection />
      <WhyCorporateLeadersSection />
      <PartnerValuesSection />
      <PartnerWithUsSection />
      <Footer />
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </main>
  );
};

export default AboutUsPage;
