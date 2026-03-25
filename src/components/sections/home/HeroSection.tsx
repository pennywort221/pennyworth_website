"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ArrowRight from "@/assets/svg/arrow.svg";
import ArrowDown from "@/assets/svg/arrow_down.svg";
import Menu from "@/assets/svg/menu.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  onMenuOpen: () => void;
  ready: boolean;
}

const HeroSection = ({ onMenuOpen, ready }: HeroSectionProps) => {
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImagesRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);

  useLayoutEffect(() => {
    if (!menuBtnRef.current) return;
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

  useLayoutEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      const words = headingRef.current?.querySelectorAll(".word");
      if (words) {
        gsap.from(words, {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        });
      }
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.9,
      });
    });

    return () => ctx.revert();
  }, [ready]);

  return (
    <section className="relative bg-primary min-h-screen overflow-hidden">
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

      <div className="md:absolute inset-0 grid grid-cols-3 h-screen md:min-h-screen">
        <div className="relative col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-12 md:grid-rows-4 grid-rows-6">
          <div className="relative col-span-6 row-span-1 flex items-start p-6 md:p-10">
            <div id="header-logo" className="transition-opacity duration-300">
              <Link href="/" aria-label="Go to home">
                <Image
                  src="/assets/images/design/penny-wort-logo.png"
                  alt="Penny Wort Logo"
                  width={160}
                  height={40}
                  loading="lazy"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>

          <div className="col-span-6 row-span-1" />
          <div className="col-span-6 row-span-1" />
          <div
            ref={leftImageRef}
            className="relative col-span-4 md:row-start-4 row-start-6 row-span-1 overflow-hidden md:ml-10 ml-4 md:w-auto w-[240px]"
          >
            <Image
              src="/assets/images/design/home_2.png"
              loading="lazy"
              alt="Workwear background"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div
          ref={rightImagesRef}
          className="relative grid grid-cols-6 md:grid-cols-2 md:grid-rows-6 grid-rows-10 col-span-2 md:col-span-1 gap-1"
        >
          <div className="relative overflow-hidden col-span-4 sm:col-span-2 sm:col-start-3 md:col-span-1 md:row-span-5 row-span-4">
            <Image
              src="/assets/images/design/product_hero_1.png"
              loading="lazy"
              alt="Workwear"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative overflow-hidden col-start-5 col-span-2 md:col-start-auto md:col-span-1 md:row-span-6 row-span-5">
            <Image
              src="/assets/images/design/home_1.png"
              loading="lazy"
              alt="Workwear"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {ready && (
        <div className="md:relative absolute md:bottom-auto bottom-[23%] z-10 md:min-h-screen flex items-center">
          <div className="w-full text-center">
            <h1
              ref={headingRef}
              className="md:heading-xl-thin heading-sub-hero text-start text-secondary leading-tight md:ml-10 ml-5"
            >
              {/* {"Built for Work. Designed for Life".split(" ").map((word, i) => (
                <span key={i} className="word inline-block mr-2">
                  {word}
                </span>
              ))} */}
              <br />
              <span className="md:heading-xl-semibold">
                {"Industrial-Grade Quality,Lifestyle-Inspired Design,"
                  .split(",")
                  .map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <>
                          .
                          <br />
                        </>
                      )}
                    </span>
                  ))}
              </span>
            </h1>

            <div ref={contentRef}>
              <div className="w-full flex justify-center">
                <p className="md:text-body-lg text-body-sm text-secondary mb-8  mt-8 text-left ml-5">
                  {/* India&apos;s Biggest Manufacturer of Flame-Resistant Workwear
                   */}
                   India’s Biggest Contract Manufacturer- Since 2014
                  {/* <br className="hidden md:block" />& Custom Uniforms{" "}
                  <span className="text-secondary font-medium">Since 2014</span> */}
                </p>
              </div>

              <div className="flex justify-center gap-3 md:gap-4">
                <Link href="/contact-us">
                  <Button variant="heroPrimary" size="lg">
                    Talk to Us
                    <ArrowRight />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="destructive"
                    size="lg"
                    className="group bg-secondary text-primary text-m-sm px-4 py-2 md:text-base md:px-6 md:py-3"
                  >
                    Explore Our Products
                    <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-6 right-6 z-20 rounded-full border border-secondary md:border-primary">
        <a href="#about" className="w-12 h-12 flex items-center justify-center">
          <ArrowDown className="animate-bounce text-secondary md:text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
