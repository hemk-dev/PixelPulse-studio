"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef();
  const navLinksRef = useRef([]); // Array of refs for nav links
  const tl = gsap.timeline();
  const isMounted = useRef(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useGSAP(() => {
    gsap.from(".cursor-pointer", {
      y: 20,
      opacity: 0,
      duration: 0.7,
      delay: 0.5,
    });
  });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return; // Skip the animation on the first render
    }
    if (isMenuOpen) {
      // Animate menu sliding down
      tl.to(mobileMenuRef.current, {
        top: 0,
        duration: 0.7,
        ease: "power2.out",
      }).from(
        navLinksRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          stagger: 0.3, // Add stagger effect
          ease: "power2.out",
        },
        "-=0.2" // Overlap with the slide-down animation slightly
      );
    } else {
      // Animate menu sliding up
      tl.to(mobileMenuRef.current, {
        top: "-120%",
        duration: 0.7,
        ease: "power2.in",
      });
    }
    tl.from(
      ".cursor-pointer",
      {
        y: `${isMenuOpen ? -20 : 20}`,
        opacity: 0,
        duration: 0.75,
        delay: `${isMenuOpen ? 0.5 : 0.7}`,
      },
      `${isMenuOpen ? "-=3" : ""}`
    );
  }, [isMenuOpen]);

  const navLinks = [
    "Work",
    "Case Studies",
    "Services",
    "About",
    "Contact",
  ];

  return (
    <>
      <div className="flex justify-between sm:items-center items-start p-6 relative">
        <div className="overflow-hidden z-20">
          <p
            className={`${
              isMenuOpen ? "text-white" : "text-black"
            } text-sm cursor-pointer`}
          >
            PixelPulse
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:block">
          <ul className="flex space-x-16 hover:overflow-visible overflow-hidden uppercase text-xs cursor-pointer relative">
            {navLinks.map((link, index) => (
              <li
                key={index}
                ref={(el) => (navLinksRef.current[index] = el)}
                className="relative group cursor-pointer"
              >
                {link}
                <div className="absolute left-0 bottom-[-2] h-[1px] w-0 bg-black bg-opacity-65 transition-all duration-200 ease-in group-hover:w-full"></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="block sm:hidden overflow-hidden z-20">
          <h2
            className={`${
              isMenuOpen ? "text-white" : "text-black"
            } text-sm cursor-pointer uppercase`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? "close" : "menu+"}
          </h2>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="w-screen h-screen absolute top-[-120%] bg-red-500 z-10 flex flex-col items-center justify-center sm:hidden"
      >
        <ul className="flex flex-col space-y-8 text-white text-5xl uppercase">
          {navLinks.map((link, index) => (
            <li key={index} ref={(el) => (navLinksRef.current[index] = el)}>
              {link}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
