import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '@/store/reducers/cart'
import * as Button from '@/components/Form/Button'
import { ShoppingCart, Plus, Minus } from 'lucide-react'

export const AddToCart = () => {
  const dispatch = useDispatch()
  const cartCounter = useSelector((state: { cart: number }) => state.cart)

  return (
    <div className="mt-8 flex flex-col items-center gap-4 lg:flex-row">
      <div className="flex w-full items-center gap-6 rounded-lg bg-neutral-lightest-gray p-5 lg:w-auto">
        <span onClick={() => dispatch(remove())} className="cursor-pointer">
          <Minus strokeWidth={6} className="h-3 w-3 text-primary-orange" />
        </span>
        <span className="block w-full text-center font-semibold lg:w-12">
          {cartCounter}
        </span>
        <span onClick={() => dispatch(add())} className="cursor-pointer">
          <Plus strokeWidth={6} className="h-3 w-3 text-primary-orange" />
        </span>
      </div>

      <Button.Control disabled={cartCounter === 0}>
        <Button.Prefix>
          <ShoppingCart />
        </Button.Prefix>
        Add to cart
      </Button.Control>
    </div>
  )
}
