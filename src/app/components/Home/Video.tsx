"use client";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(true); // autoplay on load
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4"
        className="w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
      />

      {/* Play/Pause Button Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className="bg-white/40 backdrop-blur-md text- rounded-full p-5 shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          {isPlaying ? (
            <Pause size={30} fill="white" stroke="none" />
          ) : (
            <Play size={30} fill="white" stroke="none" />
          )}
        </button>
      </div>
    </div>
  );
}
