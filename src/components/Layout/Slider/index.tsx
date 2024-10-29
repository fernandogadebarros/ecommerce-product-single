import React from 'react'
import Image from 'next/image'
import { photos } from '@/data'
import { ChevronRight, ChevronLeft } from 'lucide-react'

export const Slider = () => {
  const [currentImage, setCurrentImage] = React.useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % photos.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <div className="relative flex h-[500px] w-full overflow-hidden md:hidden">
      <div
        className="relative flex h-full w-full transition-transform duration-300"
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {photos.map((item) => (
          <div key={item.id} className="relative h-full w-full flex-shrink-0">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-white"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-white"
      >
        <ChevronRight />
      </button>
    </div>
  )
}
