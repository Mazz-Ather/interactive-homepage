import AnimationServices from "../components/Industries/AnimationServices"
import HeroIndustries from "../components/Industries/HeroIndustries"
import HowWeHelp from "../components/Industries/HowWeHelp"
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
<ContactForm/>
<NewsletterCTA/>
</>
)
}

export default page