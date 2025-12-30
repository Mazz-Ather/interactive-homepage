"use client";
import React, { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IndsutriesProjectCard } from "@/app/components/Industries/IndsutriesProjectCard";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { IndustriesRecentProjects } from "@/app/components/Industries/IndustriesRecentProjects";
import ContactForm from "@/app/components/layout/ContaxtForm";

interface ServiceCard {
  title: string;
  description: string;
}

// our process
interface Service {
  id: number;
  title: string;
  href: string;
  image: string;
  description: string;
  detailedDescription: string;
}

const servicesOur: Service[] = [
  {
    id: 1,
    title: "Concept & Strategy",
    href: "/services/consultation",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    description: "Understanding your needs",
    detailedDescription:
      "We begin with a collaborative session to understand your marketing goals, target audience, and key messaging. We then translate these insights into a compelling immersive concept.",
  },
  {
    id: 2,
    title: "Immersive Content Creation",
    href: "/services/3d-modeling",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    description: "Creating detailed 3D models",
    detailedDescription:
      "Our team develops stunning 3D assets, animations, and interactive elements, ensuring every detail reflects your brand's unique identity.",
  },
  {
    id: 3,
    title: "Platform Integration",
    href: "/services/interactive-development",
    image:
      "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?w=600&h=400&fit=crop",
    description: "Building immersive experiences",
    detailedDescription:
      " We create a seamless user experience, integrating the immersive content into a platform that is intuitive and easy for your audience to access and share.",
  },
  {
    id: 4,
    title: "Analytics & Optimization",
    href: "/services/deployment-support",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    description: "Launch and ongoing support",
    detailedDescription:
      "We provide tools for you to track engagement and user behavior, allowing you to continually improve the campaign's performance.",
  },
];
//   animation services

interface ServiceItem {
  id: number;
  image: string;
  title: string;
  description: string;
}
// contact
interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const page = () => {
      const { scrollToContactSection } = useSmoothScroll();
  
  // HowWeHelpEnhanced
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const services: ServiceCard[] = [
    {
      title: "Interactive Brand Activations:",
      description:
        "We design and develop interactive experiences for events, retail spaces, and public areas. These activations use a combination of AR, VR, and physical installations to create a shareable moment that generates buzz and captures attention.",
    },
    {
      title: "Virtual Product Demos:",
      description: `We build 3D models and virtual showrooms that allow customers to explore products from every angle. This gives consumers a deeper understanding of the product and helps build trust and confidence in their purchasing decision.`,
    },
    {
      title: "Augmented Reality Marketing:",
      description:
        "We create custom AR filters and interactive ads that work on social media platforms and mobile devices. These campaigns allow users to virtually try on products, place virtual objects in their own environment, or interact with a brand story in a new and exciting way.",
    },
  ];

  //   our process
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

  //   const [activeIndex, setActiveIndex] = useState<number>(0);

  const servicesAnimation: ServiceItem[] = [
    {
      id: 1,
      image: "/images/icon14.png",
      title: "The Challenge",
      description:
        "A new luxury hotel in Jeddah needed a way to attract high-value guests and showcase its world-class amenities before the official opening.",
    },
    {
      id: 2,
      image: "/images/icon13.png",
      title: "The Solution",
      description:
        "We created a comprehensive, photorealistic virtual tour of the entire hotel. Guests can virtually walk through the lobby, explore different room types, and visit amenities like the spa, rooftop pool, and dining areas from any device.",
    },
    {
      id: 3,
      image: "/images/icon12.png",
      title: "The Result",
      description:
        "The immersive virtual tour became a cornerstone of the hotel's marketing campaign, generating significant pre-opening interest and leading to a high volume of early bookings and media coverage.",
    },
  ];
  //
  const projects = [
    {
      id: 1,
      title: "About Project",
      subtitle:
        "National Day Campaign | Saudi Arabia National Day 2023 video has been made to celebrate love for country.",
      imageUrl: "/images/pro11.png",
      videoUrl:
        "https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4",
    },
    {
      id: 2,
      title: "About Project",
      subtitle:
        "Interactive digital experience showcasing cultural heritage through immersive storytelling.",
      imageUrl: "/images/pro12.png",
      videoUrl:
        "https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4",
    },
    {
      id: 3,
      title: "About Project",
      subtitle:
        "Architectural visualization project highlighting modern sustainable design concepts.",
      imageUrl: "/images/pro11.png",
      videoUrl:
        "https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4",
    },
    {
      id: 4,
      title: "About Project",
      subtitle:
        "Brand identity development for emerging tech startup with global reach.",
      imageUrl: "/images/pro12.png",
      videoUrl:
        "https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4",
    },
    {
      id: 5,
      title: "About Project",
      subtitle:
        "Motion graphics campaign for international sports event with custom animations.",
      imageUrl: "/images/pro11.png",
      videoUrl:
        "https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4",
    },
    {
      id: 6,
      title: "About Project",
      subtitle:
        "Motion graphics campaign for international sports event with custom animations.",
      imageUrl: "/images/pro12.png",
      videoUrl:
        "https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Positions: left, center (active), right1, right2, right3
  const positions = ["left", "center", "right1", "right2", "right3"] as const;

  // Get 5 visible projects with active card as second from left
  const visibleProjects = [
    projects[(activeIndex - 1 + projects.length) % projects.length], // left
    projects[activeIndex], // center (active)
    projects[(activeIndex + 1) % projects.length], // right1
    projects[(activeIndex + 2) % projects.length], // right2
    projects[(activeIndex + 3) % projects.length], // right3
  ];

  //   contact
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };
  return (
    <>
      <section className="relative font-[cairo] h-auto -mt-2 w-full overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1766907688/animated-future-dubai-skyline-with-high-tech-build-2025-10-16-05-01-24-utc_1_1_zulhbk.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Gradient Overlay - Top to bottom: transparent to black */}
          <div className="absolute h-auto inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
        </div>

        {/* Content Container - Left Center Aligned */}
        <div className="relative pt-32 md:pt-[250px] z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-28">
            <div className="max-w-xl lg:!max-w-[65%] ">
              {/* Mini Heading */}
              <p className="text-white text-xs md:!text-[21px] font-bold md:ml-1 tracking-wider mb-2 md:mb-3">
                Marketing & Ad Creative
              </p>

              {/* Main Heading - Smaller Size */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-6xl font-extrabold mb-3 md:mb-4 !leading-none ">
                <span className="bg-gradient-to-r from-[#B54CBE]  to-[#065FE5] bg-clip-text text-transparent !leading-[0.7]">
                  Creating Unforgettable Campaigns with Immersive Technology in
                  KSA
                </span>
              </h1>

              {/* Paragraph - Smaller Size */}
              <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed mb-5 md:mb-6">
                In a crowded market, traditional advertising struggles to
                capture attention. We empower brands and creative agencies in
                Saudi Arabia to stand out by building immersive experiences that
                turn passive viewers into active participants. Our solutions go
                beyond simple visuals to create a lasting connection between
                your brand and your audience.
              </p>

              {/* Buttons - Smaller Size */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Primary Button */}
                <button className="group relative px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#B54CBE] to-[#065FE5] text-white text-xs md:text-base font-semibold rounded-md hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  Get A Quote
                  <svg
                    className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                {/* Secondary Button */}
                <button className="px-5 py-2.5 md:px-6 md:py-3 bg-transparent border-2 border-white/30 text-white text-xs md:text-base font-semibold rounded-md hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Talk to our Special Tech Expert
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient enhancement for darker bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-[71%] bg-gradient-to-t from-black/10 to-transparent z-[5]"></div> */}
      </section>
      {/* section 2 */}
      <section className="relative font-[cairo] bg-black text-white pt-32 pb-36 px-6 overflow-hidden h-auto flex items-center">
        {/* Content Container */}
        <div className="relative z-10 max-w-8xl mx-auto w-full">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#B54CBE]  to-[#065FE5] text-transparent bg-clip-text">
              How We Help Marketing & Ad Creative
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-400 text-center text-sm md:text-lg max-w-3xl mx-auto mb-20">
            We specialize in creating powerful, purpose built solutions that
            improve brand engagement and elevate brand perception.
          </p>

          {/* Service Cards with Connecting Lines */}
          <div className="relative max-w-7xl mx-auto">
            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-9">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-[20px] border backdrop-blur-sm px-6 py-4 transition-all duration-500 hover:scale-[1.01] min-h-[140px] flex flex-col cursor-pointer ${
                    index === activeIndex
                      ? "bg-gradient-to-br from-white/25 to-white/15 border-white/30 shadow-2xl scale-105"
                      : "bg-white/5 border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Dot and Title on Same Line */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-3.5 h-3.5 rounded-full flex-shrink-0 transition-all duration-500 ${
                        index === activeIndex
                          ? "bg-gradient-to-r from-white to-white shadow-lg shadow-white/40"
                          : "bg-gray-500"
                      }`}
                    />
                    <h3
                      className={`text-lg md:text-xl font-semibold transition-colors duration-500 ${
                        index === activeIndex ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${
                      index === activeIndex ? "text-gray-300" : "text-gray-400"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Connecting Lines SVG - Bottom Center */}
          </div>
        </div>

        {/* Background Image at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 md:h-2/3 pb-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/80 to-black z-10" />
          <img
            src="/images/logob2.png"
            alt=""
            className="w-full absolute h-auto object-cover mt-[60px] opacity-30"
          />
          <img
            src="/images/logob3.png"
            alt=""
            className="w-full h-auto object-cover mt-[160px] opacity-20"
          />
        </div>

        {/* Decorative Glow Effects */}
        {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" /> */}
      </section>
      {/* section 3 */}
      <section className="relative min-h-screen bg-black font-cairo pb-9 px-4 sm:px-6 overflow-hidden">
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
                  <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight">
                    <span className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent font-bold">
                      Our Process for Marketing
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent font-bold">
                      & Ad Creative Projects
                    </span>
                  </h1>
                </div>

                {/* Description and Button - Right Side */}
                <div className="flex flex-col items-end gap-4 max-w-md ml-auto">
                  <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed text-right">
                    Our process is built on a foundation of creativity,
                    strategic thinking, and a deep understanding of what makes a
                    campaign truly memorable.
                  </p>

                  <div onClick={() => scrollToContactSection()} className="relative group">
                    <div className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-lg overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                      <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                        See More Details →
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SERVICE LIST */}
              <div className="space-y-0">
                {servicesOur.map((service) => (
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

                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl  tracking-wide !text-gray-700 group-hover:text-[#065FE5] transition-all duration-300">
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
                      <div className="px-4 sm:px-6 py-9 rounded-xl mx-2 sm:mx-4">
                        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                          <div className="w-full space-y-3 sm:space-y-4">
                            <p className="text-gray-900 text-sm sm:text-base md:text-xl  ml-[48px] leading-relaxed">
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
  <div className="mt-9 md:mt-20">
        <section className="bg-black text-center pb-11 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to transform your{" "}
              <span className="bg-gradient-to-r from-[#B54CBE] via-[#065FE5] to-[#065FE5] bg-clip-text text-transparent">
                brand's marketing?
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-gray-400 text-sm sm:text-base mb-10">
              Let's collaborate to create a campaign that leaves a lasting
              impression.
            </p>

            {/* Button */}
            <div className="text-center max-w-[220px] mx-auto">
              <Link href="/contact" className="relative group">
                <div className="group relative px-2 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-sm overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                  <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                    Contact Us →
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* section 3d */}
      <section className="relative py-11 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source
            src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985516/servide-bg_npenqb.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

        {/* Top and Bottom Gradients */}
        <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-black to-transparent z-[5]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black to-transparent z-[5]"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {/* How We Help with 3D */}
                Featured Tourism
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                & Hospitality Project
                {/* Animation & Visualisation */}
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-gray-300 md:text-lg lg:text-xl">
              Virtual Tour of a Landmark Hotel in Jeddah
            </p>
          </motion.div>

          {/* Circles Container */}
          <div className="relative flex w-full items-center justify-center">
            <div className="flex items-center justify-center gap-0">
              {servicesAnimation.map((service, index) => {
                const isActive = activeIndex === index;

                // Overlap styling
                let positionClass = "";

                if (index === 0) {
                  positionClass = "-mr-16 md:-mr-20 lg:-mr-24 xl:-mr-28";
                } else if (index === 2) {
                  positionClass = "-ml-16 md:-ml-20 lg:-ml-24 xl:-ml-28";
                }

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`relative ${positionClass}`}
                    style={{ zIndex: isActive ? 40 : 10 }}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    {/* Circle with gradient background for active */}
                    <div
                      className={`relative flex cursor-pointer items-center justify-center rounded-full transition-all duration-500 ${
                        isActive
                          ? "border-2 border-purple-500/80 bg-gradient-to-br from-[#B54CBE]/50 to-[#065FE5]/50"
                          : "border border-purple-500/30 bg-transparent"
                      }`}
                      style={{
                        width: "clamp(280px, 25vw, 380px)",
                        height: "clamp(280px, 25vw, 380px)",
                        boxShadow: isActive
                          ? "0 0 40px rgba(168, 85, 247, 0.4), inset 0 0 60px rgba(168, 85, 247, 0.1)"
                          : "0 0 20px rgba(168, 85, 247, 0.2)",
                        backdropFilter: isActive ? "blur(10px)" : "blur(5px)",
                      }}
                    >
                      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 text-center md:px-8 lg:px-10">
                        {/* Image */}
                        <motion.div
                          animate={{
                            scale: isActive ? 1.1 : index === 0 ? 1.6 : 1, // 👈 bigger when not active too
                          }}
                          transition={{ duration: 0.3 }}
                          className="mb-4 flex items-center justify-center md:mb-5"
                          style={{
                            width:
                              index === 0
                                ? "clamp(70px, 7vw, 85px)"
                                : "clamp(48px, 5vw, 64px)", // 👈 bigger base size
                            height:
                              index === 0
                                ? "clamp(70px, 7vw, 95px)"
                                : "clamp(48px, 5vw, 64px)",
                          }}
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={index === 0 ? 105 : 64} // 👈 larger width/height for first one
                            height={index === 0 ? 105 : 64}
                            className={`h-full w-full object-contain transition-all duration-300 ${
                              isActive
                                ? "brightness-110 opacity-100"
                                : "brightness-90 opacity-70"
                            }`}
                          />
                        </motion.div>

                        {/* Title - Always Visible */}
                        <h3
                          className={`mb-2 font-bold transition-all duration-300 ${
                            isActive ? "text-white" : "text-gray-300"
                          }`}
                          style={{
                            fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
                          }}
                        >
                          {service.title}
                        </h3>

                        {/* Description - Only for Active */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4 }}
                              className="overflow-hidden"
                            >
                              <p
                                className="leading-relaxed text-gray-200"
                                style={{
                                  fontSize: "clamp(0.875rem, 1vw, 1rem)",
                                }}
                              >
                                {service.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* section 4 news letter */}
    
      {/*  */}
      <IndustriesRecentProjects/>
      <ContactForm/>
    </>
  );
};

export default page;
