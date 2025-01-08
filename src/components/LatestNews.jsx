"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Button from "./Button";
import gsap from "gsap";

const LatestNews = () => {
  const newsTitleRef = useRef();
  useEffect(() => {
    gsap.from(newsTitleRef.current, {
      y: "100%",
      opacity: 0,
      ease: "power2.out",
      duration: 1.4,
      // delay: 0.5,
      scrollTrigger: {
        trigger: newsTitleRef.current, // The element that triggers the animation
        start: "top 95%",
        end: "top 95%",
        // scrub: true,
      },
    });
  }, []);

  return (
    <>
      <section className="sm:m-8 m-2 py-8">
        <div>
          <div className="flex justify-between">
            <div ref={newsTitleRef} className="overflow-hidden my-16">
              <h2 className="uppercase sm:text-5xl text-3xl tracking-tighter font-semibold text-[#1c1c1c]">
                latest news
              </h2>
            </div>

            <div className="my-16 flex items-center">
              <Button content="View More" />
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-start gap-8 mx-2 border-y-2 py-6 border-gray-300">
            <div className="flex flex-wrap lg:flex-nowrap justify-start items-start gap-4">
              <div className="overflow-hidden w-80 h-64 cursor-pointer">
                <Image
                  src="/images/design-image.jpg"
                  width={320}
                  height={256}
                  alt="latest news image"
                  unoptimized="true"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <p className="text-gray-600 uppercase text-sm">article</p>
                <h2 className="text-sm font-medium text-[#1c1c1c]">
                  Embracing Timeless Design Principles for Modern Solutions
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-start items-start gap-4">
              <div className="overflow-hidden w-80 h-64 cursor-pointer">
                <Image
                  src="/images/team.jpg"
                  width={320}
                  height={256}
                  unoptimized="true"
                  alt="latest news image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <p className="text-gray-600 uppercase text-sm">article</p>
                <h2 className="text-sm font-medium text-[#1c1c1c]">
                  The Benefits of Aligning Your Team with Your Business
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
