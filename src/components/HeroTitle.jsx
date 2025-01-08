"use client";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";

const HeroTitle = () => {
  const lineRefs = useRef([]);

  useEffect(() => {
    // Animate all lines together
    gsap.from(lineRefs.current, {
      y: "100%", // Start below the parent
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0, // No staggering
    });
  }, []);

  return (
    <section className="m-6 py-8 md:m-12 md:py-16">
      <div className="flex flex-col gap-3 md:gap-5 uppercase">
        {/* Tablet and Mobile: Combined Lines */}
        <div className="overflow-hidden lg:hidden">
          <h2
            ref={(el) => (lineRefs.current[5] = el)}
            className="text-5xl sm:text-6xl font-bold leading-tight sm:leading-snug opacity-90 text-[#1c1c1c]"
          >
            A digital design studio fueled by strategy and research
          </h2>
        </div>

        {/* Desktop: Separate Lines */}
        <div className="hidden lg:block">
          <div className="overflow-hidden">
            <h2
              ref={(el) => (lineRefs.current[0] = el)}
              className="text-8xl font-bold leading-[5rem] opacity-90 text-[#1c1c1c]"
            >
              A digital design studio
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2
              ref={(el) => (lineRefs.current[1] = el)}
              className="text-8xl font-bold leading-[5rem] opacity-90 text-[#1c1c1c]"
            >
              fueled by strategy and
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2
              ref={(el) => (lineRefs.current[2] = el)}
              className="text-8xl font-bold leading-[5rem] opacity-90 text-[#1c1c1c]"
            >
              research
            </h2>
          </div>
        </div>

        {/* Subtext */}
        <div className="text-base sm:text-lg md:text-xl">
          <div className="overflow-hidden">
            <p ref={(el) => (lineRefs.current[3] = el)} className="opacity-80">
              Design to inspire
            </p>
          </div>
          <div className="overflow-hidden">
            <p ref={(el) => (lineRefs.current[4] = el)} className="opacity-80">
              Built to connect
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTitle;
