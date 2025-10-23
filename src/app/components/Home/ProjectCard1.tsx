'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  date?: string;
  imageUrl: string;
  videoUrl: string;
}

interface ProjectCardProps {
  project: Project;
  position: 'farLeft' | 'left' | 'center' | 'right' | 'farRight';
  isActive: boolean;
  screenWidth: number;
  onClick: () => void;
}

export const ProjectCard1: React.FC<ProjectCardProps> = ({
  project,
  position,
  isActive,
  screenWidth,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isActive && isPlaying) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive, isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isPlaying]);

  const getCardStyles = () => {
    let translateXValue = '0%';
    let rotateYValue = '0deg';
    let scaleValue = 1;
    let opacityValue = 1;
    let zIndexValue = 2;

    if (screenWidth < 768) {
      switch (position) {
        case 'farLeft':
          translateXValue = '-100%';
          scaleValue = 0.7;
          break;
        case 'left':
          translateXValue = '-60%';
          scaleValue = 0.95;
          break;
        case 'center':
          translateXValue = '0%';
          scaleValue = 2.25;
          break;
        case 'right':
          translateXValue = '60%';
          scaleValue = 0.95;
          break;
        case 'farRight':
          translateXValue = '100%';
          scaleValue = 0.7;
          break;
      }
    } else if (screenWidth < 1024) {
      switch (position) {
        case 'farLeft':
          translateXValue = '-110%';
          scaleValue = 0.55;
          opacityValue = 0.35;
          zIndexValue = 0;
          break;
        case 'left':
          translateXValue = '-70%';
          scaleValue = 0.7;
          opacityValue = 0.6;
          zIndexValue = 1;
          break;
        case 'center':
          translateXValue = '0%';
          scaleValue = 1;
          opacityValue = 1;
          zIndexValue = 3;
          break;
        case 'right':
          translateXValue = '70%';
          scaleValue = 0.7;
          opacityValue = 0.6;
          zIndexValue = 1;
          break;
        case 'farRight':
          translateXValue = '110%';
          scaleValue = 0.55;
          opacityValue = 0.35;
          zIndexValue = 0;
          break;
      }
    } else {
      // Large screens
      switch (position) {
        case 'farLeft':
          translateXValue = '-120%';
          scaleValue = 0.6;
          opacityValue = 0.4;
          zIndexValue = 0;
          break;
        case 'left':
          translateXValue = '-75%';
          scaleValue = 0.85;
          opacityValue = 0.7;
          zIndexValue = 1;
          break;
        case 'center':
          translateXValue = '0%';
          scaleValue = 1;
          opacityValue = 1;
          zIndexValue = 3;
          break;
        case 'right':
          translateXValue = '75%';
          scaleValue = 0.85;
          opacityValue = 0.7;
          zIndexValue = 1;
          break;
        case 'farRight':
          translateXValue = '120%';
          scaleValue = 0.6;
          opacityValue = 0.4;
          zIndexValue = 0;
          break;
      }
    }

    return {
      zIndex: zIndexValue,
      translateX: translateXValue,
      rotateY: rotateYValue,
      scale: scaleValue,
      opacity: opacityValue
    };
  };

  const cardStyles = getCardStyles();

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isActive) {
      setIsPlaying(prev => !prev);
    }
  };

  const getCardWidth = () => {
    if (screenWidth < 640) return 'w-[220px]';
    if (screenWidth < 768) return 'w-[250px]';
    if (screenWidth < 1024) return 'w-[280px]';
    return 'w-[390px]';
  };

  const getCardHeight = () => {
    if (screenWidth < 640) return 'h-[400px]';
    if (screenWidth < 768) return 'h-[450px]';
    if (screenWidth < 1024) return 'h-[500px]';
    if (screenWidth < 1524) return 'h-[750px]';
    return 'h-[500px]';
  };

  return (
    <motion.div
      className={`absolute cursor-pointer ${getCardWidth()} ${getCardHeight()} perspective-1000 transition-all duration-300 overflow-hidden`}
      initial={cardStyles}
      animate={{
        zIndex: cardStyles.zIndex,
        translateX: cardStyles.translateX,
        rotateY: cardStyles.rotateY,
        scale: isHovered && isActive ? 1.05 : cardStyles.scale,
        opacity: cardStyles.opacity
      }}
      transition={{
        duration: 0.03,
        ease: 'easeInOut'
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        filter: isActive ? '' : 'none'
      }}
    >
      {/* Main image container */}
      <div
        className="relative mx-auto overflow-hidden w-full h-full"
        style={{
          backgroundImage: `url(${project.imageUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "0px",
        }}

      >
      <div className="absolute bottom-16 xl100:hidden left-0 right-0 h-52 bg-gradient-to-t from-black via-transparent to-transparent z-10"
          style={{
    clipPath: 'polygon(0% 0%, 100% 0%, 98% 52%, 0% 115%)'
  }}
        ></div>
        {/* <div className="absolute xl100:block hidden -bottom-2 left-0 right-0 h-[200px] bg-gradient-to-t from-black via-transparent to-transparent z-10"
          style={{
    clipPath: 'polygon(0% 0%, 100% 0%, 98% 52%, 0% 115%)'
  }}
        ></div> */}
  <div
  className="absolute inset-x-0 bottom-0 h-[260px] max-w-[400px]  bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"

 style={{
    // clipPath: 'polygon(0% 0%, 0% 0%, 75% 52%, 16% 115%)'
  }}
></div>

{/* small screen lg hidden */}
        {/* Parallelogram overlay for inactive cards - SOLUTION 1: Clip-path */}
        {(position === 'left' || position === 'right' || position === 'farLeft' || position === 'farRight') && (
<div
  className="
    absolute inset-0 
   bg-black/60
    bg-opacity-60 
    backdrop-blur-sm
    lg:hidden
  "
  style={{
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 92%, 0% 100%)'
  }}
></div>

        )}
        {/* lg:block */}
        {(position === 'left' || position === 'right' || position === 'farLeft' || position === 'farRight') && (
<div
  className="
    absolute inset-0 
   
   bg-black/60
    bg-opacity-60 
    backdrop-blur-sm
    lg:block
    xl100:hidden
    lg:g-red-500
    xl80bg-green-500
    xl90:g-blue-500
    xl100:bg-yellow-500
  "
  style={{
    clipPath: 'polygon(0% 22%, 100% 1%, 100% 98%, 0% 160%)'
  }}
></div>



)}
{/* // xl block  */}
        {(position === 'left' || position === 'right' || position === 'farLeft' || position === 'farRight') && (
<div
  className="
    absolute inset-0 
   hidden
   bg-yellow-500
    bg-opacity-60 
    backdrop-blur-sm
    hiddden
    xl100:block
  "
  style={{
    clipPath: 'polygon(0% 10%, 100% -10%, 100% 99%, 0% 100%)'
  }}
></div>



        )}

{/* // Add this inside your ProjectCard1 component, after the existing overlays */}

{/* Corner gradient for farLeft - top left corner */}
{position === 'farLeft' && (
  <div 
    className="absolute inset-0 z-10"
    style={{
      background: `
        radial-gradient(
          circle at top left,
          rgba(0,0,0,0.8) 0%,
          rgba(0,0,0,0.6) 30%,
          rgba(0,0,0,0.3) 50%,
          transparent 70%
        )
      `
    }}
  />
)}

{/* Corner gradient for farRight - top right corner */}
{position === 'farRight' && (
  <div 
    className="absolute inset-0 z-10"
    style={{
      background: `
        radial-gradient(
          circle at top right,
          rgba(0,0,0,0.8) 0%,
          rgba(0,0,0,0.6) 30%,
          rgba(0,0,0,0.3) 50%,
          transparent 70%
        )
      `
    }}
  />
)}

        {/* Alternative SOLUTION 2: Gradient-based overlay (uncomment to use instead of clip-path) */}
        {/* {(position === 'left' || position === 'right' || position === 'farLeft' || position === 'farRight') && (
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  105deg, 
                  transparent 0%, 
                  transparent 8%, 
                  rgba(0,0,0,0.65) 15%, 
                  rgba(0,0,0,0.65) 85%, 
                  transparent 92%, 
                  transparent 100%
                )
              `,
              backdropFilter: 'blur(2px)'
            }}
          />
        )} */}

        {/* Subtle overlay for the center card */}
        {position === 'center' && (
          <div className="absolute inset-0 bg-gradient-to-t from-blck/40 via-transparent to-transparent z-10"></div>
        )}
      </div>

      {/* Date display */}
      <div className="absolute top-8 right-8 text-white text-sm font-medium z-20">
        {project.date}
      </div>

      {/* Video element */}
      {isPlaying && isActive && (
        <video
          ref={videoRef}
          src={project.videoUrl}
          className="absolute inset-0 w-full h-full mx-auto object-cover z-10"
          controls
          autoPlay
          onClick={e => e.stopPropagation()}
        />
      )}

      {/* Play button */}
      {!isPlaying && isActive && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
          onClick={handlePlayClick}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="10 8 16 12 10 16" fill="white" />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Pause button */}
      {isPlaying && isActive && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
          onClick={handlePlayClick}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="8" width="4" height="8" fill="white" />
              <rect x="14" y="8" width="4" height="8" fill="white" />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Project info */}
      <div
        className="
          absolute 
          bottom-[113px] 
          left-0 right-0 
          p-4 md:p-6 
          text-white
          z-20
        "
      >
        <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
        <p
          className="
            text-xs md:text-sm text-white/80 line-clamp-3 
            max-w-[90%] xl:max-w-[80%]
          "
        >
          {project.subtitle}
        </p>
      </div>
    </motion.div>
  );
};