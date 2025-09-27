"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  image: string
  videoUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Digital Marketing Campaign",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    title: "Mobile App Design",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    title: "Brand Identity",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 5,
    title: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isVideoLoading, setIsVideoLoading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [hasDragged, setHasDragged] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setHasDragged(false)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(currentIndex)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    setHasDragged(true)
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 0.003
    const newIndex = scrollLeft - walk
    const infiniteIndex = ((Math.round(newIndex) % projects.length) + projects.length) % projects.length
    setCurrentIndex(infiniteIndex)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setCurrentIndex((prev) => Math.round(prev))
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 1 : -1
    setCurrentIndex((prev) => {
      const newIndex = prev + delta
      return ((newIndex % projects.length) + projects.length) % projects.length
    })
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    document.addEventListener("mouseup", handleGlobalMouseUp)
    return () => document.removeEventListener("mouseup", handleGlobalMouseUp)
  }, [])

  const handleVideoPlay = (videoUrl: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (!hasDragged) {
      setSelectedVideo(videoUrl)
      setIsVideoLoading(true)
    }
  }

  const handleVideoLoad = () => {
    setIsVideoLoading(false)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const closeVideo = () => {
    setSelectedVideo(null)
    setIsVideoLoading(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Recent Projects Section */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
            Recent Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Explore our latest creative endeavors and innovative solutions. Each project represents our commitment to
            excellence and cutting-edge design, showcasing the diverse range of our capabilities and expertise.
          </p>
        </div>

        <div
          ref={carouselRef}
          className="relative mb-20 h-[600px] bg-white overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 3 }, (_, setIndex) =>
              projects.map((project, index) => {
                const actualIndex = setIndex * projects.length + index
                const offset = actualIndex - currentIndex - projects.length
                const isActive = Math.abs(offset) < 0.5

                let translateY = offset * -90
                let rotateZ = offset * -11
                const rotateY = offset * 11

                if (offset < 0) {
                  translateY += Math.abs(offset) * 40
                  rotateZ += Math.abs(offset) * -40
                } else if (offset > 0) {
                  translateY -= offset * 40
                  rotateZ -= offset * 3
                }

                return (
                  <div
                    key={`${setIndex}-${project.id}`}
                    className={`absolute transition-all duration-700 ease-out ${isActive ? "z-20" : "z-10"}`}
                    style={{
                      transform: `
                        translateX(${offset * 320}px) 
                        translateY(${translateY}px) 
                        rotateZ(${rotateZ}deg)
                        rotateY(${rotateY}deg)
                        scale(${isActive ? 1 : 0.95})
                      `,
                      opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.7,
                    }}
                  >
                    <div className="relative group cursor-pointer">
                      <div
                        className="w-[520px] h-[300px] bg-cover bg-center relative overflow-hidden shadow-2xl"
                        style={{
                          clipPath: "polygon(12% 0%, 88% 0%, 100% 45%, 92% 100%, 8% 100%, 0% 55%)",
                          backgroundImage: `url(${project.image})`,
                          filter: isActive ? "brightness(1)" : "brightness(0.8)",
                        }}
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                        </div>

                      </div>
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          onClick={(e) => handleVideoPlay(project.videoUrl, e)}
                        >
                          <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 border border-white/30">
                            <Play className="w-4 h-4 text-white ml-1" fill="white" />
                          </div>
                    </div>
                  </div>
                )
              }),
            )}
          </div>
        </div>

        {/* About Project Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-300">About Project</h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Professional solutions built for clzient success. Each project represents a unique journey of collaboration,
            innovation, and technical excellence. We pride ourselves on delivering exceptional results that exceed
            expectations and drive meaningful business outcomes through strategic design and development.
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              onClick={closeVideo}
            >
              <X className="w-6 h-6" />
            </Button>

            {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg z-10">
                <Loader2 className="w-12 h-12 text-white animate-spin" />
              </div>
            )}

            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg"
              controls
              onLoadedData={handleVideoLoad}
              onError={() => setIsVideoLoading(false)}
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  )
}
