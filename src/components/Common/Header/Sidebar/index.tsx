'use client'
import React from 'react'
import { Menu } from 'lucide-react'
import { headerLinks } from '@/data'
import { NavLinks } from '../NavLinks'

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false)

  const sidebarOpen = () => {
    setOpenSidebar(true)
  }

  const sidebarClose = () => {
    setOpenSidebar(false)
  }

  return (
    <React.Fragment>
      <button className="relative top-px flex md:hidden" onClick={sidebarOpen}>
        <Menu className="hover:text-neutral-dark-blue text-neutral-gray" />
      </button>
      {openSidebar && (
        <div className="fixed left-0 top-0 z-30 block h-screen w-full bg-black/50 md:hidden">
          <div className="h-screen w-64 bg-white p-6">
            <NavLinks mobile links={headerLinks} sidebarClose={sidebarClose} />
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
