import React from 'react';

interface VisionHeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title?: string;
  description?: string;
}

const VisionHero: React.FC<VisionHeroProps> = ({
  videoSrc = 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985516/servide-bg_npenqb.mp4',
  imageSrc = '/images/vr.png',
  title = 'Our Vision',
  description = "To be the leading immersive technology partner in the Middle East, recognized for our creative excellence, technical expertise, and our unwavering commitment to our clients' success. We are proud to be contributing to Saudi Vision 2030 by empowering businesses to embrace digital transformation and shape a new, more interactive future for the Kingdom."
}) => {
  return (
    <section className="relative w-full min-h-[100vh] md:max-h-[50vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Side - VR Headset Image */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-1">
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-lg h-[350px] sm:h-[450px] md:h-[450px] lg:h-[770px] flex items-center justify-center">
            <img
              src={imageSrc}
              alt="VR Headset"
              className="w-auto h-full ml-11 sm:h-full object-contain transform -rotate-12 hover:rotate-0 transition-transform duration-700 ease-in-out scale-[150%] sm:scale-[155%] md:scale-[160%] lg:scale-[188%]"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.6))'
              }}
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-white space-y-4 lg:space-y-6 order-2 lg:order-2 text-center lg:text-left">
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-light tracking-tight lg:pt-6">
              <span className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent font-bold">
                {title}
              </span>
            </h1>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default VisionHero;