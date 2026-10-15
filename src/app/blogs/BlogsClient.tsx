"use client";

import Footer from "@/components/layout/Footer";
import NavigationMenu from "@/components/layout/NavigationMenu";
import HeroSection from "@/components/sections/blogs/HeroSection";
import RecentBlogs from "@/components/sections/blogs/RecentBlogsSections";
import StatsSection from "@/components/sections/blogs/StatsSection";
import React, { useState } from "react";

function BlogsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeroSection onMenuOpen={() => setIsMenuOpen(true)} />
      <StatsSection />
      <RecentBlogs />
      <Footer />
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default BlogsClient;
