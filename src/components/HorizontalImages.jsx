"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const HorizontalImages = () => {
  const images = [
    { src: "/images/office1.jpg", alt: "Office Image 1" },
    { src: "/images/office2.jpg", alt: "Office Image 2" },
    { src: "/images/office3.jpg", alt: "Office Image 3" },
    { src: "/images/office4.jpg", alt: "Office Image 4" },
    { src: "/images/office5.jpg", alt: "Office Image 5" },
    { src: "/images/office6.jpg", alt: "Office Image 6" },
    { src: "/images/office7.jpg", alt: "Office Image 7" },
    { src: "/images/office8.jpg", alt: "Office Image 8" },
  ];
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX; // Calculate the distance moved
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="whitespace-nowrap overflow-x-scroll overflow-y-hidden scrollbar-hidden cursor-grab my-8"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      style={{
        display: "flex",
        alignItems: "center",
        userSelect: "none", // Prevent text selection while dragging
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-64 w-96 inline-block mx-4"
          style={{ flexShrink: 0 }}
        >
          <Image
            unoptimized="true"
            height={256}
            width={384}
            src={image.src}
            alt={image.alt}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalImages;
