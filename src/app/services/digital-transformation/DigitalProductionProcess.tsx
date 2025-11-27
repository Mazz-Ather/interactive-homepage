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
  const [activeStep, setActiveStep] = useState<number>(2);

 const steps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Planning',
    description: 'We start with deep consultation to understand challenges, define KPIs, build architecture, and map user flows.',
  },
  {
    id: 2,
    number: '02',
    title: 'Design & Development',
    description: 'We create photorealistic immersive concepts, build custom VR/AR applications, and integrate web, DB, and systems.',
  },
  {
    id: 3,
    number: '03',
    title: 'Testing, Deployment & Support',
    description: 'We run rigorous security and usability tests, deploy the solution, and optimize it using real performance data.',
  },
];


  // Auto-change active step every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 3) return 1;
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative font-[Cairo] min-h-screen w-full bg-black py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm z-0 bg-black/20"
      >
        <source src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985516/servide-bg_npenqb.mp4" type="video/mp4" />
      </video>

      {/* Top Gradient Overlay (Blurry) */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-sm z-[1]"></div>
      
      {/* Bottom Gradient Overlay (Blurry) */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-sm z-[1]"></div>

      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl z-[2]"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl z-[2]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-4 z-[999] bring-to-front contrast-125">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <div className="bg-gradient-to-r from-[#B54CBE] via-[#065FE5] to-[#065FE5] bg-clip-text text-transparent">
          Our Production
            </div>
            <div className="bg-gradient-to-r from-[#B54CBE] via-[#065FE5]  to-[#065FE5] bg-clip-text text-transparent">
Services
            </div>
          </h1>

          <p className="text-gray-100 text-sm md:text-[16px] max-w-lg">
            We follow a disciplined and creative process to ensure a smooth workflow
            and a high-quality result.
          </p>

<div className='pt-3'>
             <Link href="/contact" className="relative group max-w-sm">
                  <div className="group relative w-[230px] px-11 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent border border-white   rounded-md h-[51px] overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                    <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Get Start With Us  →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                  </div>
                </Link>
</div>
        </div>

        {/* Right Content - Process Steps */}
        <div className="relative py-8 max-w-md mx-auto w-full">
          {steps.map((step, index) => {
            const isActive = step.id === activeStep;
            const isPrev = step.id === activeStep - 1;
            const isNext = step.id === activeStep + 1;

            return (
              <div key={step.id} className="relative">
                {/* Arrow between card 1 and 2 (LEFT SIDE) */}
                {step.id === 1 && (
                  <div className="absolute -left-10 md:-left-4 z-20 pointer-events-none"
                    style={{ 
                      bottom: '-32px',
                      opacity: step.id === activeStep ? 1 : 0.5,
                      transition: 'all 0.5s ease'
                    }}
                  >
                    <Image
                      src="/v1.png"
                      alt="Left Arrow"
                      width={50}
                      height={50}
                      className="w-5  h-auto"
                    />
                  </div>
                )}

                {/* Arrow between card 2 and 3 (RIGHT SIDE) */}
                {step.id === 2 && (
                  <div className="absolute -right-10 md:-right-9 z-20 pointer-events-none"
                    style={{ 
                      bottom: '-32px',
                      opacity: step.id === activeStep ? 1 : 0.5,
                      transition: 'all 0.5s ease rotate-[1.2]'
                    }}
                  >
                    <Image
                      src="/v2.png"
                      alt="Right Arrow"
                      width={50}
                      height={50}
                      className="w-4 h-auto"
                    />
                  </div>
                )}

                <div
                  className={`
                    relative rounded-3xl py-2 px-6 transition-all duration-500 cursor-pointer mb-6
                    ${
                      isActive
                      ? 'bg-gradient-to-br from-[#205CE0]  to-[#B44BBD] shadow-2xl shadow-blue-500/40 scale-[1.02] translate-x-4'
                        : 'bg-gradient-to-br from-gray-800/60 via-gray-900/50 to-gray-800/40 backdrop-blur-sm border-0'
                    }
                    hover:shadow-xl
                  `}
                  onClick={() => setActiveStep(step.id)}
                  style={{
                    border: isActive ? '1px solid rgba(147, 51, 234, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                    minHeight: '130px',
                  }}
                >
                  <div className="flex gap-5 items-start">
                    {/* Number */}
                    <div
                      className={`
                        text-7xl md:text-9xl font-bold transition-all duration-500 leading-none
                        ${
                          isActive
                            ? 'text-white/95 drop-shadow-lg'
                            : 'text-gray-700/50'
                        }
                      `}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y- pt-3">
                      <h3
                        className={`
                          text-xs md:text-sm lg:text-lg font-bold tracking-widest transition-all duration-500
                          ${
                            isActive
                              ? 'text-white'
                              : 'text-gray-500'
                          }
                        `}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`
                          text-sm md:text-base lg:text-md transition-all duration-500 leading-relaxed
                          ${
                            isActive
                              ? 'text-white/95'
                              : 'text-gray-600'
                          }
                        `}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Gradient overlay for active card (subtle inner glow) */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-400/20 via-transparent to-pink-400/20 pointer-events-none"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalProductionProcess;