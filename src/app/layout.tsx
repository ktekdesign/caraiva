import NavBar from './navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from './footer'
import LightBoxContextProvider from '@/context/lightBoxContextProvider'
import ModalContextProvider from '@/context/modalContextProvider'

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
        <ModalContextProvider>
          <NavBar />
          <LightBoxContextProvider>
            {children}
          </LightBoxContextProvider>
          <Footer />
        </ModalContextProvider>
      </body>
    </html>
  )
}
