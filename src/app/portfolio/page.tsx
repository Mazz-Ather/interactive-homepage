import CaseStudies1 from '../components/Portfolio/CaseStudies1'
import HeroP from '../components/Portfolio/HeroP'
import ProjectsSection from '../components/Portfolio/ProjectSection'
import ContactForm from '../components/layout/ContaxtForm'

import NewsletterCTA from '../components/layout/NewsLetter'


const page = () => {
  return (
    
    <div>
        <HeroP/>
        <ProjectsSection/>
        <CaseStudies1/>
        <ContactForm/>
        <NewsletterCTA/>
    </div>
  )
}

export default page