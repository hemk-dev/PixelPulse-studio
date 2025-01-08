"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        width: "100%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 90%",
          end: "center center", 
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="uppercase sm:text-5xl text-3xl  tracking-tighter font-semibold text-[#1c1c1c]">
            About
          </h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-start gap-8">
          {/* Left Column */}
          <div className="w-full lg:max-w-[30%]">
            <p className="uppercase leading-5 text-xl text-gray-700">
              A global digital design studio redefining the way people engage
              with brands
            </p>
          </div>
          <div className="w-full lg:max-w-[20%]"></div>
          {/* Right Column */}
          <div className="flex flex-col w-full lg:max-w-[40%]">
            <p className="text-gray-800 text-base leading-relaxed mb-6">
              We are a close-knit team of passionate individuals dedicated to
              creating meaningful work for people and brands we admire.
              Collaboration drives everything we do, allowing us to assemble the
              right talent for each project and craft something exceptional. By
              blending strategy, branding, web design, and development, we
              deliver digital experiences that redefine how people engage with
              brands.
            </p>
            <div className="flex items-center justify-start">
              <Button content="About Us" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-16 flex justify-center items-center">
          <video
            ref={videoRef}
            src="./images/about.mp4"
            autoPlay
            muted
            loop={true}
            playsInline
            className="w-full sm:w-[60%] h-auto object-cover"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default About;
