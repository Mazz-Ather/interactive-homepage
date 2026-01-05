'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const AboutHero = () => {
  const { scrollToContactSection } = useSmoothScroll();
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
 <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 via-black/90 to-transparent" /> 
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-8 md:px-16 text-left text-white"
      >
        <div className="lg:pt-11 mb-4 max-w-2xl">
          <p className="text-lg uppercase tracking-widest text-gray-100 font-bold">About Us</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <div className="bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent">
              Your Partner in
            </div>
            <div className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent">
              Immersive Solutions
            </div>
          </h1>
        </div>

        <p className="text-base md:text-md text-gray-300 max-w-lg">
          At AO Interactive, we are pioneers in creating custom immersive solutions in Saudi Arabia.
          Since our founding, we have been committed to helping businesses and government entities
          transform their operations, engage their audiences, and solve complex challenges through
          the power of interactive technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          {/* Get a Quote Button */}
       <div className="text-center">
                <div onClick={() => scrollToContactSection()} className="relative group cursor-pointer">
                  <div className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent border border-white   rounded-md h-[51px] overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                    <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">See More details  →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                  </div>
                </div>
              </div>

          {/* Clutch Review Button */}
          <a
            href="https://clutch.co/profile/your-company"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[230px] h-[62px]  border border-white   rounded-full border border-gray-600 bg-[#000000A8] backdrop-blur-sm transition-all duration-300 hover:border-[#854CBE] p-4"
          >
            <div className="grid grid-cols-2 grid-rows-2 h-full text-left">
              {/* Top Left: Reviewed on */}
              <div className="text-[11px] -mt-2 ml-3 text-gray-300 uppercase tracking-widest flex items-start">
                Reviewed on
              </div>

              {/* Top Right: Stars */}
              <div className="flex justify-end items-start -mt-3  text-[#B54CBE] text-xl ">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>

              {/* Bottom Left: Rating */}
              <div className="text-xs ml-4 -mb-1  flex items-end">  <Image
                  src="/images/clutch.png"  // place clutch.png in /public
                  alt="Clutch"
                  width={40}
                  height={10}
                  className="h-5 w-auto"
                /></div>

              {/* Bottom Right: Clutch logo */}
              <div className="flex justify-end text-xs text-gray-400 -mb-1 mr-1 items-end">
              4.8/5 Reviews
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutHero
