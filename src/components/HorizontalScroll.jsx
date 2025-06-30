"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import scrollImg1 from "../../public/scrollimg1.svg";
import scrollImg2 from "../../public/scrollimg2.svg";
import scrollImg3 from "../../public/scrollimg3.svg";
import orangeLines from "../../public/orange-lines-bg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const orangeRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;
    const orange = orangeRef.current;

    if (!container || !scroll || !orange) return;

    const totalScrollWidth = scroll.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalScrollWidth - viewportWidth;

    gsap.to(scroll, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `${scrollDistance * 1.5}`, // slow scroll effect
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="relative">
      {/* Pinned container */}
      <div ref={containerRef} className="relative h-screen overflow-x-hidden ">
        {/* Orange overlay - absolutely centered inside pinned area */}
        <div
          ref={orangeRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[1560px] h-[810px] pointer-events-none"
        >
          <Image src={orangeLines} alt="Orange Lines" />
        </div>

        {/* Horizontally scrolling images */}
        <div
          ref={scrollRef}
          className="flex h-full items-center gap-6 z-50 pl-[50px]"
        >
          <Image
            src={scrollImg1}
            alt="Image 1"
            className="w-[1962px] h-[690px]"
          />
          <Image
            src={scrollImg2}
            alt="Image 2"
            className="w-[1962px] h-[690px]"
          />
          <Image
            src={scrollImg3}
            alt="Image 3"
            className="w-[1962px] h-[690px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
