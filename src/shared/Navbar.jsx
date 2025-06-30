// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import logo from "../../public/palm-logo.svg";
// import cartIcon from "../../public/cart-icon.svg";
// import downVector from "../../public/down-vector.svg";
// import gsap from "gsap";

// const Navbar = () => {
//   const buttonRef = useRef(null);
//   const textRef = useRef(null);
//   const arrowDivRef = useRef(null);
//   const arrowRef = useRef(null);

//   useEffect(() => {
//     const button = buttonRef.current;
//     const text = textRef.current;
//     const arrowDiv = arrowDivRef.current;
//     const arrow = arrowRef.current;

//     const handleEnter = () => {
//       gsap.fromTo(
//         text,
//         { color: "white" },
//         { color: "black", duration: 0.3, ease: "none" }
//       );

//       gsap.fromTo(
//         arrowDiv,
//         { width: 0 },
//         { width: 250, duration: 0.3, ease: "none" }
//       );

//       gsap.fromTo(arrow, { rotate: 0 }, { rotate: 49, duration: 0.4 });
//     };

//     const handleLeave = () => {
//       gsap.fromTo(
//         text,
//         { color: "black" },
//         { color: "white", duration: 0.3, ease: "none" }
//       );

//       gsap.fromTo(
//         arrowDiv,
//         { width: 250 },
//         { width: 0, duration: 0.5, ease: "none" }
//       );

//       gsap.fromTo(arrow, { rotate: 49 }, { rotate: 0, duration: 0.4 });
//     };

//     button.addEventListener("mouseenter", handleEnter);
//     button.addEventListener("mouseleave", handleLeave);

//     return () => {
//       button.removeEventListener("mouseenter", handleEnter);
//       button.removeEventListener("mouseleave", handleLeave);
//     };
//   }, []);

//   return (
//     <div className="">
//       <div className="2xl:flex 2xl:justify-between items-center">
//         <div className=" 2xl:relative">
//           <Image src={logo} width={300} height={336} />
//         </div>

//         <div className="2xl:flex 2xl:gap-14 ">
//           <div className="2xl:text-[20px] 2xl:text-white flex  2xl:gap-16">
//             <div>Home</div>
//             <div className="2xl:flex 2xl:gap-3 ">
//               <div className="">Product</div>
//               <div className="2xl:flex 2xl:items-center pb-2">
//                 <Image src={downVector} width={18} height={10} />
//               </div>
//             </div>
//             <div>Testimonial</div>
//             <div>About</div>
//             <div>Blog</div>
//           </div>

//           <div className="flex gap-6">
//             <div>
//               <Image src={cartIcon} width={26} height={19} />
//             </div>

//             <div className="relative">
//               <div
//                 ref={buttonRef}
//                 className="flex overflow-hidden border-2 border-white 2xl:rounded-[76px] relative cursor-pointer"
//               >
//                 <div className="bg-transparent 2xl:w-[151px] 2xl:h-[44px] flex items-center justify-center z-20">
//                   <span
//                     ref={textRef}
//                     className="text-white 2xl:text-[16px] font-medium z-30"
//                   >
//                     Login
//                   </span>
//                 </div>

//                 <div
//                   ref={arrowDivRef}
//                   className="bg-[#fdfdfd] h-[56px] absolute right-0 z-10 rounded-l-[10px] overflow-hidden"
//                 >
//                   <div className="absolute right-[18px] h-full flex items-center justify-center pointer-events-none"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import hamburger from "../../public/hamburger-icon.svg";
import logo from "../../public/palm-logo.svg";
import bytyLogo from "../../public/byty-icon.svg";
import phoneLogo from "../../public/phone-icon.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <div className="flex gap-[8px] items-center border-r border-r-[#5e5e5e] pr-3 w-[203px] h-[80px]">
          <div>
            <Image src={hamburger} width={24} height={24} alt="menu" />
          </div>
          <div className="text-[16px] text-[#FFFFFF] font-extralight opacity-50">MENU</div>
        </div>

        <Image src={logo} width={87} height={56} alt="logo" />

        <div className="flex gap-[29px] items-center justify-center border-l border-l-[#5e5e5e] pl-3 w-[285px] h-[80px]">
          <div className="flex gap-[8px] w-[123px] pl-4">
            <div>
              <Image src={bytyLogo} width={24} height={24} alt="byty" />
            </div>
            <div className="text-[16px] text-[#FFFFFF] font-extralight opacity-50">BYTY</div>
          </div>

          <div className="flex gap-[8px] w-[162px]">
            <div>
              <Image src={phoneLogo} width={24} height={24} alt="kontakt" />
            </div>
            <div className="text-[16px] text-[#FFFFFF] font-extralight opacity-50">KONTAKT</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[0] left-[-10vw] w-[120vw] h-[1px] bg-[#5e5e5e]" />
    </div>
  );
};

export default Navbar;
