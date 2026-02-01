"use client";

import CertItem from "@/components/common/CertItem";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    src: "/assets/images/logo/iso_certification.png",
    desc: "2015 Quality Management",
    showDivider: true,
  },
  {
    src: "/assets/images/logo/EN_certification.png",
    desc: "Heat & Flame Protection",
    showDivider: true,
  },
  {
    src: "/assets/images/logo/NFPA_certification.png",
    desc: "Flash Fire Protection",
    showDivider: true,
  },
  {
    src: "/assets/images/logo/EN_1149_certification.png",
    desc: "Anti-Static Properties",
  },
  {
    src: "/assets/images/logo/EN_ISO_certification.png",
    label: "EN ISO 20471",
    desc: "High Visibility Clothing",
    showDivider: true,
  },
  {
    src: "/assets/images/logo/ASTM_certification.png",
    desc: "Arc-Rated and Flame-Resistant Protective Clothing",
    showDivider: true,
  },
  {
    src: "/assets/images/logo/oeko.png",
    desc: "Textile Safety (Select Products)",
  },
];

function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".cert-heading", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".cert-item", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
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

  const row1Small = certifications.slice(0, 3);
  const row2Small = certifications.slice(3, 5);
  const row3Small = certifications.slice(5, 7);

  const row1Md = certifications.slice(0, 4);
  const row2Md = certifications.slice(4, 7);

  return (
    <section
      ref={sectionRef}
      className="bg-secondary md:mb-10 py-14 md:py-24 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="cert-heading flex items-center justify-center gap-4 mb-14">
          <span className="md:text-m-md text-xm">★</span>
          <h2 className="md:text-body-lg text-body-sm text-primary uppercase">
            Certifications & Compliance
          </h2>
          <span className="md:text-m-md text-xm">★</span>
        </div>

        <div className="md:hidden space-y-10">
          <div className="grid grid-cols-3 gap-x-6 place-items-center">
            {row1Small.map((item, i) => (
              <div key={i} className="cert-item">
                <CertItem {...item} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-x-6 place-items-center">
              {row2Small.map((item, i) => (
                <div key={i} className="cert-item">
                  <CertItem {...item} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-x-6 place-items-center">
              {row3Small.map((item, i) => (
                <div key={i} className="cert-item">
                  <CertItem {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block space-y-10">
          <div className="grid grid-cols-4 gap-x-6 place-items-center">
            {row1Md.map((item, i) => (
              <div key={i} className="cert-item">
                <CertItem {...item} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-x-6 place-items-center">
              {row2Md.map((item, i) => (
                <div key={i} className="cert-item">
                  <CertItem {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
