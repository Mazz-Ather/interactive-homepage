'use client'
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      
      // Prevent ANY scrolling immediately
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      
      // Lock everything
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.top = `-${scrollY}px`;
      document.documentElement.style.left = `-${scrollX}px`;
      document.documentElement.style.width = '100%';
      document.documentElement.style.height = '100%';
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = `-${scrollX}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
    } else {
      // Restore everything
      const scrollY = document.body.style.top;
      const scrollX = document.body.style.left;
      
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
      document.documentElement.style.top = '';
      document.documentElement.style.left = '';
      document.documentElement.style.width = '';
      document.documentElement.style.height = '';
      
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(
          parseInt(scrollX?.replace('-', '') || '0'),
          parseInt(scrollY.replace('-', '') || '0')
        );
      }
    }
  }, [isOpen]);

  // Reset loading state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsLoading(true);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleVideoLoad = () => {
    setIsLoading(false);  
  };

  const handleVideoError = () => {
    setIsLoading(false);
    console.error('Video failed to load');
  };

  return (
    <div 
      className="fixed bg-black/95 backdrop-blur-sm"
      onClick={onClose}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        margin: 0,
        overflow: 'hidden'
      }}
    >
      {/* Modal Container */}
      <div 
        className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: 'auto'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[100000] bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2.5 transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Container */}
        <div className="relative w-full bg-black" style={{ aspectRatio: '16 / 9' }}>
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <p className="text-white text-lg font-medium">Loading video...</p>
              </div>
            </div>
          )}

          {/* Video Player */}
          <video
            ref={videoRef}
            className="w-full h-full object-contain bg-black"
            controls
            autoPlay
            playsInline
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoLoad}
            onError={handleVideoError}
            style={{ display: 'block' }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Optional Title */}
        {title && (
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;