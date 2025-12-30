import DigitalHero from "@/app/components/services/digital-transformation/Hero"
import HeroService from "@/app/components/services/HeroService"
import Newsletter from "@/app/components/services/NewsLettter"
import ContactForm from "@/app/components/layout/ContaxtForm"
import NewsletterCTA from "@/app/components/layout/NewsLetter"
import EventsHero from "./EventsHero"
import EventsScroll from "./EventsScroll"
import { RecentProjectsService } from "@/app/components/services/RecentProjectsService"
import EventsProcess from "./Eventsprocess"
// import ThreedHero from "./ThreedHero"
// import ThreedServicesScroll from "./ThreedServicesScroll"
// import ThreedProductionProcess from "./ThreedProductionProcess"

const page = () => {
  return (
<>
{/* <ThreedHero/>
<ThreedServicesScroll/>
<ThreedProductionProcess/> */}
{/* <DigitalProductionProcess/> */}
{/* <Newsletter/> */}
{/* <DigitalRecentProjectsService/> */}
<EventsHero/>
<EventsScroll/>
<EventsProcess/>
<NewsletterCTA/>
<RecentProjectsService/>
  <ContactForm/>
{/* <NewsletterCTA/> */}
</>
  )
}

export default page