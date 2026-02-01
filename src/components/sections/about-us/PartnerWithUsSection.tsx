"use client";

import Image from "next/image";
import ArrowUpRight from "@/assets/svg/arrow.svg";
import { benefits, requirements } from "@/constance/aboutUs";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function PartnerWithUsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Text/content animation
      gsap.from(".partner-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Image slide-in from right
      gsap.from(".partner-image", {
        opacity: 0,
        x: 120, // 👈 comes from the side
        duration: 1.1, // 👈 slightly slower
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="mx-auto pt-20">
        <div className="mb-10 md:px-10 px-5">
          <h2 className="md:text-body-lg text-body-sm text-primary mb-2  ">
            Partner with Us
          </h2>
          <hr className="border-t border-main border-muted-foreground/50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 pt-10">
          <div className="lg:col-span-2 flex flex-col partner-content">
            <div className="px-5 md:px-10">
              <h3 className="md:text-body-md text-body-xs font-medium mb-4">
                Become a Pennywort Production Partner
              </h3>

              <p className="text-sm md:text-base mb-4">
                Are you a manufacturer looking to expand your order book?
              </p>

              <p className="text-sm md:text-base text-primary/80 max-w-xl">
                Pennywort’s partnership program connects quality-certified
                production houses with our growing order flow.
              </p>
            </div>

            <div className="mt-10 bg-primary/10 px-5 md:px-10 py-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h4 className="font-medium mb-6">Partnership Benefits:</h4>
                  <ul className="space-y-4">
                    {benefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-6">Requirements:</h4>
                  <ul className="space-y-4">
                    {requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex gap-2">
                <Link href="/contact-us">
                  <button className="inline-flex items-center gap-2 border border-primary px-6 py-3 text-sm md:text-base hover:bg-primary hover:text-secondary transition">
                    Apply for Partnership
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
                <a href="/assets/files/PENNYWORT.pdf" download>
                  <button className="inline-flex items-center gap-2 border border-primary px-6 py-3 text-sm md:text-base hover:bg-primary hover:text-secondary transition">
                    Become a Partner
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[360px] md:h-[420px] lg:h-full partner-image">
            <Image
              src="/assets/images/design/PartnerWithUs.png"
              alt="Pennywort Partner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
