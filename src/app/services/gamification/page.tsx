import DigitalHero from "@/app/components/services/digital-transformation/Hero"
import HeroService from "@/app/components/services/HeroService"
import Newsletter from "@/app/components/services/NewsLettter"
import ContactForm from "@/app/components/layout/ContaxtForm"
import NewsletterCTA from "@/app/components/layout/NewsLetter"
import GameHero from "./GameHero"
import GameScroll from "./GameScroll"
import GameProcess from "./GameProcess"
import { RecentProjectsService } from "@/app/components/services/RecentProjectsService"

// import ThreedHero from "./ThreedHero"
// import ThreedServicesScroll from "./ThreedServicesScroll"
// import ThreedProductionProcess from "./ThreedProductionProcess"

const page = () => {
  return (
<>
{/* 
<RealHero/>
<RealScroll/>
<RealProcess/> */}
<GameHero/>
<GameScroll/>
<GameProcess/>
<NewsletterCTA/>
<RecentProjectsService/>
<ContactForm/>
</>
  )
}

export default page