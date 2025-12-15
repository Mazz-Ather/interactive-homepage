'use client';
import React, { useState } from 'react';

interface ServiceCard {
  title: string;
  description: string;
}

const HowWeHelpEnhanced: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
const services: ServiceCard[] = [
  {
    title: "Immersive Property Experiences",
    description:
      "We help real estate brands showcase properties through immersive digital experiences that increase buyer engagement and accelerate decision-making."
  },
  {
    title: "Smart Digital Assets",
    description:
      "From digital twins to interactive models, we create intelligent property assets that support marketing, operations, and long-term asset management."
  },
  {
    title: "Visual Storytelling for Developments",
    description:
      "Our high-end architectural visualisation and animations communicate the true potential of projects, even before construction begins."
  }
];


  return (
    <section className="relative font-[cairo] bg-black text-white pt-32 pb-36 px-6 overflow-hidden h-auto flex items-center">
      {/* Content Container */}
      <div className="relative z-10 max-w-8xl mx-auto w-full">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
      
          <span className="bg-gradient-to-r from-[#B54CBE]  to-[#065FE5] text-transparent bg-clip-text">
           How We Help   Real Estate
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-400 text-center text-sm md:text-lg max-w-3xl mx-auto mb-20">
          We offer a suite of services designed to address the specific needs of the real estate market.
        </p>

        {/* Service Cards with Connecting Lines */}
        <div className="relative max-w-7xl mx-auto">
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-9">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-[20px] border backdrop-blur-sm px-6 py-4 transition-all duration-500 hover:scale-[1.01] min-h-[140px] flex flex-col cursor-pointer ${
                  index === activeIndex
                    ? 'bg-gradient-to-br from-white/25 to-white/15 border-white/30 shadow-2xl scale-105'
                    : 'bg-white/5 border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                {/* Dot and Title on Same Line */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-3.5 h-3.5 rounded-full flex-shrink-0 transition-all duration-500 ${
                      index === activeIndex
                        ? 'bg-gradient-to-r from-white to-white shadow-lg shadow-white/40' 
                        : 'bg-gray-500'
                    }`}
                  />
                  <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-500 ${
                    index === activeIndex ? 'text-white' : 'text-gray-300'
                  }`}>
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${
                  index === activeIndex ? 'text-gray-300' : 'text-gray-400'
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connecting Lines SVG - Bottom Center */}
        
        </div>
      </div>

      {/* Background Image at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 md:h-2/3 pb-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/80 to-black z-10" />
        <img 
          src="/images/logob2.png"
          alt=""
          className="w-full absolute h-auto object-cover mt-[60px] opacity-30"
        />
        <img 
          src="/images/logob3.png"
          alt=""
          className="w-full h-auto object-cover mt-[160px] opacity-20"
        />
      </div>

      {/* Decorative Glow Effects */}
      {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" /> */}
    </section>
  );
};

export default HowWeHelpEnhanced;