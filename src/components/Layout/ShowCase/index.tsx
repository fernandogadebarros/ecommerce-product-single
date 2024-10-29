'use client'
import React from 'react'
import Image from 'next/image'
import { photos } from '@/data'
import { cn } from '@/utils'

export const ShowCase = () => {
  const [currentImage, setCurrentImage] = React.useState(0)

  return (
    <div className="relative hidden h-[600px] w-[500px] overflow-hidden md:block">
      <div className="h-[460px] w-full overflow-hidden rounded-xl">
        <div
          key={photos[currentImage]?.id}
          className="w-ful relative flex h-full"
        >
          <div className="relative h-full w-full rounded-lg">
            <Image
              src={photos[currentImage]?.src}
              alt={photos[currentImage]?.alt}
              fill
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-20 flex w-full gap-4 overflow-hidden">
        {photos.map((item, index) => (
          <div
            key={`${item.id}-thumb`}
            className={cn(
              'relative h-[110px] flex-1 cursor-pointer rounded-xl',
              currentImage === index
                ? 'border-2 border-primary-orange duration-200'
                : 'border-2 border-transparent',
            )}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={item.thumb}
              alt={item.alt}
              fill
              className={cn(
                'rounded-lg object-cover',
                currentImage === index
                  ? 'opacity-40 duration-200'
                  : 'opacity-100',
              )}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
