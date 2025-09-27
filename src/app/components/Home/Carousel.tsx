'use client'

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

interface SlideData {
  id: string;
  image: string;
  video?: string;
  caption: string;
  alt: string;
}

interface CarouselProps {
  slides: SlideData[];
}

// Create a client-only carousel to avoid hydration issues
const ClientOnlyCarousel: React.FC<CarouselProps> = ({ slides }) => {
  const sliderListRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, startIndex: 0 });

  const handlePlayVideo = (slideId: string, videoUrl?: string) => {
    if (videoUrl) {
      setPlayingVideo(slideId);
    }
  };

  const handleVideoEnd = () => {
    setPlayingVideo(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, startIndex: currentIndex });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStart.x;
    const threshold = window.innerWidth / 8; // More sensitive threshold
    
    if (Math.abs(deltaX) > threshold) {
      const direction = deltaX > 0 ? -1 : 1;
      const newIndex = (dragStart.startIndex + direction + slides.length) % slides.length;
      
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        setDragStart({ x: e.clientX, startIndex: newIndex });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX, startIndex: currentIndex });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - dragStart.x;
    const threshold = window.innerWidth / 8; // More sensitive threshold
    
    if (Math.abs(deltaX) > threshold) {
      const direction = deltaX > 0 ? -1 : 1;
      const newIndex = (dragStart.startIndex + direction + slides.length) % slides.length;
      
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        setDragStart({ x: e.touches[0].clientX, startIndex: newIndex });
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section 
      className="carousel-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="main">
        <div className="slider-wrap">
          <div ref={sliderListRef} className="slider-list">
            {/* Render slides 5 times for infinite effect */}
            {[...slides, ...slides, ...slides, ...slides, ...slides].map((slide, index) => {
              const setIndex = Math.floor(index / slides.length);
              const slideIndex = index % slides.length;
              
              // Calculate position relative to center
              const slidePosition = index - slides.length - currentIndex;
              const isCenter = slidePosition === 0; // Center slide
              const isActive = setIndex === 2 && slideIndex === currentIndex;
              
              return (
                <div
                  key={`${slide.id}-${setIndex}`}
                  className={`slider-slide ${isCenter ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${slidePosition * (100/3)}vw)`,
                    transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease, filter 0.6s ease'
                  }}
                >
                  <div className="slide-inner">
                    {playingVideo === `${slide.id}-${setIndex}` && slide.video ? (
                      <video
                        src={slide.video}
                        autoPlay
                        controls
                        onEnded={handleVideoEnd}
                        className="slide-video"
                      />
                    ) : (
                      <>
                        <img
                          src={slide.image}
                          loading="lazy"
                          alt={slide.alt}
                        />
                        {slide.video && (
                          <button
                            className="play-button"
                            onClick={() => handlePlayVideo(`${slide.id}-${setIndex}`, slide.video)}
                            aria-label="Play video"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="play-icon"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </button>
                        )}
                      </>
                    )}
                    <div className="slide-caption">
                      <div className="caption-dot"></div>
                      <p className="caption">{slide.caption}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          padding: 0;
          margin: 0;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          max-height: 100vh;
          display: flex;
          position: relative;
          font-size: 1.1vw;
          background-color: var(--color-black, #000);
          color: var(--color-light, #fff);
          width: 100vw;
          max-width: 100vw;
          height: 100vh;
          overflow: hidden;
          cursor: grab;
          user-select: none;
        }

        .carousel-container:active {
          cursor: grabbing;
        }

        .main {
          z-index: 0;
          width: 100%;
          max-width: 100vw;
          height: 100%;
          max-height: 100vh;
          position: absolute;
          inset: 0%;
          overflow: hidden;
        }

        .slider-wrap {
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          max-width: 100vw;
          height: 100%;
          max-height: 100vh;
          display: flex;
          overflow: hidden;
        }

        .slider-list {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100vh;
          max-height: 100vh;
          overflow: visible;
          position: relative;
        }

        .slider-slide {
          flex: none;
          width: 33.333vw;
          height: 100vh;
          max-height: 100vh;
          padding: 0;
          margin: 0;
          position: absolute;
          opacity: 0.2;
          box-sizing: border-box;
          filter: brightness(0.3) contrast(0.7);
          transform-origin: center center;
        }

        .slider-slide.active {
          opacity: 1;
          z-index: 2;
          filter: brightness(1.3) contrast(1.2);
          transform: scale(1.05) !important;
        }

        .slide-inner {
          border-radius: 0.5em;
          width: 100%;
          height: 100%;
          max-height: 100vh;
          position: relative;
          overflow: hidden;
          clip-path: polygon(0 27%, 100% 0%, 100% 82%, 0% 100%);
          box-sizing: border-box;
        }

        .slide-inner img {
          width: 100%;
          height: 100%;
          max-height: 100vh;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }

        .slide-video {
          width: 100%;
          height: 100%;
          max-height: 100vh;
          object-fit: cover;
          display: block;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.7);
          border: 3px solid rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        .play-button:hover {
          background: rgba(0, 0, 0, 0.9);
          border-color: #fff;
          transform: translate(-50%, -50%) scale(1.1);
        }

        .play-icon {
          width: 32px;
          height: 32px;
          color: #fff;
          margin-left: 4px;
        }

        .slide-caption {
          z-index: 2;
          grid-column-gap: 0.4em;
          grid-row-gap: 0.4em;
          background-color: var(--color-light, #fff);
          color: var(--color-dark, #000);
          white-space: nowrap;
          border-radius: 0.25em;
          justify-content: flex-start;
          align-items: center;
          padding: 0.4em 0.75em 0.4em 0.5em;
          display: flex;
          position: absolute;
          top: 1.25em;
          left: 1.25em;
          overflow: hidden;
          transition: transform 0.525s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.525s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0s;
          opacity: 0;
          transform: translate(-25%, 0px);
        }

        .slider-slide.active .slide-caption {
          opacity: 1;
          transform: translate(0%, 0px);
          transition-delay: 0.3s;
        }

        .caption-dot {
          background-color: var(--color-dark, #000);
          border-radius: 10em;
          flex: none;
          width: 0.5em;
          height: 0.5em;
        }

        .caption {
          font-size: 0.75em;
          font-family: arial;
          margin: 0px;
        }

        @media (max-width: 768px) {
          .slider-slide {
            width: 50vw;
          }
          
          .slide-inner {
            clip-path: none;
            border-radius: 1em;
          }
        }
      `}</style>
    </section>
  );
};

// Use dynamic import to make it truly client-only
const Carousel = dynamic(() => Promise.resolve(ClientOnlyCarousel), {
  ssr: false,
  loading: () => (
    <section style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff' 
    }}>
      <div>Loading carousel...</div>
    </section>
  )
});

export default Carousel;