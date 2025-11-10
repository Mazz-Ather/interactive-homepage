import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";
import { Icon } from '@iconify/react';
interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const ProjectsSection = () => {
  // Sample projects data - you can replace this with your actual data
  const projects: Project[] = [
    {
      id: '1',
      title: 'Fittra London',
      subtitle: 'Renovation',
      image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762782459/Group_1321315829_jlv77g.png', // Replace with your actual image paths
      link: '/projects/fittra-london-1'
    },
    {
      id: '2',
      title: 'Fittra London',
      subtitle: 'Renovation',
      image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762782459/Group_1321315828_talyve.png', // Replace with your actual image paths
      link: '/projects/fittra-london-2'
    }, {
      id: '3',
      title: 'Fittra London',
      subtitle: 'Renovation',
      image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762782459/Group_1321315830_dxsgag.png', // Replace with your actual image paths
      link: '/projects/fittra-london-1'
    },
    {
      id: '4',
      title: 'Fittra London',
      subtitle: 'Renovation',
      image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762782459/Group_1321315831_cpdgjd.png', // Replace with your actual image paths
      link: '/projects/fittra-london-2'
    }, {
      id: '5',
      title: 'Fittra London',
      subtitle: 'Renovation',
      image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762782459/Group_1321315830_dxsgag.png', // Replace with your actual image paths
      link: '/projects/fittra-london-1'
    },
    {
      id: '6',
      title: 'Fittra London',
      subtitle: 'Renovation',
      image: 'https://res.cloudinary.com/dnqcj9kh3/image/upload/v1762782459/Group_1321315831_cpdgjd.png', // Replace with your actual image paths
      link: '/projects/fittra-london-2'
    }
  ];

  return (
    <section className="w-full min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* White Inner Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
            {/* Left Side - Heading and Paragraph */}
            <div className="flex-1 max-w-2xl">
              <div className="text-left leading-tight ">
              <h1 className="text-4xl sm:text-5xl font-bold ">
                <div className="bg-gradient-to-r from-[#B54CBE]  to-[#065FE5] bg-clip-text text-transparent">
           Projects We Have
                </div>
              
               
              </h1>
            </div>
              <p className="text-gray-600 text-base max-w-md m sm:text-lg leading-tight mt-4 ">
                PMManagement Substation 15, Janzur Brq-Srar Street Measurement, 
                Pedometers, Sleep Monitor, Message & Call Sync-Shoe
              </p>
            </div>

            {/* Right Side - Buttons */}
            <div className="flex flex-col  gap-4 w-full lg:w-auto">
               <Link href="/more-details">
      <button className="group relative flex items-center gap-2 px-10 py-[9px] bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-md overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE]">
        
        {/* Text */}
        <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B54CBE] group-hover:via-[#854CBE] group-hover:to-[#065FE5] transition-all duration-300">
          See More Details
        </span>

        {/* Arrow */}
        <ArrowUpRight className="relative z-10 w-5 h-5 text-white transition-all duration-300 group-hover:text-blue-500 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#B54CBE] group-hover:via-[#854CBE] group-hover:to-[#065FE5] group-hover:translate-x-1 group-hover:-translate-y-1" />

        {/* Gradient background animation */}
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
      </button>
    </Link>


       <Link href="/contact" className="relative group inline-block">
      <div className="relative flex items-center gap-2 rounded-lg px-8 py-[9px] overflow-hidden border border-blue-500 font-medium tracking-wide transition-colors duration-300">
        
        {/* Text */}
        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-colors duration-300 group-hover:text-white">
          Book a 15 min call
        </span>

        {/* Arrow icon */}
        <ArrowUpRight className="relative z-10 w-5 h-5 text-blue-500 bg-clip-text bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />

        {/* Gradient background fill on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      </div>
    </Link>
 

            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual Project Card Component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative g-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
      {/* Background Image with Overlay */}
      <div className="relative h-80 sm:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        
        {/* Replace with actual Next.js Image component */}
        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
          <img
            src={project.image}
            alt={project.title}
            // fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Decorative Lines */}
        {/* <div className="absolute top-8 left-0 right-0 z-20 flex justify-center gap-4 px-8 opacity-80">
          <div className="w-1 h-24 bg-white/30 transition-all duration-500 group-hover:h-32 group-hover:bg-white/50"></div>
          <div className="w-1 h-32 bg-white/40 transition-all duration-500 group-hover:h-40 group-hover:bg-white/60"></div>
          <div className="w-1 h-20 bg-white/30 transition-all duration-500 group-hover:h-28 group-hover:bg-white/50"></div>
          <div className="w-1 h-28 bg-white/35 transition-all duration-500 group-hover:h-36 group-hover:bg-white/55"></div>
          <div className="w-1 h-16 bg-white/25 transition-all duration-500 group-hover:h-24 group-hover:bg-white/45"></div>
          <div className="w-1 h-36 bg-white/40 transition-all duration-500 group-hover:h-44 group-hover:bg-white/60"></div>
        </div> */}
      </div>

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
        <div className="flex justify-between items-end">
          {/* Left Side - Title and Subtitle */}
          <div className="flex-1">
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1 transition-all duration-300 group-hover:text-purple-400">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base transition-all duration-300 group-hover:text-white">
              {project.subtitle}
            </p>
          </div>

          {/* Right Side - View Case Button */}
        <Link href={project.link}>
  <button className="group/btn flex items-center gap-2 px-5 py-2.5 bg-none text-white border border-[1px] border-white rounded-full font-medium text-sm transition-all duration-300 g-purple-600 hover:text-white hover:gap-3 hover:pr-4">
    View Case
    <Icon
      icon="ion:arrow-up-outline"
      className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-[30deg] text-yellow-500 rotate-[45deg]"
    />
  </button>
</Link>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-blue-500/20"></div>
      </div>
    </div>
  );
};

export default ProjectsSection;