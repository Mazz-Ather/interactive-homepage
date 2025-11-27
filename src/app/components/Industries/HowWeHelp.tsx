'use client';
import React, { useState, useEffect } from 'react';

interface ServiceCard {
  title: string;
  description: string;
}

const HowWeHelpEnhanced: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3); // Cycle through 0, 1, 2
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const services: ServiceCard[] = [
    {
      title: "Virtual Property Tours:",
      description: "Our interactive virtual tours and photorealistic digital twins allow potential buyers to explore properties from anywhere in the world."
    },
    {
      title: "Digital Twin Development:",
      description: "We create accurate, real-time 3D models of properties that can be used for marketing, facility management, and investor relations."
    },
    {
      title: "Architectural Visualisation:",
      description: "We produce stunning 3D renders and animations that bring architectural plans to life, helping you visualise projects before construction begins."
    }
  ];

  return (
    <section className="relative font-[cairo] bg-black text-white pb-20 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          How We Help{' '}
          <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Real Estate
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-400 text-center text-sm md:text-base max-w-3xl mx-auto mb-20">
          We offer a suite of services designed to address the specific needs of the real estate market.
        </p>

        {/* Service Cards with Connecting Lines */}
        <div className="relative max-w-6xl mx-auto">
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative rounded-[20px] border backdrop-blur-sm px-6 py-8 transition-all duration-500 hover:scale-105 min-h-[140px] flex flex-col ${
                  index === activeIndex
                    ? 'bg-gradient-to-br from-white/15 to-white/5 border-white/30 shadow-2xl  scale-105'
                    : 'bg-white/5 border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                {/* Dot and Title on Same Line */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-500 ${
                      index === activeIndex
                        ? 'bg-gradient-to-r from-purple-400 to-blue-400 shadow-lg shadow-purple-400/50' 
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
                <p className={`text-sm leading-relaxed transition-colors duration-500 ${
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
      <div className="absolute bottom-0 left-0 right-0 h-1/2 md:h-2/3 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/80 to-black z-10" />
  <img 
          src="/images/logob2.png"
          alt=""
          className="w-full absolute h-full object-cover mt-[140px] opacity-20"
        />
         <img 
          src="/images/logob3.png"
          alt=""
          className="w-full h-full object-cover mt-[280px] opacity-20 "
        />
      </div>

      {/* Decorative Glow Effects */}
      {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" /> */}
    </section>
  );
};

export default HowWeHelpEnhanced;