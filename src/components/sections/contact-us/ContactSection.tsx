"use client";

import ArrowRight from "@/assets/svg/arrow.svg";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const fields = ["Name", "Phone", "Email", "Subject"];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
    
      gsap.from(".contact-left", {
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
      gsap.from(".contact-field", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // Right side content
      gsap.from(".contact-right", {
        opacity: 0,
        x: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
      gsap.from(".contact-cta", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary px-5 md:px-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT */}
        <div className="contact-left">
          <h3 className="md:text-body-lg text-body-sm leading-relaxed text-primary mb-8">
            Contact Form details
          </h3>

          <form className="space-y-6">
            {fields.map((label) => (
              <div key={label} className="contact-field">
                <input
                  type="text"
                  placeholder={label}
                  className="w-full border-b md:text-body-md text-body-xs leading-relaxed border-muted-foreground/40 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>
            ))}

            <div className="contact-field">
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border-b border-muted-foreground/40 md:text-body-md text-body-xs leading-relaxed py-3 text-sm resize-none focus:outline-none focus:border-primary"
              />
            </div>
          </form>

          <div className="mt-12 contact-cta">
            <p className="text-primary mb-4 md:text-body-md-bold text-body-sm-bold leading-relaxed">
              Join Pennywort today and elevate your production business to new
              heights of success.
            </p>

            <Button
              variant="heroPrimary"
              size="lg"
              className="group w-[250px] md:text-body-md text-body-sm leading-relaxed p-2 text-primary border border-primary md:px-6 md:py-3"
            >
              Submit
              {/* <ArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> */}
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-muted-background md:p-12 contact-right">
          <h3 className="md:text-body-bold text-body-sm-bold leading-relaxed mb-6">
            Unlock unprecedented opportunities for your production company by
            registering with Pennywort.
          </h3>

          <div className="space-y-4 md:text-body-md text-body-sm leading-relaxed">
            <p>
              As a registered member, your company gains exclusive access to a
              stream of production orders directly from Pennywort. Once the
              straightforward registration process and business verification is
              completed, you can start receiving production orders aligned with
              Pennywort’s high standards and specifications.
            </p>

            <p>
              Our commitment to excellence is reflected not only in the products
              but also in the partnerships we build.
            </p>

            <p>
              Upon registration, Pennywort officials will conduct thorough
              inspections of your facility to ensure it meets our stringent
              quality and compliance requirements. Successful evaluations result
              in the issuance of a prestigious certificate.
            </p>

            <p>
              As a trusted production partner, you’ll experience a significant
              boost in both revenue and reputation. Pennywort goes beyond
              traditional partnerships — our QC officers actively assist you
              on-site during production, ensuring every step adheres to our
              meticulous instructions, guaranteeing top-notch quality for your
              manufactured goods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
