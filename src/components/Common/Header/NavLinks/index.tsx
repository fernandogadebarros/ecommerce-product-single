'use client'
import Link from 'next/link'
import { NavLinksProps } from './types'
import { cn } from '@/utils'
import { X } from 'lucide-react'

export const NavLinks = ({ links, mobile, sidebarClose }: NavLinksProps) => {
  return (
    <nav
      className={cn(
        mobile
          ? 'flex flex-col items-start gap-5 font-bold text-neutral-darkest md:hidden'
          : 'hidden items-center gap-8 md:flex',
      )}
    >
      <button className="mb-10 block md:hidden">
        <X className="h-5 w-5" onClick={() => sidebarClose?.(false)} />
      </button>
      {links.map((item) => (
        <Link
          key={item.id}
          className={cn(
            'relative duration-200 hover:text-neutral-darkest-blue hover:after:opacity-100',
            'after:absolute after:top-20 after:block after:h-1 after:w-full after:bg-primary-orange after:opacity-0 after:duration-200 after:content-[""]',
            mobile
              ? 'text-neutral-darkest after:hidden'
              : 'text-neutral-dark-gray',
          )}
          href={item.src}
        >
          {item.text}
        </Link>
      ))}
    </nav>
  )
}
