import DigitalHero from "@/app/components/services/digital-transformation/Hero"
import HeroService from "@/app/components/services/HeroService"
import DigitalServicesScroll from "./DigitalServiceScroll"
import DigitalProductionProcess from "./DigitalProductionProcess"
import Newsletter from "@/app/components/services/NewsLettter"
import { DigitalRecentProjectsService } from "./DigitalRecentProjectsService"
import ContactForm from "@/app/components/layout/ContaxtForm"
import NewsletterCTA from "@/app/components/layout/NewsLetter"
import { RecentProjectsService } from "@/app/components/services/RecentProjectsService"

const page = () => {
  return (
<>
<DigitalHero/>
<DigitalServicesScroll/>
<DigitalProductionProcess/>
<NewsletterCTA/>
<RecentProjectsService/>
{/* <Newsletter/> */}
{/* <DigitalRecentProjectsService/> */}
<ContactForm/>
</>
  )
}

export default page