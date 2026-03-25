"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import FeatureItem from "@/components/common/FeatureItem";
import ImageGrid from "@/components/common/ImageGrid";
import { features } from "@/constance/home";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const featureRefs = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });


      gsap.from(textRefs.current, {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
      gsap.from(featureRefs.current, {
        x: -30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featureRefs.current[0],
          start: "top 80%",
        },
      });

      gsap.from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div className="mx-auto sm:px-0 px-5">
        <div className="sm:px-10 mb-8">
          <h2
            ref={titleRef}
            className="md:text-body-lg text-body-sm text-primary mb-2"
          >
            Who We Are
          </h2>
          <hr className="border-t border-muted-foreground/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:px-10 md:gap-12 mb-10">
          {[
            `Pennywort is India's leading contract manufacturer of premium workwear and safety apparel. 
            Based in Kerala, we specialize in flame-resistant clothing (FRC), inherently flame-resistant (IFR) garments, 
            and custom uniforms for industries that demand uncompromising quality and safety.`,
            `With ISO 9001:2015 certification and over one decades of manufacturing expertise, we serve construction, 
            oil & gas, healthcare, hospitality, and corporate sectors across the globe.
             Our commitment goes beyond clothing—we engineer confidence, one garment at a time.`,
          ].map((text, i) => (
            <p
              key={i}
              ref={(el: any) => el && (textRefs.current[i] = el)}
              className="md:text-body-md text-body-xs text-primary/70 !leading-tight"
            >
              {text}
            </p>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="sm:px-10">
            <h3 className="md:text-body-lg-bold text-body-md-bold mb-8">
              Why Leading Companies Choose Pennywort
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el: any) => el && (featureRefs.current[index] = el)}
                >
                  <FeatureItem {...feature} />
                </div>
              ))}
            </div>
            <Link href="/about-us">
              <Button
                ref={buttonRef}
                variant="outline"
                className="md:text-body-md text-body-xs mt-10 border-primary rounded-sm px-6 py-5 group"
              >
                Learn Our Story
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>

          <div className="h-[500px] md:h-[500px] lg:h-auto">
            <ImageGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
