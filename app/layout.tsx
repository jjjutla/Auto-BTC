import { Metadata } from 'next'

import { Toaster } from 'react-hot-toast'

import '@/app/globals.css'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'

const APP_URL = new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://chat.vercel.ai')

export const metadata: Metadata = {
  metadataBase: APP_URL,
  title: 'Auto BTC',
  description: 'Auto BTC',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Auto BTC',
    description: 'Auto BTC',
    url: APP_URL,
    siteName: 'Auto BTC',
    images: [
      {
        url: (APP_URL + '/opengraph-image.png'),
        alt: 'Auto BTC',
        width: 1450,
        height: 760,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Auto BTC',
    description: 'Auto BTC',
    site: APP_URL.toString(),
    images: [
      {
        url: (APP_URL + '/twitter-image.png'),
        alt: 'Auto BTC',
        width: 1450,
        height: 760,
      },
    ],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Toaster />
        <Providers attribute="class" defaultTheme="system" enableSystem >
          <div className="flex flex-col min-h-screen">
            <Header />
            
              <main className="flex flex-col flex-1 bg-muted/50">{children}</main>

          </div>
        </Providers>

      </body>
    </html>
  )
}
