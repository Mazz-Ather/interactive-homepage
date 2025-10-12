import Image from 'next/image';

export default function OurApproach() {
  return (
    <section className="bg-black pb-[270px] text-white py-4 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">Our Approach</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto italic">
            We believe that true innovation happens at the intersection of technology and human-centered design.
            <br />
            Our approach is built on three core pillars
          </p>
        </div>

        {/* Main Visual Section */}
        <div className="relative flex items-center justify-center">
          {/* Left Content - Collaboration */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 max-w-xs text-left">
            <div className="flex items-center gap-4 mb-4">
              <Image 
                src="/images/larrow.png" 
                alt="Left Arrow" 
                width={300} 
                height={550}
                className="object-contain ml-[90px]"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Collaboration:</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We work as an extension of your team, ensuring that every solution is perfectly tailored to your unique goals and challenges.
            </p>
          </div>

          {/* Center Image - Logo */}
          <div className="relative z-10">
            <Image 
              src="/images/ourapproach.png" 
              alt="Main Logo" 
              width={300} 
              height={300}
              className="object-contain"
            />
          </div>

          {/* Right Content - Innovation */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 max-w-xs text-right">
            <div className="flex items-center justify-end gap-4 mb-4">
              <Image 
                src="/images/rarrow.png" 
                alt="Right Arrow" 
                 width={300} 
                height={550}
                className="object-contain mr-[90px]"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation:</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are constantly exploring and mastering the latest technologies—from VR/AR to digital twins—to keep you ahead of the curve.
            </p>
          </div>

          {/* Bottom Content - Innovation */}
          <div className="absolute top-full mt-7 left-1/2 -translate-x-1/2 max-w-md text-center">
            <div className="flex items-center justify-center mb-4">
              <Image 
                src="/images/barrow.png" 
                alt="Bottom Arrow" 
                width={13} 
                height={14}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation:</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are constantly exploring and mastering the latest technologies—from VR/AR to digital twins—to keep you ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}