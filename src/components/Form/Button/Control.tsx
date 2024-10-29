import React from 'react'
import { ControlProps } from './types'
import { cn } from '@/utils'

export const Control = ({ ...props }: ControlProps) => {
  return (
    <button
      {...props}
      className={cn(
        'flex w-full items-center justify-center gap-4 rounded-lg bg-primary-orange p-5 font-semibold text-neutral-darkest duration-200 hover:bg-primary-pale-orange',
        props.disabled && 'cursor-not-allowed bg-primary-pale-orange',
        props.className,
      )}
    />
  )
}
