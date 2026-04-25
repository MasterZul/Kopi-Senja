import type { Metadata } from 'next'
import { Playfair_Display, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kopi Senja | Authentic Malaysian Coffee · Johor Bahru',
  description:
    'Nikmati kehangatan kopi asli Malaysia di jantung bandar Johor Bahru. Kopi Senja — rasa kopi, rasa rumah.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
