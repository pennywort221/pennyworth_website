"use client";

import ValueCell from "@/components/common/ValueCell";
import { values } from "@/constance/aboutUs";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PartnerValuesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading
      gsap.from(".partner-heading", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Grid fill animation
      gsap.from(".partner-cell", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          each: 0.12,
          from: "start",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary">
      <div className="px-5 md:px-0">
        <div className="mb-10 md:px-10">
          <h2 className="partner-heading md:text-body-lg text-body-sm text-primary mb-2">
            What Our Partners Value Most
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-primary/30">
          {values.map((text, i) => (
            <div key={i} className="partner-cell">
              <ValueCell
                text={text}
                isRight={(i + 1) % 3 !== 0}
                isBottom={i < 3}
                isBottomMd={i < 6}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
