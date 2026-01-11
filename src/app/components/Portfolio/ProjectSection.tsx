  'use client'

  import React, { useState } from 'react';
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
    const [activeProject, setActiveProject] = useState<Project | null>(null);

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

    return (
      <>
        <section className="w-full !font-[Cairo] min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="!max-w-[1600px] mx-auto relative z-10">
            <div className="bg-[#EDEAFF] rounded-[32px] p-8 sm:p-12 lg:p-11 relative overflow-hidden shadow-2xl">
              
              {/* Header Section */}
              <div className="flex flex-col px-1 mx-4 lg:mx-9 lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                <div className="flex-1 max-w-2xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    <div className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text font-extrabold text-transparent pb-3">
                      Projects We Have
                    </div>
                  </h1>
                  <p className="text-gray-900 text-base max-w-xl sm:text-lg leading-tight -mt-2">
                    Explore our latest innovations in immersive technology and digital renovation.
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

              {/* Projects Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 justify-items-center m-1">
                {projects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onSelect={(p) => setActiveProject(p)} 
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CLEAN DIRECT VIDEO MODAL --- */}
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
              onClick={() => setActiveProject(null)}
            />
            
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(181,76,190,0.3)] border border-white/10 animate-in zoom-in-95 duration-300">
              
              {/* Close Button */}
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 z-[120] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Player - No Controls, AutoPlay, Muted to ensure no UI icons appear */}
              <video 
                key={activeProject.link}
                src={activeProject.link} 
                poster={activeProject.image}
                autoPlay 
                muted 
                loop
                playsInline
                className="w-full h-full object-contain z-10 pointer-events-none"
                style={{ filter: 'no-drop-shadow' }} // UI icons ko suppress karne ke liye
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Minimal Info Overlay */}
              <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-20 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent w-full">
                  <p className="text-purple-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-1">Watch Case Study</p>
                  <h2 className="text-white text-xl sm:text-2xl font-bold">{activeProject.title}</h2>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const ProjectCard = ({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) => {
    return (
      <div 
        className="group relative rounded-[40px] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.01] cursor-pointer"
        style={{
          width: '100%',
          maxWidth: '660px',
          aspectRatio: '728 / 669',
        }}
        onClick={() => onSelect(project)}
      >
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 sm:p-12">
          <div className="flex justify-between items-end gap-6">
            <div className="flex-1 transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-white text-2xl sm:text-4xl font-extrabold mb-2 tracking-tight group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-lg font-medium">
                {project.subtitle}
              </p>
            </div>

            <div className="group/btn flex items-center gap-3 px-8 py-4 sm:py-[28px] sm:px-[45px]  backdrop-blur-sm text-white border border-white/30 rounded-full font-bold text-sm sm:text-base transition-all duration-300">
              View Case
              <Icon
                icon="ion:arrow-up-outline"
                className="w-5 h-5 text-yellow-500 transition-transform duration-500 group-hover/btn:rotate-[45deg] rotate-[45deg]"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProjectsSection;