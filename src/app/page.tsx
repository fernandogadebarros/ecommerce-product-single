'use client'
import React from 'react'

import { ProductInfo } from '@/components/Layout/ProductInfo'
import { ShowCase } from '@/components/Layout/ShowCase'
import { Slider } from '@/components/Layout/Slider'

export default function Home() {
  return (
    <main>
      <div className="container relative mb-12 flex flex-col items-center justify-center gap-12 p-0 md:my-24 md:flex-row md:gap-24">
        <Slider />
        <ShowCase />
        <ProductInfo />
      </div>
    </main>
  )
}
