import NavBar from './navbar'
import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from './footer'
import NextProviders from './providers'
import SupabaseSessionProvider from '@/context/supabaseSessionProvider'

export const dynamic = 'force-dynamic'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Experimente Caraiva',
  description: 'Descubra o Paraíso Escondido: Caraiva na Bahia!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <SupabaseSessionProvider>
          <NextProviders>
            <NavBar />
            {children}
          </NextProviders>
        </SupabaseSessionProvider>
        <Footer />
      </body>
    </html>
  )
}
