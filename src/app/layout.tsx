import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Common/Header'
import { Storage } from './Provider'

const kumb = Kumbh_Sans({
  display: 'swap',
  style: 'normal',
  variable: '--font-kumb',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Ecommerce Product Page | Frontend Mentor Challenge',
  description: 'Ecommerce Product Page | Frontend Mentor Challenge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${kumb.variable} font-kumb antialiased`}>
        <Storage>
          <Header />
          {children}
        </Storage>
      </body>
    </html>
  )
}
