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
    src: "/assets/images/logo/en388.png",
    desc: "Protective Gloves Against Mechanical Risks",
    showDivider: true,
  },
  {
    src: "/assets/images/logo/EN21420.jpg",
    desc: "General Requirements for Protective Gloves",
    showDivider: true,
  },
  {
    src: "/assets/images/logo/EN407.png",
    desc: "Protective Gloves Against Thermal Risks",
  },
  {
    src: "/assets/images/logo/ANSIISEA138.png",
    desc: "Impact Protection for Gloves",
    showDivider: true,
  },
  {
    src: "/assets/images/logo/nfpa-70e.png",
    desc: "Electrical Safety in the Workplace",
    showDivider: true,
  },
  {
    src: "/assets/images/logo/IEC61482.webp",
    desc: "Protective Clothing Against Electric Arc",
    showDivider: true,
  },
  {
    src: "/assets/images/logo/ce-mark_0.png",
    desc: "European Conformity Marking",
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
        stagger: 0.1,
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
    <section
      ref={sectionRef}
      className="bg-secondary md:mb-10 py-14 md:py-24 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="cert-heading flex items-center justify-center gap-4 mb-14">
          <span className="md:text-m-md text-xm">★</span>
          <h2 className="md:text-body-lg text-body-sm text-primary uppercase">
            Certifications & Compliance
          </h2>
          <span className="md:text-m-md text-xm">★</span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10 place-items-center">
          {certifications.map((item, i) => (
            <div key={i} className="cert-item">
              <CertItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
