"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CaseStudies = () => {
  const imageRefs = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
   
  });

  useEffect(() => {
    gsap.from(".case-study", {
      y: 20,
      opacity: 0,
      duration: 1.2,
      // delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".case-study", // The element that triggers the animation
        start: "top 100%",      // Trigger starts when ".uppercase" enters the viewport
        end: "top 90%",        // End point of the trigger
      },
    });
  }, []);

  useEffect(() => {
    imageRefs.current.forEach((image, index) => {
      if (image) {
        const tl = gsap.timeline({ paused: true });

        tl.to(image, {
          borderRadius: "50%",
          duration: 0.5,
          ease: "power2.out",
        });

        image.addEventListener("mouseenter", () => tl.play());
        image.addEventListener("mouseleave", () => tl.reverse());
      }
    });

    return () => {
      imageRefs.current.forEach((image) => {
        if (image) {
          image.removeEventListener("mouseenter", () => tl.play());
          image.removeEventListener("mouseleave", () => tl.reverse());
        }
      });
    };
  }, []);

  return (
    <>
      <section className="m-8 py-12">
        <div
          className="flex flex-wrap gap-8 justify-center"
          style={{ perspective: 1000 }} // Add perspective for 3D effects
        >
          {[
            {
              src: "./images/solar.jpg",
              alt: "Solar panel",
              title: "ELEVATE ENERGY",
              description: "Research - Strategy - Design - Development",
            },
            {
              src: "./images/sneakers.jpg",
              alt: "Sneakers",
              title: "SOLE MOTION",
              description: "Research - Strategy - Design - Content",
            },
            {
              src: "./images/abstract.jpg",
              alt: "Abstract art",
              title: "LUMINA ART",
              description: "Research - Strategy - Design - Development",
            },
            {
              src: "./images/shoes.jpg",
              alt: "Shoes",
              title: "URBAN KICKS",
              description: "Research - Strategy - Design - Development",
            },
          ].map((item, index) => (
            <div key={index} className="flex-1 min-w-[200px] max-w-[340px]">
              <div
                ref={(el) => (imageRefs.current[index] = el)}
                className="overflow-hidden w-full h-auto cursor-pointer"
              >
                <Image
                  src={item.src}
                  width={300}
                  height={500}
                  unoptimized="true"
                  alt={item.alt}
                  className="w-full h-auto"
                />
              </div>
              <div className="border-t-[1px] border-black my-4">
                <div className="overflow-hidden ">
                  <p className="py-2 text-xs uppercase case-study">{item.description}</p>
                </div>
                <div className="overflow-hidden ">
                  <p className="text-lg uppercase case-study">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
