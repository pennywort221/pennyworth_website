"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { industries } from "@/constance/home";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const activeImage =
    hoveredIndex !== null
      ? industries[hoveredIndex].image
      : industries[0].image;

  const activeDescription =
    hoveredIndex !== null
      ? industries[hoveredIndex].discription
      : industries[0].discription;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".industry-item");

      gsap.set(items, {
        opacity: 0,
        y: 20,
      });

      gsap.to(items, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-primary text-secondary md:px-10 px-5 py-16 md:mt-32 mt-20"
    >
      <div className="pt-4 mb-8">
        <h2 className="md:text-body-lg text-body-sm text-secondary mb-2">
          Trusted by Leading Sectors Across India and Beyond
        </h2>
        <hr className="border-t border-main border-muted-foreground/50" />
      </div>

      <div className="grid md:grid-cols-3 items-start gap-10">
        <div className="relative w-full max-w-sm">
          <div className="relative bg-primary h-[520px]">
            <Image
              key={activeImage}
              src={activeImage}
              alt="Industry Preview"
              fill
              className="object-cover transition-opacity duration-300 ease-out"
              loading="lazy"
            />
          </div>

          <p className="text-body-md text-body-sm text-muted-foreground mt-10">
            {activeDescription}
          </p>
        </div>
        <div className="w-full md:col-span-2">
          <ul>
            {industries.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === index;

              return (
                <li
                  key={index}
                  className={`industry-item
                    flex items-center gap-4 px-5 py-5 cursor-pointer
                    border-b border-white/20
                    transition-all duration-200
                    ${isHovered ? "bg-secondary text-primary/80" : "text-secondary"}
                  `}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Icon
                    className={`transition-colors ${
                      isHovered ? "text-primary" : "text-secondary"
                    }`}
                  />
                  <span className="md:heading-xs heading-caption font-light">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
