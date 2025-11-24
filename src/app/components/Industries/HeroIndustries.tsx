'use client'
import Image from 'next/image';

const HeroIndustries: React.FC = () => {
  return (
    <section className="relative font-[cairo] h-screen w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/3d.png"
          alt="Real Estate Cityscape"
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient Overlay - Top to bottom: transparent to black */}
        <div className="absolute h-auto inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
      </div>

      {/* Content Container - Left Center Aligned */}
      <div className="relative pt-32 z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Mini Heading */}
            <p className="text-white text-xs md:text-sm font-light tracking-wider mb-2 md:mb-3">
              Real Estate
            </p>

            {/* Main Heading - Smaller Size */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                Transforming Real Estate with Immersive Technology Solutions
              </span>
            </h1>

            {/* Paragraph - Smaller Size */}
            <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed mb-5 md:mb-6">
              The real estate industry is evolving, and so are the expectations of 
              buyers and investors. At AO Interactive, we provide powerful, 
              technology-driven solutions that help developers, architects, 
              real estate agents, and investors streamline operations, accelerating 
              sales cycles and reducing marketing costs in Saudi Arabia.
            </p>

            {/* Buttons - Smaller Size */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Primary Button */}
              <button className="group relative px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs md:text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                Get A Quote
                <svg 
                  className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              {/* Secondary Button */}
              <button className="px-5 py-2.5 md:px-6 md:py-3 bg-transparent border-2 border-white/30 text-white text-xs md:text-sm font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Talk to our Special Tech Expert
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient enhancement for darker bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[110%] bg-gradient-to-t from-black to-transparent z-[5]"></div>
    </section>
  );
};

export default HeroIndustries;