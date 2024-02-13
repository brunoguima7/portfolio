import './globals.css'
import Navbar from './components/navbar'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
 
export const metadata: Metadata = {
  title: 'Bruno Guimarães Dev',
  description: "Este é o meu portfolio, sinta-se à vontade para visitá-lo."
}
 
const jetBrains = JetBrains_Mono({
  weight: '700',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" className={`${jetBrains.className} !scroll-smooth overflow-y-scroll no-scrollbar`}>
      <body className="mb-20">
      <Navbar/>
      {children}
      </body>
      </html>
    </>
  )
}
