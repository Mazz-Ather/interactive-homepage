import HeroService from "../components/services/HeroService"
import Newsletter from "../components/services/NewsLettter"
import ProductionProcess from "../components/services/ProductionProcess"

import { RecentProjects1 } from "../components/Home/RecentProject1"
import ServicesScroll from "../components/services/ServiceScroll"
import { RecentProjectsService } from "../components/services/RecentProjectsService"
import ContactForm from "../components/layout/ContaxtForm"
import NewsletterCTA from "../components/layout/NewsLetter"
const page = () => {
  return (
<>
<HeroService/>
<ServicesScroll/>
<ProductionProcess/>

{/* <div className="!pt-16 ">
<Newsletter/>
</div> */}
<NewsletterCTA/>
 <RecentProjectsService/> 
 <ContactForm/>
</>
  )
}

export default page