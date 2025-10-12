'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Emma Adolker',
    role: 'Co-Founder',
    description: 'We are a diverse team of experts—from engineers and developers to artists',
    image: '/images/team1.png'
  },
  {
    id: 2,
    name: 'Emma Adolker',
    role: 'Co-Founder',
    description: 'We are a diverse team of experts—from engineers and developers to artists',
    image: '/images/team2.png'
  },
  {
    id: 3,
    name: 'Emma Adolker',
    role: 'Co-Founder',
    description: 'We are a diverse team of experts—from engineers and developers to artists',
    image:'/images/team1.png'
   },
  {
    id: 4,
    name: 'Emma Adolker',
    role: 'Co-Founder',
    description: 'We are a diverse team of experts—from engineers and developers to artists',
    image: '/images/team2.png'
  }
];

export default function MeetTheTeam() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Calculate which card is currently in view (active)
      const cardWidth = 425 + 24; // card width + gap
      const newActiveIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="bg-black pt-16 pb-11 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
           <div className="space-y-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-light tracking-tight lg:pt-6">
              <span className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent font-bold">
               Meet The Team
              </span>
            </h1>
          </div>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We are a diverse team of experts—from engineers and developers to artists and strategists—all 
              united by a passion for creating extraordinary digital experiences. We are based in Riyadh and 
              are dedicated to understanding the local market and delivering solutions that resonate with 
              the Saudi audience.
            </p>
          </div>
          
        <div className="text-center">
                <Link href="/contact" className="relative group">
                  <div className="group relative px-16 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-sm overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                    <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Show All  →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                  </div>
                </Link>
              </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all shadow-lg"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all shadow-lg"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-20 pt-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`min-w-[320px] md:min-w-[390px] lg:min-w-[425px] h-[300px] rounded-3xl p-8 pt-20 relative overflow-visible transition-opacity duration-300 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-40'
                }`}
                style={{
                  background: 'radial-gradient(ellipse 150% 50% at top center, rgba(255,255,255,0.12), transparent 40%), radial-gradient(ellipse 150% 50% at bottom center, rgba(255,255,255,0.12), transparent 40%), radial-gradient(ellipse 50% 150% at left center, rgba(255,255,255,0.12), transparent 40%), radial-gradient(ellipse 50% 150% at right center, rgba(255,255,255,0.12), transparent 40%), #000000'
                }}
              >
                {/* Arrow Icon */}
                <div className="absolute top-8 left-[50px] pointer-events-none select-none">
                  <Image
                    src="/images/larrow.png"
                    alt="Arrow"
                    width={240}
                    height={170}
                    className="opacity-"
                    draggable="false"
                  />
                </div>

                {/* Image - extends outside the box */}
                <div className="absolute bottom-0 -right-2 w-[200px] h-[341px] z-[999] rounded-2xl overflow-visible">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={341}
                    className="w-full h-full object-cover object-top"
                    quality={100}
                    priority
                    draggable="false"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="mb-20 relative z-10">
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 max-w-[180px]">
                    {member.description}
                  </p>
                  
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all pointer-events-auto">
                    About Emma
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Show All Button */}
        <div className="md:hidden mt-8 flex justify-center">
         <div className="text-center">
                <Link href="/contact" className="relative group">
                  <div className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-full overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                    <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">See More details  →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                  </div>
                </Link>
              </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}