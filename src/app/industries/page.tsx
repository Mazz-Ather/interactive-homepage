import { RecentProjects } from "../components/Home/RecentProject"
import { RecentProjects1 } from "../components/Home/RecentProject1"
import AnimationServices from "../components/Industries/AnimationServices"
import HeroIndustries from "../components/Industries/HeroIndustries"
import HowWeHelp from "../components/Industries/HowWeHelp"
import { IndustriesRecentProjects } from "../components/Industries/IndustriesRecentProjects"
import OurProcess from "../components/Industries/OurProcess"
import ContactForm from "../components/layout/ContaxtForm"
import NewsletterCTA from "../components/layout/NewsLetter"

const page = () => {

  return (
<>
<HeroIndustries/>
<HowWeHelp/>
<OurProcess/>
<AnimationServices/>

<IndustriesRecentProjects/>
<ContactForm/>
<NewsletterCTA/>
</>
)
}

export default page