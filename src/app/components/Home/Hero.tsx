import Link from "next/link"

const VRHeroPage = () => {
  return (
    <div className="relative max-w-[1800px] mx-auto lg:h-[120vh] bg-black !sm:bg-red-500 !md:bg-green-500 !lg:bg-red-500 !xl:bg-green-500 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985518/bg_azwp7s.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen bg-black/70">
        {/* Top Right Company Description - Only visible on desktop */}
        <div className="absolute top-8 lg:top-[170px] xl:top-[80px] right-8 max-w-sm hidden lg:block">
          <p className="text-gray-400 text-sm leading-relaxed">
            Welcome to AO Interactive, a leading creative and technology solutions company based in Riyadh. We
            specialize in building custom, immersive experiences that drive real-world results. From revolutionizing
            training with Virtual Reality to captivating audiences at events, we blend cutting-edge technology with
            creative storytelling to help businesses in Saudi Arabia achieve their goals.
          </p>
        </div>

        {/* Mobile Layout - Stacked vertically */}
        <div className="lg:hidden flex flex-col min-h-screen px-6 py-8 space-y-12">
          {/* Main Heading */}
          <div className="text-center pt-8">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <div className="bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent">
                Immersive Experiences
              </div>
              <div className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent">
                that Transform Your
              </div>
              <div className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent">Business</div>
            </h1>
          </div>

          {/* Delivering Excellence Section */}
{/* Delivering Excellence Section */}
<div className="bg-black/40 backdrop-blur-sm rounded-2xl w-full p-6 border border-white/10">
  <div className="flex items-start space-x-4">
    <div>
      <h3 className="text-white font-bold text-lg mb-3">Delivering Excellence</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Metals like stainless steel, titanium, or even gold have a high level of resistance to corrosion and wear.
      </p>
    </div>
  </div>
</div>

{/* VR Image - Responsive on mobile */}
<div className="relative w-full flex justify-center items-center">
  <img
    src="/images/vr.png"
    alt="VR Headset"
    className="w-full max-w-[450px] sm:max-w-[600px] h-auto -rotate-[10.35deg] object-contain filter drop-shadow-2xl"
  />
</div>




          {/* Where Ideas Section */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-start space-x-4">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-[#B54CBE] to-[#065FE5] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">A</span>
              </div> */}
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Where Ideas Become Immersive Realities</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Can be used from young age to old age if you want to be more trendy.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Buttons - Mobile */}
          <div className="space-y-6 pb-8">
            {/* CTA Button */}
            <div className="text-center">
              <Link href="/contact" className="relative group">
              <div className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-full overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">See More details  →</span>
               <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5]  transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>   </div>
            </Link></div>

            {/* Service Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-gray-700/80 hover:bg-gray-600 text-white text-xs rounded-full transition-colors duration-300 border border-gray-600/50 font-medium backdrop-blur-sm">
                Web Design
              </span>
              <span className="px-4 py-2 bg-gray-700/80 hover:bg-gray-600 text-white text-xs rounded-full transition-colors duration-300 border border-gray-500/50 font-medium backdrop-blur-sm">
                Animation
              </span>
              <span className="px-4 py-2 bg-gray-700/80 hover:bg-gray-600 text-white text-xs rounded-full transition-colors duration-300 border border-gray-600/50 font-medium backdrop-blur-sm">
                Mobile Dev
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Layout -  */}
        <div className="hidden  lg:block relative min-h-screen">
          <div className="absolute top-11 lg:top-[70px] left-16 xl:left-24 2xl:left-32 z-20">
            <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight text-balance">
              <div className="bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent">
                Immersive Experiences
              </div>
              <div className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent">
                that Transform Your
              </div>
              <div className="bg-gradient-to-r from-[#B54CBE] to-[#065FE5] bg-clip-text text-transparent">Business</div>
            </h1>
          </div>

          <div className="absolute top-[66%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <img
                src="/images/vr.png"
                alt="VR Headset"
                className="relative lg:left-[-60px] top-[35px] w-[1000px] xl:w-[1400px] scale-150 2xl:w-[1900px] h-auto -rotate-[10.35deg] object-contain filter drop-shadow-2xl"
              />

              <div className="absolute top-[41%] -left-[170px] lg:-left-[200px] xl:-left-[270px] 2xl:-left-[250px] max-w-[300px]">
                <div className="flex items-start space-x-3">
                
                  <div>
                    <h3 className="text-white font-bold text-xl mb-4 text-balance">Delivering Excellence</h3>
                    <p className="text-gray-300 text-base leading-relaxed text-pretty">
                      Metals like stainless steel, titanium, or even gold have a high level of resistance to corrosion
                      and wear.
                    </p>
                    </div>
                      <img
                    src="/images/arrow2.png"
                    alt="Arrow pointing to VR"
                    className="w-[250px] xl:w-[300px] absolute top-[-60px] left-[90px] 2xl:left-[150px] flex-shrink-0 transform   opacity-100"
                  />
                </div>
              </div>

              <div className="absolute top-[55%] lg:top-[68%] -right-[350px] lg:-right-[270px]  xl:-right-[320px] 2xl:-right-[450px] max-w-[300px]">
                <img
                    src="/images/arrow.png"
                    alt="Arrow pointing to VR"
                    className="w-[250px] xl:w-[280px] absolute top-[-60px] -left-[150px] 2xl:left-[150px] flex-shrink-0 transform   opacity-100"
                  />  
                    <div className="flex  items-start space-x-6">
                    <div>
                    <h3 className="text-white  font-bold text-xl mb-4 text-balance">
                      Where Ideas Become Immersive Realities
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed text-pretty">
                      Can be used from young age to old age if you want to be more trendy.
                    </p>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left CTA Button - Desktop Only */}
        <div className="absolute -bottom-20 xl:-bottom-24 left-16 xl:left-24 2xl:left-32 hidden lg:block z-20">
          <Link href="/contact" className="relative group">
              <div className="group relative px-8 py-3 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent rounded-full overflow-hidden transition-all duration-500 hover:bg-transparent hover:border hover:border-[#B54CBE] ">
                <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">See More details  →</span>
               <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5]  transition-transform duration-500 group-hover:scale-y-0 group-hover:origin-top"></div>   </div>
            </Link>
        </div>

        {/* Bottom Right Service Tags - Desktop Only */}
        <div className="absolute -bottom-20 xl:-bottom-24 right-16 xl:right-24 2xl:right-32 hidden lg:block z-20">
          <div className="flex space-x-4">
            <span className="px-6 py-3 bg-[#B3A7A2] hover:bg-gray-600 text-white text-sm rounded-full transition-colors duration-300 border border-gray-600/50 font-medium backdrop-blur-sm shadow-lg">
              Web Design
            </span>
            <span className="px-6 py-3 bg-[#91A0A9] hover:bg-gray-600 text-white text-sm rounded-full transition-colors duration-300 border border-gray-500/50 font-medium backdrop-blur-sm shadow-lg">
              Animation
            </span>
            <span className="px-6 py-3 bg-[#283E52] hover:bg-gray-600 text-white text-sm rounded-full transition-colors duration-300 border border-gray-600/50 font-medium backdrop-blur-sm shadow-lg">
              Mobile Dev
            </span>
          </div>
        </div>
      </div>

      {/* Decorative flowing lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
        <div className="absolute top-1/4 left-0 w-80 h-px bg-gradient-to-r from-[#B54CBE] via-[#065FE5] to-transparent opacity-40"></div>
        <div className="absolute top-1/2 right-0 w-64 h-px bg-gradient-to-l from-[#065FE5] via-[#B54CBE] to-transparent opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-px bg-gradient-to-r from-[#B54CBE] to-transparent opacity-30"></div>
      </div>
    </div>
  )
}

export default VRHeroPage
