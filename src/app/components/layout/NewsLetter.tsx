'use client';
import Link from 'next/link';
import React from 'react';

export default function NewsletterCTA() {
  return (
    <section className="bg-black text-center pb-11 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to start your{' '}
          <span className="bg-gradient-to-r from-[#B54CBE] via-[#065FE5] to-[#065FE5] bg-clip-text text-transparent">
            immersive journey?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm sm:text-base mb-10">
          Connect to the very fit. Provides system updates for your watch and facilitates smart device management.
        </p>

        {/* Button */}
        <div className="text-center max-w-[220px] mx-auto">
                <Link href="/contact" className="relative group">
                  <div className="group relative px-2 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-sm overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                    <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Contact Us  →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                  </div>
                </Link>
              </div>
              </div>
    </section>
  );
}
