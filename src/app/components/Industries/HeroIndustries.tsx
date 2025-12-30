'use client'
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Image from 'next/image';

const HeroIndustries: React.FC = () => {
  const { scrollToContactSection } = useSmoothScroll();


    
  return (
    <section className="relative font-[cairo] h-auto -mt-2 w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1766907688/animated-future-dubai-skyline-with-high-tech-build-2025-10-16-05-01-24-utc_1_1_zulhbk.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
        
        {/* Gradient Overlay - Top to bottom: transparent to black */}
        <div className="absolute h-auto inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      </div>

      {/* Content Container - Left Center Aligned */}
      <div className="relative pt-32 md:pt-[250px] z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-28">
          <div className="max-w-xl lg:!max-w-[60%] ">
            {/* Mini Heading */}
            <p className="text-white text-xs md:!text-[21px] font-bold md:ml-1 tracking-wider mb-2 md:mb-3">
              Industries
            </p>

            {/* Main Heading - Smaller Size */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-6xl font-extrabold mb-3 md:mb-4 !leading-none ">
              <span className="bg-gradient-to-r from-[#B54CBE]  to-[#065FE5] bg-clip-text text-transparent !leading-[0.7]">
            Immersive Solutions Tailored for Your Industry in Saudi Arabia

              </span>
            </h1>

            {/* Paragraph - Smaller Size */}
            <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed mb-5 md:mb-6">
            At AO Interactive, we understand that every industry has unique challenges and opportunities. Our approach is to apply our immersive technology expertise to create tailored solutions that address the specific needs of your sector. Explore how we help businesses in your industry thrive below.
            
            </p>

            {/* Buttons - Smaller Size */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Primary Button */}
              <button onClick={() => scrollToContactSection()} className="group relative px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#B54CBE] to-[#065FE5] text-white text-xs md:text-base font-semibold rounded-md hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2">
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
              <button  onClick={() => scrollToContactSection()} className="px-5 py-2.5 md:px-6 md:py-3 bg-transparent border-2 border-white/30 text-white text-xs md:text-base font-semibold rounded-md hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Talk to our Special Tech Expert
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient enhancement for darker bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-[71%] bg-gradient-to-t from-black/10 to-transparent z-[5]"></div> */}
    </section>
  );
};

export default HeroIndustries;