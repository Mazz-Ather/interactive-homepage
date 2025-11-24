import React from 'react';
import Image from 'next/image';

const Newsletter: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Outer container with visible gradient border */}
      <div 
        className="relative rounded-3xl p-[1px]"
        style={{
          background: 'linear-gradient(145deg, rgba(100, 100, 100, 0.4) 0%,  rgba(100, 100, 100, 0.4) 50%, rgba(100, 100, 100, 0.4) 100%)',
        }}
      >
        {/* Main container with gradient background */}
        <div 
          className="relative rounded-3xl p-6 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #363636ff 0%, #1a1a1a9a 50%, #363636ff 100%)',
          }}
        >

          {/* Inner content div */}
          <div className="relative flex items-center justify-between gap-6 flex-wrap md:flex-nowrap">
            {/* Left side - Image and text */}
            <div className="flex items-center gap-4 flex-1">
              {/* Globe icon/image */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a855f7] via-[#8b5cf6] to-[#3b82f6] flex items-center justify-center">
                  <svg 
                    className="w-7 h-7 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
              </div>

              {/* Heading - 2 lines */}
              <div className="flex-1">
                <h3 className="text-white text-base md:text-lg leading-tight font-normal">
                  Book a discovery call & let's
                  <br />
                  discuss a custom solution!
                </h3>
              </div>
            </div>

            {/* Right side - Button with gradient */}
            <div className="flex-shrink-0">
              <button className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-[#c026d3] via-[#a855f7] to-[#3b82f6] text-white font-medium text-sm md:text-base hover:opacity-90 transition-all duration-300 flex items-center gap-2 group">
                Book a 15min Call
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;