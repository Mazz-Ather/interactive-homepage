import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  href: string;
}

const services: Service[] = [
  { id: 1, title: "Digital Transformation", href: "/services/digital-transformation" },
  { id: 2, title: "Events & Exhibitions", href: "/services/events-exhibitions" },
  { id: 3, title: "3D Animation & Visualisation", href: "/services/3d-animation-visualisation" },
  { id: 4, title: "Real Estate Digital Twins", href: "/services/real-estate-digital-twins" },
  { id: 5, title: "Gamification", href: "/services/gamification" }
];

const ServicesComponent: React.FC = () => {
  return (
    <>
    <section className="relative min-h-screen bg-gradient-to-t from-black to-black text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0  z-0">
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

      <div className="relative z-10 container mx-auto px-  py-11">
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start text-center lg:text-left">
  {/* Left Side - Services Heading */}
  <div className="space-y-1 flex justify-center lg:block">
    <h1 className="text-6xl lg:pt-6 md:text-7xl lg:text-6xl font-light tracking-tight whitespace-nowrap">
      <span className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent z-[999] font-[700]">
        Our Core Services
      </span>
    </h1>
  </div>

  {/* Center - Description */}
  <div className="lg:pt-6 md:ml-72 lg:ml-40 lg:w-[70%] flex justify-center lg:block">
    <p className="text-gray-300 text-md leading-relaxed max-w-md">
    We design and build full-scale immersive solutions tailored to your unique needs.
</p>
  </div>

  {/* Right Side - Button */}
  <div className="lg:pt-6 flex justify-center lg:justify-end">
    <div className="inline-block">
      <Link href="/contact" className="relative group">
        <div className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-full overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
          <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
            See More details →
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
        </div>
      </Link>
    </div>
  </div>
</div>


        {/* Services List */}
        <div className="mt-24 space-y-0">
          {services.map((service, index) => (
            <div key={service.id} className="group">
              <Link href={service.href}>
                <div className="flex items-center justify-between py-8 border-b border-gray-800 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-12">
                    {/* Service Number */}
                    <span className="text-3xl font-light text-gray-500 group-hover:text-gray-300 transition-colors duration-300 w-12">
                      {String(service.id).padStart(2, '0')}
                    </span>
                    
                    {/* Service Title */}
                    <h3 className="text-3xl md:text-4xl font-light tracking-wide group-hover:scale-[1.02] group-hover:text-blue-500  transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Arrow Container */}
                  <div className="arrow-container relative overflow-hidden">
                    <div className="transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
                      <ArrowUpRight 
                        size={32} 
                        className="text-gray-400 group-hover:text-blue-400 transition-all duration-300" 
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </section>
    </>
  );
};

export default ServicesComponent;