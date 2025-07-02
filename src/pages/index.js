import HeroSection from "@/home/HeroSection";
import IntrestedSection from "@/home/IntrestedSection";
import InvestingSection from "@/home/InvestingSection";
import MouseSection from "@/home/MouseSection";
import ProjectSection from "@/home/ProjectSection";
import Navbar from "@/shared/Navbar";
// import heroSectionBgVideo from "../../public/pa";

export default function Home() {
  return (
    <>
      <div className="relative h-[921px] w-full overflow-hidden">
        {/* Video background */}
        <video
          src="/palm-hero-section-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Gradient overlay fading in from bottom */}
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-gradient-to-b from-transparent via-[#b3d9ff33] to-[#06162e]" />

        {/* Navbar and content */}
        <div className="relative z-10 pl-[62px]">
          <Navbar />
        </div>
        <div className="relative z-10 px-[62px]">
          <HeroSection />
        </div>
      </div>

      <div className="">
        <MouseSection />
      </div>
 
      <div className="bg-[#06162e] py-[300px]">
        <InvestingSection />
      </div>

      <div className="py-[224px] bg-[#06162e]">
        <IntrestedSection />
      </div>

      {/* <div>
        <ProjectSection />
      </div> */}
    </>
  );
}

{
  /* <div className="w-[1920px] h-[1080px] flex-shrink-0 overflow-hidden rounded-xl">
            <Image
              src={investingImg4}
              alt="Investing 4"
              className="w-full h-full object-cover"
            />
          </div> */
}
{
  /* <div className="w-[1174px] h-[660px] flex-shrink-0 overflow-hidden rounded-xl">
            <Image
              src={investingImg5}
              alt="Investing 5"
              className="w-full h-full object-cover"
            />
          </div> */
}
{
  /* <div className="w-[853.33px] h-[480px] flex-shrink-0 overflow-hidden rounded-xl">
            <Image
              src={investingImg6}
              alt="Investing 6"
              className="w-full h-full object-cover"
            />
          </div> */
}
{
  /* <div className="w-[2130.1799px] h-[1198.24px] flex-shrink-0 overflow-hidden rounded-xl">
            <Image
              src={investingImg7}
              alt="Investing 7"
              className="w-full h-full object-cover"
            />
          </div> */
}

// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import investingImg1 from "../../public/investing-hs-img-1.jpg";
// import investingImg2 from "../../public/investing-hs-img-2.svg";
// import investingImg3 from "../../public/investing-hs-img-3.png";

// gsap.registerPlugin(ScrollTrigger);

// const InvestingSection = () => {
//   const containerRef = useRef(null);
//   const circleRef = useRef(null);
//   const imagesWrapperRef = useRef(null);
//   const imgRefs = [useRef(null), useRef(null), useRef(null)];

//   useLayoutEffect(() => {
//     const scrollWidth = 12000 * 2;
//     const scrollDistance = scrollWidth - window.innerWidth;

//     const ctx = gsap.context(() => {
//       // Slide track
//       gsap.to(imagesWrapperRef.current, {
//         x: -scrollDistance,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 20%",
//           end: `+=${scrollDistance}`,
//           scrub: true,
//           pin: true,
//         },
//       });

//       // Circle scroll
//       gsap.to(circleRef.current, {
//         x: scrollDistance,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 20%",
//           end: `+=${scrollDistance}`,
//           scrub: true,
//         },
//       });

//       // Animate each image independently
//       imgRefs.forEach((ref, i) => {
//         const el = ref.current;

//         const triggerStart =
//           i === 0 ? "left " : i == 1 ? `left+=${1000 * i}` : i == 2 ? `left+=${900 * i}` : "";

//         ScrollTrigger.create({
//           trigger: el,
//           start: triggerStart,
//           end: "+=300",
//           scrub: true,
//           toggleClass: { targets: el, className: "active-image" },
//           onEnter: () => {
//             gsap.to(el, {
//               x: -window.innerWidth,
//               scale: 0.2,
//               opacity: 0,
//               duration: 2, // 🔁 slower than 0.8
//               ease: "power4.inOut", // 🔁 smoother
//             });
//           },
//           onLeaveBack: () => {
//             gsap.to(el, {
//               x: 0,
//               scale: 1,
//               opacity: 1,
//               duration: 2,
//               ease: "power4.out",
//             });
//           },
//         });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="relative">
//       <div ref={containerRef} className="relative h-screen">
//         {/* Gradient Line */}
//         <div
//           className="absolute top-[60%] w-full h-[2px] z-50"
//           style={{
//             background:
//               "linear-gradient(140deg, #996B55 13.4%, #E5AB8E 39.9%, #E5AB8E 61.87%, #996B55 89.13%)",
//           }}
//         />
//         {/* Circle */}
//         <div
//           ref={circleRef}
//           className="absolute top-[56%] left-0 w-[78px] h-[78px] bg-[linear-gradient(to_right,_#5C3A29,_#996B55,_#E5AB8E,_#996B55,_#5C3A29)] border border-black rounded-full z-50"
//         />
//         {/* Images */}
//         <div
//           ref={imagesWrapperRef}
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 flex gap-6 px-[100px] z-0"
//         >
//           <div
//             ref={imgRefs[0]}
//             className="absolute left-[660px] bottom-[-200px] w-[853.33px] h-[480px] z-[20] overflow-hidden"
//           >
//             <Image
//               src={investingImg1}
//               alt="Investing 1"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div
//             ref={imgRefs[1]}
//             className="absolute left-[1290px] bottom-[-80px] w-[1992px] h-[721px] z-[10] overflow-hidden"
//           >
//             <Image
//               src={investingImg2}
//               alt="Investing 2"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div
//             ref={imgRefs[2]}
//             className="absolute left-[2900px] top-[-800px] w-[913px] h-[514px] z-[10] overflow-hidden"
//           >
//             <Image
//               src={investingImg3}
//               alt="Investing 3"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestingSection;
