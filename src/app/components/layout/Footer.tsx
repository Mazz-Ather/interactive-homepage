import Image from "next/image"

const footerSections = [
  {
    title: "Services",
    links: ["Wishlist", "Order", "Wishlist"],
  },
  {
    title: "Industries",
    links: ["Live Chat", "Reservation Services", "FAQ"],
  },
  {
    title: "Products",
    links: ["Live Chat", "Reservation Services", "FAQ"],
  },
  {
    title: "Company",
    links: ["Live Chat", "Reservation Services", "FAQ"],
  },
  {
    title: "Social",
    icons: ["/images/social1.png", "/images/social2.png", "/images/social3.png"],
  },
]

export default function ModernFooter() {
  return (
    <div className="relative h-auto flex justify-center items-center bg-[#000000]">
      <footer
        className="
          relative z-10
          w-[98%] max-w-[1800px] h-[430px] 
          bg-gradient-to-b from-[#767676]/40 to-[#101010]/60 
          rounded-[20px] px-8 overflow-hidden
        "
      >
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-7 gap-12 pt-10">
            {/* Newsletter */}
            <div className="col-span-2">
              <div className="ml-3">
                <h3 className="text-[15px] font-medium mb-4 text-white opacity-40">
                  Connect to the Otosagow, Provides system updates for your watch
                  and facilitates smart device management
                </h3>
                <p className="text-[15px] text-white opacity-90 font-semibold mb-2 mt-8">
                  Subscribe our newsletter
                </p>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-[95%] bg-[#2c2c2c] text-sm text-white rounded-full px-4 py-4 pr-16 outline-none placeholder-gray-400"
                />
                <button className="absolute right-5 top-1 bottom-1 bg-[#3c3c3c] text-white text-sm px-4 rounded-full hover:bg-[#4c4c4c] transition-all">
                  Enter
                </button>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wide">
                  {section.title}
                </h3>

                {section.links && (
                  <ul className="space-y-2">
                    {section.links.map((link, index) => (
                      <li key={`${link}-${index}`}>
                        <a
                          href="#"
                          className="text-[14px] font-medium text-white opacity-40 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {section.icons && (
                  <ul className="flex space-x-4">
                    {section.icons.map((icon, index) => (
                      <li key={index}>
                        <a href="#">
                          <Image
                            src={icon}
                            height={24}
                            width={24}
                            alt={`social-${index}`}
                            className="h-6 w-6 object-contain cursor-pointer hover:opacity-100 transition"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

      <div className="absolute bottom-0 left-0 w-full z-0">
  <Image
    src="/images/AO-INTERACTIVE.png"
    alt="logo"
    width={100}
    height={100}
    className="w-full object-cover"
    priority // 👈 ensures best quality
    unoptimized // 👈 disables Next.js compression
  />
</div>

      </footer>
    </div>
  )
}
