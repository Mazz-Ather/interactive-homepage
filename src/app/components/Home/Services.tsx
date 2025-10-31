'use client'
import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';

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
    image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?w=600&h=400&fit=crop",
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
    toggleDropdown(serviceId, e);
  };

  return (
    <section className="relative min-h-screen bg-gblack py-9 px-4 sm:px-6 ">
      <div className="max-w-9xl mx-auto bg-[#EDEAFF] rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
       <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left mb-16 gap-6">
  {/* Title */}
  <div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-light tracking-tight">
      <span className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent font-bold">
        Our Core Services
      </span>
    </h1>
  </div>

  {/* Description */}
  <div className="text-black max-w-md">
    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
      We design and build full-scale immersive solutions tailored to your unique needs.
    </p>
  </div>

  {/* Button */}
   <div className="text-center">
                <Link href="/contact" className="relative group">
                  <div className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-full overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">See More details  →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                  </div>
                </Link>
              </div>
</div>


          <div className="space-y-0">
            {services.map((service, index) => (
              <div key={service.id} className="group">
                <div
                  onClick={(e) => handleServiceClick(service.id, service.href, e)}
                  className="flex items-center justify-between py-6 sm:py-8 border-b border-gray-300 transition-all duration-300 cursor-pointer hover:bg-whit/10 hover:px-4 rounded-lg hover:border-transparent hover:shadow-md"
                >
                  <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-12">
                    <span className="text-xl sm:text-2xl md:text-3xl font-light text-gray-400 group-hover:text-[#B54CBE] transition-colors duration-300 w-8 sm:w-10 md:w-12">
                      {String(service.id).padStart(2, '0')}
                    </span>

                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wide text-gray-900 group-hover:text-[#065FE5] transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

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
                          className="sm:w-8 sm:h-8 text-[#065FE5] transition-all duration-300"
                        />
                      ) : (
                        <ArrowUpRight
                          size={24}
                          className="sm:w-8 sm:h-8 text-gray-500 group-hover:text-[#B54CBE] transition-all duration-300"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdown === service.id
                      ? 'max-h-[600px] opacity-100 mb-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 py-6 bg-white/60 backdrop-blur-sm rounded-xl mx-2 sm:mx-4 border border-gray-200 shadow-lg">
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                      <div className="lg:w-1/3">
                        <div className="relative overflow-hidden rounded-xl group/image shadow-md">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-40 sm:h-48 md:h-56 lg:h-48 object-cover transition-transform duration-300 group-hover/image:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      </div>

                      <div className="lg:w-2/3 space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent mb-2">
                            {service.title}
                          </h4>
                          <p className="text-gray-800 text-base sm:text-lg font-medium">
                            {service.description}
                          </p>
                        </div>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {service.detailedDescription}
                        </p>

                        <div className="pt-2">
                          <button
                            className="inline-flex items-center space-x-2 text-[#065FE5] hover:text-[#B54CBE] transition-colors duration-300 group/link text-sm sm:text-base font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Learn More</span>
                            <ArrowUpRight
                              size={16}
                              className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
