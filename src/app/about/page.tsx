import React from 'react'
import AboutHero from '../components/About/Hero'
import { Marquee } from "@/components/ui/marquee"
import Image from 'next/image'
import OurApproach from '../components/About/OurApproach'
import SecondHero from '../components/About/SecondHero'
import MeetTheTeam from '../components/About/MeetTheTeam'
import NewsletterCTA from '../components/layout/NewsLetter'
import OurStoryPage from '../components/About/OurStoryPage'
import OurApproach1 from '../components/About/OurApproach1'
import { RecentProjects1 } from '../components/Home/RecentProject1'
import RecentProjectHero from '../components/About/RecentProjectHero'
import ContactForm from '../components/layout/ContaxtForm'

const page = () => {
const brandImages = [
    // "/images/brand1.png",
    "/images/brand2.png",
    // "/images/brand2.png",
    // "/images/brand3.png",
    "/images/brand3.png",
    // "/images/brand4.png",
    "/images/brand5.png",
    // "/images/brand5.png",
    // "/images/brand6.png",
    "/images/brand6.png",
    // "/images/brand8.svg",
    // Add more image paths as needed
  ]
  // Duplicate more times
  const duplicatedBrands = [
    ...brandImages, 
    ...brandImages, 
    ...brandImages,
    ...brandImages,
    ...brandImages,
    ...brandImages
  ]

  return (
    <div className='mb-9'>
      <AboutHero />
     {/* <Marquee className="pb-4 [&>div]:gap-0">
  <div className="flex gap-0">
    {duplicatedBrands.map((imagePath, index) => (
      <div
        key={index}
        className="relative h-[60px] w-[150px] mx-6 flex items-center justify-center shrink-0"
      >
        <Image
          src={imagePath}
          alt={`Brand logo`}
          fill
          className="object-contain"
        />
      </div>
    ))}
  </div>
</Marquee> */}
<OurStoryPage/>
<OurApproach1/>
<NewsletterCTA/>
<RecentProjectHero/>
{/* <SecondHero/>
<MeetTheTeam/> */}
<ContactForm/>

    </div>
  )
}

export default page