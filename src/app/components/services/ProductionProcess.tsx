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

const ProductionProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps: ProcessStep[] = [
    {
      id: 1,
      number: '01',
      title: 'CONCEPT & SCRIPT:',
      description: 'We work with you to finalize the concept and script, ensuring a clear vision for the final output.',
    },
    {
      id: 2,
      number: '02',
      title: 'ASSET CREATION:',
      description: 'Our 3D artists build and texture all the necessary characters, environments, and props.',
    },
    {
      id: 3,
      number: '03',
      title: 'ANIMATION & RIGGING:',
      description: 'We bring your story to life with smooth character animations and camera movements.',
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
                  <div className="absolute -left-10 md:-left-12 z-20 pointer-events-none"
                    style={{ 
                      bottom: '-32px',
                      opacity: step.id === activeStep ? 1 : 0.5,
                      transition: 'all 0.5s ease'
                    }}
                  >
                    <Image
                      src="data:image/jpeg;base64,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"
                      alt="Left Arrow"
                      width={50}
                      height={50}
                      className="w-10 h-10 md:w-12 md:h-12 rotate90"
                    />
                  </div>
                )}

                {/* Arrow between card 2 and 3 (RIGHT SIDE) */}
                {step.id === 2 && (
                  <div className="absolute -right-10 md:-right-12 z-20 pointer-events-none"
                    style={{ 
                      bottom: '-32px',
                      opacity: step.id === activeStep ? 1 : 0.5,
                      transition: 'all 0.5s ease'
                    }}
                  >
                    <Image
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhISBxMQFhMSExISFRYQEh0WFRUVFhEWFxUSExUYHSggGB0lGxUVITchJSksLi4uFx8zODM4NygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgYDBAUBB//EADYQAQABAwICBgcGBwAAAAAAAAABAgMEBREhMQYSQVFhcRMiMjOBkaE0cpKxwdEUFkJSYsLh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APtIAAAAAAAAAAAAAAAAREzyOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADyeEPQHAjpDcx82acin1d9vHzd/HyLOZa61md4/JpahptjOo9eOPZMK5RVl6Fl9vV+kwC41UzTLxDBzLOfY61qfOO5kqpmmQeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANfNxLWZZmm7Hl4NgBT5jL0LM3p36v0mFs0/Os6hY3t8+2O5HLxreVZmm7Cq10ZOhZ29G/V+kwC41U9WXiGBmWs/Hiq38Y7pZKo2kHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBmYtvLszTdhnAVC1XkaFqG079Xf4TC4WL1vLsRVanhLT1LBt51iYr59kuDpGZd0rNm1k+zM7AtM8Bkq2rp3pYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHI1/TYyrPXt+1T9XXAcbozqU3aPRX/ajlu7ddO0qnrWNVp2dF2xwiZ34d60YOTRm4cVU9scfMEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaupYtOXiVU1d3DzcborlVWMqqzc7d9vOFjVbUI/gdfprp5TMT9eILXcjapFkusYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACt9K6drtuYWRwekFucjNsUU86qoj4b8QWGv2YQTuygAAAAAAAAAAAAAAAAAAAAAAACUW5nmDymOtL2qnqwwXsnFwfeVetV2b71T5UstNyblETMbeAAAAAAERM8gGni2PT6hN65ypiaaP8Aar9Pm3Lvo7VvfImIjx/JG3cm7TvEbU9keHj3eQJzO8vAAAAAAAAAAAAAAAAAAAAAAnhzSmKLdG92YiI5zM7RHnKv9ItRv4l2iLPDaYq3nlO08nT03VMXVbG1W3WmNqqKuO/ft3wDDkdIcO3V1cWKrlX+Eer+Kf03a3pdZ1CecWqJ/t9rb708fls61rT8fH+z0xCGXlWsO11r3IGDB0yziTvxqqnnVVxlvxEy4tXSfHp93RVP0YqukWbd+zWfxbz+wLB1Knvo5VucnpBkeztT5Ux+qM6drF73t2r8U/kCz+jiOcsVd7Gte8rojzqiFc/l7Jr97cZrfRqzHvapkHRva3plnnXEz3UxM/8AGrOu38mrbTbU/eucI+UfuzWNFwrM8Kd/Nv0UUURtRER5A0sbCu1XIrz6prr7I/pp8o5N8AAAAAAAAAAAAAAAAAAAAAAAa+Zh2cy3tehWNQ0bIwautjzMxHbHOFveTETHEFf0npJNO1GoeXW7fisM04+bZ39Wqmfi4+paFZyt5s+rV9HEpr1DRb3Dfb5xILdGFYt+zRT8k4ppp5RDQ0vX8fM2pu+rV48pdS5TEcgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQu2rd6ja7ETHimAreodH6vTxOHymePgsFimqizTFczMxG28sgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="
                      alt="Right Arrow"
                      width={50}
                      height={50}
                      className="w-10 h-10 md:w-12 md:h-12 rotate-0"
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

export default ProductionProcess;