"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function RecentprojectHero() {
  return (
    <section className="relative min-h-screen h-screen mb-9 xl100:max-w-[1920px] mx-auto xl100:max-h-[1080px] pb-11 bg-black  overflow-hidden">
      {/* Marquee Background - 3 rows */}
<div className="absolute bottom-0 left-0 w-full h-[160px] xl80:h-[40px] lg:h-[20px] bg-gradient-to-t from-black/70 via-black/80 via-black/40 to-transparent backdrop-bl z-[20] pointer-events-none" />


      <div className="absolute inset-0 opacity-[0.31] pb-9 h-full">
        <div className="flex flex-col justify-between py-[130px] xl90:py-[82px] xl80:py-[50px] lg:py-[70px] h-full">
          {/* Row 1 - Moving Right (Top) */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mx-4">
                <div className="text-4xl lg:text-[170px] xl80:text-[230px] font-[cairo] font-[800] text-[#7E7E7E] whitespace-nowrap">
                 CEO&#39;s Message  CEO&#39;s Message  CEO&#39;s Message 
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Moving Left (Center) */}
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mx-4">
                 <div className="text-4xl   lg:text-[170px] xl80:text-[230px] font-[cairo] font-[800] text-[#7E7E7E] whitespace-nowrap">
                 CEO&#39;s Message  CEO&#39;s Message  CEO&#39;s Message 
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 - Moving Right (Bottom) */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mx-4">
               <div className="text-4xl  lg:text-[170px] xl80:text-[230px] font-[cairo] font-[800] text-[#7E7E7E] whitespace-nowrap">
                 CEO&#39;s Message  CEO&#39;s Message  CEO&#39;s Message 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 xl80:py-9 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="xl80:space-y-8">
            <div className="space-y-1 ">
            <div className="bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              CEO&apos;s
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-[] font-bold leading-tight bg-gradient-to-r from-[#B54CBE] to-[#065FE5] pb-3 bg-clip-text text-transparent">
            Message
            </div>
              <div className="space-y-4 text-gray-100  ">
                <p className="text-lg italic md:text-lg lg:text-2xl py-4">
                By merging design, strategy, and technology, we transform bold ideas into meaningful outcomes that inspire growth and innovation</p>

                <p className="text-lg italic md:text-lg lg:text-2xl">
                 
Each project is an opportunity to create something extraordinary — where imagination meets measurable impact.
                </p>
              </div>

              {/* <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </div>

          <div className="pt- text-[23px] flex justify-end">
  <div className="text-left">
    <p className="text-sm text-gray-400">
      <span className="block font-semibold text-">Obaid Farooq</span>
      Founder & CEO, AO Interactive
    </p>
  </div>
</div>

          </div>

          {/* Right Image with Blurry Background - Updated Structure */}
          <div className="relative hidden lg:block w-[511px] h-[510px] ml-auto"> {/* Aligned to the right */}
            {/* Video Background */}
          <div className="absolute border-2 border-[#BDF8FF] inset-0 rounded-3xl overflow-hidden">
  <video
    className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-20 bg-[#D9D9D917]"
    src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985516/servide-bg_npenqb.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
</div>


            {/* Mini Div with Blurred Background */}
         <div className="relative w-[381px] h-[381px] backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 mx-auto mt-[70px] overflow-visible">
     {/* Hero Image - Exceeding height from top of mini div */}
             <Image
  src="/images/hero2.png"
  alt="CEO"
  width={500}
  height={600}
  className="absolute bottom-0 left-0 rounded-2xl object-cover w-full h-[420px] z-10"
/>



              {/* 3 Marquee Lines: Top, Center, Bottom - Absolutely positioned within mini div */}
       
  {/* Marquee Container - clipped only inside */}
  <div className="absolute inset-0 overflow-hidden rounded-3xl">
    <div className="absolute inset-0 flex flex-col justify-between p-4">
      {/* Top Marquee */}
      <div className="text-4xl opacity-30 lg:text-9xl font-bold text-[#7E7E7E] whitespace-nowrap animate-marquee z-20">
        Recent Projects  Recent Projects  Recent Projects 
      </div>

      {/* Center Marquee */}
      <div className="text-4xl opacity-30 lg:text-9xl font-bold text-[#7E7E7E] whitespace-nowrap animate-marquee-reverse z-20">
        Recent Projects  Recent Projects  Recent Projects 
      </div>

      {/* Bottom Marquee */}
      <div className="text-4xl opacity-30 lg:text-9xl font-bold text-[#7E7E7E] whitespace-nowrap animate-marquee z-20">
        Recent Projects  Recent Projects  Recent Projects 
      </div>
    </div>
  </div>
</div>
 </div>
 </div>
      </div>
    </section>
  )
}
