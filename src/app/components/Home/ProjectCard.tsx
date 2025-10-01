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
  position: 'left' | 'center' | 'right';
  isActive: boolean;
  screenWidth: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  position,
  isActive,
  screenWidth,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Stop video when card is not active or when isPlaying is false
  useEffect(() => {
    if (!isActive && isPlaying) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive, isPlaying]);

  // Play or pause video based on isPlaying state
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

  // Position-based styling adjusted for different screen sizes
  const getCardStyles = () => {
    // Base values
    let translateXValue = '0%';
    let rotateYValue = '0deg'; // Remove rotation for consistent shape
    let scaleValue = 1;
    let opacityValue = 1;
    let zIndexValue = 2;

    // Mobile screens (adjust these values to ensure 3 cards are visible)
    if (screenWidth < 768) {
      if (position === 'left') {
        translateXValue = '-80%';
        rotateYValue = '0deg'; // no rotation
        scaleValue = 0.6;
        opacityValue = 0.5;
        zIndexValue = 1;
      } else if (position === 'right') {
        translateXValue = '80%';
        rotateYValue = '0deg'; // no rotation
        scaleValue = 0.6;
        opacityValue = 0.5;
        zIndexValue = 1;
      }
    }
    // Tablet screens
    else if (screenWidth < 1024) {
      if (position === 'left') {
        translateXValue = '-70%';
        rotateYValue = '0deg'; // no rotation
        scaleValue = 0.7;
        opacityValue = 0.6;
        zIndexValue = 1;
      } else if (position === 'right') {
        translateXValue = '70%';
        rotateYValue = '0deg'; // no rotation
        scaleValue = 0.7;
        opacityValue = 0.6;
        zIndexValue = 1;
      }
    }
    // Desktop screens
    else {
      if (position === 'left') {
        translateXValue = '-60%';
        rotateYValue = '0deg'; // no rotation
        scaleValue = 0.85;
        opacityValue = 0.7;
        zIndexValue = 1;
      } else if (position === 'right') {
        translateXValue = '60%';
        rotateYValue = '0deg'; // no rotation
        scaleValue = 0.85;
        opacityValue = 0.7;
        zIndexValue = 1;
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

  // Calculate card width based on screen size
  const getCardWidth = () => {
    if (screenWidth < 640) return 'w-[220px]';
    if (screenWidth < 768) return 'w-[250px]';
    if (screenWidth < 1024) return 'w-[280px]';
    return 'w-[380px]';
  };

  // Calculate card height based on screen size
  const getCardHeight = () => {
    if (screenWidth < 640) return 'h-[450px]';
    if (screenWidth < 768) return 'h-[600px]';
    if (screenWidth < 1024) return 'h-[650px]';
    return 'h-[580px]';
  };

  return (
    <motion.div
      className={`absolute cursor-pointer ${getCardWidth()} ${getCardHeight()} perspective-1000 transition-all duration-300`}
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
        filter: isActive ? 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.3))' : 'none'
      }}
    >
      <div
        className="relative mx-auto overflow-hidden w-full h-[90vh]"
        style={{
          clipPath: "url(#cardClip)",
          backgroundImage: `url(${project.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>

      {/* Date display */}
      <div className="absolute top-8 right-8 text-white text-sm font-medium z-20">
        {project.date}
      </div>

      {/* Video element */}
      {isPlaying && isActive && (
        <video
          ref={videoRef}
          src={project.videoUrl}
          className="absolute inset-0 w-full h-full object-cover z-10"
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
      <div className="absolute bottom-28 left-8 right-8 text-white z-20">
        <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-xs md:text-sm text-white/80 line-clamp-3">
          {project.subtitle}
        </p>
      </div>
    </motion.div>
  );
};