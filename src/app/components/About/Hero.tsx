'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4" // replace with your video path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-8 md:px-16 text-left text-white"
      >
  <div className="text- lg:pt-11 mb-2 max-w-2xl">
        <p className="text-lg uppercase tracking-widest mb- text-gray-100 font-bold ">About Us</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <div className="bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent">
                  Your Partner in
                </div>
                <div className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent">
                   Immersive Solutions
                </div>
              </h1>
            </div>

        <p className="text-base md:text-md text-gray-300  max-w-lg leading-">
          At AO Interactive, we are pioneers in creating custom immersive solutions in Saudi Arabia.
          Since our founding, we have been committed to helping businesses and government entities
          transform their operations, engage their audiences, and solve complex challenges through
          the power of interactive technology.
        </p>
      </motion.div>
    </section>
  )
}

export default AboutHero
