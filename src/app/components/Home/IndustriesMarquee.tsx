import React from 'react';
import './IndustriesMarquee.css';

interface IndustryCard {
  id: number;
  icon: string;
  title: string;
  bgImage: string;
}

const IndustriesMarquee: React.FC = () => {
  // First row industries
  const firstRowIndustries: IndustryCard[] = [
    {
      id: 1,
      icon: '/icon5.png',
      title: 'Web3',
      bgImage: '/ibg1.png'
    },
    {
      id: 2,
      icon: '/icon1.png',
      title: 'Real Estate',
      bgImage: '/ibg4.png'
    },
    {
      id: 3,
      icon: '/icon2.png',
      title: 'Sports',
      bgImage: '/ibg5.png'
    },
    {
      id: 4,
      icon: '/icon3.png',
      title: 'Events',
      bgImage: '/ibg3.png'
    },
    {
      id: 5,
      icon: '/icon4.png',
      title: 'Immersive Transformations',
      bgImage: '/ibg2.png'
    }
  ];

  // Second row industries
  const secondRowIndustries: IndustryCard[] = [
    {
      id: 6,
      icon: '/icon5.png',
      title: 'Web3',
      bgImage: '/ibg1.png'
    },
    {
      id: 7,
      icon: '/icon1.png',
      title: 'Real Estate',
      bgImage: '/ibg4.png'
    },
    {
      id: 8,
      icon: '/icon2.png',
      title: 'Sports',
      bgImage: '/ibg5.png'
    },
    {
      id:9,
      icon: '/icon3.png',
      title: 'Events',
      bgImage: '/ibg3.png'
    },
    {
      id: 10,
      icon: '/icon4.png',
      title: 'Immersive Transformations',
      bgImage: '/ibg2.png'
    }
 ];

  const IndustryCard: React.FC<{ industry: IndustryCard }> = ({ industry }) => (
    <div 
      className="industry-card"
      style={{ backgroundImage: `url(${industry.bgImage})` }}
    >
      <div className="industry-card-overlay"></div>
      <div className="industry-card-content">
        <img src={industry.icon} alt={industry.title} className="industry-icon" />
        <h3 className="industry-title">{industry.title}</h3>
      </div>
    </div>
  );

  return (
    <section className="industries-marquee-section">
      <div className="industries-header">
        <p className="industries-mini-heading ">Industries</p>
     <div className="text-center mt-4 py-2">
  <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
    <span className="bg-gradient-to-r from-[#B54CBE]  to-[#065FE5]
      bg-clip-text text-transparent">
      We&apos;ve partnered with
    </span>
    <br />
    <span className="bg-gradient-to-r from-[#B54CBE]  to-[#065FE5]
      bg-clip-text text-transparent">
      businesses worldwide
    </span>
  </h1>
</div>

      </div>

      {/* First Marquee - Moving Left */}
      <div className="marquee-container">
        <div className="marquee marquee-left">
          <div className="marquee-content">
            {[...firstRowIndustries, ...firstRowIndustries, ...firstRowIndustries].map((industry, index) => (
              <IndustryCard key={`left-${industry.id}-${index}`} industry={industry} />
            ))}
          </div>
        </div>
      </div>

      {/* Second Marquee - Moving Right */}
      <div className="marquee-container">
        <div className="marquee marquee-right">
          <div className="marquee-content">
            {[...secondRowIndustries, ...secondRowIndustries, ...secondRowIndustries].map((industry, index) => (
              <IndustryCard key={`right-${industry.id}-${index}`} industry={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesMarquee;