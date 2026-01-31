import Image from "next/image";
import Comma from "@/assets/svg/comma.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeadershipSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef<(HTMLParagraphElement | HTMLDivElement | null)[]>([]);
  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".leadership-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
      gsap.from(quoteRef.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 85%",
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="md:px-10 px-5 pb-5 md:mt-5">
      <div className="mb-12 leadership-heading">
        <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
          Meet Our Leadership
        </h2>
        <hr className="border-t border-main border-muted-foreground/50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
        <div
          ref={imageRef}
          className="relative w-full flex items-end h-[320px] md:h-[420px] order-2 lg:order-1"
        >
          <Image
            src="/assets/images/persons/anand_paul.png"
            alt="Anand Paul"
            width={320}
            height={320}
            loading="lazy"
            className="object-contain"
          />
          <div className="lg:hidden lg:col-span-2 flex flex-col justify-end">
            <h3 className="heading-l-lg">Anand Paul</h3>
            <p className="md:text-body-md text-body-xs">Managing Director</p>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-6 order-1 lg:order-2">
          <p
            ref={(el: any) => (textRef.current[0] = el)}
            className="md:text-body-md text-body-xs"
          >
            With over 10 years in textile manufacturing and industrial safety
            apparel, Anand Paul has steered Pennywort from a regional player to
            a nationally recognized brand. His vision of combining international
            quality standards with competitive pricing has been the cornerstone
            of Pennywort's growth..
          </p>

          <div className="relative">
            <span
              ref={quoteRef}
              className="flex justify-end relative top-10 sm:top-auto text-[120px] leading-none text-gray-200 font-serif"
            >
              <Comma />
              <Comma />
            </span>

            <p
              ref={(el: any) => (textRef.current[1] = el)}
              className="absolute top-[0px] lg:top-[170px] md:text-body-md text-body-xs z-10"
            >
              "Every piece of workwear we produce carries the weight of
              someone's safety. That responsibility drives us to never
              compromise on quality, no matter the order size or timeline
              pressure.".
              <br className="lg:hidden block" />
              <strong>— Anand Paul</strong>
            </p>
          </div>

          <div
            ref={(el: any) => (textRef.current[2] = el)}
            className="lg:block lg:col-span-2 mt-20 hidden"
          >
            <h3 className="lg:heading-xs heading-caption">Anand Paul</h3>
            <p className="md:text-body-md text-body-xs">Managing Director</p>
          </div>
        </div>
      </div>

      <hr className="border-t border-main border-muted-foreground/50" />
    </section>
  );
};

export default LeadershipSection;
