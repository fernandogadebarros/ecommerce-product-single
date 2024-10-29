import React from 'react'
import { AddToCart } from '@/components/Layout/AddToCart'
import { Price } from '@/components/Layout/Price'

export const ProductInfo = () => {
  return (
    <div className="w-full px-6 md:w-2/6 md:px-0">
      <div className="flex flex-col gap-4">
        <span className="block font-bold uppercase tracking-widest text-neutral-gray">
          Sneaker Company
        </span>
        <h1 className="text-pretty text-5xl font-bold text-neutral-darkest">
          Fall Limited Edition Sneakers
        </h1>
      </div>
      <p className="mt-8 text-pretty text-neutral-gray">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <Price />
      <AddToCart />
    </div>
  )
}
