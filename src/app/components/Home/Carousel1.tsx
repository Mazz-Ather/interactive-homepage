import React from 'react';
import Carousel from './Carousel';

const CarouselExample: React.FC = () => {
  const slides = [
    {
      id: '1',
      image: 'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f74ff2fe8b0b912b97_slide-1.avif',
      caption: 'Layout nº001',
      alt: 'Abstract layout By FAKURIANDESIGN through Unsplash'
    },
    {
      id: '2',
      image: 'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7cf52dd961b48a1e2_slide-2.avif',
      caption: 'Layout nº002',
      alt: 'Abstract layout By FAKURIANDESIGN through Unsplash'
    },
    {
      id: '3',
      image: 'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7f7cce73267703347_slide-3.avif',
      caption: 'Layout nº003',
      alt: 'Abstract layout By FAKURIANDESIGN through Unsplash'
    },
    {
      id: '4',
      image: 'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7ccfd203c82a46798_slide-4.avif',
      caption: 'Layout nº004',
      alt: 'Abstract layout By FAKURIANDESIGN through Unsplash'
    }
  ];

  return (
    <div style={{ 
      backgroundColor: 'black', 
      minHeight: '100vh',
      cursor: "url('https://cdn.prod.website-files.com/6708f85ff3d3cba6aff436fb/671251b239d7aeb290a31ac5_cursor-default%402x.svg') 2 0, auto"
    }}>
      <Carousel slides={slides} />
    </div>
  );
};

export default CarouselExample;