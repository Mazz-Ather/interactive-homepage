import Link from 'next/link';
import React from 'react';

interface HeroServiceProps {
  videoSrc?: string;
  miniHeading?: string;
  mainHeading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const EventsHero: React.FC<HeroServiceProps> = ({
  videoSrc = 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1763379895/DG_1_wvwmnd.mp4',
  miniHeading = 'Service',
  mainHeading = '3D Animation & Visualisation',
  description = 'From captivating brand stories to stunning architectural walkthroughs, our team of animators and artists specializes in bringing ideas to life with unparalleled visual quality. We manage the entire 3D animation production pipeline, delivering powerful content that resonates with audiences across Saudi Arabia and beyond',
  primaryButtonText = 'Get A Quote',
  secondaryButtonText = 'Talk to our AE Expert',
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section className="relative font-[Cairo] w-full h-screen min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full -mt-9 object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/90 to-transparent" /> 
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl">
            {/* Mini Heading */}
            {/* <p className="text-white text-sm sm:text-base font-medium mb-4 tracking-wide">
              {miniHeading}
            </p> */}

            {/* Main Heading with Gradient */}
              <div className="lg:pt-11 mb-4 max-w-2xl">
          <p className="text-lg uppercase tracking-widest text-gray-100 font-bold">Service</p>
          <h1 className="text-4xl  sm:text-5xl md:text-6xl font-bold leading-tight">
            <div className="pb-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent">
     Events and </div>
            <div className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent">
    Exhibitions 
            
            </div>
          </h1>
        </div>

            {/* Description */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
            <div className="text-center">
                <Link href="/contact" className="relative group">
                  <div className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent border border-white   rounded-md h-[51px] overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                    <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Get a Quote  →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                  </div>
                </Link>
              </div>

              {/* Secondary Button */}
     <button
  onClick={onSecondaryClick}
  className="relative px-8 py-3.5 bg-black text-white font-semibold rounded-lg transition-all duration-300 group overflow-hidden"
>
  {/* Gradient border */}
  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-400"></span>
  
  {/* Inner gradient background - radial gradient from center */}
  <span className="absolute inset-[2px] rounded-lg bg-[radial-gradient(ellipse_at_center,#0a0a0a_0%,#1a1a1a_30%)]"></span>
  
  {/* Button text */}
  <span className="relative z-10">{secondaryButtonText}</span>
</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsHero;