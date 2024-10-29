import React from 'react'

export const Price = () => {
  return (
    <React.Fragment>
      <span className="mt-7 flex items-center gap-3 font-semibold">
        <span className="text-2xl font-semibold">$125.00</span>
        <span className="rounded-lg bg-neutral-darkest px-2 py-1 text-neutral-white">
          50%
        </span>
      </span>
      <span className="mt-2 block font-semibold text-neutral-dark-gray line-through">
        $250.00
      </span>
    </React.Fragment>
  )
}
