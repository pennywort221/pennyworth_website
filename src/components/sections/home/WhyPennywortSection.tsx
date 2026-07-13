"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CertLogo } from "../../common/CertLogo";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  "/assets/images/logo/EGAC.png",
  "/assets/images/logo/QRO.png",
  "/assets/images/logo/mark.png",
  "/assets/images/logo/ISO.png",
  "/assets/images/logo/QVA.png",
  "/assets/images/logo/GMP.png",
  "/assets/images/logo/IAF.png",
  "/assets/images/logo/CE.png",
  "/assets/images/logo/QVA_2.png",
];
export default function WhyPennywortSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const logosRef = useRef<(HTMLDivElement | null)[]>([]);
  const globeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading */
      gsap.from(".why-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      /* Text blocks */
      gsap.from(textRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      /* Certification title */
      gsap.from(".cert-title", {
        scrollTrigger: {
          trigger: ".cert-title",
          start: "top 85%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.out",
      });

      /* Globe */
      gsap.from(globeRef.current, {
        scrollTrigger: {
          trigger: globeRef.current,
          start: "top 85%",
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
      });

      /* Logos */
      gsap.from(logosRef.current, {
        scrollTrigger: {
          trigger: globeRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-secondary text-primary md:px-10 px-5 mt-10 md:mt-24"
    >
      <div>
        <div className="why-heading">
          <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
            Why Pennywort Leads the Industry
          </h2>
          <hr className="border-t border-main border-muted-foreground/50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:text-body-md text-body-sm leading-relaxed text-primary mt-10">
          <div className="space-y-4">
            <p ref={(el: any) => (textRefs.current[0] = el)}>
              The strength of India’s production sector has been on advantage for Pennywort Limited to connect with global businesses around the world.
            </p>

            <p ref={(el: any) => (textRefs.current[1] = el)}>
              We collaborate with the largest and most trusted companies in India to deliver high quality products to life. Over the years, we have built strong, long term relationships with top manufacturers across the country which enabled us to access India’s production capacity.
            </p>
          </div>

          <div className="space-y-4">
            <p ref={(el: any) => (textRefs.current[2] = el)}>
              We manufacture and deliver across diverse product categories of every scale consistently with our national presence and the trust, transparency and strong partnerships were built upon it. Connections with leading companies around the globe makes Pennywort Limited a reliable partner for businesses around the globe.
            </p>

            {/* <p ref={(el: any) => (textRefs.current[3] = el)}>
              Our reputation for trust, transparency, and deep connections with
              high-end companies worldwide makes Pennywort Limited a preferred
              partner for businesses seeking quality production and seamless
              delivery.
            </p> */}
          </div>
        </div>
        <div className="cert-title flex items-center justify-center gap-4 mt-20 mb-10 md:text-m-md text-xm">
          <span>★</span>
          <span className="text-body-lg">We are Certified by</span>
          <span>★</span>
        </div>
        <div className="relative flex justify-center">
          <div
            ref={globeRef}
            className="relative w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] md:w-[680px] md:h-[680px]"
          >
            <Image
              src="/assets/images/design/glob.png"
              alt="Global Certifications"
              fill
              className="object-contain"
              loading="lazy"
            />
            {logos.map((src, i) => (
              <div
                key={i}
                ref={(el: any) => (logosRef.current[i] = el)}
                className={`absolute ${[
                    "top-[4%] md:top-[0%] left-[40%] -translate-x-1/2",
                    "top-[22%] left-[5%]",
                    "top-[20%] right-[6%]",
                    "top-[53%] left-[14%] -translate-y-1/2",
                    "top-[27%] right-[35%] -translate-y-1/2",
                    "top-[50%] right-[24%] -translate-y-1/2",
                    "top-[30%] left-[30%]",
                    "bottom-[30%] right-[5%]",
                    "bottom-[16%] left-[74%] -translate-x-1/2",
                  ][i]
                  }`}
              >
                <CertLogo src={src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
