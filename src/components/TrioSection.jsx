'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import trioImg1 from '../../public/trioImg3full.jpg'
import trioImg2 from '../../public/t2.jpg'
import trioImg3 from '../../public/t3.jpg'
import blackArrow from '../../public/black-arrow.svg'
import gsap from 'gsap'

const panels = [
  {
    img: trioImg1,
    title: 'Ecology',
  },
  {
    img: trioImg2,
    title: 'Nature',
  },
  {
    img: trioImg3,
    title: 'Sustainability',
  },
]

const TrioSection = () => {
  const panelRefs = useRef([])
  const contentRefs = useRef([])
  const blurZoneRefs = useRef([])

  const handleMouseEnter = (index) => {
    panelRefs.current.forEach((el, i) => {
      if (!el) return

      if (i === index) {
        gsap.to(el, { width: '100vw', opacity: 1, duration: 0.6, ease: 'power3.out' })
        gsap.to(contentRefs.current[i], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: 'power3.out',
        })
        gsap.to(blurZoneRefs.current[i], {
          backdropFilter: 'blur(8px)',
          duration: 0.4,
          ease: 'power2.out',
        })
      } else {
        gsap.to(el, { width: 0, opacity: 0, duration: 0.6, ease: 'power3.out' })
        gsap.to(contentRefs.current[i], { opacity: 0, y: 30, duration: 0.4 })
        gsap.to(blurZoneRefs.current[i], {
          backdropFilter: 'blur(0px)',
          duration: 0.4,
          ease: 'power2.out',
        })
      }
    })
  }

  const handleMouseLeave = () => {
    panelRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.to(el, { width: '33.33vw', opacity: 1, duration: 0.6, ease: 'power3.inOut' })
      gsap.to(contentRefs.current[i], { opacity: 0, y: 30, duration: 0.4 })
      gsap.to(blurZoneRefs.current[i], {
        backdropFilter: 'blur(0px)',
        duration: 0.4,
        ease: 'power2.inOut',
      })
    })
  }

  return (
    <div
      className="flex w-full h-screen overflow-hidden font-sans"
      onMouseLeave={handleMouseLeave}
    >
      {panels.map((panel, idx) => (
        <div
          key={idx}
          ref={(el) => (panelRefs.current[idx] = el)}
          onMouseEnter={() => handleMouseEnter(idx)}
          className="relative w-[33.33vw] h-full overflow-hidden transition-all duration-700 ease-in-out cursor-pointer"
        >
          <img
            src={panel.img.src}
            alt={panel.title}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />

          <div
            ref={(el) => (blurZoneRefs.current[idx] = el)}
            className="relative z-20 flex flex-col justify-center items-center text-white h-full px-6 text-center max-w-md mx-auto gap-10 pointer-events-none"
            style={{ backdropFilter: 'blur(0px)' }}
          >
            <h2 className="text-[80px] font-bold">{panel.title}</h2>

            <div
              ref={(el) => (contentRefs.current[idx] = el)}
              className="opacity-0 translate-y-8 transition-all duration-500 flex flex-col justify-center items-center"
            >
              <p className="text-[20px] leading-relaxed w-[452px] text-center mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="w-[181.92px] h-[64px] bg-[linear-gradient(to_right,_#996B55,_#E5AB8E,_#E5AB8E,_#996B55)] rounded-full flex items-center justify-center gap-[28px] text-[#4D3333] font-semibold text-[18px] shadow-md pointer-events-auto">
                Learn more
                <Image src={blackArrow} width={25} height={25} alt="Arrow" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TrioSection
