import CaseStudies1 from '../components/Portfolio/CaseStudies1'
import HeroP from '../components/Portfolio/HeroP'
import ProjectsSection from '../components/Portfolio/ProjectSection'

import NewsletterCTA from '../components/layout/NewsLetter'


const page = () => {
  return (
    
    <div>
        <HeroP/>
        <ProjectsSection/>
        <CaseStudies1/>
        <NewsletterCTA/>
    </div>
  )
}

export default page