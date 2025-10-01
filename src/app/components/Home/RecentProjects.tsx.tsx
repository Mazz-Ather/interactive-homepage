'use client'

import React, { useEffect, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'About Project',
    subtitle: 'National Day Campaign | Saudi Arabia National Day 2023 video has been made to celebrate love for country.',
    // date: '9/23/23',
    imageUrl: "/images/pro1.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  },
  {
    id: 2,
    title: 'About Project',
    subtitle: 'Interactive digital experience showcasing cultural heritage through immersive storytelling.',
    // date: '8/15/23',
    imageUrl: "/images/pro2.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  },
  {
    id: 3,
    title: 'About Project',
    subtitle: 'Architectural visualization project highlighting modern sustainable design concepts.',
    // date: '7/10/23',
    imageUrl: "/images/pro3.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  },
  {
    id: 4,
    title: 'About Project',
    subtitle: 'Brand identity development for emerging tech startup with global reach.',
    // date: '6/05/23',
    imageUrl: "/images/pro1.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  },
  {
    id: 5,
    title: 'About Project',
    subtitle: 'Motion graphics campaign for international sports event with custom animations.',
    // date: '5/22/23',
    imageUrl: "/images/pro2.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  },
  {
    id: 6,
    title: 'About Project',
    subtitle: 'Motion graphics campaign for international sports event with custom animations.',
    // date: '5/22/23',
    imageUrl: "/images/pro3.png",
    videoUrl: 'https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4'
  }
];

export const RecentProjects = () => {
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

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  // Always show 3 cards regardless of screen size
  const visibleProjects = [
    projects[(activeIndex - 1 + projects.length) % projects.length],
    projects[activeIndex],
    projects[(activeIndex + 1) % projects.length]
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* ClipPath definition once globally */}
      <svg className="absolute w-0 h-0">
        <clipPath id="cardClip" clipPathUnits="objectBoundingBox">
          <path d="M0,0.26 L0.9,0 Q1,0 1,0.1 L1,0.82 L0,1 Z" />
        </clipPath>
      </svg>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Recent Projects
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl">
            Discover our latest work. Our creative team has been busy crafting
            experiences that inspire. Each project is a blend of strategic
            thinking, artistic vision, and technical excellence. Click on any
            project to see more details and explore the stories behind our work.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 md:mt-0 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium flex items-center whitespace-nowrap"
        >
          Show All Projects →
        </motion.button>
      </div>
      {/* Carousel Section */}
      <div className="relative h-[500px] md:h-[550px] lg:h-[600px] w-full mt-8">
        <div className="absolute inset-0 flex items-center justify-center">
          {visibleProjects.map((project, idx) => {
            // Calculate position based on index (always 3 cards)
            const position = idx === 0 ? 'left' : idx === 2 ? 'right' : 'center';
            const isActive = position === 'center';
            return (
              <ProjectCard
                key={project.id}
                project={project}
                position={position}
                isActive={isActive}
                screenWidth={screenWidth}
                onClick={() => {
                  if (idx === 0) handlePrev();
                  else if (idx === 2) handleNext();
                }}
              />
            );
          })}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full p-3 text-white hover:bg-black/70"
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full p-3 text-white hover:bg-black/70"
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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