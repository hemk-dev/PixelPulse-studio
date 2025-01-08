"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Button from "./Button";
gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const featuredTitleRef = useRef();
  //   useGSAP(() => {
  //     gsap.from(featuredTitleRef, {
  //       y: 20,
  //       y: "100%",
  //       opacity: 0,
  //       duration: 1.4,
  //       ease: "power4.out",
  //     });
  //   });

  useEffect(() => {
    gsap.from(featuredTitleRef.current, {
      y: "100%",
      opacity: 0,
      ease: "power2.out",
      duration: 1.4,
      // delay: 0.5,
      scrollTrigger: {
        trigger: featuredTitleRef.current, // The element that triggers the animation
        start: "top 95%",
        end: "top 95%",
        // scrub: true,
        // markers: true,
      },
    });
  }, []);

  const clients = [
    {
      id: 1,
      image: "/images/kia.svg", // Replace with the actual image source or component
      description:
        "In collaboration with Kia's development partner +OneX, we created a 'best-in-class' eCommerce experience underpinned and validated by an in-depth research study that focussed on incorporating the best possible UX principles and analyses.",
      button: "View Work",
    },
    {
      id: 2,
      image: "/images/lemkus.svg", // Replace with the actual image source or component
      description:
        "Lemkus reached out to us to create a new design system and conduct an overhaul of the brand's digital experience. The objective was to provide customers with seamless purchasing journeys and we did this by combining robust user experience with strong and engaging content.",
      button: "View Case Study",
    },
    {
      id: 3,
      image: "/images/afrisam.svg", // Replace with the actual image source or component
      description:
        "In collaboration with Promise Brand Specialists, we were tasked to create an elevated digital experience to reflect the innovative and performance-oriented nature of the brand. The primary goal of the website was to provide a seamless digital service when looking for key information as well as placing and paying for cement orders online.",
      button: "View Work",
    },
    {
      id: 4,
      image: "/images/tigerwheel.svg", // Replace with the actual image source or component
      description:
        "We were brought in to refresh their primary digital properties with a particular focus on building a robust eCommerce capability that re-imaged the way consumers purchase tyres, wheels, and batteries online. We achieved this by crafting an informative and intuitive purchasing experience, backed by comprehensive usability research and validation.",
      button: "View Case Study",
    },
  ];

  return (
    <section className="my-8">
      <div className=" mx-4">
        <div className="overflow-hidden ">
          <h2
            ref={featuredTitleRef}
            className=" uppercase sm:text-5xl text-3xl tracking-tighter font-semibold text-[#1c1c1c] "
          >
            Featured Clients
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className=" gap-2 p-6 flex flex-col items-start justify-between"
            >
              <div className="">
                <div className="flex items-center justify-center mb-4 ">
                  <Image
                    src={client.image}
                    width={300}
                    height={500}
                    unoptimized="true"
                    alt={"image"}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-gray-700 text-left text-sm mb-4">
                  {client.description}
                </p>
              </div>
              <div className="">
                {/* <button className="bg-[#1c1c1c] text-white py-1 px-3 rounded-full text-xs hover:bg-gray-800 ">
                  {client.button}
                </button> */}
                <Button content="View Work" />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
