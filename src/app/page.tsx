
import Contact from "./components/Home/Contact";
import Hero from "./components/Home/Hero";
import { RecentProjects } from "./components/Home/RecentProjects";
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
   <Services/>
    <RecentProjects/>
   <Contact/> 
    <Testimonials />
   </>
  );
}

export default Home
