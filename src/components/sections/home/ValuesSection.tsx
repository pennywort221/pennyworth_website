"use client";

import Image from "next/image";
import { useEffect } from "react";
import ValueCard from "../../common/ValueCard";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ValuesSection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".value-image", {
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="values-section w-full md:px-10 px-5 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2">
        <div className="value-image relative h-[200px] md:aspect-square md:h-auto md:order-1">
          <Image
            src="/assets/images/design/value_1.png"
            alt="Sustainability"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <ValueCard
          title={
            <>
              Sustainability <br className="md:block hidden" /> Commitment
            </>
          }
          order="md:order-2"
          mobileHeight
          discription="Eco-conscious material sourcing, zero-waste production initiatives, and ethical labor practices. We're building a greener future, one uniform at a time."
        />
        <div className="value-image relative h-[200px] md:aspect-square md:h-auto md:order-3">
          <Image
            src="/assets/images/design/value_2.png"
            alt="Fast Turnaround"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <ValueCard
          title={
            <>
              Fast <br className="md:block hidden" /> Turnaround
            </>
          }
          order="md:order-4"
          mobileHeight
          discription="Standard delivery: 60 days from order confirmation Rush orders available for urgent requirements"
        />

        <div className="value-image relative h-[200px] md:aspect-square md:h-auto md:order-6">
          <Image
            src="/assets/images/design/value_3.png"
            alt="Global Standards"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <ValueCard
          title={
            <>
              Global Standards, <br className="md:block hidden" /> Local Prices
            </>
          }
          order="md:order-5"
          mobileHeight
          discription="We deliver international-grade workwear at competitive Indian manufacturing rates—giving you premium quality without the premium price tag."
        />
        <div className="value-image relative h-[200px] md:aspect-square md:h-auto md:order-8">
          <Image
            src="/assets/images/design/value_4.png"
            alt="Customization"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <ValueCard
          title={
            <>
              Complete <br className="md:block hidden" /> Customization
            </>
          }
          order="md:order-7"
          mobileHeight
          discription=" From logo embroidery to color matching and unique design elements—we transform your brand vision into wearable reality."
        />
      </div>
    </section>
  );
};

export default ValuesSection;
