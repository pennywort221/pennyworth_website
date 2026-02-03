"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import Menu from "@/assets/svg/menu.svg";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onMenuOpen: () => void;
}

function HeroSection({ onMenuOpen }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);

  useLayoutEffect(() => {
    if (!menuBtnRef.current) return;
    if (window.innerWidth >= 768) return;

    const showBtn = () => {
      gsap.to(menuBtnRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const hideBtn = () => {
      gsap.to(menuBtnRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const onScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        hideBtn();
      } else {
        showBtn();
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const words: any = textRef.current?.querySelectorAll(".hero-word");

      gsap.from(words, {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      /* IMAGES FROM BOTTOM */
      gsap.from(".hero-image", {
        opacity: 0,
        y: 120,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitWords = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="hero-word inline-block mr-2">
        {word}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      className="relative bg-primary overflow-hidden md:min-h-[70vh] md:h-auto h-[50vh]"
    >
      <button
        ref={menuBtnRef}
        onClick={onMenuOpen}
        className="
    fixed top-6 right-10 z-30
    w-12 h-12 rounded-full
    flex items-center justify-center

    /* DEFAULT (mobile) */
    bg-primary
    backdrop-blur-lg
    border border-white/20
    shadow-lg

    /* DESKTOP OVERRIDE */
    md:bg-primary
    md:backdrop-blur-none
    md:border-none
    md:shadow-none

    transition-all
  "
      >
        <Menu className="text-secondary" />
      </button>

      <div className="md:absolute inset-0 grid md:grid-cols-5 grid-cols-3">
        <div className="relative col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-8 grid-rows-4">
          <div className="relative z-30 col-span-6 row-span-1 flex items-start p-6 md:p-10">
            <a href="/" aria-label="Go to home" className="relative z-30">
              <Image
                src="/assets/images/design/penny-wort-logo.png"
                alt="Penny Wort Logo"
                width={160}
                height={40}
                loading="lazy"
                className="cursor-pointer"
              />
            </a>{" "}
          </div>
        </div>

        <div className="relative md:h-full h-[50vh] grid grid-cols-6 md:grid-cols-2 md:grid-rows-6 grid-rows-10 col-span-2 md:mr-16 gap-1">
          <div className="relative overflow-hidden col-span-3 col-start-3 md:col-span-1 md:row-span-6 row-span-6 hero-image">
            <Image
              src="/assets/images/design/product_hero_1.png"
              alt="Workwear"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative overflow-hidden md:row-start-6 md:row-end-3 row-start-11 row-end-5 col-start-6 col-span-10 md:col-start-2 md:col-span-1 hero-image">
            <Image
              src="/assets/images/design/product_hero_1.png"
              alt="Workwear"
              loading="lazy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12%] md:-bottom-[7%] z-10 md:min-h-[70vh] flex items-center">
        <div className="w-full text-start md:ml-10 ml-5">
          <h1
            ref={textRef}
            className="md:text-body-lg text-body-md text-secondary leading-tight"
          >
            {splitWords("Our Products")}
            <br />
            <span className="md:heading-xl-semibold heading-sub-hero block mt-2">
              {splitWords("Crafted for Comfort.")}
              <br />
              {splitWords("Designed for You.")}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
