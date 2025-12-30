'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

const DigitalProductionProcess: React.FC = () => {
  const [centerIndex, setCenterIndex] = useState<number>(1);

 const steps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Strategy',
    description: ' We start with an in-depth consultation to understand your business challenge and define key performance indicators (KPIs)',
  },
  {
    id: 2,
    number: '02',
    title: 'Concept & Design',
    description: 'Our team develops a comprehensive solution architecture, including wireframes, user flows, and a visual design for the immersive experience',
  },
  {
    id: 3,
    number: '03',
    title: 'Development and Integration',
    description: ' We build the custom VR/AR application and, if needed, integrate it with a web portal, database, and other existing systems',
  },
  {
    id: 4,
    number: '04',
    title: 'Testing & Deployment',
    description: 'The solution undergoes rigorous testing to ensure it is robust, secure, and user-friendly before final deployment',
  },
  {
    id: 5,
    number: '05',
    title: 'Support & Optimization',
    description: 'We provide ongoing support and work with you to analyze data and optimize the solution for maximum impact',
  },
];


  // Auto-scroll: move to next card every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  // Create extended array for seamless infinite scroll
  const getExtendedSteps = () => {
    const extended:any[] = [];
    // We need enough cards to show prev, center, next at all times
    // Repeat the array 3 times to handle wrapping
    for (let repeat = 0; repeat < 5; repeat++) {
      steps.forEach((step, idx) => {
        extended.push({
          ...step,
          uniqueKey: `${repeat}-${idx}`,
          actualIndex: idx,
        });
      });
    }
    return extended;
  };

  const extendedSteps = getExtendedSteps();
  
  // Calculate the offset based on centerIndex
  // We start from the middle repeat (repeat = 1) and offset by centerIndex
  const baseOffset = steps.length; // Start from second repetition
  const scrollOffset = baseOffset + centerIndex - 1; // -1 to show prev card at top

  return (
    <section className="relative font-[Cairo] h-[90vh] w-full bg-black px-6 md:px-12 lg:px-20 overflow-hidden">
     
    {/* Top Gradient Overlay - FULL WIDTH */} 
<div className="absolute top-0 left-0 right-0 w-full h-1/2 bg-gradient-to-b from-black via-black/50 to-transparent z-[1] pointer-events-none"></div> 
 
{/* Bottom Gradient Overlay - FULL WIDTH */} 
<div className="absolute bottom-0 left-0 right-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent z-[15] pointer-events-none"></div> 

{/* Background gradient effects */} 
<div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl z-[2] pointer-events-none"></div> 
<div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl z-[2] pointer-events-none"></div>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full !h-[90vh] -my-11 object-cover opacity-40 blur-sm z-0 bg-black/20"
      >
        <source src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985516/servide-bg_npenqb.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-4 z-[999] bring-to-front contrast-125">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <div className="bg-gradient-to-r from-[#B54CBE]  to-[#065FE5] bg-clip-text text-transparent">
              Our Production
            </div>
            <div className="bg-gradient-to-r from-[#B54CBE]  to-[#065FE5] bg-clip-text text-transparent">
              Services
            </div>
          </h1>

          <p className="text-gray-100 text-sm md:text-[18px] max-w-lg">
            We follow a disciplined and creative process to ensure a smooth workflow
            and a high-quality result.
          </p>

          <div className='pt-3'>
            <Link href="/contact" className="relative group max-w-sm">
              <div className="group relative w-[230px] px-11 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent border border-[#B54CBE] rounded-md h-[51px] overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE]">
                <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Get Start With Us →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Content - Process Steps with Smooth Scrolling */}
        <div className="relative   max-w-[560px] mx-auto w-full">
          <div className="relative -mt-20 h-[590px]">
            {/* Scrolling container */}
            <div
              className="relative w-full bg-gren-500 px-5"
              style={{
                transform: `translateY(${-scrollOffset * 166}px)`,
                transition: 'transform 1.2s cubic-bezier(0.45, 0, 0.15, 1)',
              }}
            >
              {extendedSteps.map((step, arrayIndex) => {
                // Determine if this card is in one of the 3 visible positions
                const positionIndex = arrayIndex - scrollOffset;
                const isVisible = positionIndex >= 0 && positionIndex <= 2;
                const isCenter = positionIndex === 1;
                
                return (
                  <div 
                    key={step.uniqueKey}
                    className="w-full mb-6  relative"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      pointerEvents: isVisible ? 'auto' : 'none',
                      transition: 'opacity 0.8s cubic-bezier(0.45, 0, 0.15, 1)',
                    }}
                  >
                    {/* Arrow between first and second visible card (LEFT SIDE) */}
                    {isVisible && positionIndex === 0 && (
                      <div 
                        className="absolute  -left-10 md:-left-0 z-20 pointer-events-none"
                        style={{ 
                          bottom: '-32px',
                          opacity: isCenter ? 1 : 0.5,
                          transition: 'all 0.8s cubic-bezier(0.45, 0, 0.15, 1)'
                        }}
                      >
                    <Image
                      src="/v1.png"
                      alt="Left Arrow"
                      width={50}
                      height={50}
                      className="w-6  h-auto"
                    />
                      </div>
                    )}

                    {/* Arrow between second and third visible card (RIGHT SIDE) */}
                    {isVisible && positionIndex === 1 && (
                      <div 
                        className="absolute -right-10 md:-right-5 bg-ed-500 p-2 z-20 pointer-events-none"
                        style={{ 
                          bottom: '-32px',
                          opacity: isCenter ? 1 : 0.5,
                          transition: 'all 0.8s cubic-bezier(0.45, 0, 0.15, 1)'
                        }}
                      >
                        <Image
                          src="/v2.png"
                          alt="Right Arrow"
                          width={50}
                          height={50}
                          className="w-5  h-auto"
                        />
                      </div>
                    )}

                    <div
                      className={`
                        relative rounded-[20px] py-4 px-6 cursor-pointer
                        ${
                          isCenter
                            ? 'bg-gradient-to-b from-[#B44BBD] via-[# to-[#205CE0] !ml-6'
                            : 'bg-[#1a1a1a]/40 backdrop-blur-sm'
                        }
                      `}
                      onClick={() => {
                        if (positionIndex === 0) {
                          setCenterIndex((centerIndex - 1 + steps.length) % steps.length);
                        } else if (positionIndex === 2) {
                          setCenterIndex((centerIndex + 1) % steps.length);
                        }
                      }}
                      style={{
                        border: isCenter ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
                        minHeight: '130px',
                        transform: isCenter ? 'scale(1)' : 'scale(0.95)',
                        transition: 'all 1s cubic-bezier(0.45, 0, 0.15, 1)',
                      }}
                    >
                      <div className="flex gap-4 items-start">
                        {/* Number */}
                        <div
                          className={`
                            text-[80px] md:text-[100px] lg:text-[120px] font-black leading-none
                            ${
                              isCenter
                                ? 'text-white'
                                : 'text-white/20'
                            }
                          `}
                          style={{
                            fontFamily: 'Cairo, sans-serif',
                            fontWeight: 900,
                            transition: 'all 1s cubic-bezier(0.45, 0, 0.15, 1)',
                          }}
                        >
                          {step.number}
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-2 pt-2">
                          <h3
                            className={`
                              text-sm md:text-base lg:text-xl font-bold tracking-wider uppercase
                              ${
                                isCenter
                                  ? 'text-white font-[24px]   '
                                  : 'text-gray-500'
                              }
                            `}
                            style={{
                              transition: 'all 1s cubic-bezier(0.45, 0, 0.15, 1)',
                            }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`
                              text-xs md:text-sm lg:text-base leading-relaxed
                              ${
                                isCenter
                                  ? 'text-white/90'
                                  : 'text-gray-600'
                              }
                            `}
                            style={{
                              transition: 'all 1s cubic-bezier(0.45, 0, 0.15, 1)',
                            }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalProductionProcess;