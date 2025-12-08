import DigitalHero from "@/app/components/services/digital-transformation/Hero"
import HeroService from "@/app/components/services/HeroService"
import Newsletter from "@/app/components/services/NewsLettter"
import ContactForm from "@/app/components/layout/ContaxtForm"
import NewsletterCTA from "@/app/components/layout/NewsLetter"
import ThreedHero from "./ThreedHero"
import ThreedServicesScroll from "./ThreedServicesScroll"

const page = () => {
  return (
<>
<ThreedHero/>
<ThreedServicesScroll/>
{/* <DigitalProductionProcess/> */}
<Newsletter/>
{/* <DigitalRecentProjectsService/> */}
<ContactForm/>
<NewsletterCTA/>
</>
  )
}

export default page