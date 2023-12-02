import type { Metadata } from 'next'
import { Rokkitt } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const font = Rokkitt({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Place Finder',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Header />
        {children}
      </body>
    </html>
  )
}
