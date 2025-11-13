'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  miniHeading: string;
  mainHeading: string;
  client: string;
  description: string;
  servicesUsed: string;
  image: string;
  imagePosition: 'left' | 'right';
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    miniHeading: 'Project Spotlight: VR Decontamination Training',
    mainHeading: 'Client: Saudi Border Guard',
    client: 'Saudi Border Guard',
    description:
      'The Project: We developed a complete VR training platform to deliver scenario-driven simulations for VR-based decontamination procedures in high-risk environments. The solution provided immersive, hands-on training experiences for contamination response scenarios, ensuring a safer training solution that was previously impossible.',
    servicesUsed: 'Services Used: Digital Transformation, Virtual Reality Content Development',
    image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762791024/01b45d02343ed11be14a1349b70c3c38bd6e8c03_i3s1uv.png',
    imagePosition: 'left',
  },
  {
    id: 2,
    miniHeading: 'Project Spotlight: VR Decontamination Training',
    mainHeading: 'Client: Ministry of Energy',
    client: 'Ministry of Energy',
    description:
      'The Project: We built a custom web portal and VR application that allows ministry employees to examine virtual replicas of high-voltage. The solution improves operational efficiency, reducing their downtime and costs associated with inspections process, all leveraging advanced 3D and VR for digital transformation.',
    servicesUsed: 'Services Used: Digital Transformation, Virtual Reality Content Development, Web Development',
    image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762791023/f351663f47515121964ea49d39e464af3c29d198_tfnfli.png',
    imagePosition: 'right',
  },
];

const CaseStudies1: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const firstSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section className="relative font-[Cairo] w-full px-48 bg-black text-white overflow-hidden">
      {/* Background Video - extends to half of first section */}
   {/* Background Video - extends to half of first section */}
<div className="absolute -top-16 left-0 right-0 h-[calc(60vh+300px)] z-0 overflow-hidden pointer-events-none">
  <video
    ref={videoRef}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover opacity-70"
  >
    <source src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985516/servide-bg_npenqb.mp4" type="video/mp4" />
  </video>
  
  {/* Enhanced top-to-bottom gradient with larger fade area */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent" style={{ 
    backgroundImage: 'linear-gradient(to bottom, black 0%, black 10%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.3) 50%, transparent 70%)'
  }}></div>
  
  {/* Bottom gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
</div>  
      {/* Top Section with Heading */}
      <div className="relative z-10 container mx-auto px-4 pt-">
        {/* Heading and Description */}
        <div className="text-center max-w-4xl mx-auto pt-10 ">
         <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold ">
                <div className="bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent">
              Case Studies
                </div>
              </h1>
          <p className="text-gray-200 text-sm md:text-base pt-5 leading-relaxed">
            IndieVentures built 3D Editors, LMS - Heart Rate, SCVS, Stress Measurement, Pedometer, Sleep Monitor, Manage & Call-Sync data Counter, GHG+ Sports Models, Health
            Models Display wearable, DV Watch Pack, & Built-in Vision; Finite any 100+ free watch slot to download from old gallery, Bluetooth coding.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="relative z-10 container mx-auto px-4 space-y-20 py-20">
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            ref={index === 0 ? firstSectionRef : null}
            className={`flex flex-col ${
              study.imagePosition === 'left'
                ? 'lg:flex-row'
                : 'lg:flex-row-reverse'
            } items-start gap-12`}
          >
            {/* Image Section with Blurry Background */}
            <div className="w-full xl90:-ml-0 -ml-9 lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl p-8 border border-purple-500/20 transition-all duration-500 !bg-none group-hover:border-purple-500/40 group-hover:shadow-2xl group-hover:shadow-purple-500/20 w-[500px] h-[350px]">
                {/* Blurry Background Effect */}
                <div className="absolute inset-0 bg-[#D9D9D91A]/10 backdrop-blur-xl transition-all duration-500 group-hover:from-purple-600/20 group-hover:to-blue-600/20"></div>
                
                {/* Laptop Mockup */}
               <div className="relative z-10 flex items-center justify-center w-full h-full transform transition-transform duration-500">
  <Image
    src={study.image}
    alt={study.client}
    width={1160} // adjust based on real resolution
    height={1600}
    className="object-contain rounded-t-lg transition-transform duration-700 ease-out -mt-16 scale-[1.3]"
    quality={100}
    unoptimized={false}
  />
</div>

              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y- ml-4 pt-6">
              <p className="text-white text-sm font-medium uppercase tracking-wide transition-colors duration-300 ">
                {study.miniHeading}
              </p>
              <h1 className="text-4xl sm:text-xl md:text-4xl pt-4 font-bold ">
                <div className="bg-gradient-to-r from-[#B54CBE] via-[#065FE5] to-[#065FE5] bg-clip-text text-transparent">
                  {study.mainHeading}
                </div>
              </h1>
              <div className="space-y-5 max-w-xl text-sm pt-4 text-gray-300">
                {/* Description with white 'The Project:' and 'VR for digital transformation' for 2nd item */}
                <p className="leading-relaxed">
                  {study.id === 2 ? (
                    <>
                      <span className="text-white font-semibold">The Project:</span>{' '}
                      We built a custom web portal and VR application that allows ministry employees to examine virtual replicas of high-voltage. 
                      The solution improves operational efficiency, reducing their downtime and costs associated with inspections process, all leveraging advanced 3D and 
                      <span className="text-white font-semibold"> VR for digital transformation.</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white font-semibold">The Project:</span>{' '}
                      We developed a complete VR training platform to deliver scenario-driven simulations for VR-based decontamination procedures in high-risk environments. 
                      The solution provided immersive, hands-on training experiences for contamination response scenarios, ensuring a safer training solution that was previously impossible.
                    </>
                  )}
                </p>

                {/* Services Used — first two words white, rest gray */}
                <p className="text-sm font-medium">
                  <span className="text-white">
                    {study.servicesUsed.split(' ').slice(0, 2).join(' ')}
                  </span>{' '}
                  <span className="text-gray-400">
                    {study.servicesUsed.split(' ').slice(2).join(' ')}
                  </span>
                </p>

                <div className='pt-3'>
                <Link href="/more-details">
      <button className="group relative  flex items-center gap-2 px-5 py-[9px] bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-md overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE]">
        
        {/* Text */}
        <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B54CBE] group-hover:via-[#854CBE] group-hover:to-[#065FE5] transition-all duration-300">
          View More
        </span>

        {/* Arrow */}
        <ArrowUpRight className="relative z-10 w-5 h-5 text-white transition-all duration-300 group-hover:text-blue-500 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B54CBE] group-hover:via-[#854CBE] group-hover:to-[#065FE5] group-hover:translate-x-1 group-hover:-translate-y-1" />

        {/* Gradient background animation */}
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
      </button>
    </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </section>
  );
};

export default CaseStudies1;