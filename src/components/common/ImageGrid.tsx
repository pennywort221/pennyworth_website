"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ImageGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([img1Ref.current, img2Ref.current, img3Ref.current], {
        opacity: 0,
      });

      gsap.set(img1Ref.current, { y: 40 });
      gsap.set(img2Ref.current, { x: 40 });
      gsap.set(img3Ref.current, { y: 60 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(img1Ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      })
        .to(
          img2Ref.current,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .to(
          img3Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[600px]">
      <div
        ref={img1Ref}
        className="absolute top-0 left-0 w-[38%] h-[28%] overflow-hidden z-10"
      >
        <Image
          src="/assets/images/design/about_2.png"
          alt="Professional suits on rack"
          fill
          className="object-cover pb-8"
          loading="lazy"
        />
      </div>

      <div
        ref={img2Ref}
        className="absolute top-[-2%] right-0 w-[52%] h-[45%] overflow-hidden z-20 border-8 border-r-0 border-secondary"
      >
        <Image
          src="/assets/images/design/about_4.png"
          alt="Premium navy blazer collection"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div
        ref={img3Ref}
        className="absolute top-[24%] left-0 w-full h-[52%] overflow-hidden z-10"
      >
        <Image
          src="/assets/images/design/about_5.png"
          alt="Premium striped dress shirts"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
