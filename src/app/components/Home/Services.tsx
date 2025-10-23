'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  href: string;
  image: string;
  description: string;
  detailedDescription: string;
}

const services: Service[] = [
  { 
    id: 1, 
    title: "Digital Transformation", 
    href: "/services/digital-transformation",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    description: "End-to-end custom VR/AR solutions",
    detailedDescription: "We create end-to-end custom VR/AR solutions that streamline operations, enhance training, and change the way your business works."
  },
  { 
    id: 2, 
    title: "Events & Exhibitions", 
    href: "/services/events-exhibitions",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    description: "Immersive tech for events and exhibitions",
    detailedDescription: "We design and implement immersive tech for events, ensuring your booth and brand capture attention and leave a lasting impression."
  },
  { 
    id: 3, 
    title: "3D Animation & Visualisation", 
    href: "/services/3d-animation-visualisation",
    image: "/images/3d.png",
    description: "Stunning 3D content and cinematic VFX",
    detailedDescription: "Our team produces stunning 3D content, from architectural models to cinematic VFX, bringing your vision to life."
  },
  { 
    id: 4, 
    title: "Real Estate Digital Twins", 
    href: "/services/real-estate-digital-twins",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    description: "Interactive digital models of properties",
    detailedDescription: "We create interactive digital models of properties, providing a powerful new way to showcase and sell real estate."
  },
  { 
    id: 5, 
    title: "Gamification", 
    href: "/services/gamification",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
    description: "Game design principles for business challenges",
    detailedDescription: "We apply the principles of game design to business challenges, increasing user engagement and motivation."
  }
];

const ServicesComponent: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (serviceId: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenDropdown(openDropdown === serviceId ? null : serviceId);
  };

  const handleServiceClick = (serviceId: number, href: string, e: React.MouseEvent) => {
    // Always toggle the dropdown, don't navigate
    toggleDropdown(serviceId, e);
  };

  return (
    <>
    <section className="relative min-h-screen bg-gradient-to-t from-black to-black text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[180vh] object-cover opacity-"
        >
          <source src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985516/servide-bg_npenqb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Gradient overlay for top + bottom */}
        <div className="absolute inset-0 z-10">
          {/* Top + bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black py-9"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-11">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start text-center lg:text-left">
          {/* Left Side - Services Heading */}
          <div className="flex justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-light tracking-tight whitespace-nowrap">
    <span className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent font-bold">
      Our Core Services
    </span>
  </h1>
</div>


          {/* Center - Description */}
          <div className="lg:pt-6 lg:ml-20 flex justify-center lg:justify-start">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md lg:max-w-md xl:max-w-md">
            We design and build full-scale immersive solutions tailored to your unique needs.
            </p>
          </div>

          {/* Right Side - Button */}
          <div className="lg:pt-6 flex justify-center lg:justify-end">
            <div className="inline-block">
              <Link href="/contact" className="relative group">
                <div className="group relative px-6 py-3 sm:px-8 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-full overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                  <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    See More details →
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-16 sm:mt-20 md:mt-24 space-y-0">
          {services.map((service, index) => (
            <div key={service.id} className="group">
              <div 
                onClick={(e) => handleServiceClick(service.id, service.href, e)}
                className="flex items-center justify-between py-6 sm:py-8 border-b border-gray-800 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-12">
                  {/* Service Number */}
                  <span className="text-xl sm:text-2xl md:text-3xl font-light text-gray-500 group-hover:text-gray-300 transition-colors duration-300 w-8 sm:w-10 md:w-12">
                    {String(service.id).padStart(2, '0')}
                  </span>
                  
                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wide group-hover:scale-[1.02] group-hover:text-blue-500 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>
                
                {/* Arrow Container */}
                <div className="arrow-container relative overflow-hidden">
                  <div 
                    className={`transform transition-transform duration-300 cursor-pointer ${
                      openDropdown === service.id 
                        ? 'rotate-180' 
                        : 'group-hover:translate-x-2 group-hover:-translate-y-2'
                    }`}
                  >
                    {openDropdown === service.id ? (
                      <ArrowDown 
                        size={24} 
                        className="sm:w-8 sm:h-8 text-blue-400 transition-all duration-300" 
                      />
                    ) : (
                      <ArrowUpRight 
                        size={24} 
                        className="sm:w-8 sm:h-8 text-gray-400 group-hover:text-blue-400 transition-all duration-300" 
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Dropdown Content */}
              <div 
                className={`pt-5 overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdown === service.id 
                    ? 'max-h-screen opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 py-6 bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-lg mx-2 sm:mx-4 mb-4 border border-gray-700/30">
                  <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                    {/* Image */}
                    <div className="lg:w-1/3">
                      <div className="relative overflow-hidden rounded-lg group/image">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-40 sm:h-48 md:h-56 lg:h-48 object-cover transition-transform duration-300 group-hover/image:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:w-2/3 space-y-3 sm:space-y-4">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-300 text-base sm:text-lg font-medium">
                          {service.description}
                        </p>
                      </div>
                      
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {service.detailedDescription}
                      </p>
                      
                      <div className="pt-2">
                        <Link 
                          href={service.href}
                          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link text-sm sm:text-base"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Learn More</span>
                          <ArrowUpRight 
                            size={16} 
                            className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" 
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesComponent;