"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
const brands = [
  {
    name: "Woolworths",
    details: "RESEARCH - STRATEGY",
    description:
      "A leading retail giant, Woolworths focuses on leveraging research and strategic planning to elevate customer experiences and drive innovation in its market approach.",
  },
  {
    name: "Sneaker Lab",
    details: "DESIGN",
    description:
      "An innovator in footwear care and branding, Sneaker Lab specializes in crafting cutting-edge designs and building strong, creative brand identities.",
  },
  {
    name: "HKLM",
    details: "RESEARCH - STRATEGY - DESIGN - DEVELOPMENT",
    description:
      "HKLM undertakes holistic projects that blend in-depth research, strategic insights, impactful designs, and advanced development solutions to deliver end-to-end excellence.",
  },
  {
    name: "Digitas Liquorice",
    details: "DESIGN",
    description:
      "An international digital creative agency, Digitas Liquorice focuses on producing innovative designs that captivate and engage audiences across various platforms.",
  },
  {
    name: "Batoka Hospitality",
    details: "RESEARCH - STRATEGY - DESIGN - DEVELOPMENT",
    description:
      "Specializing in luxury travel, Batoka Hospitality combines comprehensive research, strategic vision, innovative design, and advanced development to redefine high-end experiences.",
  },
  {
    name: "Sendmarc",
    details: "STRATEGY - DESIGN - DEVELOPMENT",
    description:
      "A pioneer in email security, Sendmarc delivers robust solutions through strategic frameworks, exceptional design, and sophisticated platform development.",
  },
];

const Works = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const worksTitleRef = useRef();
  const refs = useRef([]); // Array of refs for each brand item

  useEffect(() => {
    gsap.from(worksTitleRef.current, {
      y: "100%",
      opacity: 0,
      ease: "power2.out",
      duration: 1.4,
      // delay: 0.5,
      scrollTrigger: {
        trigger: worksTitleRef.current, // The element that triggers the animation
        start: "top 95%",
        end: "top 95%",
        // scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (!ref) return;

      const line = ref.querySelector(".line");
      const hoverEffect = gsap.timeline({ paused: true });

      hoverEffect.to(line, {
        width: "100%",
        duration: 0.8,
        delay: 0.05,
        ease: "power4.out",
      });

      // Add hover animations only for items not expanded
      ref.addEventListener("mouseenter", () => {
        if (expandedIndex !== index) hoverEffect.play();
      });

      ref.addEventListener("mouseleave", () => {
        if (expandedIndex !== index) hoverEffect.reverse();
      });

      // Reset the line state for expanded/non-expanded items
      if (expandedIndex === index) {
        gsap.set(line, { width: "100%" });
      } else {
        gsap.set(line, { width: "0%" });
      }
    });
  }, [expandedIndex]);

  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-12 mx-4">
      <div className="overflow-hidden my-16">
        <h2
          ref={worksTitleRef}
          className=" uppercase sm:text-5xl text-3xl  tracking-tighter font-semibold text-[#1c1c1c] "
        >
          We've Worked With
        </h2>
      </div>
      <div className="space-y-6 ">
        {brands.map((brand, index) => (
          <div  
            key={index}
            ref={(el) => (refs.current[index] = el)} // Assign refs dynamically
            className="brand-item relative border-b border-gray-300 pb-4 group"
          >
            <div className="grid lg:grid-cols-12 grid-cols-3 gap-8 items-center">
              <h3 className="lg:col-span-6 col-span-1 text-sm sm:text-base   font-medium text-gray-700 group-hover:text-black transition">
                {brand.name}
              </h3>
              <p className="lg:col-span-5 col-span-1 text-xs sm:text-sm font-medium">{brand.details}</p>
              <button
                onClick={() => toggleAccordion(index)}
                className="col-span-1  text-xs sm:text-sm font-medium text-[#1c1c1c] focus:outline-none"
              >
                {expandedIndex === index ? "LESS -" : "MORE +"}
              </button>
            </div>
            {/* Static background line */}
            <div className="absolute bottom-0 right-0 h-[0.3px] bg-gray-300 w-full"></div>
            {/* Animated hover/expanded line */}
            <div className="line absolute bottom-0 left-0 h-[0.3px] bg-black w-0"></div>
            {expandedIndex === index && (
              <div className="mt-4 text-gray-800 grid lg:grid-cols-12 grid-cols-3 gap-8">
                <div className="lg:col-span-6 col-span-1"></div>
                <p className="lg:col-span-5 col-span-1 text-xs sm:text-sm">{brand.description}</p>
                <div className="col-span-1"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
