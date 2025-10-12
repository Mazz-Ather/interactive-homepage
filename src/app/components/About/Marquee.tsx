import { Marquee } from "@/components/ui/marquee"

export function MarqueeDemo() {
  // Array of image paths from your public folder
  const brandImages = [
    // "/images/brand1.png",
    "/images/brand2.png",
    "/images/brand2.png",
    "/images/brand3.png",
    "/images/brand3.png",
    // "/images/brand4.png",
    "/images/brand5.png",
    "/images/brand5.png",
    "/images/brand6.png",
    "/images/brand6.png",
    "/images/brand8.svg",
    // Add more image paths as needed
  ]

  return (
    <Marquee>
      {brandImages.map((imagePath, index) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[4rem] flex items-center justify-center"
        >
          <img
            src={imagePath}
            alt={`Brand ${index + 1}`}
            className="h-[40px] w-auto object-contain"
          />
        </div>
      ))}
    </Marquee>
  )
}