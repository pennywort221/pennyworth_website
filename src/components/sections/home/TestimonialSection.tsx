"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../ui/button";
import ArrowRight from "@/assets/svg/arrow.svg";
import ArrowSide from "@/assets/svg/arrow_down.svg";
import Comma from "@/assets/svg/comma.svg";
import Link from "next/link";

import { client } from "@/sanity/client";
import { testimonialsQuery } from "@/sanity/queries";

const AUTO_PLAY_DELAY = 5000;

type Testimonial = {
  _id: string;
  quote: string;
  author: string;
  company: string;
};

function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    let mounted = true;

    client.fetch(testimonialsQuery).then((data) => {
      if (!mounted) return;

      const list = Array.isArray(data) ? data : [];
      setTestimonials(list);
      setIndex(0);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const total = testimonials.length;

  const active = useMemo(() => {
    if (!total) return null;
    return testimonials[index % total];
  }, [testimonials, index, total]);

  const next = useMemo(() => {
    if (total < 2) return null;
    return testimonials[(index + 1) % total];
  }, [testimonials, index, total]);

  useEffect(() => {
    if (total <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % total);
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(timer);
  }, [total]);

  const nextSlide = () => {
    if (!total) return;
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  };

  const prevSlide = () => {
    if (!total) return;
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  };

  const containerVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };
  if (!total || !active) return null;

  return (
    <section className="relative overflow-x-hidden mb-20 w-full">
      <div className="pt-4 mb-8 md:mx-10 mx-5">
        <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
          What Our Partners Say
        </h2>
        <hr className="border-t border-main border-muted-foreground/50" />
      </div>

      <div className="absolute inset-x-0 md:top-20 top-10 pointer-events-none overflow-hidden z-0 md:mx-10 mx-5">
        <span className="flex justify-start leading-none text-muted-foreground relative md:right-auto right-14 scale-50 md:scale-100">
          <Comma />
          <Comma />
        </span>
      </div>

      <div className="relative md:mt-44 mt-28 flex items-start md:ml-10 ml-5 w-full">
        <div className="hidden md:flex items-center justify-between gap-4 mt-12 z-10">
          <div className="flex gap-1 mt-8 mr-8">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-primary flex items-center justify-center hover:border-muted-foreground hover:text-muted-foreground transition"
              aria-label="Previous testimonial"
            >
              <ArrowSide className="rotate-90" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-primary flex items-center justify-center hover:border-muted-foreground hover:text-muted-foreground transition"
              aria-label="Next testimonial"
            >
              <ArrowSide className="-rotate-90" />
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-full">
          <div className="overflow-hidden w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active._id}
                custom={direction}
                variants={containerVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex gap-16 items-start will-change-transform"
              >
                <div className="max-w-xl">
                  <p className="md:heading-md heading-caption leading-relaxed text-gray-900 mb-6">
                    {active.quote}
                  </p>
                  <p className="text-sm text-gray-600">
                    — {active.author}, {active.company}
                  </p>
                </div>

                {next && (
                  <div className="hidden md:block max-w-md">
                    <p className="md:heading-md heading-caption leading-relaxed text-gray-400">
                      {next.quote}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-2 mt-6">
            {testimonials.map((t, i) => (
              <div
                key={t._id}
                className={`h-[2px] w-24 transition-colors duration-300 ${
                  i === index ? "bg-primary/60" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          {/* <Link href="/blogs">
            <Button
              variant="heroPrimary"
              size="lg"
              className="group w-[300px] text-m-sm px-4 py-2 mt-6 text-primary border border-primary md:px-6 md:py-3"
            >
              Read More Success Stories
              <ArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
