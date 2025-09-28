"use client";
import { useState, useRef, useEffect } from "react";
import { X, Play } from "lucide-react";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.currentTime = 1; // show 1st second as thumbnail
    }
  }, [isPlaying]);

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985531/video2_owerib.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
      />

      {!isPlaying ? (
        // Thumbnail overlay with play button
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <button
            onClick={() => {
              setIsPlaying(true);
              videoRef.current?.play();
            }}
            className="bg-white/40 backdrop-blur-md lg:hidden text-black rounded-full p-7 shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <Play size={45} fill="white" stroke="none" />
          </button> */}
            <button
            onClick={() => {
              setIsPlaying(true);
              videoRef.current?.play();
            }}
            className="bg-white/40 backdrop-blur-md  text-black rounded-full p-4 shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <Play size={50} fill="white" stroke="none" />
          </button>
        </div>
      ) : (
        // Close button when playing
        <button
          onClick={() => {
            setIsPlaying(false);
            videoRef.current?.pause();
          }}
          className="absolute top-3 right-3 bg-white/80 text-black rounded-full p-5 shadow-md hover:scale-110 transition"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}
