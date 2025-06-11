import './globals.css'  
import type { Metadata } from 'next'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Thrall',
  description: 'One Hell of a Studio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cinzel.className}>{children}</body>
    </html>
  )
}
