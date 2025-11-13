'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function HeroP() {
  return (
    <section className="relative font-[Cairo] h-screen w-full flex items-center justify-center overflow-hidden text-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 -mt-16 w-full h-full object-cover"
        src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985518/bg_azwp7s.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional for dark tint) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6">
        <p className="text-sm text-white/80 mb-3"><span className='text-[19px] text-[#B54CBE]'>
          •</span> Portfolio</p>
         <div className="text-center leading-tight ">
              <h1 className="text-4xl sm:text-5xl lg:text-[93px] font-bold ">
                <div className="bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent">
               Where Ideas Become
                </div>
                <div className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent">
  Immersive Realities
                </div>
               
              </h1>
            </div>


        <p className="mt-6 text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
      We don't just build technology; we create award-winning immersive solutions that solve real-world problems. Our portfolio is a testament to our commitment to innovation, quality, and delivering tangible results for our clients in Riyadh and across the Middle East.
        </p>

        <div className="mt-16 flex flex-col items-center gap-2 text-white/70">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
         <ArrowUpRight className="relative rotate-[-226deg] z-10 w-7 h-7 text-white transition-all duration-300 group-hover:text-blue-500 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B54CBE] group-hover:via-[#854CBE] group-hover:to-[#065FE5] group-hover:translate-x-1 group-hover:-translate-y-1" />

          </motion.div>
          <span className="text-xs uppercase tracking-widest">Scroll To Explore</span>
        </div>
      </div>
    </section>
  );
}
