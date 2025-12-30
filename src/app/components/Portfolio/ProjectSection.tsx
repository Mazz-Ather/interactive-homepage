'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, X } from "lucide-react";
import { Icon } from '@iconify/react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const ProjectsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Immersive LED Display',
      subtitle: 'Renovation',
      image: '/por1.png',
      link: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1766624904/VideoDubaiAquarium_2_ubc1yh.mp4'
    },
    {
      id: '2',
      title: 'VR Interactive Game',
      subtitle: 'Renovation',
      image: '/por2.png',
      link: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1766624850/InteractiveGame_cgmzaa.mp4'
    },
    {
      id: '3',
      title: 'VR Walkthrough',
      subtitle: 'Renovation',
      image: '/por3.jpg',
      link: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
    },
    {
      id: '4',
      title: 'Projection Mapping',
      subtitle: 'Renovation',
      image: '/por4.png',
      link: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1766624844/Coloring_wuyqsn.mp4'
    },
    {
      id: '5',
      title: 'Digital Aquarium Visuals',
      subtitle: 'Renovation',
      image: '/por5.png',
      link: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1766625496/Fish_Aquarium_lxanzs.mp4'
    },
    {
      id: '6',
      title: '3D Anamorphic Billboard',
      subtitle: 'Renovation',
      image: '/por6.png',
      link: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1766625510/IMG_6772_ej1cuo.mov'
    }
  ];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  return (
    <>
      <section className="w-full !font-[Cairo] min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="!max-w-[1600px] mx-auto relative z-10">
          <div className="bg-[#EDEAFF] rounded-[32px] p-8 sm:p-12 lg:p-11">
            <div className="absolute -mt-20 left-0 w-[700px] h-[2200px] opacity-70 z-0">
              <Image
                src="/images/imgt1.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-[230px] left-1/2 -translate-x-1/2 w-1/2 h-1/2 opacity-40 z-0">
              <Image
                src="/images/imgb2.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            
            <div className="flex flex-col px-1 mx-9 lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
              <div className="flex-1 max-w-2xl">
                <div className="text-left leading-tight ">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold ">
                    <div className="bg-gradient-to-r from-[#B54CBE]  to-[#065FE5] bg-clip-text font-extrabold text-transparent pb-3">
                      Projects We Have
                    </div>
                  </h1>
                </div>
                <p className="text-gray-900 text-base max-w-xl m sm:text-lg leading-tight -mt-2 ">
                  PMManagement Substation 15, Janzur Brq-Srar Street Measurement, 
                  Pedometers, Sleep Monitor, Message & Call Sync-Shoe
                </p>
              </div>

              <div className="flex flex-col  gap-4 w-full mt-4 lg:w-auto">
                <Link href="/more-details">
                  <button className="group relative flex items-center gap-2 px-11 py-[11px] bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-md overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE]">
                    <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B54CBE] group-hover:via-[#854CBE] group-hover:to-[#065FE5] transition-all duration-300">
                      See More Details
                    </span>
                    <ArrowUpRight className="relative z-10 w-5 h-5 text-white transition-all duration-300 group-hover:text-blue-500 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B54CBE] group-hover:via-[#854CBE] group-hover:to-[#065FE5] group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                  </button>
                </Link>

                <Link href="/contact" className="relative group inline-block">
                  <div className="relative flex items-center gap-2 rounded-lg px-8 py-[9px] overflow-hidden border border-blue-500 font-medium tracking-wide transition-colors duration-300">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-colors duration-300 group-hover:text-white">
                      Book a 15 min call
                    </span>
                    <ArrowUpRight className="relative z-10 w-5 h-5 text-blue-500 bg-clip-text bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl90:gap-0 xl90:gap-y-8 xl:gap-7 justify-items-center m-1">
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onViewCase={(link) => setSelectedVideo(link)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL - Always centered on VIEWPORT */}
      {selectedVideo && (
        <>
          {/* Backdrop */}
          <div 
            onClick={() => setSelectedVideo(null)}
            className="fixed top-0 left-0 w-screen h-screen bg-black/90 z-[999998]"
          />
          
          {/* Modal Content */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1100px] h-[75vh] max-h-[700px] z-[999999]">
            <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

// Individual Project Card Component
const ProjectCard = ({ project, onViewCase }: { project: Project; onViewCase: (link: string) => void }) => {
  return (
    <div 
      className="group relative rounded-[32px] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
      style={{
        width: '100%',
        maxWidth: 'min(660px, 110%)',
        aspectRatio: '728 / 669',
        height: 'auto'
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        
        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8 lg:p-10">
        <div className="flex justify-between items-end gap-4">
          <div className="flex-1">
            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-1 transition-all duration-300 group-hover:text-purple-400">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base transition-all duration-300 group-hover:text-white">
              {project.subtitle}
            </p>
          </div>

          <button 
            onClick={() => onViewCase(project.link)}
            className="group/btn flex items-center gap-2 px-4 sm:px-5 py-2 sm:!py-[28.5px] sm:!px-[45px] bg-transparent text-white border border-white rounded-full font-medium text-xs sm:text-base transition-all duration-300 hover:bg-white/10 hover:gap-3 hover:pr-5 whitespace-nowrap"
          >
            View Case
            <Icon
              icon="ion:arrow-up-outline"
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:rotate-[30deg] text-yellow-500 rotate-[45deg]"
            />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-blue-500/20"></div>
      </div>
    </div>
  );
};

export default ProjectsSection;