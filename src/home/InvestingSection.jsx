"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import investingImg1 from "../../public/investing-hs-img-1.jpg";
import investingImg2 from "../../public/investing-hs-img-2.svg";
import investingImg3 from "../../public/investing-hs-img-3.png";
import investingImg4 from "../../public/investing-hs-img-4.png";
import investingImg5 from "../../public/investing-hs-img-5.png";
import investingImg6 from "../../public/investing-hs-img-6.png";
import investingImg7 from "../../public/investing-hs-img-7.png";

gsap.registerPlugin(ScrollTrigger);

const InvestingSection = () => {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const imagesWrapperRef = useRef(null);

  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img5Ref = useRef(null);
  const img6Ref = useRef(null);
  const img7Ref = useRef(null);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const lineWidth = 9250;
    const viewportWidth = window.innerWidth;
    const scrollDistance = lineWidth - viewportWidth;

    const slowScroll = scrollDistance * 0.25;

    gsap.to(circleRef.current, {
      x: slowScroll,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 30%",
        end: `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.to(imagesWrapperRef.current, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 30%",
        end: `+=${scrollDistance}`,
        scrub: true,
        anticipatePin: 1,
      },
    });

    [img1Ref, img2Ref, img3Ref, img4Ref, img5Ref, img6Ref, img7Ref].forEach(
      (img) => {
        gsap.to(img.current, {
          scale: 1.7,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
            end: `+=${scrollDistance}`,
            scrub: true,
          },
        });
      }
    );
  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <div className="relative">
      <div ref={containerRef} className="relative h-screen">
        {/* Horizontal gradient line */}
        <div
          className="absolute top-[60%] w-full h-[2px] z-50"
          style={{
            background:
              "linear-gradient(140deg, #996B55 13.4%, #E5AB8E 39.9%, #E5AB8E 61.87%, #996B55 89.13%)",
          }}
        />

        {/* Moving circle */}
        <div
          ref={circleRef}
          className="absolute top-[56%] left-0 w-[78px] h-[78px] bg-[linear-gradient(to_right,_#5C3A29,_#996B55,_#E5AB8E,_#996B55,_#5C3A29)] border border-black rounded-full z-50"
        />

        {/* Images wrapper for horizontal scroll */}
        <div
          ref={imagesWrapperRef}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 flex gap-6 px-[100px] z-0"
        >
          {/* Image 1 */}
          <div className="w-[853.33px] h-[480px] absolute bottom-[-160px] z-50 left-[260px] overflow-hidden rounded-xl">
            <Image
              ref={img1Ref}
              src={investingImg1}
              alt="Investing 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-[500px]">
            <div>
              <h1
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #996B55, #E5AB8E, #E5AB8E, #996B55)",
                }}
              >
                Investing in excellence
              </h1>
            </div>

            <div className="w-[632px] text-[24px] mt-[22px]">
              The palm offers value that will not expire - in terms of location,
              design, and future potential.
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-[1992px] h-[821px] absolute left-[790px] bottom-[-60px] z-10 overflow-hidden rounded-xl">
            <Image
              ref={img2Ref}
              src={investingImg2}
              alt="Investing 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="w-[913px] h-[414px] absolute left-[2350px] bottom-[360px] z-20 overflow-hidden rounded-xl">
            <Image
              ref={img3Ref}
              src={investingImg3}
              alt="Investing 3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[1992px] h-[821px] absolute left-[3690px] bottom-[-60px] z-10 overflow-hidden rounded-xl">
            <Image
              ref={img4Ref}
              src={investingImg4}
              alt="Investing 3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-[-10px] left-[2950px]">
            <div className="w-[603px]">
              <h1
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #996B55, #E5AB8E, #E5AB8E, #996B55)",
                }}
              >
                Spaciousness & living comfort
              </h1>
            </div>

            <div className="w-[657px] text-[24px] mt-[35px]">
              The apartments at Rezidencia Jurská are designed to provide you
              with what is often missing in urban living - airiness, logical
              layout, and enough space for every aspect of your life.
            </div>
          </div>

          <div className="w-[913px] h-[414px] absolute left-[5350px] bottom-[160px] z-20 overflow-hidden rounded-xl">
            <Image
              ref={img5Ref}
              src={investingImg5}
              alt="Investing 3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-[450px] left-[6400px]">
            <div className="w-[603px]">
              <h1
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #996B55, #E5AB8E, #E5AB8E, #996B55)",
                }}
              >
                Smart & Powerful Technologies{" "}
              </h1>
            </div>

            <div className="w-[657px] text-[24px] mt-[35px]">
              In the apartments of the Jurská Residence, technology is not
              focused on effect, but on functionality, savings and comfort. The
              high technological standard is in symbiosis with the TapHome smart
              home system. And everything is standard.
            </div>
          </div>

          <div className="w-[853px] h-[480px] absolute left-[6700px] bottom-[-160px] z-20 overflow-hidden rounded-xl">
            <Image
              ref={img6Ref}
              src={investingImg6}
              alt="Investing 3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[1992px] h-[821px] absolute left-[7200px] bottom-[-60px] z-10 overflow-hidden rounded-xl">
            <Image
              ref={img7Ref}
              src={investingImg7}
              alt="Investing 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestingSection;
