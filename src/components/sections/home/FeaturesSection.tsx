"use client";

import { useRef } from "react";
import { sustainabilityFeaturesData } from "@/constance/home";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], 
  });


  const card1Y = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const card2Y = useTransform(scrollYProgress, [0, 1], ["75%", "-75%"]);
  const card3Y = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const card4Y = useTransform(scrollYProgress, [0, 1], ["125%", "-125%"]);

  return (
    <section ref={sectionRef} className="relative md:mx-10 mx-5 mt-12">
      <div className="pt-4 mb-8">
        <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
          Building a Responsible Future
        </h2>
        <hr className="border-t border-main border-muted-foreground/50" />
      </div>
      <div className="md:text-body-md text-body-sm text-primary leading-relaxed mb-8 md:mb-[149px]">
        At Pennywort, sustainability isn&apos;t an afterthought—it&apos;s <br />
        woven into every thread. We&apos;re committed to:
      </div>

      <div className="relative w-full mb-14 px-4 md:px-8 lg:px-16">
        <div className="relative w-full md:min-h-[751px] mx-auto">
       
          <img
            src="/assets/images/design/ellipse.png"
            alt="Ellipse"
            className="md:absolute top-0 left-[calc(50%-350px)]
                       lg:w-[700px] lg:h-[700px] lg:object-cover"
          />
          <motion.div
            style={{ y: card1Y }}
            className="absolute top-[4%] left-[25%] -translate-x-[110%]
                       w-[252px] h-[270px] hidden lg:flex flex-col
                       bg-primary px-4 py-16 text-center"
          >
            <div className="md:heading-xs heading-caption text-secondary text-[27px] tracking-[1.08px] mb-1">
              Eco-Friendly Fabrics
            </div>
            <div className="md:text-body-sm text-body-xs text-secondary leading-relaxed">
              Organic cotton, recycled polyester, Lenzing FR, viscose
            </div>
          </motion.div>

          <motion.div
            style={{ y: card2Y }}
            className="absolute top-[20%] lg:left-[80%] lg2:left-[81%] translate-x-[58%]
                       w-[252px] h-[270px] hidden lg:flex flex-col
                       bg-accent px-4 py-16 text-center"
          >
            <div className="md:heading-xs heading-caption text-primary text-[27px] tracking-[1.08px] mb-1">
              Ethical Manufacturing
            </div>
            <div className="md:text-body-sm text-body-xs leading-relaxed">
              Fair wages, safe working conditions, zero child labor
            </div>
          </motion.div>
          <motion.div
            style={{ y: card3Y }}
            className="absolute top-[52%] lg:-left-[5%] lg2:left-[3%]
                       -translate-x-[225%] w-[252px] h-[270px]
                       hidden lg:flex flex-col bg-accent px-4 py-16 text-center"
          >
            <div className="md:heading-xs heading-caption text-primary text-2xl tracking-[0.96px] mb-1">
              Water Conservation
            </div>
            <div className="md:text-body-sm text-body-xs leading-relaxed">
              Advanced dyeing processes that reduce water usage by 40%
            </div>
          </motion.div>

      
          <motion.div
            style={{ y: card4Y }}
            className="absolute top-[72%] lg2:top-[62%] left-[60%] translate-x-[-12%]
                       w-[252px] h-[270px] hidden lg:flex flex-col
                       bg-accent px-4 py-16 text-center"
          >
            <div className="md:heading-xs heading-caption text-primary text-2xl tracking-[0.96px] mb-1">
              Carbon Footprint Reduction
            </div>
            <div className="md:text-body-sm text-body-xs leading-relaxed">
              Energy-efficient machinery and solar-powered facilities
            </div>
          </motion.div>
        </div>
      </div>

     
      <div className="lg:hidden grid grid-cols-2 mb-8">
        {sustainabilityFeaturesData.map((feature, index) => (
          <div
            key={index}
            className="group bg-accent text-primary p-3 text-center
                       transition-all duration-300 hover:bg-primary hover:text-secondary"
          >
            <div className="md:heading-xs heading-caption text-lg mb-3">
              {feature.title}
            </div>
            <div className="text-sm text-muted-foreground">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
