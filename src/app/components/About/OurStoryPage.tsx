"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6 md:px-16">
      {/* BACKGROUND LARGE TEXT IMAGE */}
   {/* <div className="relative w-full h-screen overflow-hidden"> */}
  <img
    src="/images/story.png"
    alt="Background Text"
    className="absolute inset-0 w-full mt-9 md:h-[230px] object-cover"
  />
{/* </div> */}
      {/* CONTENT WRAPPER */}
      <div className="relative z-10 mt-11 grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        {/* LEFT TEXT SECTION */}
        <div className="space-y-6 mt-20 max-w-lg">
          <Image
            src="/images/story1.png"
            alt="Person with VR headset"
            width={500}
            height={500}
            className="relative z-20 object-contain"
          />
          <p className="text-gray-300 text-lg leading-relaxed">
            Our journey began in 2008 with a vision to merge cutting-edge
            technology with creative storytelling. Today, we are a leading
            force in the Kingdom, specializing in a range of services from{" "}
            <span className="text-[#ffffff] font-semibold">
              virtual reality content development
         to   </span>
            <span className="text-[#ffffff] font-semibold">
              3D animations <span className="!text-gray-300">and</span> gamification
            </span>
            . Our work is a direct reflection of our mission to deliver impactful,
            memorable results that help our clients thrive in a rapidly evolving
            digital world.
          </p>
         <div className="text-center">
                <Link href="/contact" className="relative group">
                  <div className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text w-[200px] text-transparent border border-white   rounded-md h-[51px] overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                    <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Get A Quote  →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                  </div>
                </Link>
              </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center items-center">
          {/* MAIN PERSON IMAGE */}
        

          {/* HERO IMAGE OVERLAPPING FROM TOP */}
          <Image
            src="/images/hero.png"
            alt="Hero overlay"
            width={1600}
            height={1600}
            className="absolute scale-[1.75] hidden md:block -top-30 right-0 z-10 opacity-90 object-contain"
          />

          {/* LOGO HALF OVERLAPPING FROM BOTTOM */}
          <Image
            src="/images/ourapproach.png"
            alt="Logo"
            width={1700}
            height={1700}
            className="absolute scale-[1.75] -top-[-185px] right-[50%] z-0 opacity-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
