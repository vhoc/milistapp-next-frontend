import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MiListApp :: Tu catálogo en línea',
  description: 'Aplicación y plataforma para publicar productos y servicios en una página web configurable.',
  openGraph: {
    images: [
      {
        url: "https://api.milist.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "MiListApp",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
