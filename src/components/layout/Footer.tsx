import React, { useEffect, useRef } from "react";
import ArrowRight from "@/assets/svg/arrow.svg";
import {
  footerLinksData,
  navigationLinks,
  visitUsData,
} from "@/constance/home";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const visitCardRef = useRef(null);
  const partnerSectionRef = useRef(null);

  useEffect(() => {
    const section: any = sectionRef.current;
    const image: any = imageRef.current;
    const visitCard = visitCardRef.current;
    const partnerSection = partnerSectionRef.current;

    if (!section || !image) return;
    const imageHeight = image?.offsetHeight;
    const sectionHeight = section.offsetHeight;
    const scrollDistance = imageHeight - sectionHeight;

    gsap.fromTo(
      image,
      { y: 0 },
      {
        y: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    if (visitCard && partnerSection) {
      gsap.fromTo(
        visitCard,
        { yPercent: 20 },
        {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }

    if (partnerSection) {
      gsap.fromTo(
        partnerSection,
        { y: 60 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: partnerSection,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        },
      );
    }

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <footer className="relative">
      <section
        ref={sectionRef}
        className="relative bg-primary overflow-hidden md:h-[90vh] h-[1000px]"
      >
        <img
          ref={imageRef}
          src="/assets/images/design/footer_cover.png"
          alt="Footer Background"
          className="absolute inset-0 w-full object-cover"
          style={{ height: "140%" }}
        />

        <div className="absolute inset-0 bg-primary/50" />

        <div className="relative z-10 px-4 md:px-10 pb-5 pt-12 md:py-[85px]">
          <h2 className="text-secondary md:text-body-md text-body-sm mb-10 md:mb-[53px]">
            Ready to Get Started?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
              {footerLinksData.map((link, i) => (
                <div key={i} className="w-[250px]">
                  <div className="flex justify-between mb-4">
                    {link.download ? (
                      <a
                        href={link.url}
                        download
                        className="text-secondary md:text-body-md-bold text-body-sm-bold"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.url}>
                        <span className="text-secondary md:text-body-md-bold text-body-sm-bold">
                          {link.label}
                        </span>
                      </Link>
                    )}
                    <ArrowRight className="text-secondary" />
                  </div>

                  <hr className="border-muted-secondary_light mb-3" />
                  <p className="text-muted-secondary md:text-body-md text-body-xs">
                    {link.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="h-[350px] md:hidden block" />

      <section
        ref={partnerSectionRef}
        className="bg-secondary px-4 md:px-[43px] md:pt-[40px]"
      >
        <div className="max-w-md">
          <img
            src="/assets/images/design/penny-wort-logo_black.png"
            alt="Logo"
            className="w-[120px] md:w-[177px] mb-6"
            loading="lazy"
          />

          <p className="text-primary md:text-body-md text-body-sm mb-4">
            Partner with India&apos;s Most Trusted <br />
            Workwear Manufacturer
          </p>

          <p className="text-primary md:text-body-md text-body-sm leading-6">
            Minimum Order: 500 Pieces | Worldwide Shipping |{" "}
            <br className="md:hidden block" /> ISO 9001:2015 Certified
          </p>
        </div>

        <hr className="mt-10" />

        <div className="flex flex-col md:flex-row justify-between text-body-xs text-primary/50 gap-3 my-4">
          <span>© 2026 Pennyworth Clothing | All rights reserved.</span>
          <span>
            <a href="https://equixsolutions.com/" target="_black">
              Powered by Equixsolutions
            </a>
          </span>
        </div>
      </section>
      <div
        ref={visitCardRef}
        className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[90%] max-w-[680px] bg-secondary-background text-secondary px-6 py-8 z-30 md:top-[25%] md:left-auto md:right-[10px] lg:right-[63px] md:translate-x-0 md:w-[50%] md:px-[56px] md:py-[48px]"
      >
        <h2 className="md:text-body-lg text-body-sm mb-10">Visit Us</h2>

        {visitUsData.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="md:text-body-md text-body-sm mb-3">
              {section.title}
            </h3>

            <hr className="border-muted-secondary_light/40 mb-3" />

            <div className="space-y-1">
              {section.lines.map((line, i) => (
                <p
                  key={i}
                  className={`md:text-body-lg text-body-xs ${
                    section.highlightLast && i === section.lines.length - 1
                      ? "text-danger"
                      : "text-muted-secondary"
                  }`}
                >
                  {line.includes("www.") ? (
                    <a
                      href={`https://${line}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {line}
                    </a>
                  ) : line.includes("@") ? (
                    <a href={`mailto:${line}`} className="hover:underline">
                      {line}
                    </a>
                  ) : line.startsWith("+") ? (
                    <a
                      href={`tel:${line.replace(/[^+\d]/g, "")}`}
                      className="hover:underline"
                    >
                      {line}
                    </a>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}

        <nav className="flex flex-col lg:flex-row items-start md:gap-6 gap-2 text-base">
          {navigationLinks.map((link, i) => (
            <Link key={i} href={link.url}>
              <button className="hover:opacity-70 text-xsm md:text-m-sm">
                {link.label}
              </button>
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
