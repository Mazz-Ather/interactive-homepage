'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    icon: '/images/icon11.png',
    title: 'Cinematic CGI & VFX',
    description: 'We create high-impact computer-generated imagery and visual effects for commercials, short films, and corporate videos',
  },
  {
    id: 2,
    icon: '/images/icon12.png',
    title: 'Architectural Visualisation',
    description: 'We produce photorealistic 3D renders and interactive walkthroughs for real estate developers and architects',
  },
  {
    id: 3,
    icon: '/images/icon13.png',
    title: 'Product Visualisation',
    description: 'Our team builds detailed 3D models of products, allowing you to showcase every feature and detail in a visually compelling way.',
  },
  {
    id: 4,
    icon: '/images/icon14.png',
    title: 'Storyboarding & Concept Art',
    description: ' We handle the pre-production process, from initial storyboarding to creating concept art that defines the look and feel of your project.',
  },
];

const ThreedServicesScroll: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Reset scroll position to 0 on mount to show the spacer
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
      }
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        if (scrollContainerRef.current) {
          scrollContainerRef.current.style.cursor = 'grab';
        }
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full py-20 bg-black font-[Cairo]">
      {/* Header Section */}
      <div className="px-8 md:px-16 lg:px-24 mb-12 text-center">
        <h2 className="text-2xl md:text-5xl  font-bold text-white mb-4">
   How We Help with 3D Animation & Visualisation

        </h2>
        <p className="text-gray-400 text-center text-lg md:text-xl max-w-4xl mx-auto">
     We offer a full spectrum of 3D production services to meet your specific needs.
            </p>
      </div>

      {/* Scrollable Cards Section */}
      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide select-none"
          style={{
            WebkitOverflowScrolling: 'touch',
            cursor: 'grab',
          }}
        >
          {/* Left Spacer - Creates initial padding */}
          <div className="flex-shrink-0 w-52" aria-hidden="true" />
          
          {services.map((service, index) => (
            <div
              key={service.id}
              className="flex-shrink-0 border-2 border-white w-[340px] md:w-[380px] rounded-[32px] p-10 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #161616ff 0%, #1a1a1a 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                scrollSnapAlign: index === 0 ? 'none' : 'start',
              }}
            >
              {/* Gradient Glow Borders - 4 sides */}
              <div 
                className="absolute top-0 left-0 blur-sm right-0 h-[60px] pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg,  rgba(54, 54, 54, 1) 0%, transparent 100%)',
                }}
              />
              
              <div 
                className="absolute bottom-0 blur-sm left-0 right-0 h-[60px] pointer-events-none"
                style={{
                  background: 'linear-gradient(0deg,  rgba(54, 54, 54, 1) 0%, transparent 100%)',
                }}
              />
              
              <div 
                className="absolute left-0 top-0 blur-sm bottom-0 w-[60px] pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg,  rgba(54, 54, 54, 1) 0%, transparent 100%)',
                }}
              />
              
              <div 
                className="absolute right-0 top-0 blur-sm bottom-0 w-[60px] pointer-events-none"
                style={{
                  background: 'linear-gradient(270deg, rgba(54, 54, 54, 1) 0%, transparent 100%)',
                }}
              />

              {/* Icon Container */}
              <div className="w-20 h-20 mb-8 relative z-10">
              <div
    key={index}
    className="w-full h-full flex items-center justify-center"
  >
   <img
  src={service.icon}
  alt={service.title}
  className={`w-[70px] h-[70px] object-contain transition-transform duration-300
    ${index === 3 ? 'scale-[1.8] origin-center' : ''}`}
/>

  </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-6 leading-tight relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-100 text-base leading-relaxed relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ThreedServicesScroll;