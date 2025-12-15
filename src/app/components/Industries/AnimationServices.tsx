'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ServiceItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const AnimationServices = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
const services: ServiceItem[] = [
  {
    id: 1,
    image: '/images/icon14.png',
    title: 'The Challenge',
    description:
      'Communicating complex ideas, spaces, or products in a way that is clear, engaging, and easy for audiences to understand.',
  },
  {
    id: 2,
    image: '/images/icon13.png',
    title: 'The Solution',
    description:
      'We design tailored digital experiences and visual assets that simplify complexity and align with your business goals.',
  },
  {
    id: 3,
    image: '/images/icon12.png',
    title: 'The Result',
    description:
      'Clear, compelling experiences that build trust, drive engagement, and help your audience make confident decisions.',
  },
];


  return (
    <section className="relative py-11 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985516/servide-bg_npenqb.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      {/* Top and Bottom Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-black to-transparent z-[5]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black to-transparent z-[5]"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
           <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
  How We Help Businesses
</span>
<br />
<span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
  Communicate, Engage & Convert
</span>

          </h1>
         <p className="mx-auto max-w-3xl text-base text-gray-300 md:text-lg lg:text-xl">
  We partner with businesses across industries to design digital experiences that communicate value, engage audiences, and drive real-world results.
</p>

        </motion.div>

        {/* Circles Container */}
        <div className="relative flex w-full items-center justify-center">
          <div className="flex items-center justify-center gap-0">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              
              // Overlap styling
              let positionClass = '';
              
              if (index === 0) {
                positionClass = '-mr-16 md:-mr-20 lg:-mr-24 xl:-mr-28';
              } else if (index === 2) {
                positionClass = '-ml-16 md:-ml-20 lg:-ml-24 xl:-ml-28';
              }

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`relative ${positionClass}`}
                  style={{ zIndex: isActive ? 40 : 10 }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Circle with gradient background for active */}
                  <div
                    className={`relative flex cursor-pointer items-center justify-center rounded-full transition-all duration-500 ${
                      isActive
                        ? 'border-2 border-purple-500/80 bg-gradient-to-br from-[#B54CBE]/50 to-[#065FE5]/50'
                        : 'border border-purple-500/30 bg-transparent'
                    }`}
                    style={{
                      width: 'clamp(280px, 25vw, 380px)',
                      height: 'clamp(280px, 25vw, 380px)',
                      boxShadow: isActive
                        ? '0 0 40px rgba(168, 85, 247, 0.4), inset 0 0 60px rgba(168, 85, 247, 0.1)'
                        : '0 0 20px rgba(168, 85, 247, 0.2)',
                      backdropFilter: isActive ? 'blur(10px)' : 'blur(5px)',
                    }}
                  >
                    <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 text-center md:px-8 lg:px-10">
                      {/* Image */}
                     <motion.div
  animate={{
    scale: isActive ? 1.1 : (index === 0 ? 1.6 : 1) // 👈 bigger when not active too
  }}
  transition={{ duration: 0.3 }}
  className="mb-4 flex items-center justify-center md:mb-5"
  style={{
    width: index === 0 ? 'clamp(70px, 7vw, 85px)' : 'clamp(48px, 5vw, 64px)', // 👈 bigger base size
    height: index === 0 ? 'clamp(70px, 7vw, 95px)' : 'clamp(48px, 5vw, 64px)',
  }}
>
  <Image
    src={service.image}
    alt={service.title}
    width={index === 0 ? 105 : 64}  // 👈 larger width/height for first one
    height={index === 0 ? 105 : 64}
    className={`h-full w-full object-contain transition-all duration-300 ${
      isActive ? 'brightness-110 opacity-100' : 'brightness-90 opacity-70'
    }`}
  />
</motion.div>

                      {/* Title - Always Visible */}
                      <h3
                        className={`mb-2 font-bold transition-all duration-300 ${
                          isActive ? 'text-white' : 'text-gray-300'
                        }`}
                        style={{
                          fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)',
                        }}
                      >
                        {service.title}
                      </h3>

                      {/* Description - Only for Active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <p 
                              className="leading-relaxed text-gray-200"
                              style={{
                                fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                              }}
                            >
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationServices;