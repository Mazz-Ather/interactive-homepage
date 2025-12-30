'use client'
// Updated for 3-card layout
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

export const ProjectCard2: React.FC<ProjectCardProps> = ({
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
        case 'left':
          translateXValue = '-60%';
          scaleValue = 0.95;
          zIndexValue = 1;
          break;
        case 'center':
          translateXValue = '0%';
          scaleValue = 1.05;
          zIndexValue = 3;
          break;
        case 'right':
          translateXValue = '60%';
          scaleValue = 0.95;
          zIndexValue = 1;
          break;
      }
    } else if (screenWidth < 1024) {
      switch (position) {
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
      }
    } else {
      // Large screens
      switch (position) {
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
    if (screenWidth < 640) return 'w-[240px]';
    if (screenWidth < 768) return 'w-[250px]';
    if (screenWidth < 1024) return 'w-[280px]';
    return 'w-[490px]';
  };

  const getCardHeight = () => {
    if (screenWidth < 640) return 'h-[600px]';
    if (screenWidth < 768) return 'h-[450px]';
    if (screenWidth < 1024) return 'h-[500px]';
    if (screenWidth < 1524) return 'h-[750px]';
    return 'h-[700px]';
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
        <div className="absolute bottom-6 xl100:hidden left-0 right-0 h-52 bg-gradient-to-t from-red-500 via-transparent to-transparent z-10"
          style={{
            clipPath: 'polygon(10% 0%, 100% 0%, 98% 52%, 0% 15%)'
          }}
        ></div>
        
        <div
          className="absolute inset-x-0 bottom-16 h-[330px] max-w-[300px] bg-gradient-to-t from-black/20 via-black/20 to-transparent z-10"
        ></div>

        {/* Parallelogram overlay for inactive cards (left and right) */}
        {(position === 'left' || position === 'right') && (
          <div
            className="
              absolute inset-0 
              bg-black/50
              bg-opacity-60 
              backdrop-blur-sm
              lg:hidden
            "
            style={{
              clipPath: 'polygon(0% 30%, 100% 16%, 110% 72%, 0% 100%)'
            }}
          ></div>
        )}
        
        {(position === 'left' || position === 'right') && (
          <div
            className="
              absolute inset-0 
              lg:block
              xl100:hidden
            "
          ></div>
        )}

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

      {/* Project info */}<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      <div
        className="
          absolute 
          bottom-[123px] 
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
            max-w-[70%] xl:max-w-[80%]
          "
        >
          {project.subtitle}
        </p>
      </div>
    </motion.div>
  );
};