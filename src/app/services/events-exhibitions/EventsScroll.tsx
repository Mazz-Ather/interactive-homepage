'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}


export const services: ServiceCard[] = [
  {
  id: 1,
  icon: '/images/icon11.png',
  title: 'Digital Strategy & Transformation',
  description: 'We design end-to-end digital transformation strategies that modernize operations, enhance customer experiences, and drive measurable growth.',
},
{
  id: 2,
  icon: '/images/icon12.png',
  title: 'Process Automation & AI Solutions',
  description: 'We automate manual workflows using AI-powered systems to improve efficiency, reduce costs, and scale business operations intelligently.',
},
{
  id: 3,
  icon: '/images/icon13.png',
  title: 'Cloud & Scalable Infrastructure',
  description: 'Our team builds secure, cloud-native infrastructures that ensure performance, scalability, and long-term digital resilience.',
},
{
  id: 4,
  icon: '/images/icon14.png',
  title: 'Data-Driven Decision Systems',
  description: 'We implement analytics and data platforms that transform raw data into actionable insights for smarter business decisions.',
},

];

const EventsScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const animationRef = useRef<any>(null);
  const momentumRef = useRef<any>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, { x: 0 });
    }
  }, []);

  const getMaxScroll = () => {
    if (!containerRef.current || !contentRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = contentRef.current.scrollWidth;
    return -(contentWidth - containerWidth);
  };

  const applyElasticBounds = (x: number) => {
    const maxScroll = getMaxScroll();
    const elasticStrength = 0.25;

    if (x > 0) {
      return x * elasticStrength;
    }
    else if (x < maxScroll) {
      const overflow = x - maxScroll;
      return maxScroll + (overflow * elasticStrength);
    }
    return x;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setLastX(e.clientX);
    setLastTime(Date.now());
    setVelocity(0);
    
    if (contentRef.current) {
      const currentTransform = gsap.getProperty(contentRef.current, 'x') as number;
      setCurrentX(currentTransform);
    }
    
    if (animationRef.current) {
      animationRef.current.kill();
    }
    if (momentumRef.current) {
      momentumRef.current.kill();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !contentRef.current) return;
    
    const currentTime = Date.now();
    const timeDelta = currentTime - lastTime;
    const diff = e.clientX - startX;
    const moveDiff = e.clientX - lastX;
    
    if (timeDelta > 0) {
      const vel = (moveDiff / timeDelta) * 16;
      setVelocity(vel);
    }
    
    const newX = currentX + diff;
    const elasticX = applyElasticBounds(newX);
    
    gsap.set(contentRef.current, { x: elasticX });
    
    setLastX(e.clientX);
    setLastTime(currentTime);
  };

  const handleMouseUp = () => {
    if (!isDragging || !contentRef.current) return;
    setIsDragging(false);

    const currentTransform = gsap.getProperty(contentRef.current, 'x') as number;
    const maxScroll = getMaxScroll();
    
    const isOutOfBounds = currentTransform > 0 || currentTransform < maxScroll;
    
    if (isOutOfBounds) {
      let targetX = currentTransform > 0 ? 0 : maxScroll;
      
      animationRef.current = gsap.to(contentRef.current, {
        x: targetX,
        duration: 0.7,
        ease: 'elastic.out(1, 0.5)',
      });
    } else if (Math.abs(velocity) > 0.5) {
      let currentVel = velocity;
      let currentPos = currentTransform;
      
      const animateMomentum = () => {
        if (Math.abs(currentVel) > 0.1) {
          currentPos -= currentVel;
          
          if (currentPos > 0 || currentPos < maxScroll) {
            const targetX = currentPos > 0 ? 0 : maxScroll;
            gsap.to(contentRef.current, {
              x: targetX,
              duration: 0.6,
              ease: 'elastic.out(1, 0.5)',
            });
            return;
          }
          
          gsap.set(contentRef.current, { x: currentPos });
          currentVel *= 0.95;
          momentumRef.current = requestAnimationFrame(animateMomentum);
        }
      };
      
      momentumRef.current = requestAnimationFrame(animateMomentum);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      if (momentumRef.current) {
        cancelAnimationFrame(momentumRef.current);
      }
    };
  }, [isDragging, velocity, currentX]);

  return (
    <div className="w-full py-20 bg-black font-[Cairo]">
      {/* Header Section */}
      <div className="px-8 md:px-16 lg:px-24 mb-12 text-center">
 <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
 How We Help Our Clients
</h2>
<p className="text-gray-400 text-center text-lg md:text-xl max-w-3xl mx-auto">
  We provide a full range of professional services to meet the unique needs of our clients and help their business thrive.
</p>

      </div>

      {/* Scrollable Cards Section */}
      <div 
        ref={containerRef}
        className="overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          ref={contentRef}
          className="flex gap-6 select-none"
          style={{ willChange: 'transform' }}
        >
          {/* Left Spacer */}
          <div className="flex-shrink-0 w-8 md:w-52" />
          
          {services.map((service, index) => (
            <div
              key={service.id}
              className="flex-shrink-0 !border-2 !border-white w-[340px] md:w-[380px] rounded-[32px] p-10 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #161616ff 0%, #1a1a1a 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Gradient Glow Borders - 4 sides */}
              <div 
                className="absolute top-0 left-0 blur-sm right-0 h-[60px] pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(54, 54, 54, 1) 0%, transparent 100%)',
                }}
              />
              
              <div 
                className="absolute bottom-0 blur-sm left-0 right-0 h-[60px] pointer-events-none"
                style={{
                  background: 'linear-gradient(0deg, rgba(54, 54, 54, 1) 0%, transparent 100%)',
                }}
              />
              
              <div 
                className="absolute left-0 top-0 blur-sm bottom-0 w-[60px] pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, rgba(54, 54, 54, 1) 0%, transparent 100%)',
                }}
              />
              
              <div 
                className="absolute right-0 top-0 blur-sm bottom-0 w-[60px] pointer-events-none"
                style={{
                  background: 'linear-gradient(270deg, rgba(54, 54, 54, 1) 0%, transparent 100%)',
                }}
              />

              {/* Icon Container */}
              <div className="w-20 h-20 mb-8 relative z-10">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className={`w-[70px] h-[70px] object-contain transition-transform duration-300
                      ${index === 3 ? 'scale-[1.8] origin-center' : ''}`}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-6 leading-tight relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-100 text-base leading-relaxed relative z-10">
                {service.description}
              </p>
            </div>
          ))}

          {/* Right Spacer */}
          <div className="flex-shrink-0 w-8 md:w-52" />
        </div>
      </div>
    </div>
  );
};

export default EventsScroll;