'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard1 } from '../Home/ProjectCard1';
import { IndsutriesProjectCard } from './IndsutriesProjectCard';

const projects = [
  {
    id: 1,
    title: 'About Project',
    subtitle: 'National Day Campaign | Saudi Arabia National Day 2023 video has been made to celebrate love for country.',
    imageUrl: "/images/pro11.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  },
  {
    id: 2,
    title: 'About Project',
    subtitle: 'Interactive digital experience showcasing cultural heritage through immersive storytelling.',
    imageUrl: "/images/pro12.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  },
  {
    id: 3,
    title: 'About Project',
    subtitle: 'Architectural visualization project highlighting modern sustainable design concepts.',
    imageUrl: "/images/pro11.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  },
  {
    id: 4,
    title: 'About Project',
    subtitle: 'Brand identity development for emerging tech startup with global reach.',
    imageUrl: "/images/pro12.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  },
  {
    id: 5,
    title: 'About Project',
    subtitle: 'Motion graphics campaign for international sports event with custom animations.',
    imageUrl: "/images/pro11.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  },
  {
    id: 6,
    title: 'About Project',
    subtitle: 'Motion graphics campaign for international sports event with custom animations.',
    imageUrl: "/images/pro12.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  }
];

export const IndustriesRecentProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + projects.length) % projects.length);
  };

  // Positions: left, center (active), right1, right2, right3
  const positions = ['left', 'center', 'right1', 'right2', 'right3'] as const;

  // Get 5 visible projects with active card as second from left
  const visibleProjects = [
    projects[(activeIndex - 1 + projects.length) % projects.length], // left
    projects[activeIndex], // center (active)
    projects[(activeIndex + 1) % projects.length], // right1
    projects[(activeIndex + 2) % projects.length], // right2
    projects[(activeIndex + 3) % projects.length], // right3
  ];

  return (
    <div className="w-full bg-blac pt-20 pb-6 px-4 md:px-8 lg:px-16 relative overflow-hidden hidden md:block xl100:hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-">
        <div className="relative">
          <div className="max-w-2xl overflow-hidden">
            <div className="relative z-20 max-w-2xl">
              <h2 className="text-4xl z-[999] pb-2 overflow-hidden md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#B54CBE] to-[#065FE5] text-transparent bg-clip-text">
                Featured Projects
              </h2>
              <p className="text-gray-300 text-sm md:text-base max-w-[415px] pb-4 lg:pb-11 lg:max-w-[390px]">
                Discover our latest work. Our creative team has been busy crafting
                experiences that inspire. Each project is a blend of strategic
                thinking, artistic vision, and technical excellence. Click on any
                project to see more details and explore the stories behind our work.
              </p>
            </div>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 md:-mt-20 px-6 py-3 bg-gradient-to-r from-[#B54CBE] to-[#065FE5] rounded-md text-white font-medium flex items-center whitespace-nowrap"
        >
          Show All Projects →
        </motion.button>
      </div>

      {/* Carousel Section */}
      <div className="relative h-[500px] md:h-[550px] lg:h-[750px] max-w-[110vw] mx-auto -mt-[230px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {visibleProjects.map((project, idx) => {
            const position = positions[idx];
            const isActive = position === 'center';
            return (
              <IndsutriesProjectCard
                key={project.id}
                project={project}
                position={position}
                isActive={isActive}
                screenWidth={screenWidth}
                onClick={() => {
                  if (position === 'left') handlePrev();
                  else if (position === 'right1' || position === 'right2' || position === 'right3') handleNext();
                }}
              />
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full p-3 text-white hover:bg-black/70"
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full p-3 text-white hover:bg-black/70"
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};