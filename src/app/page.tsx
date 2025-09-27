
import Carousel from "./components/Home/Carousel";
import Contact from "./components/Home/Contact";
import Hero from "./components/Home/Hero";
import Projects from "./components/Home/Projects";
import Services from "./components/Home/Services";
import Testimonials from "./components/Home/Testimonials";
import Video from "./components/Home/Video";

const Home = ({ lenis }:any) => {
    const slides = [
    {
      id: '1',
      image: 'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f74ff2fe8b0b912b97_slide-1.avif',
      caption: 'Layout nº001',
       video: 'path/to/video.mp4',
      alt: 'Abstract layout By FAKURIANDESIGN through Unsplash'
    },
    {
      id: '2',
      image: 'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7cf52dd961b48a1e2_slide-2.avif',
      caption: 'Layout nº002',
       video: 'path/to/video.mp4',
      alt: 'Abstract layout By FAKURIANDESIGN through Unsplash'
    },
    {
      id: '3',
      image: 'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7f7cce73267703347_slide-3.avif',
      caption: 'Layout nº003',
       video: 'path/to/video.mp4',
      alt: 'Abstract layout By FAKURIANDESIGN through Unsplash'
    },
   
  ];

  return (
   <>
  <Hero/>
  <Video/>
   {/* <div style={{ 
      backgroundColor: 'black', 
      minHeight: '100vh',
      cursor: "url('https://cdn.prod.website-files.com/6708f85ff3d3cba6aff436fb/671251b239d7aeb290a31ac5_cursor-default%402x.svg') 2 0, auto"
    }}>
      <Carousel slides={slides} />
    </div> */}
   <Services/>
   <Contact/> 
    <Testimonials />
   </>
  );
}

export default Home
