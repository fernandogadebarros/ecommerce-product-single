'use client'
import React from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Trash2 } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import * as Button from '@/components/Form/Button'
import { cartConfig } from '@/store/reducers/cart'

export const Cart = () => {
  const [openCart, setOpenCart] = React.useState(false)
  const state = useSelector(
    (state: { cart: { type: string; quantity: number } }) => state.cart,
  )
  const dispatch = useDispatch()

  const cartHandler = () => {
    setOpenCart((open) => !open)
  }

  const isVisibleCart =
    (state.quantity > 0 && state.type === 'added') ||
    (state.quantity > 0 && state.type === 'removed')

  return (
    <div className="md:relative">
      <Button.Control
        className="relative bg-transparent hover:bg-transparent"
        onClick={cartHandler}
      >
        {isVisibleCart && (
          <span className="absolute right-3 top-3 flex h-4 w-6 items-center justify-center rounded-full bg-primary-orange text-xs font-bold text-white">
            {state.quantity}
          </span>
        )}
        <ShoppingCart className="text-neutral-darkest-blue" />
      </Button.Control>

      {openCart && (
        <div className="absolute left-4 top-24 z-20 w-[calc(100%-32px)] rounded-2xl bg-white shadow-xl md:left-auto md:right-0 md:top-12 md:w-[360px]">
          <header className="border-b-[1px] border-[#E4E9F2] p-6">
            <p className="font-bold text-neutral-darkest-blue">Cart</p>
          </header>
          <div className="p-6">
            {isVisibleCart ? (
              <React.Fragment>
                <div className="grid grid-cols-[50px_1fr_16px] items-center gap-4">
                  <span className="relative block h-12 w-12 rounded-lg">
                    <Image
                      src="/assets/image-product-1-thumbnail.webp"
                      alt="Image Product"
                      className="rounded-lg"
                      fill
                    />
                  </span>
                  <div className="flex flex-col">
                    <p className="text-neutral-gray">
                      Fall Limited Edition Sneakers
                    </p>

                    <span className="flex justify-start gap-1 text-neutral-gray">
                      <span>$125.00 x</span>
                      <span className="inline-block w-3 text-center">
                        {state.quantity}
                      </span>
                      <span className="flex justify-center font-bold text-neutral-darkest-blue">
                        ${(state.quantity * 125).toFixed(2)}
                      </span>
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(
                        cartConfig({
                          type: 'removed',
                          quantity: state.quantity,
                        }),
                      )
                      if (state.quantity === 0) cartHandler()
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-black/30" />
                  </button>
                </div>
                <button className="text-neutral-dark-blue mt-6 w-full rounded-lg bg-primary-orange p-4 text-center font-bold duration-200 hover:bg-primary-pale-orange">
                  Checkout
                </button>
              </React.Fragment>
            ) : (
              <p className="text-center">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
