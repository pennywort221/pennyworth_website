"use client";

import Image from "next/image";
import Menu from "@/assets/svg/menu.svg";
import { HeroSectionProps } from "@/types/products";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

function HeroSection({
  onMenuOpen,
  badge,
  title,
  logo,
  images,
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

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
        immediateRender: false,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.2,
      });

      /* IMAGES */
      gsap.from(".hero-image", {
        opacity: 0,
        y: (i: number) => (i % 2 === 0 ? -120 : 120),
        duration: 1.1,
        immediateRender: false,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.4,
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
      className="relative bg-primary text-secondary overflow-hidden"
    >
      <div className="hero-header absolute top-0 left-0 w-full flex items-center justify-between px-5 md:px-10 pt-6 z-20">
        <Link href="/" aria-label="Go to home">
          <Image
            src="/assets/images/design/penny-wort-logo.png"
            alt="Penny Wort Logo"
            width={160}
            height={40}
            priority
            className="cursor-pointer"
          />
        </Link>
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
      </div>

      <div className="grid md:grid-cols-2 md:items-center grid-cols-3">
        <div
          ref={textRef}
          className="w-full md:relative absolute md:bottom-0 bottom-20 px-5 z-10"
        >
          <p className="text-sm mb-3 md:text-body-lg text-body-md opacity-80">
            {splitWords(badge)}
          </p>

          <h1 className="md:heading-xl-semibold heading-sub-semibold leading-tight">
            {splitWords(title)}
          </h1>
        </div>

        <div className="w-full relative md:left-0 left-[30px] md:col-span-1 md:col-start-2 col-start-2 col-span-2 md:h-[100vh] h-[80vh] grid md:grid-cols-2 grid-cols-3 grid-rows-6">
          {images.map((img, i) => (
            <div key={i} className={`${img.className} hero-image`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
