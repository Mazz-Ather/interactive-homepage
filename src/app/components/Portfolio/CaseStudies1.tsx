'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

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
    miniHeading: 'MOE VR Inspection Platform',
    mainHeading: 'Client: Ministry of Energy',
    client: 'Ministry of Energy',
    description:
      'We built a custom web portal and VR application that allows ministry inspectors to perform virtual inspections of gas stations. The solution enables seamless booking, real-time data tracking, and a streamlined inspection process, showcasing the power of VR for digital transformation',
    servicesUsed: ' Digital Transformation, Virtual Reality Content Development, Web Development',
    image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762791023/f351663f47515121964ea49d39e464af3c29d198_tfnfli.png',
    imagePosition: 'right',
  },
  {
  id: 3,
  miniHeading: 'Saudi International Tech Expo',
  mainHeading: 'Client: Industrial Energy Company',
  client: 'Industrial Energy Company',
  description:
    'We designed a cutting-edge exhibition booth that featured an interactive screen wall and an augmented reality experience. Visitors could use a tablet to trigger a 3D model of a product on the screen, creating a personalized and memorable brand interaction.',
  servicesUsed: 'Events & Exhibitions, Interactive Screens, Augmented Reality',
  image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762791024/01b45d02343ed11be14a1349b70c3c38bd6e8c03_i3s1uv.png',
  imagePosition: 'left',
},
{
  id: 4,
  miniHeading: 'Future City Architectural Visualization',
  mainHeading: 'Client: Real Estate Development Firm',
  client: 'Real Estate Development Firm',
  description:
    'We created a stunning 3D animation and architectural visualization for a new real estate development. The project included a complete fly-through of the future city, showcasing key buildings and amenities with photorealistic detail.',
  servicesUsed: '3D Animation, Real Estate Visualization, VFX',
  image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762791023/f351663f47515121964ea49d39e464af3c29d198_tfnfli.png',
  imagePosition: 'right',
},
{
  id: 5,
  miniHeading: 'Safety Hero VR Training Game',
  mainHeading: 'Client: Corporate Enterprise',
  client: 'Corporate Enterprise',
  description:
    'For a corporate client, we developed a VR game to make safety training fun and effective. Employees navigated a virtual warehouse, solving challenges and earning points by correctly identifying and addressing safety hazards',
  servicesUsed: 'Gamification, Virtual Reality Content Development, Training & Education',
  image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762791024/01b45d02343ed11be14a1349b70c3c38bd6e8c03_i3s1uv.png',
  imagePosition: 'left',
},

];

const CaseStudies1: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const thirdStudyRef = useRef<HTMLDivElement>(null);
  const fifthStudyRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const smoothScrollTo = (element: HTMLElement | null) => {
    if (!element) return;
    
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // Increased duration for smoother scroll
    let start: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 
        ? 4 * t * t * t 
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleViewMore = () => {
    if (visibleCount === 2) {
      setVisibleCount(4);
      // Smooth scroll to 3rd case study after animation starts
      setTimeout(() => {
        smoothScrollTo(thirdStudyRef.current);
      }, 400);
    } else if (visibleCount === 4) {
      setVisibleCount(5);
      // Smooth scroll to 5th case study after animation starts
      setTimeout(() => {
        smoothScrollTo(fifthStudyRef.current);
      }, 400);
    }
  };

  const handleShowLess = () => {
    // Smooth scroll to top first
    smoothScrollTo(topRef.current);
    // Then collapse after scroll completes
    setTimeout(() => {
      setVisibleCount(2);
    }, 800);
  };

  const visibleStudies = caseStudies.slice(0, visibleCount);

  return (
    <section className="relative font-[Cairo] w-full px-48 bg-black text-white overflow-hidden">
      {/* Background Video */}
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
        
        {/* Enhanced top-to-bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent" style={{ 
          backgroundImage: 'linear-gradient(to bottom, black 0%, black 10%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.3) 50%, transparent 70%)'
        }}></div>
        
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>  

      {/* Top Section with Heading */}
      <div ref={topRef} className="relative z-10 container mx-auto px-4 pt-">
        <div className="text-center max-w-4xl mx-auto pt-10 ">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold ">
            <div className="bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent">
              Case Studies
            </div>
          </h1>
          <p className="text-gray-200 text-sm md:text-base pt-5 leading-relaxed">
         See Our Projects That Are Redefining Experiences Across Saudi Arabia.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="relative z-10 container mx-auto px-4 space-y-20 py-20">
        {visibleStudies.map((study, index) => {
          // Determine which ref to use
          let studyRef = null;
          if (index === 0) studyRef = firstSectionRef;
          if (index === 2) studyRef = thirdStudyRef;
          if (index === 4) studyRef = fifthStudyRef;

          return (
            <div
              key={study.id}
              ref={studyRef}
              className={`transition-all duration-1000 ease-out ${
                index >= 2 
                  ? 'opacity-0 translate-y-10 animate-fadeInUpSmooth' 
                  : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                animationDelay: index >= 2 ? `${(index - 2) * 150}ms` : '0ms',
                animationFillMode: 'forwards'
              }}
            >
              <CaseStudyCard 
                study={study} 
                index={index}
              />
            </div>
          );
        })}
      </div>

      {/* View More / Show Less Button */}
      <div className="relative z-10 flex justify-center pb-20">
        {visibleCount < 5 ? (
          <button
            onClick={handleViewMore}
            className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
          >
            <span className="relative z-10 text-white font-semibold text-lg transition-all duration-300">
              {visibleCount === 2 ? 'View More Case Studies' : 'View More'}
            </span>
            <ChevronDown className="relative z-10 w-6 h-6 text-white transition-all duration-500 group-hover:translate-y-1 group-hover:animate-bounce" />
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
          >
            <span className="relative z-10 text-white font-semibold text-lg transition-all duration-300">
              Show Less
            </span>
            <ChevronUp className="relative z-10 w-6 h-6 text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:animate-bounce" />
          </button>
        )}
      </div>

      {/* Bottom Spacing */}
      <div className="h-20"></div>

      {/* Custom CSS for smooth animations */}
      <style jsx>{`
        @keyframes fadeInUpSmooth {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUpSmooth {
          animation: fadeInUpSmooth 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

// Separate component for case study card to reduce repetition
const CaseStudyCard: React.FC<{ 
  study: CaseStudy; 
  index: number;
}> = ({ study, index }) => {
  return (
    <div
      className={`flex flex-col ${
        study.imagePosition === 'left'
          ? 'lg:flex-row'
          : 'lg:flex-row-reverse'
      } items-start gap-12`}
    >
      {/* Image Section */}
      <div className="w-full xl90:-ml-0 -ml-9 lg:w-1/2 flex justify-center lg:justify-start">
        <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl p-8 border border-purple-500/20 transition-all duration-500 !bg-none group-hover:border-purple-500/40 group-hover:shadow-2xl group-hover:shadow-purple-500/20 w-[500px] h-[350px]">
          <div className="absolute inset-0 bg-[#D9D9D91A]/10 backdrop-blur-xl transition-all duration-500 group-hover:from-purple-600/20 group-hover:to-blue-600/20"></div>
          
          <div className="relative z-10 flex items-center justify-center w-full h-full transform transition-transform duration-500">
            <Image
              src={study.image}
              alt={study.client}
              width={1160}
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
                {study.description.replace('The Project: ', '')}
              </>
            )}
          </p>

          <p className="text-sm font-medium">
            <span className="text-white">
              {study.servicesUsed.split(' ').slice(0, 2).join(' ')}
            </span>{' '}
            <span className="text-gray-400">
              {study.servicesUsed.split(' ').slice(2).join(' ')}
            </span>
          </p>

          <div className='pt-3'>
            {/* <Link href="/more-details"> */}
              <button className="group relative flex items-center gap-2 px-5 py-[9px] bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-md overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE]">
                <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B54CBE] group-hover:via-[#854CBE] group-hover:to-[#065FE5] transition-all duration-300">
                  View More
                </span>
                <ArrowUpRight className="relative z-10 w-5 h-5 text-white transition-all duration-300 group-hover:text-blue-500 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B54CBE] group-hover:via-[#854CBE] group-hover:to-[#065FE5] group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies1;