"use client";

import HeroSection from "@/components/sections/home/HeroSection";
import NavigationMenu from "@/components/layout/NavigationMenu";
import { useState, useEffect } from "react";
import StatsSection from "@/components/sections/home/StatsSection";
import AboutSection from "@/components/sections/home/AboutSection";
import LeadershipSection from "@/components/sections/home/LeadershipSection";
import ValuesSection from "@/components/sections/home/ValuesSection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import NewsAndEvents from "@/components/sections/home/NewsAndEvents";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import AboutMoreSection from "@/components/sections/home/AboutMoreSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import Footer from "@/components/layout/Footer";
import SignatureProductSection from "@/components/sections/home/SignatureProductsSection";
import WhyPennywortSection from "@/components/sections/home/WhyPennywortSection";
import IntroLoader from "@/components/layout/IntroLoader";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);
  const [shouldShowLoader, setShouldShowLoader] = useState(true);


  //this is not a right way to set the intro loader
  // fix later
  useEffect(() => {
    const navigated = window.performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;

    const isReload = navigated?.type === "reload";
    const isBackForward = navigated?.type === "back_forward";

    const hasSeenLoader = sessionStorage.getItem("loaderSeen");

    if (isReload || !hasSeenLoader) {
      setShouldShowLoader(true);
      sessionStorage.setItem("loaderSeen", "true");
    } else if (isBackForward || hasSeenLoader) {
      setLoadingDone(true);
      setShouldShowLoader(false);
    }
  }, []);

  const handleLoaderFinish = () => {
    setLoadingDone(true);
  };

  return (
    <>
      {shouldShowLoader && !loadingDone && (
        <IntroLoader onFinish={handleLoaderFinish} />
      )}
      <main id="home-content" className="min-h-screen">
        <HeroSection
          onMenuOpen={() => setIsMenuOpen(true)}
          ready={loadingDone}
        />
        <StatsSection />
        <AboutSection />
        <LeadershipSection />
        <SignatureProductSection />
        <WhyPennywortSection />
        <NewsAndEvents />
        <ValuesSection />
        <IndustriesSection />
        <FeaturesSection />
        <AboutMoreSection />
        <TestimonialSection />
        <Footer />
        <NavigationMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </main>
    </>
  );
};

export default Home;
