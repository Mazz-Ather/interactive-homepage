"use client";
import React, { useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
    title: "Consultation:",
    href: "/services/consultation",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    description: "Understanding your needs",
    detailedDescription:
      "We work closely with you to understand your property, target audience, and marketing goals.",
  },
  {
    id: 2,
    title: "3D Modeling:",
    href: "/services/3d-modeling",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    description: "Creating detailed 3D models",
    detailedDescription:
      "Our team creates detailed 3D models of your property with precision and attention to every detail.",
  },
  {
    id: 3,
    title: "Interactive Development:",
    href: "/services/interactive-development",
    image:
      "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?w=600&h=400&fit=crop",
    description: "Building immersive experiences",
    detailedDescription:
      "We develop interactive virtual tours and immersive experiences that engage your potential buyers.",
  },
  {
    id: 4,
    title: "Deployment & Support:",
    href: "/services/deployment-support",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    description: "Launch and ongoing support",
    detailedDescription:
      "We deploy your solution and provide continuous support to ensure optimal performance and results.",
  },
];

const OurProcess: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (serviceId: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenDropdown(openDropdown === serviceId ? null : serviceId);
  };

  const handleServiceClick = (
    serviceId: number,
    href: string,
    e: React.MouseEvent
  ) => {
    toggleDropdown(serviceId, e);
  };

  return (
    <section className="relative min-h-screen bg-black pb-9 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-9xl mx-auto bg-[#EDEAFF] rounded-3xl shadow-2xl overflow-hidden">

      {/* ===== Background Decorative Images ===== */}
      <Image
        src="/images/logob.png"
        alt="Top left decor"
        width={400}
        height={400}
        className="absolute top-[10%] left-[15%] opacity-60 scale-[1.5] pointer-events-none"
      />
      <Image
        src="/images/logob1.png"
        alt="Top right decor"
        width={400}
        height={400}
        className="absolute top-0 -right-[2%] opacity-30 scale-[1.5] pointer-events-none"
        />
      <Image
        src="/images/logob2.png"
        alt="Bottom center logo"
        width={900}
        height={900}
        className="absolute -bottom-[1%] left-1/2 -translate-x-1/2 opacity-30 scale-[1.2] pointer-events-none"
      />

      <Image
        src="/images/logob3.png"
        alt="Bottom center logo"
        width={900}
        height={900}
        className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 opacity-30 scale-[1] pointer-events-none"
        />
      {/* ===== Main Container ===== */}
      <div className="max-w-9xl mx-auto rounded-3xl shadow2xl overflow-hidden relative z-10">
        <div className="px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
          {/* HEADER SECTION */}
          <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-6">
            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-light tracking-tight">
                <span className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent font-bold">
                  Our Process for
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent font-bold">
                  Real Estate Projects
                </span>
              </h1>
            </div>

            {/* Description and Button - Right Side */}
            <div className="flex flex-col items-end gap-4 max-w-md ml-auto">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-right">
                We follow a tailored process to ensure your project delivers maximum impact.
              </p>
              
              <Link href="/contact" className="relative group">
                <div className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-lg overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                  <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                    See More Details →
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                </div>
              </Link>
            </div>
          </div>

          {/* SERVICE LIST */}
          <div className="space-y-0">
            {services.map((service) => (
              <div key={service.id} className="group">
                <div
                  onClick={(e) =>
                    handleServiceClick(service.id, service.href, e)
                  }
                  className="flex items-center justify-between py-6 sm:py-8 border-b border-gray-300 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:px-4 rounded-lg hover:border-transparent hover:shadow-md"
                >
                  <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-12">
                    <span className="text-xl sm:text-2xl md:text-3xl font-light text-gray-400 group-hover:text-[#B54CBE] transition-colors duration-300 w-8 sm:w-10 md:w-12">
                      {String(service.id).padStart(3, "00")}
                    </span>

                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wide text-gray-900 group-hover:text-[#065FE5] transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <div className="arrow-container relative overflow-hidden">
                    <div
                      className={`transform transition-transform duration-300 cursor-pointer ${
                        openDropdown === service.id
                          ? "-rotate-45"
                          : "group-hover:translate-x-2 group-hover:-translate-y-2"
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

                {/* Dropdown Description */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdown === service.id
                      ? "max-h-[600px] opacity-100 mb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 py-6 rounded-xl mx-2 sm:mx-4">
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                      <div className="w-full space-y-3 sm:space-y-4">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {service.detailedDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Centered Heading and Paragraph After Section ===== */}
   
                        </div>
    </section>
  );
};

export default OurProcess;