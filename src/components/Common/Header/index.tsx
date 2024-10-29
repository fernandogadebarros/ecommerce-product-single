import Image from 'next/image'
import { headerLinks } from '@/data'
import { NavLinks } from './NavLinks'
import { Cart } from '../Cart'
import { Logo } from '@/media/Logo'
import { Sidebar } from './Sidebar'

export const Header = () => {
  return (
    <header>
      <div className="border-t-none border-l-none border-r-none container relative flex items-center justify-between border-b-[1px] border-[#E4E9F2] py-10">
        <div className="flex items-center gap-4 md:gap-12">
          <Sidebar />
          <Logo />
          <NavLinks links={headerLinks} />
        </div>
        <div className="flex items-center gap-0 md:gap-4">
          <Cart />
          <div className="relative h-12 w-12 cursor-pointer rounded-full border-2 border-transparent duration-200 hover:border-primary-orange">
            <Image src="/assets/image-avatar.webp" alt="Avatar" fill />
          </div>
        </div>
      </div>
    </header>
  )
}
